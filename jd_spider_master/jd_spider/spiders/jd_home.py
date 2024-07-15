# -*- coding: utf-8 -*-
from scrapy.spiders import Spider
from MDLAC.jd_spider_master.jd_spider.items import goodsItem
from scrapy.selector import Selector
from scrapy import cmdline
import scrapy
import copy
import re
import json
import csv


class jd_spider(Spider):
    name = "jd"
    start_urls = []
    start_urls = copy.deepcopy(start_urls)
    for i in range(5, 10):  # 这里需要自己设置页数，目前只能抓取空调分类下前10页的商品
        url = f'https://list.jd.com/list.html?cat=737%2C794%2C870&plus=1&ev=exbrand_%E7%BE%8E%E7%9A%84%EF%BC%88Midea%EF%BC%89%5E&cid3=870'
        print("url = ", url)
        start_urls.append(url)


    # 赋值item为'#'
    def assign(self, item):
        item['ID'] = "#"
        item['name'] = "#"
        item['link'] = "#"
        item['shop_name'] = "#"
        item['price'] = "#"
        item['operation'] = "#"
        item['level'] = "#"
        item['frequency'] = "#"
        item['purify'] = "#"
        item['Type'] = "#"
        item['CWType'] = "#"
        item['horse'] = "#"
        item['good_func'] = "#"
        item['apply_space'] = "#"
        item['Featured'] = "#"
        item['statu'] = "#"
        item['Set_type'] = "#"
        item['apply_house'] = "#"
        item['duct_form'] = "#"
        item['brand'] = "#"
        item['wind_position'] = "#"
        item['NO_drainage'] = "#"
        item['min_height'] = "#"
        item['cost'] = "#"
        item['user_preference'] = "#"
        item['CommentCountStr'] = "#"
        item['AverageScore'] = "#"
        item['GoodCountStr'] = "#"
        item['GeneralCountStr'] = "#"
        item['PoorCountStr'] = "#"
        item['GoodRate'] = "#"
        return item

    def parse_getCommentnum(self, response):
        item1 = response.meta['item']
        js = Selector(response).get()

        item1['CommentCountStr'] = js['CommentsCount'][0]['CommentCountStr']
        item1['AverageScore'] = js['CommentsCount'][0]['AverageScore']
        item1['GoodCountStr'] = js['CommentsCount'][0]['GoodCountStr']
        item1['GeneralCountStr'] = js['CommentsCount'][0]['GeneralCountStr']
        item1['PoorCountStr'] = js['CommentsCount'][0]['PoorCountStr']
        item1['GoodRate'] = js['CommentsCount'][0]['GoodRate']

        return item1

    def parse_detail(self, response):
        print('detail_url:', response.url)
        item1 = response.meta['item']
        sel = Selector(response)
        goods = sel.xpath('//ul[@class="parameter2 p-parameter-list"]/li')
        titles = []
        for good in goods:
            titles.append(good.xpath('./text()').extract()[0].split("："))
        # print(titles)
        for title in titles:
            if title[0] == '商品名称':
                item1['name'] = title[1]
            elif title[0] == '店铺' and (item1['shop_name'] == " "):
                item1['shop_name'] = title[1]
            elif title[0] == '操控方式':
                item1['operation'] = title[1]
            elif title[0] == '能效等级':
                item1['level'] = title[1]
            elif title[0] == '变频/定频':
                item1['frequency'] = title[1]
            elif title[0] == '净化类型':
                item1['purify'] = title[1]
            elif title[0] == '类型':
                item1['Type'] = title[1]
            elif title[0] == '冷暖类型':
                item1['CWType'] = title[1]
            elif title[0] == '匹数':
                item1['horse'] = title[1]
            elif title[0] == '功能':
                item1['good_func'] = title[1]
            elif title[0] == '适用场景':
                item1['apply_space'] = title[1]
            elif title[0] == '特色功能':
                item1['Featured'] = title[1]
            elif title[0] == '成色':
                item1['statu'] = title[1]
            elif title[0] == '套装类型':
                item1['Set_type'] = title[1]
            elif title[0] == '适用户型':
                item1['apply_house'] = title[1]
            elif title[0] == '风管形式':
                item1['duct_form'] = title[1]
            elif title[0] == '风口位置':
                item1['wind_position'] = title[1]
            elif title[0] == '免排水':
                item1['NO_drainage'] = title[1]
            elif title[0] == '最小吊顶高度':
                item1['min_height'] = title[1]
            elif title[0] == '安装费用':
                item1['cost'] = title[1]
            elif title[0] == '用户优选':
                item1['user_preference'] = title[1]

        brands = sel.xpath("//ul[@id='parameter-brand']/li")
        for brand in brands:
            item1['brand'] = brand.xpath('./@title').extract()[0]

        # print("--------------------------")
        # print('brand:', item1['brand'])
        # print("name", item1['name'])
        # print("shop_name", item1['shop_name'])
        # print("operation", item1['operation'])
        # print("level", item1['level'])
        # print("frequency", item1['frequency'])
        # print("purify", item1['purify'])
        # print("Type", item1['Type'])
        # print("CWType", item1['CWType'])
        # print("horse", item1['horse'])
        # print("Function", item1['Function'])
        # print("--------------------------")
        # print("--------------------------")
        # print("item1:", item1)
        # print("--------------------------")
        cookies = "__jdv=76161171|direct|-|none|-|1720079782815; cud=f0f713fcba73a5ba342febc6312c13e9; shshshfpa=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; shshshfpx=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; mt_xid=V2_52007VwMUUVxZVFIZQBpVBWIDEVNUXFdZHkwZbAFvAkAAX1BTRhYZHloZYgAWWkEIBl8XVU1VBTABFQEICFJTHnkaXQZiHxNUQVhSSx9BEl0FbAcUYl9oUmoWSx1YDGMCFVVdXlZYHU4RXgFhMxJUWVw%3D; user-key=4f5cb687-3372-4ce0-a5cc-86816ec6bb0b; PCSYCityID=CN_510000_510100_0; pin=liu_xiang_09; _tp=jYiMwaMnIdCH98GNPfF2UA%3D%3D; _pst=liu_xiang_09; unick=qt301kg93rpphq; pinId=s1cWrPsRB3o1Q35KEnxCLQ; areaId=22; ipLoc-djd=22-1930-50948-71603; mba_muid=17209741708231938004449; x-rp-evtoken=N-nAb5Oj6OS1u8hkvixIgDI_6Z7HqmsY5DZjp2F0V_0lQm1D3hTxKCg-X--rahl0BznIgor0jQxE-nWgKZn16DyD4q6RcTU3pTsVoZErsELTMmC_peVRtycE-D876Pz9Gu9nodUbpuC3IlDHa9jRcFsoymhFPpL_ZdWQ7k83oYFnMaRGvnN68MbylnFcitFc3uXWXtoSkx5azpd_dJFuRiHtPGW6sxlSQRkMmumcEQ8%3D; ceshi3.com=000; mba_sid=17210588648908615241113646168.1; wlfstk_smdl=n60ews51baoeqni51dfa0jesle70gax4; 3AB9D23F7A4B3CSS=jdd03QXS5MAP7N7Z6CPXWCO7X66F4AAIMJ6XIIDC6WJZZJWX3JSGC3Y6YPUVZBTGVM7UHWC6VIQN53FACJWEAEP5XSSH6NEAAAAMQW4NDJUIAAAAADPM24GCH45EUL4X; _gia_d=1; cvt=1; __jdu=17210588648822122236718; TrackID=1b-L244JtOC1r-OdmXNCedl-oZaDwZntYvgiQXAtcEv8lf_7F9p7Qq4I22lM3XCHYbSr4HliMwFO4cin0XYy3GgVmPUgylhlIhmEzzE5K5Lg; thor=2DD516A9C2C65C87B8658311FCDA0EF00763ED4CBB3C286EC378281047CF5C6FA0BBE37ED30CC994486F1FA7396851E7A89FABE5568F059379B5B34FA91B663F640DB87222137F6A45939FF119BB18D666F8F29CE6E9388327D250B555065E5DE86E30AC76DF0D99BCA2B7988829816B058A239D1B191C131E665D99C20F4F6F6BEF79B3A28C991175EC8CD64090591E; flash=2_Sb_IwKYajiIb9D-EkJfgafIKVPa5cKQgOOqx8tZUapAPVAqNwka6W4KGwWs3f5DV0jtlRHbViRoQF3ZJFBd4a-tnFpr8GGougOrBgTs1jpwhBdMSehPN2tyQp3dOeiWihMJYvt-heAzZErQtYDZZor8U5Sh79b7YtvzYbFKp_Lo*; __jda=29846306.17210588648822122236718.1721058864.1721058864.1721058864.1; __jdc=29846306; jsavif=1; shshshfpb=BApXcTwcStPVAc0uF-aiDaS605SBd8Re_BmJGkKlo9xJ1MvZ9iIC2; 3AB9D23F7A4B3C9B=QXS5MAP7N7Z6CPXWCO7X66F4AAIMJ6XIIDC6WJZZJWX3JSGC3Y6YPUVZBTGVM7UHWC6VIQN53FACJWEAEP5XSSH6NE; __jdb=29846306.6.17210588648822122236718|1.1721058864; csn=5"
        # 转换成字典
        cookies = {i.split("=")[0]: i.split("=")[1] for i in cookies.split("; ")}
        print("cookies = ", cookies)
        # headers = {"Cookie":cookies}  # cookie放到headers中无效
        ID = str(item1["ID"])
        url = f"https://api.m.jd.com/?appid=item-v3&functionId=pc_club_productCommentSummaries&client=pc&clientVersion=1.0.0&t=1720616822487&body=%7B%22referenceIds%22%3A%22{ID}%22%2C%22categoryIds%22%3A%22737%2C794%2C870%22%2C%22bbtf%22%3A%22%22%2C%22shield%22%3A%22%22%7D"
        print("url = ", url)
        yield scrapy.Request(url, meta={'item': item1}, callback=self.parse_getCommentnum, cookies=cookies)

    def parse(self, response):  # 解析搜索页
        sel = Selector(response)  # Xpath选择器
        goods = sel.xpath('//li[@class="gl-item"]')
        item_1 = goodsItem()
        url = ""
        item_1 = self.assign(item_1)
        for good in goods:
            item1 = copy.deepcopy(item_1)  # 使用deepcopy创建item的副本
            item1['ID'] = good.xpath('./@data-sku').extract()[0]
            # item1['name'] = good.xpath('./div/div[@class="p-name p-name-type-3"]/a/em/text()').extract()
            if good.xpath('./div/div[@class="p-shop"]/span/a/text()').extract():
                item1['shop_name'] = good.xpath('./div/div[@class="p-shop"]/span/a/text()').extract()[0]
            item1['link'] = good.xpath('./div/div[@class="p-img"]/a/@href').extract()[0]
            if good.xpath('./div/div[@class="p-price"]/strong/i/text()').extract():
                item1['price'] = good.xpath('./div/div[@class="p-price"]/strong/i/text()').extract()[0]
            url = "https:" + item1['link']

            # print("--------------------------")
            print("ID", item1['ID'])
            # print("shop_name", item1['shop_name'])
            # print("link", item1['link'])
            # print("price", item1['price'])
            # print("--------------------------")
            if len(url) < 1000:
                yield scrapy.Request(url, meta={'item': item1}, callback=self.parse_detail)


cmdline.execute("scrapy crawl jd".split())
