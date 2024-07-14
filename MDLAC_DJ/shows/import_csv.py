import pandas as pd
from .models import JdGood

# python manage.py shell
#
# from shows.import_csv import run
# run()

def clean_value(value, default=None, value_type=str):
    if pd.isna(value) or value == '#':
        return default
    try:
        return value_type(value)
    except ValueError:
        return default


def run():
    # 绝对路径
    csv_file_path = 'D:\\course\\intern\\MDLAC-master\\MDLAC\\dataset\\goods.csv'

    # 读取 CSV 文件，指定编码格式为 GBK
    df = pd.read_csv(csv_file_path, encoding='gbk')

    # 将数据插入到数据库中
    for _, row in df.iterrows():
        JdGood.objects.create(
            acid=clean_value(row['ACID']),
            name=clean_value(row['name']),
            link=clean_value(row['link']),
            shop_name=clean_value(row['shop_name'], default='未知商店'),
            price=clean_value(row['price'], default=0.0, value_type=float),
            operation=clean_value(row['operation'], default='未知操作'),
            level=clean_value(row['level'], default='未知等级'),
            frequency=clean_value(row['frequency'], default='未知频率'),
            purify=clean_value(row.get('purify', '无')),
            type=clean_value(row['Type'], default='未知类型'),
            cwtype=clean_value(row['CWType'], default='未知类型'),
            horse=clean_value(row['horse'], default='未知马力'),
            good_func=clean_value(row.get('good_func', '无')),
            apply_space=clean_value(row.get('apply_space', '未知空间')),
            featured=clean_value(row.get('Featured', '无')),
            statu=clean_value(row.get('statu', '未知条件')),
            set_type=clean_value(row.get('Set_type', '未知类型')),
            apply_house=clean_value(row.get('apply_house', '未知')),
            duct_form=clean_value(row.get('duct_form', '未知形式')),
            brand=clean_value(row['brand'], default='未知品牌'),
            wind_position=clean_value(row.get('wind_position', '未知')),
            no_drainage=clean_value(row.get('NO_drainage', '未知')),
            min_height=clean_value(row.get('min_height', '未知')),
            cost=clean_value(row.get('cost', '未知')),
            user_preference=clean_value(row.get('user_preference', '未知')),
            comment_count_str=clean_value(row['CommentCountStr']),
            average_score=clean_value(row['AverageScore'], default=0.0, value_type=float),
            good_count_str=clean_value(row['GoodCountStr']),
            general_count_str=clean_value(row['GeneralCountStr']),
            poor_count_str=clean_value(row['PoorCountStr']),
            good_rate=clean_value(row['GoodRate'], default=0.0, value_type=float)
        )

