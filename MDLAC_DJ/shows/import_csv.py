import pandas as pd
from .models import JdGood, JdComment, JdDetail
from datetime import datetime
import pytz
import random
from django.db.utils import DataError  # 导入DataError
import re


# python manage.py shell
#
# from shows.import_csv import run
# run()
#
# from shows.import_csv import import_goods, import_comments, import_details
# import_goods()
# import_comments()
# import_details()

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



# 商品表导入处理方法
def clean_detail_link(link, acid):
    if not link or link.startswith("https://ccc-x.jd.com/"):
        return f"https://item.jd.com/{acid}.html"
    return link


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


def generate_random_price(min_price, max_price):
    while True:
        price = round(random.uniform(min_price, max_price))
        if str(price)[-1] in ['8', '9']:
            return float(f"{price}.00")


def import_goods():
    csv_file_path = r'D:\course\intern\MDLAC-master\MDLAC\dataset\good_1_filtered.csv'

    df = pd.read_csv(csv_file_path, encoding='utf-8')

    prices = df['价格'].dropna().apply(clean_value, value_type=float)
    min_price = prices.min()
    max_price = prices.max()

    total_rows = len(df)
    inserted_rows = 0
    updated_rows = 0

    for index, row in df.iterrows():
        acid = clean_value(row['商品ID'])
        price = clean_value(row['价格'], default=None, value_type=float)
        if price is None:
            price = generate_random_price(min_price, max_price)

        detail_link = clean_detail_link(clean_value(row.get('商品详情链接地址'), max_length=255), acid)

        defaults = {
            'price': price,
            'name': clean_value(row.get('商品名称'), max_length=255),
            'detail_link': detail_link,
            'image_link': clean_value(row.get('商品图片链接'), max_length=255),
            'comment_count': clean_value(row.get('评论数', 0), default=0, value_type=int),
            'shop': clean_value(row.get('店铺'), max_length=255),
            'shop_link': clean_value(row.get('店铺链接'), max_length=255)
        }

        try:
            obj, created = JdGood.objects.update_or_create(acid=acid, defaults=defaults)
            if created:
                inserted_rows += 1
            else:
                updated_rows += 1
        except DataError as e:
            print(f"Error inserting/updating row {index + 1}: {e}")
            continue

        if (index + 1) % 100 == 0:
            print(f"Processed {index + 1}/{total_rows} rows. Inserted: {inserted_rows}, Updated: {updated_rows}")

    print(f"Total rows: {total_rows}, Inserted rows: {inserted_rows}, Updated rows: {updated_rows}")


def import_comments():
    csv_file_path = r'D:\course\intern\MDLAC-master\MDLAC\dataset\100w_comments_part1_filtered_2.csv'

    df = pd.read_csv(csv_file_path, encoding='utf-8', dtype={'good_ID': str})

    df.drop_duplicates(inplace=True)

    total_rows = len(df)
    inserted_rows = 0

    missing_goods = set()

    for index, row in df.iterrows():
        good_id_cleaned = str(clean_value(row['good_ID']))  # 确保 good_ID 是字符串类型
        user_id_cleaned = str(clean_value(row['user_ID']))
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
                user_id=user_id_cleaned,
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
