#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
使用requests请求代理服务器
请求http和https网页均适用
"""

import requests

# 提取代理API接口，获取1个代理IP
api_url = "https://api.jiliuip.com/getdip/?app_id=ojupaif04vzjh816257n&num=1&app_secret=vlw8v693q5m47pyaypjm0zy25qz6nob6&pt=1&sep=1"


# 获取API接口返回的代理IP
proxy_ip = requests.get(api_url).text
print("获取代理IP：", proxy_ip)

# 用户名密码认证
username = "jd3812134932"
password = "yb7utld6"

proxie = {
    "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip},
    "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip}
}


# 白名单方式（需提前设置白名单）
# proxies = {
#     "http": "http://%(proxy)s/" % {"proxy": proxy_ip},
#     "https": "http://%(proxy)s/" % {"proxy": proxy_ip}
# }

# 要访问的目标网页
target_url = "https://list.jd.com/list.html?cat=737%2C794%2C870&isList=1&page=99"

# 使用代理IP发送请求
response = requests.get(target_url, proxies=proxies)

# 获取页面内容
if response.status_code == 200:
    print(response.text)