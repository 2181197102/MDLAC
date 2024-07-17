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
   'cookie': '__jdv=76161171|direct|-|none|-|1720079782815; cud=f0f713fcba73a5ba342febc6312c13e9; shshshfpa=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; shshshfpx=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; mt_xid=V2_52007VwMUUVxZVFIZQBpVBWIDEVNUXFdZHkwZbAFvAkAAX1BTRhYZHloZYgAWWkEIBl8XVU1VBTABFQEICFJTHnkaXQZiHxNUQVhSSx9BEl0FbAcUYl9oUmoWSx1YDGMCFVVdXlZYHU4RXgFhMxJUWVw%3D; user-key=4f5cb687-3372-4ce0-a5cc-86816ec6bb0b; PCSYCityID=CN_510000_510100_0; pin=liu_xiang_09; _tp=jYiMwaMnIdCH98GNPfF2UA%3D%3D; _pst=liu_xiang_09; unick=qt301kg93rpphq; pinId=s1cWrPsRB3o1Q35KEnxCLQ; areaId=22; ipLoc-djd=22-1930-50948-71603; mba_muid=17209741708231938004449; x-rp-evtoken=N-nAb5Oj6OS1u8hkvixIgDI_6Z7HqmsY5DZjp2F0V_0lQm1D3hTxKCg-X--rahl0BznIgor0jQxE-nWgKZn16DyD4q6RcTU3pTsVoZErsELTMmC_peVRtycE-D876Pz9Gu9nodUbpuC3IlDHa9jRcFsoymhFPpL_ZdWQ7k83oYFnMaRGvnN68MbylnFcitFc3uXWXtoSkx5azpd_dJFuRiHtPGW6sxlSQRkMmumcEQ8%3D; ceshi3.com=000; mba_sid=17210588648908615241113646168.1; wlfstk_smdl=n60ews51baoeqni51dfa0jesle70gax4; 3AB9D23F7A4B3CSS=jdd03QXS5MAP7N7Z6CPXWCO7X66F4AAIMJ6XIIDC6WJZZJWX3JSGC3Y6YPUVZBTGVM7UHWC6VIQN53FACJWEAEP5XSSH6NEAAAAMQW4NDJUIAAAAADPM24GCH45EUL4X; _gia_d=1; cvt=1; __jdu=17210588648822122236718; TrackID=1b-L244JtOC1r-OdmXNCedl-oZaDwZntYvgiQXAtcEv8lf_7F9p7Qq4I22lM3XCHYbSr4HliMwFO4cin0XYy3GgVmPUgylhlIhmEzzE5K5Lg; thor=2DD516A9C2C65C87B8658311FCDA0EF00763ED4CBB3C286EC378281047CF5C6FA0BBE37ED30CC994486F1FA7396851E7A89FABE5568F059379B5B34FA91B663F640DB87222137F6A45939FF119BB18D666F8F29CE6E9388327D250B555065E5DE86E30AC76DF0D99BCA2B7988829816B058A239D1B191C131E665D99C20F4F6F6BEF79B3A28C991175EC8CD64090591E; flash=2_Sb_IwKYajiIb9D-EkJfgafIKVPa5cKQgOOqx8tZUapAPVAqNwka6W4KGwWs3f5DV0jtlRHbViRoQF3ZJFBd4a-tnFpr8GGougOrBgTs1jpwhBdMSehPN2tyQp3dOeiWihMJYvt-heAzZErQtYDZZor8U5Sh79b7YtvzYbFKp_Lo*; __jda=29846306.17210588648822122236718.1721058864.1721058864.1721058864.1; __jdc=29846306; jsavif=1; shshshfpb=BApXcTwcStPVAc0uF-aiDaS605SBd8Re_BmJGkKlo9xJ1MvZ9iIC2; 3AB9D23F7A4B3C9B=QXS5MAP7N7Z6CPXWCO7X66F4AAIMJ6XIIDC6WJZZJWX3JSGC3Y6YPUVZBTGVM7UHWC6VIQN53FACJWEAEP5XSSH6NE; __jdb=29846306.6.17210588648822122236718|1.1721058864; csn=5'
}
# 如果不想使用代理IP，可以将下面这段DOWNLOADER_MIDDLEWARES代码注释掉
# DOWNLOADER_MIDDLEWARES = {
#     # 'jd_spider.middlewares.RandomUserAgent': 1,
#     # 'jd_spider.middlewares.ProxyMiddleware': 100,
#     # 'jd_spider.middlewares.LoginMiddleware': 105,
#     # 'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 110,
# }

DOWNLOAD_DELAY = 3  # 下载延迟

LOG_LEVEL = 'DEBUG'
# COOKIES_DEBUG = True  # 开启cookie的调试信息

ITEM_PIPELINES = {
    # 'jd_spider.pipelines.PrintPipeline_comment': 300, # 抓取评论信息时，使用该通道
    'jd_spider.pipelines.PrintPipeline': 300,  # 抓取商品信息时，使用该通道
}

# 链接长度最大值
# URLLENGTH_LIMIT = 5000