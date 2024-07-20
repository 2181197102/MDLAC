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
   'cookie': 'cud=f0f713fcba73a5ba342febc6312c13e9; shshshfpa=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; shshshfpx=6e85e595-0bef-6ddd-9c7d-8c57e637a665-1720079786; user-key=4f5cb687-3372-4ce0-a5cc-86816ec6bb0b; areaId=22; ipLoc-djd=22-1930-50948-71603; unpl=JF8EALRnNSttDx5QBRMDTBBFHl9RW1RcHB8COjIMVFgNQl1XElVIRRV7XlVdWBRKER9vYBRVXVNPUw4fAisSEXteU11bD00VB2xXXAQDGhUQR09SWEBJJVhUVl4ATx4LaW4EZG1bS2QFGjIbFBNKXFJWWwFIHgNqZwZVVFxOVwQeAisTIExtZG5eCU8fA29XBGRcaAkAWR0DGxsRSxBUWF4JShELaW4GXV1dS1cEEgYeERFOXWRfbQs; __jdv=76161171|haosou-search|t_262767352_haosousearch|cpc|41929589780_0_fd5190f3dd3448ef90dd814d88c8fbf4|1721066211579; PCSYCityID=CN_510000_510100_0; mt_xid=V2_52007VwMUUVxZVFIZQBpVBWIDEVNUXFdZHkwZbFJhBBtQCgtWRkwcHwsZYlQUWkEIUg4cVRFeB29UFVdeX1dTHnkaXQZiHxNUQVhVSx9NElgBbAMTYl9oUmocTxxdBGcGF1ZeWmJaGU0d; __jdu=17200797828141208542041; mba_muid=17200797828141208542041; RT="z=1&dm=jd.com&si=jhukl3wi0y&ss=lypqthmc&sl=1&tt=0&obo=1&ld=7rox2&r=7344175f6c7435c978ca27a08da0d366&ul=7rox5&hd=7royu"; x-rp-evtoken=N-nAb5Oj6OS1u8hkvixIgDI_6Z7HqmsY5DZjp2F0V_0lQm1D3hTxKCg-X--rahl0BznIgor0jQxE-nWgKZn16DyD4q6RcTU3pTsVoZErsEJGFeuvESFF-hLbJ6Yh0TjvhE5-T-b8zmrsGEUda1f_YaPnj5y-k9rBmlcG0vTJSJvV56z-ndYU2uPneYznRPPFk1VUe_ArChwOoR0I0_S-V-ddkUgcRbrkTInSAGvl0uM%3D; 3AB9D23F7A4B3CSS=jdd03ZTXX3WYEKBJ4HAVY47CU45L434JUPHNN6FK7TM22KYW6DZ7UK4S4GAY2S7W7NF2IRPBEOLWI4TBSFKMJUHT7B7PYDQAAAAMQYID5RDYAAAAACWYKMCAGIS2PLEX; _gia_d=1; jsavif=1; cvt=11; mba_sid=17212422133145178329086583315.1; 3AB9D23F7A4B3C9B=ZTXX3WYEKBJ4HAVY47CU45L434JUPHNN6FK7TM22KYW6DZ7UK4S4GAY2S7W7NF2IRPBEOLWI4TBSFKMJUHT7B7PYDQ; TrackID=1115sOP6DME44no8huuOvS7B_PU8Qqq91ZjFab5zbuv9T3b2rbqBVFobQcn3ouu5AGy81AV1K0zibh0rg1DKncbAVdqseM-7QfB4imqaEaMYG_DQ7NuCU8flPJa7bpOFM; thor=2DD516A9C2C65C87B8658311FCDA0EF00763ED4CBB3C286EC378281047CF5C6F9AC89889ED53E16843628473828DDE8A525CAE2F7086170412FAF6ED4A2CC97E5EC46F8B523C2D762DED910B6FB7C9826CCA433FCFA56A929B64B86149F4D6386BC7105874B36C9886EA71F9ADDBC469A79F97466192C2678A2FDE976001149BBC1D70944440DC087E4D3D51FCA12EBE; pinId=s1cWrPsRB3o1Q35KEnxCLQ; pin=liu_xiang_09; unick=qt301kg93rpphq; ceshi3.com=000; _tp=jYiMwaMnIdCH98GNPfF2UA%3D%3D; _pst=liu_xiang_09; token=e0f54853d05fc9002bf84bdbfccc28f5,3,956245; __tk=292334d8cfe226f71d19f2b41c763d96,3,956245; __jda=181111935.17200797828141208542041.1720079783.1721228654.1721242212.11; __jdc=181111935; shshshfpb=BApXc8z8AwfVAc0uF-aiDaS605SBd8Re_BmJGkKls9xJ1Mg9um4C2; __jdb=181111935.6.17200797828141208542041|11.1721242212; csn=5; flash=2_iysXrcrOWFjVemumPrxL6gXhDSmgPbAHcokq6qyrxpQ3uiFP_GgGJQieY8K0GjSrYSLQhNGYbvaJRHzD6I2bRof1V47taZUGWE-sr1TXt0r9pt79UsddgeWkmxnoseyu_iSupuOpDC0u7wHmJUKAkCXm7_zxDWCPlTRh0F09DFK*'
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
    'jd_spider.pipelines.PrintPipeline_comment': 300, # 抓取评论信息时，使用该通道
    # 'jd_spider.pipelines.PrintPipeline': 300,  # 抓取商品信息时，使用该通道
}

# 链接长度最大值
# URLLENGTH_LIMIT = 5000