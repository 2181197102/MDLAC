import pandas as pd
from .models import JdGood, JdDetail
from datetime import datetime
import pytz
import random
from django.db.utils import DataError
import re
from transformers import BertTokenizer, BertForTokenClassification
import torch

# 指定本地路径
local_model_path = 'D:/course/intern/models/chinese-roberta-wwm-ext/'

# 加载本地的中文RoBERTa-wwm-ext模型和分词器
tokenizer = BertTokenizer.from_pretrained(local_model_path)
model = BertForTokenClassification.from_pretrained(local_model_path)


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


def process_with_bert(text):
    # 将文本转化为BERT模型的输入格式
    inputs = tokenizer(text, return_tensors='pt', truncation=True, padding=True, max_length=512)

    # 获取模型输出
    with torch.no_grad():
        outputs = model(**inputs)

    # 获取预测标签
    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1).squeeze().tolist()

    # 将预测标签映射回文本
    tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])
    return tokens, predictions


def extract_entities(text):
    tokens, predictions = process_with_bert(text)
    entities = {}
    for token, prediction in zip(tokens, predictions):
        # 根据预测标签进行实体提取
        # 这里假设实体标签为0是实体类型
        if prediction == 0:
            entities[token] = True
    return entities


def import_details():
    csv_file_path = 'D:\\course\\intern\\MDLAC-master\\MDLAC\\dataset\\details.csv'

    df = pd.read_csv(csv_file_path, encoding='utf-8')

    total_rows = len(df)
    inserted_rows = 0
    updated_rows = 0

    for index, row in df.iterrows():
        acid = clean_value(row['商品ID'])
        goods = JdGood.objects.filter(acid=acid).first()

        if goods is None:
            print(f"Skipping row {index} due to missing good for 商品ID: {acid}")
            continue

        product_parameters_str = clean_value(row['商品参数'], default='')
        main_body_str = clean_value(row['主体'], default='')
        specifications_str = clean_value(row['规格'], default='')
        features_str = clean_value(row['功能'], default='')

        # 使用BERT模型提取信息
        product_parameters = extract_entities(product_parameters_str)
        main_body = extract_entities(main_body_str)
        specifications = extract_entities(specifications_str)
        features = extract_entities(features_str)

        # 解析BERT模型输出并填充默认值
        defaults = {
            'brand': clean_value(product_parameters.get('brand', ''), max_length=100),
            'control_method': clean_value(product_parameters.get('control_method', ''), max_length=50),
            'energy_efficiency': clean_value(product_parameters.get('energy_efficiency', ''), max_length=50),
            'inverter_or_not': clean_value(product_parameters.get('inverter_or_not', ''), max_length=20),
            'type': clean_value(product_parameters.get('type', ''), max_length=50),
            'horse_power': clean_value(product_parameters.get('horse_power', ''), max_length=50),
            'cold_warm_type': clean_value(product_parameters.get('cold_warm_type', ''), max_length=50),
            'series': clean_value(main_body.get('series', ''), max_length=100),
            'applicable_area': clean_value(main_body.get('applicable_area', ''), max_length=50),
            'certification_model': clean_value(main_body.get('certification_model', ''), max_length=100),
            'product_model': clean_value(main_body.get('product_model', ''), max_length=100),
            'panel_material': clean_value(main_body.get('panel_material', ''), max_length=100),
            'voltage_frequency': clean_value(specifications.get('voltage_frequency', ''), max_length=50),
            'inner_machine_dimensions': clean_value(specifications.get('inner_machine_dimensions', ''), max_length=100),
            'outer_machine_dimensions': clean_value(specifications.get('outer_machine_dimensions', ''), max_length=100),
            'inner_machine_weight': clean_value(specifications.get('inner_machine_weight', ''), max_length=50),
            'outer_machine_weight': clean_value(specifications.get('outer_machine_weight', ''), max_length=50),
            'refrigerant': clean_value(specifications.get('refrigerant', ''), max_length=50),
            'circulation_air_volume': clean_value(features.get('circulation_air_volume', ''), max_length=50),
            'cooling_power': clean_value(features.get('cooling_power', ''), max_length=50),
            'swing_mode': clean_value(features.get('swing_mode', ''), max_length=50),
            'max_noise': clean_value(features.get('max_noise', ''), max_length=50),
            'heating_capacity': clean_value(features.get('heating_capacity', ''), max_length=50),
            'cooling_capacity': clean_value(features.get('cooling_capacity', ''), max_length=50),
            'sleep_mode': clean_value(features.get('sleep_mode', ''), max_length=50),
            'function_description': clean_value(features.get('function_description', '')),
        }

        try:
            obj, created = JdDetail.objects.update_or_create(goods=goods, defaults=defaults)
            if created:
                inserted_rows += 1
            else:
                updated_rows += 1

            # 更新关联的good的comment_count
            if goods.comment_count != clean_comment_count(clean_value(row['商品评价数'], default='0', value_type=str)):
                goods.comment_count = clean_comment_count(clean_value(row['商品评价数'], default='0', value_type=str))
                goods.save(update_fields=['comment_count'])

        except DataError as e:
            print(f"Error inserting/updating row {index + 1}: {e}")
            continue

        if (index + 1) % 100 == 0:
            print(f"Processed {index + 1}/{total_rows} rows. Inserted: {inserted_rows}, Updated: {updated_rows}")

    print(f"Total rows: {total_rows}, Inserted rows: {inserted_rows}, Updated rows: {updated_rows}")
