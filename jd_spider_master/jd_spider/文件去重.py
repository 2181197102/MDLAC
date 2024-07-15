import pandas as pd
import shutil


frame = pd.read_csv('spiders/jd_goods.csv', engine='python', encoding='gbk')
frame.drop_duplicates(subset=["ACID"], inplace=True)
# 输出文件时不要在第一列加上编号
frame.to_csv('../../dataset/goods.csv', encoding='gbk', index=False)

frame2 = pd.read_csv('spiders/jd_comments.csv', engine='python', encoding='gbk')
frame2.drop_duplicates(inplace=True)
# 输出文件时不要在第一列加上编号
frame2.to_csv('../../dataset/comments.csv', encoding='gbk', index=False)