import pandas as pd
import shutil


# frame = pd.read_csv('spiders/jd_goods.csv', engine='python', encoding='gbk')
# frame.drop_duplicates(subset=["ACID"], inplace=True)
# # 输出文件时不要在第一列加上编号
# frame.to_csv('../../dataset/goods.csv', encoding='gbk', index=False)

frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\jd_spider\100w_comments.csv')

print(len(frame2))
# # 某列有重复值的删除后面的
# frame2.drop_duplicates(subset=['商品ID'], keep='first', inplace=True)
frame2.drop_duplicates(inplace=True)
print(len(frame2))
# # 输出商品ID列内容的类型
# print(type(frame2['商品ID'][0]))
# # 将该列的内容全部变为字符串（不需要小数点和后面的00）
# frame2['商品ID'] = frame2['商品ID'].astype(str)
# # 去除后面的小数点.和0
# frame2['商品ID'] = frame2['商品ID'].str.rstrip('.0')
# # 输出商品ID列内容的类型
# print(type(frame2['商品ID'][0]))
# print(frame2['商品ID'])
# # 输出文件时不要在第一列加上编号
# frame2.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\goods.csv', index=False)