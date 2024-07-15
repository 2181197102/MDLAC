import requests
import json
import pandas as pd
import os
def test_gpt_api(api_key):
    # 定义中转服务的base_url
    base_url = "https://api.baicaigpt.com/v1"  # 替换为你的中转服务URL

    # 定义请求的URL和头部信息
    url = f"{base_url}/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # 定义请求的内容
    data = {
        "model": "gpt-3.5-turbo",  # 使用适当的模型名称
        "messages": [
            {"role": "system", "content": "作为一个空调领域的专家，您将获得全面的知识和支持，包括数据分析、性价比对比和行业相关的科普知识。无论是选择家用空调、了解最新的空调技术，还是比较不同品牌和型号的性价比，我都可以为您提供专业的建议和详细的分析。此外，我还能为您解答有关空调工作原理、维护保养、节能技巧等方面的问题，帮助您做出明智的选择，提升生活质量。"},
            {"role": "user", "content": "你好"},
        ]
    }

    try:
        # 发送POST请求
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()  # 如果发生HTTP错误，则抛出异常
        # 打印返回的响应
        print(response.json())
        # 直接将json文件加载成csv文件
        json_data = response.json()
        # 文件夹路径
        folder_path = r"response_json"

        # 确保文件夹存在
        os.makedirs(folder_path, exist_ok=True)

        def get_next_file_path(folder_path, base_name, extension):
            # 获取文件夹中所有文件
            files = os.listdir(folder_path)
            # 筛选出符合 base_name 和 extension 的文件
            relevant_files = [f for f in files if f.startswith(base_name) and f.endswith(extension)]
            # 提取出文件名中的下标
            indices = []
            for f in relevant_files:
                try:
                    index = int(f[len(base_name):-len(extension)])
                    indices.append(index)
                except ValueError:
                    continue
            # 获取下一个下标
            next_index = max(indices, default=0) + 1
            # 生成下一个文件名
            next_file_name = f"{base_name}{next_index}{extension}"
            return os.path.join(folder_path, next_file_name)

        # 获取下一个文件路径
        file_path = get_next_file_path(folder_path, "gpt_data_", ".json")
        print(f"Saving JSON data to {file_path}...")
        # 将JSON数据保存到文件
        with open(file_path, "w", encoding='utf-8') as f:
            # 允许非ASCII字符；缩进为4个空格
            json.dump(json_data, f, ensure_ascii=False, indent=4)

    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":

    api_key = "bacai-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxODc3MzYxNTE1NyIsImV4cCI6MTcyNDEzMTAyNjczOSwiaWF0IjoxNzIxMDA4OTYyfQ.Rs8CGLe9Y2Cut67GPRtdGQAxO6_XBcKTboH_Q8dkd4w"

    # 测试API Key
    test_gpt_api(api_key)
