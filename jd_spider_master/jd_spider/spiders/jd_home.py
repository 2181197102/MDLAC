# # -*- coding: utf-8 -*-
# from scrapy.spiders import Spider
# from MDLAC.jd_spider_master.jd_spider.items import goodsItem
# from scrapy.selector import Selector
# from scrapy import cmdline
# import scrapy
# import copy
# import re
# import json
# import csv
#
#
# class jd_spider(Spider):
#     name = "jd"
#     start_urls = []
#     start_urls = copy.deepcopy(start_urls)
#     for i in range(90, 95):  # 这里需要自己设置页数，目前只能抓取空调分类下前10页的商品
#         url = f'https://list.jd.com/list.html?cat=737%2C794%2C870&isList=1&page={i}'
#         start_urls.append(url)
#
#
#     # 赋值item为'#'
#     def assign(self, item):
#         item['ID'] = "#"
#         item['name'] = "#"
#         item['link'] = "#"
#         item['shop_name'] = "#"
#         item['price'] = "#"
#         item['operation'] = "#"
#         item['level'] = "#"
#         item['frequency'] = "#"
#         item['purify'] = "#"
#         item['Type'] = "#"
#         item['CWType'] = "#"
#         item['horse'] = "#"
#         item['good_func'] = "#"
#         item['apply_space'] = "#"
#         item['Featured'] = "#"
#         item['statu'] = "#"
#         item['Set_type'] = "#"
#         item['apply_house'] = "#"
#         item['duct_form'] = "#"
#         item['brand'] = "#"
#         item['wind_position'] = "#"
#         item['NO_drainage'] = "#"
#         item['min_height'] = "#"
#         item['cost'] = "#"
#         item['user_preference'] = "#"
#         item['CommentCountStr'] = "#"
#         item['AverageScore'] = "#"
#         item['GoodCountStr'] = "#"
#         item['GeneralCountStr'] = "#"
#         item['PoorCountStr'] = "#"
#         item['GoodRate'] = "#"
#         return item
#
#     def parse_getCommentnum(self, response):
#         item1 = response.meta['item']
#         js = Selector(response).get()
#
#         item1['CommentCountStr'] = js['CommentsCount'][0]['CommentCountStr']
#         item1['AverageScore'] = js['CommentsCount'][0]['AverageScore']
#         item1['GoodCountStr'] = js['CommentsCount'][0]['GoodCountStr']
#         item1['GeneralCountStr'] = js['CommentsCount'][0]['GeneralCountStr']
#         item1['PoorCountStr'] = js['CommentsCount'][0]['PoorCountStr']
#         item1['GoodRate'] = js['CommentsCount'][0]['GoodRate']
#
#         return item1
#
#     def parse_detail(self, response):
#         print('detail_url:', response.url)
#         item1 = response.meta['item']
#         sel = Selector(response)
#         goods = sel.xpath('//ul[@class="parameter2 p-parameter-list"]/li')
#         titles = []
#         for good in goods:
#             titles.append(good.xpath('./text()').extract()[0].split("："))
#         # print(titles)
#         for title in titles:
#             if title[0] == '商品名称':
#                 item1['name'] = title[1]
#             elif title[0] == '店铺' and (item1['shop_name'] == " "):
#                 item1['shop_name'] = title[1]
#             elif title[0] == '操控方式':
#                 item1['operation'] = title[1]
#             elif title[0] == '能效等级':
#                 item1['level'] = title[1]
#             elif title[0] == '变频/定频':
#                 item1['frequency'] = title[1]
#             elif title[0] == '净化类型':
#                 item1['purify'] = title[1]
#             elif title[0] == '类型':
#                 item1['Type'] = title[1]
#             elif title[0] == '冷暖类型':
#                 item1['CWType'] = title[1]
#             elif title[0] == '匹数':
#                 item1['horse'] = title[1]
#             elif title[0] == '功能':
#                 item1['good_func'] = title[1]
#             elif title[0] == '适用场景':
#                 item1['apply_space'] = title[1]
#             elif title[0] == '特色功能':
#                 item1['Featured'] = title[1]
#             elif title[0] == '成色':
#                 item1['statu'] = title[1]
#             elif title[0] == '套装类型':
#                 item1['Set_type'] = title[1]
#             elif title[0] == '适用户型':
#                 item1['apply_house'] = title[1]
#             elif title[0] == '风管形式':
#                 item1['duct_form'] = title[1]
#             elif title[0] == '风口位置':
#                 item1['wind_position'] = title[1]
#             elif title[0] == '免排水':
#                 item1['NO_drainage'] = title[1]
#             elif title[0] == '最小吊顶高度':
#                 item1['min_height'] = title[1]
#             elif title[0] == '安装费用':
#                 item1['cost'] = title[1]
#             elif title[0] == '用户优选':
#                 item1['user_preference'] = title[1]
#
#         brands = sel.xpath("//ul[@id='parameter-brand']/li")
#         for brand in brands:
#             item1['brand'] = brand.xpath('./@title').extract()[0]
#
#         # print("--------------------------")
#         # print('brand:', item1['brand'])
#         # print("name", item1['name'])
#         # print("shop_name", item1['shop_name'])
#         # print("operation", item1['operation'])
#         # print("level", item1['level'])
#         # print("frequency", item1['frequency'])
#         # print("purify", item1['purify'])
#         # print("Type", item1['Type'])
#         # print("CWType", item1['CWType'])
#         # print("horse", item1['horse'])
#         # print("Function", item1['Function'])
#         # print("--------------------------")
#         # print("--------------------------")
#         # print("item1:", item1)
#         # print("--------------------------")
#         ID = str(item1["ID"])
#         url = f"https://api.m.jd.com/?appid=item-v3&functionId=pc_club_productCommentSummaries&client=pc&clientVersion=1.0.0&t=1720616822487&body=%7B%22referenceIds%22%3A%22{ID}%22%2C%22categoryIds%22%3A%22737%2C794%2C870%22%2C%22bbtf%22%3A%22%22%2C%22shield%22%3A%22%22%7D"
#         print("url = ", url)
#         yield scrapy.Request(url, meta={'item': item1}, callback=self.parse_getCommentnum)
#
#     def parse(self, response):  # 解析搜索页
#         sel = Selector(response)  # Xpath选择器
#         goods = sel.xpath('//li[@class="gl-item"]')
#         item_1 = goodsItem()
#         url = ""
#         item_1 = self.assign(item_1)
#         for good in goods:
#             item1 = copy.deepcopy(item_1)  # 使用deepcopy创建item的副本
#             item1['ID'] = good.xpath('./@data-sku').extract()[0]
#             # item1['name'] = good.xpath('./div/div[@class="p-name p-name-type-3"]/a/em/text()').extract()
#             if good.xpath('./div/div[@class="p-shop"]/span/a/text()').extract():
#                 item1['shop_name'] = good.xpath('./div/div[@class="p-shop"]/span/a/text()').extract()[0]
#             item1['link'] = good.xpath('./div/div[@class="p-img"]/a/@href').extract()[0]
#             if good.xpath('./div/div[@class="p-price"]/strong/i/text()').extract():
#                 item1['price'] = good.xpath('./div/div[@class="p-price"]/strong/i/text()').extract()[0]
#             url = "https:" + item1['link']
#
#             # print("--------------------------")
#             print("ID", item1['ID'])
#             # print("shop_name", item1['shop_name'])
#             # print("link", item1['link'])
#             # print("price", item1['price'])
#             # print("--------------------------")
#             if len(url) < 1000:
#                 yield scrapy.Request(url, meta={'item': item1}, callback=self.parse_detail)
#
#
# cmdline.execute("scrapy crawl jd".split())
