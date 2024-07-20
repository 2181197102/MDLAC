# 去除csv文件中的空值
import pandas as pd
import os

# frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv')
# print(len(frame2))
# # 输出商品ID为空的行
# print(frame2[frame2['商品ID'].isnull()])
# # 删除商品ID为空的行
# frame2.dropna(subset=['商品ID'], inplace=True)
# print(len(frame2))
# # 输出文件时不要在第一列加上编号
# frame2.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv', index=False)

# 去除商品名称列中的所有空格和换行符
# frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv')
# print(frame2)
# frame2['商品名称'] = frame2['商品名称'].str.replace(r'\s+', '', regex=True)
# frame2['商品参数'] = frame2['商品参数'].str.replace(r'\s+', '', regex=True)
# frame2['主体'] = frame2['主体'].str.replace(r'\s+', '', regex=True)
# frame2['规格'] = frame2['规格'].str.replace(r'\s+', '', regex=True)
# frame2['功能'] = frame2['功能'].str.replace(r'\s+', '', regex=True)
# print(frame2)
# # frame2['商品名称'] = frame2['商品名称'].str.replace(r'\s+', '', regex=True)
# # frame2['商品参数'] = frame2['商品参数'].str.replace(r'\s+', '', regex=True)
# # frame2['主体'] = frame2['主体'].str.replace(r'\s+', '', regex=True)
# # frame2['规格'] = frame2['规格'].str.replace(r'\s+', '', regex=True)
# # frame2['功能'] = frame2['功能'].str.replace(r'\s+', '', regex=True)
# frame2.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv', index=False)

# 在去除名称前后的空格
# frame2['商品名称'] = frame2['商品名称'].str.strip()
# print(frame2['商品名称'])
# print(frame2['商品参数'])

# 统计价格为空的行数和不为空的行数
# print("价格为空的行数：", frame2['价格'].isnull().sum())
# print("价格不为空的行数：", frame2['价格'].notnull().sum())
#
# print("商品评价数为空的行数：", frame2['商品评价数'].isnull().sum())
# print("商品评价数不为空的行数：", frame2['商品评价数'].notnull().sum())

# 把价格列的类型变成整数类型，并且忽略空值
# print(type(frame2['价格'][0]))
# # 如果不为nan，就转换为整数类型
# for row in frame2['价格']:
#     print(row)
#     if row != 'nan':
#         row = int(row)
#
# print(type(frame2['价格']))
# frame2.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv', index=False)




# 读取两个文件，找到第一个文件减去第二个文件的url后剩下的部分
# frame1 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\details.csv')
# frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\jd_spider\goods.csv')

# frame2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\comments\10000_20000_comments.csv')
# 找到第9706行的数据，并输出
# print(frame2.iloc[9706])

# 提取表的某一列
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\goods.csv')
# print(len(df))
# df_url = df['商品名称']
# df_url.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\goods_词云.csv', index=False, header=False)

frame1 = pd.read_csv(r'100w_comments.csv')
print(len(frame1))
# 提取出商品ID列
# df_good_ID = frame1['good_ID']
# df_user_ID = frame1['user_ID']

# 把所有good_ID 和 user_ID的值转换为字符串类型
# 并且匹配末尾的.0,去掉


# 如果有空值，就用0代替
# frame1['replyCount'] = frame1['replyCount'].fillna(0, inplace=True)
# frame1['score'] = frame1['score'].fillna(0, inplace=True)
# frame1['userLevelId'] = frame1['userLevelId'].fillna(0, inplace=True)
# # 输出
# frame1.to_csv(r'100w_comments_2.csv', index=False)

# 将comments表每一万行进行拆分
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\jd_spider\115w_comments_2.csv')
# print(len(df))
# # 每一万行进行拆分
# for i in range(0, len(df), 10000):
#     df[i:i+10000].to_csv(f'goods_{i}.csv', index=False)
#     print(f'goods_{i}.csv')