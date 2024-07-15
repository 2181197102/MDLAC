# -*- coding: utf-8 -*-
import random
# Scrapy settings for jd_spider project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'jd_spider'

SPIDER_MODULES = ['jd_spider.spiders']
NEWSPIDER_MODULE = 'jd_spider.spiders'

# 最大并行运行数
CONCURRENT_REQUESTS = 32
CONCURRENT_REQUESTS_PER_DOMAIN = 32
CONCURRENT_REQUESTS_PER_IP = 32


USER_AGENTS = [
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; AcooBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
    "Mozilla/4.0 (compatible; MSIE 7.0; AOL 9.5; AOLBuild 4337.35; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
    "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",
    "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0",
    "Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
    "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
]

# 这里使用的代理IP，因为IP的存活期的限制，请定期更新下面的IP，可从http://www.xicidaili.com/ 中找免费的代理IP
# PROXIES = []
# for i in range(5):
#     # 提取代理API接口，获取1个代理IP
#     api_url = "https://api.jiliuip.com/getdip/?app_id=ojupaif04vzjh816257n&num=1&app_secret=vlw8v693q5m47pyaypjm0zy25qz6nob6&pt=1&sep=1"
#
#
#     # 获取API接口返回的代理IP
#     proxy_ip = requests.get(api_url).text
#
#     # 用户名密码认证
#     username = "jd3812134932"
#     password = "yb7utld6"
#
#     proxie = {
#         "ip_port": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip},
#         "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip}
#     }
#     PROXIES.append(proxie)
# print("获取代理IP：", PROXIES)

# 从网址中提取动态代理IP（每次10个）

COOKIES_ENABLED = False

DEFAULT_REQUEST_HEADERS = {
   'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
   'Accept-Language': 'en',
   'User-Agent': random.choice(USER_AGENTS),
}
# 如果不想使用代理IP，可以将下面这段DOWNLOADER_MIDDLEWARES代码注释掉
# DOWNLOADER_MIDDLEWARES = {
#     # 'jd_spider.middlewares.RandomUserAgent': 1,
#     # 'jd_spider.middlewares.ProxyMiddleware': 100,
#     # 'jd_spider.middlewares.LoginMiddleware': 105,
#     # 'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 110,
# }

DOWNLOAD_DELAY = 1  # 下载延迟

LOG_LEVEL = 'DEBUG'
# COOKIES_DEBUG = True  # 开启cookie的调试信息

ITEM_PIPELINES = {
    # 'jd_spider.pipelines.PrintPipeline_comment': 300, # 抓取评论信息时，使用该通道
    'jd_spider.pipelines.PrintPipeline': 300,  # 抓取商品信息时，使用该通道
}

# 链接长度最大值
# URLLENGTH_LIMIT = 5000