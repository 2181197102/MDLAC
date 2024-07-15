# -*- coding: utf-8 -*-
from urllib import request
from selenium import webdriver
import cv2
import random
import time
import pyautogui
import os
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By


def verify_operation():
    # 获取图片信息，返回最佳匹配位置
    def findPic(target="img1.jpg", template="img2.png"):
        # 读取图片
        target_rgb = cv2.imread(target)
        # 图片灰度化
        target_gray = cv2.cvtColor(target_rgb, cv2.COLOR_BGR2GRAY)
        # 读取模块图片
        template_rgb = cv2.imread(template, 0)
        # 匹配模块位置
        res = cv2.matchTemplate(target_gray, template_rgb, cv2.TM_CCOEFF_NORMED)
        # 获取最佳匹配位置
        value = cv2.minMaxLoc(res)
        # 返回最佳X坐标
        return value[2][0]


    # 打开chrom浏览器
    # 指定chromedriver的绝对路径
    driver_path = r"D:\\chromedriver-win64\\chromedriver.exe"
    # 设置Chrome驱动程序服务
    service = Service(driver_path)

    options = webdriver.ChromeOptions()
    # options.add_argument('--ignore-certificate-errors')  # 忽略SSL证书错误
    # options.add_argument('--ignore-ssl-errors') # 忽略证书错误
    # options.add_argument('--allow-insecure-localhost')  # 允许不安全的本地连接
    # options.add_argument("--disable-proxy-certificate-handler") # 禁用代理证书处理程序
    # options.add_argument("--disable-content-security-policy")  # 禁用内容安全策略
    profile_dir = r"C:\Users\LiuXiang\AppData\Local\Google\Chrome\User Data"

    options.add_argument("user-data-dir=" + os.path.abspath(profile_dir))
    options.add_argument('--headless')  # 使用无头浏览器模式
    # 初始化driver并设置 ChromeOptions
    driver = webdriver.Chrome(service=service, options=options)
    # 休眠1秒
    # time.sleep(5)
    # driver.get("http://www.baidu.com")
    driver.get("https://cfe.m.jd.com/privatedomain/risk_handler/03101900/?returnurl=https%3A%2F%2Fitem.jd.com%2F10095331321172.html&evtype=2")
    #driver.get("https://passport.jd.com/new/login.aspx")
    driver.find_element(By.XPATH, "//div[@class='verifyBtn']").click()
    # driver.find_element(By.XPATH, '//*[@id="loginname"]').send_keys('liu_xiang_09')
    # driver.find_element(By.XPATH, '//*[@id="nloginpwd"]').send_keys('liuxiang0919')
    # driver.find_element(By.XPATH, '//*[@id="loginsubmit"]').click()
    print(driver.title)
    # while True:
    #     try:
    #         # 从网页上获取组件
    #         target = driver.find_element_by_xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div[1]/img')
    #         template = driver.find_element_by_xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div[2]/img')
    #         # 获取模块的url路径
    #         src1 = target.get_attribute("src")
    #         src2 = template.get_attribute("src")
    #         # 下载图片
    #         request.urlretrieve(src1,"img1.jpg")
    #         request.urlretrieve(src2,"img2.png")
    #         x = findPic()
    #         w1 = cv2.imread('img1.jpg').shape[1]
    #         w2 = target.size['width']
    #         x = x / w1 * w2
    #         # 按钮坐标
    #         offset_x,offset_y = 875,466
    #         # pyautogui库操作鼠标指针
    #         pyautogui.moveTo(offset_x,offset_y,duration=0.1 + random.uniform(0,0.1 + random.randint(1,100) / 100))
    #         pyautogui.mouseDown()
    #         offset_y += random.randint(9,19)
    #         pyautogui.moveTo(offset_x + int(x * random.randint(15,25) / 20),offset_y,duration=0.28)
    #         offset_y += random.randint(-9,0)
    #         pyautogui.moveTo(offset_x + int(x * random.randint(17,23) / 20),offset_y,
    #                          duration=random.randint(20,31) / 100)
    #         offset_y += random.randint(0,8)
    #         pyautogui.moveTo(offset_x + int(x * random.randint(19,21) / 20),offset_y,
    #                          duration=random.randint(20,40) / 100)
    #         offset_y += random.randint(-3,3)
    #         pyautogui.moveTo(x + offset_x + random.randint(-3,3),offset_y,duration=0.5 + random.randint(-10,10) / 100)
    #         offset_y += random.randint(-2,2)
    #         pyautogui.moveTo(x + offset_x + random.randint(-2,2),offset_y,duration=0.5 + random.randint(-3,3) / 100)
    #         pyautogui.mouseUp()
    #         time.sleep(1)
    #         result = driver.find_element_by_xpath('/html/body/div[2]/div[2]/div[1]/div/div[4]/div[2]/div').text
    #         if '不匹配' in result:
    #             print("账户名密码不匹配!", result)
    #             break
    #     except:
    #         print("异常!")
    #         break
    driver.close()
    # input()
if __name__ == '__main__':
    verify_operation()