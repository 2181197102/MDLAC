# 导入模块
from wordcloud import WordCloud
# from MDLAC.words_cloud.splite_words import result
import pandas as pd
from stylecloud import gen_stylecloud
# 文本数据
# text = 'he speak you most bueatiful time|Is he first meeting you'
result = pd.read_csv(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\words_cloud\ciyun_words.txt')
result = str(result)
print(result)
# 词云对
wc = WordCloud()
stopwords = set(['壁挂', '空调'])
# 设置参数，创建WordCloud对象
wc = WordCloud(
    width=200,  # 设置宽为400px
    height=150,  # 设置高为300px
    background_color='white',  # 设置背景颜色为白色
    stopwords=stopwords,  # 设置禁用词，在生成的词云中不会出现set集合中的词
    max_font_size=100,  # 设置最大的字体大小，所有词都不会超过100px
    min_font_size=10,  # 设置最小的字体大小，所有词都不会超过10px
    max_words=10,  # 设置最大的单词个数
    scale=2,  # 扩大两倍
    font_path='msyh.ttc'  # 设置字体
)
# 生成词云
wc.generate(result)

# 保存词云文件
wc.to_file('img.jpg')