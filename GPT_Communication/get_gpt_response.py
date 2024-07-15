import openai
import os
import requests
import json
import pandas as pd
import os


# 发送初始请求并获取问题
def get_initial_questions(url, headers):
    # 设置初始请求数据
    initial_data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": "作为一个空调领域的专家，您将获得全面的知识和支持，包括数据分析、性价比对比和行业相关的科普知识。"
                                          "无论是选择家用空调、了解最新的空调技术，还是比较不同品牌和型号的性价比，我都可以为您提供专业的建议和"
                                          "详细的分析。此外，我还能为您解答有关空调工作原理、维护保养、节能技巧等方面的问题，帮助您做出明智的"
                                          "选择，提升生活质量。"},
            {"role": "user", "content": "请给我50条关于空调的咨询问题。包括空调的安装、维修、品牌对比，各项性能等等问题。请务必确保有五十条"
                                        "问题，并且这些问题尽可能地覆盖有关空调的方方面面。请注意，每个问题应该单独一行。用换行符分隔。"}

        ]
    }
    # 发送POST请求
    response = requests.post(url, headers=headers, data=json.dumps(initial_data))
    questions = response.json()['choices'][0]['message']['content']
    return questions

# 使用问题生成多次请求的响应
def get_responses(url, headers, questions):
    responses = []
    for i, question in enumerate(questions.split('\n')):
        print(f"正在处理问题：{question}")
        # 将问题写入到文本文件
        with open("response_json/questions.txt", "a", encoding='utf-8') as f:
            f.write(f"{question}\n")
        data = {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": "作为一个空调领域的专家，我将回答您的问题。"},
                {"role": "user", "content": question}
            ]
        }
        response_for_question = requests.post(url, headers=headers, data=json.dumps(data))
        responses.append(response_for_question)
    return responses
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


if __name__ == "__main__":
    # 设置 API 密钥
    api_key = "bacai-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxODc3MzYxNTE1NyIsImV4cCI6MTcyNDEzMTAyNjczOSwiaWF0IjoxNzIxMDA4OTYyfQ.Rs8CGLe9Y2Cut67GPRtdGQAxO6_XBcKTboH_Q8dkd4w"
    # 定义中转服务的base_url
    base_url = "https://api.baicaigpt.com/v1"  # 替换为你的中转服务URL
    # 定义请求的URL和头部信息
    url = f"{base_url}/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # 获取初始问题
    questions = get_initial_questions(url, headers)
    print("初始问题：", questions)
    # 获取多次请求的响应
    responses = get_responses(url, headers, questions)
    for response in responses:
        json_data = response.json()
        # 文件夹路径
        folder_path = r"response_json"
        # 确保文件夹存在
        os.makedirs(folder_path, exist_ok=True)
        # 获取下一个文件路径
        file_path = get_next_file_path(folder_path, "gpt_answer_", ".json")
        print(f"Saving answer data to {file_path}...")
        # 将JSON数据保存到文件
        with open(file_path, "w", encoding='utf-8') as f:
            # 允许非ASCII字符；缩进为4个空格
            json.dump(json_data, f, ensure_ascii=False, indent=4)

