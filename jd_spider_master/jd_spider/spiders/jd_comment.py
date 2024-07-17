# -*- coding: utf-8 -*-
from lxml.builder import unicode
from scrapy.spiders import Spider
from MDLAC.jd_spider_master.jd_spider.items import commentItem
from scrapy.selector import Selector
from scrapy import cmdline
import json
import csv
import scrapy
import copy
import unicodedata


def chinese_to_number(s):
    if s.isdigit():
        return int(s)
    if '万' in s:
        return int(float(s.replace('万', '')) * 10000)
    elif '亿' in s:
        return int(float(s.replace('亿', '')) * 100000000)
    else:
        return 0



class comment_spider(Spider):
    # 赋值item为'#'
    def assign(self, item):
        item['user_name'] = "#"
        item['user_ID'] = "#"
        item['userProvince'] = "#"
        item['content'] = "#"
        item['good_ID'] = "#"
        item['good_name'] = "#"
        item['date'] = "#"
        item['replyCount'] = "#"
        item['score'] = "#"
        item['status'] = "#"
        item['title'] = "#"
        item['userLevelId'] = "#"
        item['userRegisterTime'] = "#"
        item['productColor'] = "#"
        item['productSize'] = "#"
        item['userLevelName'] = "#"
        item['userClientShow'] = "#"
        item['isMobile'] = "#"
        item['days'] = "#"
        item['commentTags'] = "#"
        item['score1'] = "#"
        item['score2'] = "#"
        item['score3'] = "#"
        item['score4'] = "#"
        item['score5'] = "#"
        return item


    name = "comment"
    start_urls = []
    with open(r'C:\Users\LiuXiang\Desktop\MDLAC-master\MDLAC\dataset\拆分文件（不用看）\test.csv', 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        header = next(reader)
        for row in reader:
            # 在这里处理每一行数据
            good_id = row[0]  # 商品ID
            # print("good_id: ", good_id)
            # comment_n = row[25].replace("+", "")# 商品评论数
            # comments = chinese_to_number(comment_n)
            # pages = int(comments/10)
            # # 设置每个商品最多抓取100页评论(1000条)
            # if pages > 10:
            #     pages = 10
            for page in range(0, 2):
                # print("page: ", page)
                url = f"https://api.m.jd.com/?appid=item-v3&functionId=pc_club_productPageComments&client=pc&clientVersion=1.0.0&t=1720801587270&body=%7B%22productId%22%3A{good_id}%2C%22score%22%3A0%2C%22sortType%22%3A5%2C%22page%22%3A{page}%2C%22pageSize%22%3A10%2C%22isShadowSku%22%3A0%2C%22rid%22%3A0%2C%22fold%22%3A1%2C%22bbtf%22%3A%22%22%2C%22shield%22%3A%22%22%7D"
                start_urls.append(url)
                print("url: ", url)


    def parse_return(self, response):
        items = response.meta['item']
        print(items)
        return items

    def parse(self, response):
        js = Selector(response).get()   # 该页所有内容
        print("正在爬取：", response.url)
        item_1 = commentItem()
        comments = js['comments']
        item_1 = self.assign(item_1)
        items = []
        if comments:
            for i in range(0, len(comments)):
                tags = []
                item1 = copy.deepcopy(item_1)  # 使用deepcopy创建item的副本
                item1['good_ID'] = js['productCommentSummary']['skuId']
                item1['score1'] = js['productCommentSummary']['score1Count']
                item1['score2'] = js['productCommentSummary']['score2Count']
                item1['score3'] = js['productCommentSummary']['score3Count']
                item1['score4'] = js['productCommentSummary']['score4Count']
                item1['score5'] = js['productCommentSummary']['score5Count']
                # print(item1['score1'])
                for tag in js['hotCommentTagStatistics']:
                    tags.append(tag['name'])
                item1['commentTags'] = '|'.join(tags)
                item1['user_name'] = comments[i]['nickname']
                item1['user_ID'] = comments[i]['id']
                if 'location' in comments[i]:
                    item1['userProvince'] = comments[i]['location']
                if 'content' in comments[i]:
                    item1['content'] = comments[i]['content']

                item1['date'] = comments[i]['creationTime']
                item1['replyCount'] = comments[i]['replyCount']
                item1['score'] = comments[i]['score']
                item1['userLevelId'] = comments[i]['plusAvailable']
                item1['good_name'] = comments[i]['productColor']
                # print(item1)
                items.append(item1)
            url = "https://www.jd.com/"
            yield scrapy.Request(url=url, callback=self.parse_return, meta={'item': items}, dont_filter=True)


cmdline.execute("scrapy crawl comment".split())
