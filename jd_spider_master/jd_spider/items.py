# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy import Item, Field


class JdSpiderItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class goodsItem(Item):
    ID = Field()  # 商品ID
    name = Field()  # 商品名字
    link = Field()  # 商品链接
    shop_name = Field()  # 店家名字
    price = Field()  # 价钱

    operation = Field()  # 操控方式
    level = Field()  # 能效等级
    frequency = Field()  # 变频/定频
    purify = Field()  # 净化类型
    Type = Field()  # 壁挂式/立柜式
    CWType = Field()  # 冷暖类型
    horse = Field()  # 匹数
    good_func = Field()  # 功能
    apply_space = Field()  # 适用场景
    Featured = Field()  # 特色功能
    statu = Field()  # 成色
    Set_type = Field()  # 套装类型
    apply_house = Field()  # 适用户型
    duct_form = Field()  # 风管形式
    brand = Field()  # 品牌
    wind_position = Field()  # 风口位置
    NO_drainage = Field()  # 免排水
    min_height = Field()  # 最小吊顶高度
    cost = Field()  # 安装费用
    user_preference = Field()   # 用户优选

    CommentCountStr = Field()  # 评论人数
    AverageScore = Field()  # 平均分1-5
    GoodCountStr = Field()  # 评价好评数
    GeneralCountStr = Field()  # 中评数
    PoorCountStr = Field()  # 差评数
    GoodRate = Field()  # 好评率


class commentItem(Item):
    user_name = Field()  # 评论用户的名字
    user_ID = Field()  # 评论用户的ID
    userProvince = Field()  # 评论用户来自的地区
    content = Field()  # 评论内容
    good_ID = Field()  # 评论的商品ID
    good_name = Field()  # 评论的商品名字
    date = Field()  # 评论时间
    replyCount = Field()  # 回复数
    score = Field()  # 评分
    status = Field()  # 状态
    title = Field()
    userLevelId = Field()
    userRegisterTime = Field()  # 用户注册时间
    productColor = Field()  # 商品颜色
    productSize = Field()  # 商品大小
    userLevelName = Field()  # 银牌会员，钻石会员等
    userClientShow = Field()  # 来自什么 比如来自京东客户端
    isMobile = Field()  # 是否来自手机
    days = Field()  # 天数
    commentTags = Field()  # 标签

    score1 = Field()  # 评分1
    score2 = Field()  # 评分2
    score3 = Field()  # 评分3
    score4 = Field()  # 评分4
    score5 = Field()  # 评分5