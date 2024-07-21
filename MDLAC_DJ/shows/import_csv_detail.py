import pandas as pd
from .models import JdGood, JdDetail
from datetime import datetime
import pytz
import random
from django.db.utils import DataError
import re

def clean_value(value, default=None, value_type=str, max_length=None):
    if pd.isna(value) or value == '#':
        return default
    try:
        if value_type == datetime:
            value = pd.to_datetime(value)
            shanghai_tz = pytz.timezone('Asia/Shanghai')
            if value.tzinfo is None:
                value = value.tz_localize(shanghai_tz)
            else:
                value = value.astimezone(shanghai_tz)
            return value
        elif value_type == int and isinstance(value, str):
            return clean_comment_count(value)
        cleaned_value = value_type(value)
        if isinstance(cleaned_value, str) and max_length and len(cleaned_value) > max_length:
            return cleaned_value[:max_length]
        return cleaned_value
    except (ValueError, TypeError):
        return default

def clean_comment_count(comment_str):
    if '万' in comment_str:
        num_str = comment_str.replace('万', '')
        if '+' in num_str:
            base_num = int(num_str.replace('+', '')) * 10000
            return base_num + random.randint(0, 10000)
        else:
            return int(num_str) * 10000

    if '+' in comment_str:
        base_num = int(comment_str.replace('+', ''))
        increment_range = 10 ** (len(str(base_num)) - 1)
        return base_num + random.randint(0, increment_range)

    return int(comment_str)

def parse_product_parameters(parameters_str):
    # Remove the trailing "更多参数>>"
    if parameters_str.strip().endswith("更多参数>>"):
        parameters_str = parameters_str.strip()[:-6]

    parameters = {}

    # Extract brand
    brand = None
    if '品牌：' in parameters_str and '商品名称' in parameters_str:
        brand = parameters_str.split('品牌：')[1].split('商品名称')[0].replace(" ", "")
    parameters['brand'] = brand

    # Extract control method
    control_method = None
    if '操控方式：' in parameters_str and '能效等级' in parameters_str:
        control_method = parameters_str.split('操控方式：')[1].split('能效等级')[0].strip()
    parameters['control_method'] = control_method

    # Extract energy efficiency
    energy_efficiency = None
    if '能效等级：' in parameters_str:
        energy_efficiency = parameters_str.split('能效等级：')[1][:4].strip()
    parameters['energy_efficiency'] = energy_efficiency

    # Extract inverter or not
    inverter_or_not = None
    if '变频/定频：' in parameters_str:
        inverter_or_not = parameters_str.split('变频/定频：')[1][:2].strip()
    parameters['inverter_or_not'] = inverter_or_not

    # Extract other parameters
    other_parameters = None
    if '变频/定频：' in parameters_str:
        other_parameters = parameters_str.split('变频/定频：')[1][2:].strip()
    parameters['other_parameters'] = other_parameters

    return parameters

def parse_main_body(main_body_str):
    main_body = {}

    # Extract applicable area
    if '适用面积' in main_body_str:
        # Split the string at '适用面积' and take the part after it
        applicable_area_split = main_body_str.split('适用面积')[1].strip()

        # Extract content until the next Chinese character
        applicable_area = re.split(r'[\u4e00-\u9fff]', applicable_area_split)[0].strip()
        main_body['applicable_area'] = applicable_area

    return main_body

def parse_specifications(specifications_str):
    specifications = {}

    # Extract inner machine dimensions
    if '内机机身尺寸' in specifications_str:
        inner_machine_split = specifications_str.split('内机机身尺寸')[1].strip()
        inner_machine_dimensions = ''.join(re.split(r'[\u4e00-\u9fff]', inner_machine_split, maxsplit=4)[:4]).strip()
        specifications['inner_machine_dimensions'] = inner_machine_dimensions

    # Extract outer machine dimensions
    if '外机尺寸' in specifications_str:
        outer_machine_split = specifications_str.split('外机尺寸')[1].strip()
        outer_machine_dimensions = ''.join(re.split(r'[\u4e00-\u9fff]', outer_machine_split, maxsplit=4)[:4]).strip()
        specifications['outer_machine_dimensions'] = outer_machine_dimensions

    return specifications

def parse_features(features_str):
    features = {}

    # Extract cooling power
    if '制冷功率' in features_str:
        cooling_power_split = features_str.split('制冷功率')[1].strip()
        cooling_power = re.split(r'[\u4e00-\u9fff]', cooling_power_split, maxsplit=1)[0].strip()
        features['cooling_power'] = cooling_power

    # Extract heating power
    if '制热功率' in features_str:
        heating_power_split = features_str.split('制热功率')[1].strip()
        heating_power = re.split(r'[\u4e00-\u9fff]', heating_power_split, maxsplit=1)[0].strip()
        features['heating_power'] = heating_power

    # Extract max noise
    if '最大噪音' in features_str:
        max_noise_split = features_str.split('最大噪音')[1].strip()
        max_noise = re.split(r'[\u4e00-\u9fff]', max_noise_split, maxsplit=1)[0].strip()
        features['max_noise'] = max_noise

    # Extract comfort performance energy efficiency ratio
    if '舒适性能能效比' in features_str:
        comfort_ratio_split = features_str.split('舒适性能能效比')[1].strip()
        comfort_ratio = re.split(r'[\u4e00-\u9fff]', comfort_ratio_split, maxsplit=1)[0].strip()
        features['comfort_performance_energy_efficiency_ratio'] = comfort_ratio

    return features

def import_details():
    csv_file_path = r'D:\course\intern\MDLAC-master\MDLAC\dataset\details_filtered_2.csv'

    df = pd.read_csv(csv_file_path, encoding='utf-8')

    total_rows = len(df)
    inserted_rows = 0
    updated_rows = 0

    for index, row in df.iterrows():
        acid = clean_value(row['商品ID'])
        goods = JdGood.objects.filter(acid=acid).first()

        if goods is None:
            # Try appending '0', '00', '000', '22', '01' to the acid
            alternative_ids = [f"{acid}0", f"{acid}00", f"{acid}000", f"{acid}0000", f"{acid}22", f"{acid}01"]
            for alt_id in alternative_ids:
                goods = JdGood.objects.filter(acid=alt_id).first()
                if goods is not None:
                    acid = alt_id  # Update acid to the matched alternative ID
                    break

            if goods is None:
                print(f"Skipping row {index} due to missing good for 商品ID: {acid}")
                continue

        product_parameters = parse_product_parameters(clean_value(row['商品参数'], default=''))
        main_body = parse_main_body(clean_value(row['主体'], default=''))
        specifications = parse_specifications(clean_value(row['规格'], default=''))
        features = parse_features(clean_value(row['功能'], default=''))
        comment_count = clean_comment_count(clean_value(row['商品评价数'], default='0', value_type=str))

        defaults = {
            'brand': clean_value(product_parameters.get('brand'), max_length=100),
            'control_method': clean_value(product_parameters.get('control_method'), max_length=50),
            'energy_efficiency': clean_value(product_parameters.get('energy_efficiency'), max_length=50),
            'inverter_or_not': clean_value(product_parameters.get('inverter_or_not'), max_length=20),
            'other_parameters': clean_value(product_parameters.get('other_parameters'), max_length=255),
            'applicable_area': clean_value(main_body.get('applicable_area'), max_length=50),
            'inner_machine_dimensions': clean_value(specifications.get('inner_machine_dimensions'), max_length=100),
            'outer_machine_dimensions': clean_value(specifications.get('outer_machine_dimensions'), max_length=100),
            'cooling_power': clean_value(features.get('cooling_power'), max_length=50),
            'heating_power': clean_value(features.get('heating_power'), max_length=50),
            'max_noise': clean_value(features.get('max_noise'), max_length=50),
            'comfort_performance_energy_efficiency_ratio': clean_value(features.get('comfort_performance_energy_efficiency_ratio'), max_length=50),
        }

        try:
            obj, created = JdDetail.objects.update_or_create(goods=goods, defaults=defaults)
            if created:
                inserted_rows += 1
            else:
                updated_rows += 1

            # 更新关联的good的comment_count
            if goods.comment_count == 0:
                goods.comment_count = comment_count
                goods.save(update_fields=['comment_count'])

        except DataError as e:
            print(f"Error inserting/updating row {index + 1}: {e}")
            continue

        if (index + 1) % 100 == 0:
            print(f"Processed {index + 1}/{total_rows} rows. Inserted: {inserted_rows}, Updated: {updated_rows}")

    print(f"Total rows: {total_rows}, Inserted rows: {inserted_rows}, Updated rows: {updated_rows}")

