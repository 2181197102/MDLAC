import pandas as pd

# for i in range(3, 5):
#     # 读取CSV文件
#     df = pd.read_csv(f'../../空调数据（{i}）.csv')
#
#     # 打印原始数据
#     # print("原始数据:")
#     # print(df)
#
#     # 要删除的列名
#     columns_to_delete = ['字段']
#
#     # 删除指定的列
#     df = df.drop(columns=columns_to_delete)
#
#     # 将修改后的数据保存到一个新的CSV文件
#     df.to_csv(f'../../new_空调数据（{i}）.csv', index=False)

# 删除指定的行
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv')
# print(len(df))
# # 搜索所有的行，商品详情地址长度超过1000的行
# df_1 = df[df['商品详情链接地址'].map(len) > 1000]
# # 删除这些行
# df = df.drop(df_1.index)
# df.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv', index=False)

# # 提取出商品详情链接地址
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv')
# # print(df)
# print(df['商品详情链接地址'])
# # 使用正则提取出html前面的数字部分作为新的列，列名是‘商品ID’，把这一列作为第一列
# df['商品ID'] = df['商品详情链接地址'].str.extract('(\d+)')
# # 将商品ID 列移动到第一列
# cols = ['商品ID'] + [col for col in df.columns if col != '商品ID']
# df = df[cols]
# df.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\new_goods.csv', index=False)

# 提取出商品详情链接地址，不带表头
df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\拆分文件（不用看）\goods_50000.csv')
print(len(df))
df_url = df['商品详情链接地址']
df_url.to_csv(r'拆分文件（不用看）\goods_50000_url.csv', index=False, header=False)

# 删除商品图片链接为空的行
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv')
# print(len(df))
# df = df.dropna(subset=['商品详情链接地址'])
# print(len(df))
#
# df.to_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv', index=False)

# 将goods表每一万行进行拆分
# df = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\goods.csv')
# print(len(df))
# # 每一万行进行拆分
# for i in range(0, len(df), 10000):
#     df[i:i+10000].to_csv(f'goods_{i}.csv', index=False)
#     print(f'goods_{i}.csv')

