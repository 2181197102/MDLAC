import os
import sys
import django
import pandas as pd
from django.db.models import F

# 添加项目路径到系统路径
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + "/../../")

# 设置 Django 环境变量
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MDLAC_DJ.MDLAC_DJ.settings')
django.setup()

from shows.models import JdGood, JdComment  # 确保导入路径正确 !!! 可能会爆红，但是可以运行，无错误，在上侧选择"当前文件"点击"▶" !!!

def fetch_data():
    # 使用 Django ORM 从数据库中提取数据，并进行表关联
    comments = JdComment.objects.select_related('good_ref').annotate(
        brand=F('good_ref__brand'),
        name=F('good_ref__name'),
        cwtype=F('good_ref__cwtype'),
        price=F('good_ref__price')
    ).values(
        'good_ref_id',
        'brand',
        'name',
        'cwtype',
        'price',
        'user_province',
        'date'
    )

    # 将查询结果转换为 DataFrame
    df = pd.DataFrame(list(comments))

    return df

def main():
    data = fetch_data()
    print(data.head())  # 输出前5条数据进行检查
    # 这里可以添加更多的数据分析代码

if __name__ == '__main__':
    main()
