import pandas as pd
import shutil


frame = pd.read_csv('spiders/jd_goods.csv', engine='python', encoding='gbk')
frame.drop_duplicates(inplace=True)
# 输出文件时不要在第一列加上编号
frame.to_csv('jd_goods_operated.csv', encoding='gbk', index=False)
