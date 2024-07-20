import pandas as pd
import jieba
from stylecloud import gen_stylecloud

# 读取文件
pd_data = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\jd_spider_master\combined_files\goods_词云.csv')

# 读取内容
text = pd_data['单词'].tolist()

text = str(text)

# 切割分词
wordlist = jieba.lcut(''.join(text))
result = ' '.join(wordlist)

# 设置停用词
stop_words = ['你', '我', '的', '了', '们']
ciyun_words = ''

# 过滤后的词
for word in result:
    if word not in stop_words:
        ciyun_words += word

# print(ciyun_words)
# 输出ciyun_words为txt
with open('ciyun_words.txt', 'w', encoding='utf-8') as f:
    f.write(ciyun_words)