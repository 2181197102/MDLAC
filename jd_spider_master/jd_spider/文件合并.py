# 删除csv文件的特定列
import pandas as pd
import os




# 合并csv文件
# 定义存放CSV文件的目录
# csv_directory = r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\comments'
# # 获取目录中所有CSV文件的文件名
# csv_files = [f for f in os.listdir(csv_directory) if f.endswith('.csv')]
# print("CSV文件列表:", csv_files)
# # 初始化一个空的DataFrame列表
# dataframes = []
# # dataframes.append(commetns_11)
# # 读取每个CSV文件并添加到DataFrame列表中
# for file in csv_files:
#     print("正在处理文件:", file)
#     file_path = os.path.join(csv_directory, file)
#     df = pd.read_csv(file_path, dtype=str)
#     print(len(df))
#     dataframes.append(df)
# # print(dataframes)
#
# # 合并所有DataFrame
# combined_df = pd.concat(dataframes, ignore_index=True)
#
# # 打印合并后的数据
# print("合并后的数据:")
# print(combined_df)
# # 将合并后的数据保存到一个新的CSV文件
# combined_df.to_csv(r'second_comments.csv', index=False, encoding='utf-8')

file1 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\jd_spider\first_comments.csv', dtype=str)
print(len(file1))
file2 = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\jd_spider\second_comments.csv', dtype=str)
files = [file1, file2]
combined_df = pd.concat(files, ignore_index=True)
combined_df.to_csv(r'100w_comments.csv', index=False, encoding='utf-8')
