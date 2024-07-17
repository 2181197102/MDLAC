import pandas as pd
from .models import JdGood, JdComment
from datetime import datetime
import pytz


# python manage.py shell
#
# from shows.import_csv import run
# run()
#
# from shows.import_csv import import_goods, import_comments
# import_goods()
# import_comments()

def clean_value(value, default=None, value_type=str):
    """
    清理和转换值。

    :param value: 需要清理的值
    :param default: 默认值，如果value为空或无效
    :param value_type: 期望的值类型
    :return: 清理后的值
    """
    if pd.isna(value) or value == '#':
        return default
    try:
        if value_type == datetime:
            # 如果是 datetime 类型，确保有时区信息
            value = pd.to_datetime(value)
            shanghai_tz = pytz.timezone('Asia/Shanghai')
            if value.tzinfo is None:  # 检查是否有时区信息
                value = value.tz_localize(shanghai_tz)  # 将其本地化为上海时区
            else:
                value = value.astimezone(shanghai_tz)  # 转换为上海时区
            return value
        return value_type(value)
    except (ValueError, TypeError):
        return default


def import_goods():
    csv_file_path = 'D:\\course\\intern\\MDLAC-master\\MDLAC\\dataset\\goods.csv'

    df = pd.read_csv(csv_file_path, encoding='gbk')

    total_rows = len(df)
    inserted_rows = 0
    updated_rows = 0
    skipped_rows = 0

    for index, row in df.iterrows():
        acid = clean_value(row['ACID'])
        defaults = {
            'name': clean_value(row['name']),
            'link': clean_value(row['link']),
            'shop_name': clean_value(row['shop_name'], default='未知商店'),
            'price': clean_value(row['price'], default=0.0, value_type=float),
            'operation': clean_value(row['operation'], default='未知操作'),
            'level': clean_value(row['level'], default='未知等级'),
            'frequency': clean_value(row['frequency'], default='未知频率'),
            'purify': clean_value(row.get('purify', '无')),
            'type': clean_value(row['Type'], default='未知类型'),
            'cwtype': clean_value(row['CWType'], default='未知类型'),
            'horse': clean_value(row['horse'], default='未知马力'),
            'good_func': clean_value(row.get('good_func', '无')),
            'apply_space': clean_value(row.get('apply_space', '未知空间')),
            'featured': clean_value(row.get('Featured', '无')),
            'statu': clean_value(row.get('statu', '未知条件')),
            'set_type': clean_value(row.get('Set_type', '未知类型')),
            'apply_house': clean_value(row.get('apply_house', '未知')),
            'duct_form': clean_value(row.get('duct_form', '未知形式')),
            'brand': clean_value(row['brand'], default='未知品牌'),
            'wind_position': clean_value(row.get('wind_position', '未知')),
            'no_drainage': clean_value(row.get('NO_drainage', '未知')),
            'min_height': clean_value(row.get('min_height', '未知')),
            'cost': clean_value(row.get('cost', '未知')),
            'user_preference': clean_value(row.get('user_preference', '未知')),
            'comment_count_str': clean_value(row['CommentCountStr']),
            'average_score': clean_value(row['AverageScore'], default=0.0, value_type=float),
            'good_count_str': clean_value(row['GoodCountStr']),
            'general_count_str': clean_value(row['GeneralCountStr']),
            'poor_count_str': clean_value(row['PoorCountStr']),
            'good_rate': clean_value(row['GoodRate'], default=0.0, value_type=float)
        }

        obj, created = JdGood.objects.update_or_create(acid=acid, defaults=defaults)
        if created:
            inserted_rows += 1
        else:
            updated_rows += 1

        if (index + 1) % 100 == 0:
            print(f"Processed {index + 1}/{total_rows} rows. Inserted: {inserted_rows}, Updated: {updated_rows}")

    print(f"Total rows: {total_rows}, Inserted rows: {inserted_rows}, Updated rows: {updated_rows}")


def import_comments():
    csv_file_path = 'D:\\course\\intern\\MDLAC-master\\MDLAC\\dataset\\comments.csv'

    df = pd.read_csv(csv_file_path, encoding='gbk', dtype={'good_ID': str})

    df.drop_duplicates(inplace=True)

    total_rows = len(df)
    inserted_rows = 0

    missing_goods = set()

    for index, row in df.iterrows():
        good_id_cleaned = str(clean_value(row['good_ID']))  # 确保 good_ID 是字符串类型
        good = JdGood.objects.filter(acid=good_id_cleaned).first()

        if good is not None:
            JdComment.objects.create(
                content=clean_value(row['content']),
                date=clean_value(row['date'], value_type=datetime),
                good_ref=good,
                good_id=good_id_cleaned,
                good_name=clean_value(row['good_name']),
                comment_tags=clean_value(row['commentTags']),
                reply_count=clean_value(row['replyCount'], default=0, value_type=int),
                score=clean_value(row['score'], value_type=int),
                user_level_id=clean_value(row['userLevelId'], value_type=int),
                user_province=clean_value(row['userProvince']),
                user_id=clean_value(row['user_ID']),
                user_name=clean_value(row['user_name']),
                score1=clean_value(row['score1'], default=0, value_type=int),
                score2=clean_value(row['score2'], default=0, value_type=int),
                score3=clean_value(row['score3'], default=0, value_type=int),
                score4=clean_value(row['score4'], default=0, value_type=int),
                score5=clean_value(row['score5'], default=0, value_type=int)
            )
            inserted_rows += 1
            if inserted_rows % 100 == 0:
                print(f"Processed {inserted_rows}/{total_rows} rows, last inserted good_id: {row['good_ID']}")
        else:
            missing_goods.add(good_id_cleaned)
            print(f"Skipping row {index} due to missing good_ref for good_ID: {row['good_ID']}")

    print(f"Total rows: {total_rows}, Inserted rows: {inserted_rows}")
    if missing_goods:
        print(f"Missing good_refs for good_IDs: {', '.join(missing_goods)}")


def run():
    import_goods()
    import_comments()
