# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
# import MySQLdb.cursors
from twisted.enterprise import adbapi

# from scrapy.xlib.pydispatch import dispatcher
from scrapy.signalmanager import dispatcher
from scrapy import signals
from scrapy.utils.project import get_project_settings
# from scrapy import log
import shutil
import pandas as pd

SETTINGS = get_project_settings()

class PrintPipeline(object):
    def __init__(self):
        self.file = open('jd_goods.csv', 'a')
        if self.file.tell() == 0:
            self.file.write('ACID,name,link,shop_name,price,operation,level,frequency,purify,Type,CWType,horse,good_func,apply_space,Featured,statu,Set_type,apply_house,duct_form,brand,wind_position,NO_drainage,min_height,cost,user_preference,CommentCountStr,AverageScore,GoodCountStr,GeneralCountStr,PoorCountStr,GoodRate\n')

    def process_item(self, item, spider):
        # 在这里简单地打印出 item 的内容
        print(item)
        self.file.write(
            item['ID'] + ',' +
            item['name'] + ',' +
            item['link'] + ',' +
            item['shop_name'] + ',' +
            item['price'] + ',' +
            item['operation'] + ',' +
            item['level'] + ',' +
            item['frequency'] + ',' +
            item['purify'] + ',' +
            item['Type'] + ',' +
            item['CWType'] + ',' +
            item['horse'] + ',' +
            item['good_func'] + ',' +
            str(item['apply_space']) + ',' +
            str(item['Featured']) + ',' +
            str(item['statu']) + ',' +
            str(item['Set_type']) + ',' +
            str(item['apply_house']) + ',' +
            str(item['duct_form']) + ',' +
            str(item['brand']) + ',' +
            str(item['wind_position']) + ',' +
            str(item['NO_drainage']) + ',' +
            str(item['min_height']) + ',' +
            str(item['cost']) + ',' +
            str(item['user_preference']) + ',' +
            str(item['CommentCountStr']) + ',' +
            str(item['AverageScore']) + ',' +
            str(item['GoodCountStr']) + ',' +
            str(item['GeneralCountStr']) + ',' +
            str(item['PoorCountStr']) + ',' +
            str(item['GoodRate']) + '\n'
        )
        # return item  # 如果您希望将 item 传递给下一个 pipeline，需要返回它

    def close_spider(self, spider):
        print("爬虫结束，文件关闭")
        self.file.close()

class PrintPipeline_comment(object):
    def __init__(self):
        self.file = open('jd_comments.csv', 'a', encoding='utf-8')
        if self.file.tell() == 0:
            self.file.write('"content","date","good_ID","good_name","commentTags","replyCount","score","userLevelId","userProvince","user_ID","user_name","score1","score2","score3","score4","score5"\n')

    def process_item(self, item, spider):
        # 在这里简单地打印出 item 的内容
        print(item)
        import re

        # 定义要保留的 Unicode 范围
        # pattern = re.compile(r'[^\u4E00-\u9FFF\u0020-\u007E]')

        # 要处理的字符串
        # input_str = "你好，Hello, 123 !@# 你好"

        # 使用正则表达式替换范围外的字符为空字符串
        # output_str = pattern.sub('', input_str)
        item['content'] = item['content'].encode('gbk', 'ignore').decode('gbk').strip()
        item['good_name'] = item['good_name'].encode('gbk', 'ignore').decode('gbk').strip()

        item['content'] = item['content'].encode('utf-8', 'ignore').decode('utf-8').strip()
        item['good_name'] = item['good_name'].encode('utf-8', 'ignore').decode('utf-8').strip()

        # 匹配换行符'\n'，替换为空字符串""
        import re

        # 合并所有的替换表达式
        item['content'] = re.sub(r'[\n ，,！!。：:、；;]', '', item['content'])

        item['good_name'] = re.sub(r' ', '', item['good_name'])
        print("content:", item['content'])
        print("good_name:", item['good_name'])
        # 如果csv文件里面没有当前Item的user_ID，就写入。防止重复写入

        self.file.write(
            str(item['content']) + ',' +
            str(item['date']) + ',' +
            str(item['good_ID']) + ',' +
            str(item['good_name']) + ',' +
            str(item['commentTags']) + ',' +
            str(item['replyCount']) + ',' +
            str(item['score']) + ',' +
            str(item['userLevelId']) + ',' +
            str(item['userProvince']) + ',' +
            str(item['user_ID']) + ',' +
            str(item['user_name']) + ',' +
            str(item['score1']) + ',' +
            str(item['score2']) + ',' +
            str(item['score3']) + ',' +
            str(item['score4']) + ',' +
            str(item['score5']) + '\n'
        )
        # return item  # 如果您希望将 item 传递给下一个 pipeline，需要返回它

    def close_spider(self, spider):
        print("评论爬虫结束，文件关闭")
        self.file.close()
