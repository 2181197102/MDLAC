import pandas as pd
import shutil


# frame = pd.read_csv('spiders/jd_goods.csv', engine='python', encoding='gbk')
# frame.drop_duplicates(subset=["ACID"], inplace=True)
# # 输出文件时不要在第一列加上编号
# frame.to_csv('../../dataset/goods.csv', encoding='gbk', index=False)

frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\combined_goods.csv')

print(len(frame2))
# 某列有重复值的删除后面的
frame2.drop_duplicates(subset=['商品ID'], keep='first', inplace=True)
print(len(frame2))
# 输出文件时不要在第一列加上编号
frame2.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\combined_goods.csv', index=False)