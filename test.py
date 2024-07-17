import os
import re


def replace_href_in_files(directory):
    # 定义正则表达式模式

    # 遍历指定目录下的所有文件
    for root, _, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)

            # 只处理以 .html 结尾的文件
            if file_path.endswith('.html'):
                try:
                    # 打开文件并读取内容
                    with open(file_path, 'r', encoding='utf-8') as file:
                        file_content = file.read()

                    # 使用正则表达式进行替换
                    new_content = re.sub('shows:pages_login', 'login', file_content)
                    new_content = re.sub('shows:pages_register', 'register', new_content)
                    # 将替换后的内容写回文件
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.write(new_content)

                    print('#')

                except Exception as e:
                    print(f"处理文件 '{file_path}' 时出现错误：{str(e)}")


if __name__ == "__main__":
    # 指定要处理的目录路径（注意使用原始字符串或双斜杠）
    target_directory = r"D:\桌面\MDLAC-master\MDLAC\MDLAC_DJ\shows\templates\shows\vertical"

    # 调用函数进行替换操作
    replace_href_in_files(target_directory)
