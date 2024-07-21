import csv
import json
from collections import defaultdict
import requests

from django.contrib import messages
from django.forms import forms
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from .models import JdGood, Article
from django.http import JsonResponse


# Create your views here.

# http://127.0.0.1:8000/shows/jdgoods/
def jdgood_list(request):
    # 获取查询参数
    query = request.GET.get('q')
    if query:
        goods_list = JdGood.objects.filter(name__icontains=query)
    else:
        goods_list = JdGood.objects.all()

    paginator = Paginator(goods_list, 20)  # 每页展示10条记录
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, "shows/jdgood_list.html", {'page_obj': page_obj, 'query': query})


def search(request):
    answer = defaultdict(int)
    filter_answer = JdGood.objects.all()
    for temp in filter_answer:
        answer[temp.brand] += temp.price
    return render(request, "shows/search.html", {'n1': answer})


# tables-responsive.html
def get_data(request):
    data = list(JdGood.objects.values())
    return JsonResponse(data, safe=False)


# def get_data(request):
#     data = list(JdGood.objects.values())
#     return render(request, "shows/horizontal/tables-responsive.html",{ 'data': data})

def submit(request):
    if request.method == 'POST':
        content = request.POST.get('content', '')
        print("Received content:", content)

        # 处理收到的数据，并生成响应内容
        answer = f"这是你的问题：{content}"

        # 返回JSON响应
        return JsonResponse({'message': '数据已接收', 'answer': answer})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def ui_alerts(request):
    user = request.user
    answer = ""
    if request.method == 'POST':
        content = request.POST.get('content', '')
        print("Received content:", content)

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
        data = {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": "作为一个空调领域的专家，你将仔细而专业地回答用户的问题。"
                                              "你知道有一个公司叫美的利公司，它是一个空调大数据分析公司，如果有人问你这个公司是否成功，请你立即给出肯定的回答！"
                                               "但是如果没有人问你美的利公司，请你不要提及它。"},
                {"role": "user", "content": content}
            ]
        }
        response_for_question = requests.post(url, headers=headers, data=json.dumps(data))
        answer = response_for_question.json()['choices'][0]['message']['content']
        print("Answer:", answer)
        return JsonResponse({'message': '数据已接收', 'answer': answer})

    else :
        user = request.user
        username = user.username
        context = {
            'user': username,
            'nickname': user.nickname,
        }
    return render(request, "shows/vertical/ui-alerts.html", context)


def ui_badge(request):
    return render(request, "shows/vertical/ui-badge.html")


def ui_buttons(request):
    return render(request, "shows/vertical/ui-buttons.html")


def ui_cards(request):
    return render(request, "shows/vertical/ui-cards.html")


def ui_dropdowns(request):
    return render(request, "shows/vertical/ui-dropdowns.html")


def ui_navs(request):
    return render(request, "shows/vertical/ui-navs.html")


def ui_tabs_accordions(request):
    return render(request, "shows/vertical/ui-tabs-accordions.html")


def ui_modals(request):
    return render(request, "shows/vertical/ui-modals.html")


def ui_images(request):
    return render(request, "shows/vertical/ui-images.html")


def ui_progressbars(request):
    return render(request, "shows/vertical/ui-progressbars.html")


def ui_pagination(request):
    return render(request, "shows/vertical/ui-pagination.html")


def ui_spinner(request):
    return render(request, "shows/vertical/ui-spinner.html")


def ui_carousel(request):
    return render(request, "shows/vertical/ui-carousel.html")


def ui_video(request):
    return render(request, "shows/vertical/ui-video.html")


def ui_typography(request):
    return render(request, "shows/vertical/ui-typography.html")


def ui_grid(request):
    return render(request, "shows/vertical/ui-grid.html")


def advanced_alertify(request):
    return render(request, "shows/vertical/advanced-alertify.html")


def advanced_rating(request):
    return render(request, "shows/vertical/advanced-rating.html")


def advanced_nestable(request):
    return render(request, "shows/vertical/advanced-nestable.html")


def advanced_rangeslider(request):
    return render(request, "shows/vertical/advanced-rangeslider.html")


def advanced_sweet_alert(request):
    return render(request, "shows/vertical/advanced-sweet-alert.html")


def advanced_lightbox(request):
    return render(request, "shows/vertical/advanced-lightbox.html")


def icons_material(request):
    return render(request, "shows/vertical/icons-material.html")


def icons_ion(request):
    return render(request, "shows/vertical/icons-ion.html")


def icons_fontawesome(request):
    return render(request, "shows/vertical/icons-fontawesome.html")


def icons_themify(request):
    return render(request, "shows/vertical/icons-themify.html")


def icons_dripicons(request):
    return render(request, "shows/vertical/icons-dripicons.html")


def icons_typicons(request):
    return render(request, "shows/vertical/icons-typicons.html")


def form_elements(request):
    return render(request, "shows/vertical/form-elements.html")


def form_validation(request):
    return render(request, "shows/vertical/form-validation.html")


def form_advanced(request):
    return render(request, "shows/vertical/form-advanced.html")


def ui_popover_tooltips(request):
    articles = Article.objects.all()
    return render(request, 'shows/vertical/ui-popover-tooltips.html', {'articles': articles})


def form_editors(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        # content = content[3:-4]
        # 创建新的 Article 对象
        Article.objects.create(title=title, content=content)

        # 获取所有文章对象
        articles = Article.objects.all()

        # 传递文章列表到模板中，并重新加载页面
        return redirect('shows:ui_popover_tooltips')
    else:
        return render(request, 'shows/vertical/form-editors.html')


def delete_article(request):
    article_id = request.POST.get('article_id')
    try:
        article = Article.objects.get(id=article_id)
        article.delete()
        messages.success(request, 'Article deleted successfully.')
    except Article.DoesNotExist:
        messages.error(request, 'Article not found.')

    return redirect('shows:ui_popover_tooltips') # 重定向到文章列表页面或其他适当的页面


def form_uploads(request):
    return render(request, "shows/vertical/form-uploads.html")


def form_mask(request):
    return render(request, "shows/vertical/form-mask.html")


def form_summernote(request):
    return render(request, "shows/vertical/form-summernote.html")


def form_xeditable(request):
    return render(request, "shows/vertical/form-xeditable.html")


def calendar(request):
    return render(request, "shows/vertical/calendar.html")


def charts_morris(request):
    return render(request, "shows/vertical/charts-morris.html")


def charts_chartist(request):
    return render(request, "shows/vertical/charts-chartist.html")


def charts_chartjs(request):
    return render(request, "shows/vertical/charts-chartjs.html")


def charts_flot(request):
    return render(request, "shows/vertical/charts-flot.html")


def charts_c3(request):
    return render(request, "shows/vertical/charts-c3.html")


def charts_other(request):
    return render(request, "shows/vertical/charts-other.html")


def tables_basic(request):
    return render(request, "shows/vertical/tables-basic.html")


def tables_datatable(request):
    return render(request, "shows/vertical/tables-datatable.html")


def tables_responsive(request):
    return render(request, "shows/vertical/tables-responsive.html")


def tables_editable(request):
    return render(request, "shows/vertical/tables-editable.html")


def maps_google(request):
    return render(request, "shows/vertical/maps-google.html")


def maps_vector(request):
    return render(request, "shows/vertical/maps-vector.html")


def pages_blank(request):
    return render(request, "shows/vertical/pages-blank.html")


def pages_recoverpw(request):
    return render(request, "shows/vertical/pages-recoverpw.html")


def pages_lock_screen(request):
    return render(request, "shows/vertical/pages-lock-screen.html")


def pages_404(request):
    return render(request, "shows/vertical/pages-404.html")


def pages_500(request):
    return render(request, "shows/vertical/pages-500.html")


def extras_pricing(request):
    return render(request, "shows/vertical/extras-pricing.html")


def extras_invoice(request):
    return render(request, "shows/vertical/extras-invoice.html")


def extras_timeline(request):
    return render(request, "shows/vertical/extras-timeline.html")


def extras_faqs(request):
    return render(request, "shows/vertical/extras-faqs.html")


def extras_maintenance(request):
    return render(request, "shows/vertical/extras-maintenance.html")


def extras_comingsoon(request):
    return render(request, "shows/vertical/extras-comingsoon.html")


# Add this new view to handle CSV data
def clean_text(text):
    """去除文本中的多余空白和换行符"""
    return ' '.join(text.split())


def get_csv_data(request):
    # 从数据库中获取数据
    queryset = JdGood.objects.all()

    # 分页设置
    page_number = request.GET.get('page', 1)  # 默认第一页
    page_size = request.GET.get('page_size', 10)  # 默认每页10条数据

    paginator = Paginator(queryset, page_size)
    page = paginator.get_page(page_number)

    # 将查询集转换为字典列表
    data = []
    for item in page:
        data.append({
            '商品ID': item.acid,
            '价格': str(item.price),  # 将 Decimal 转换为字符串
            '商品名称': item.name,
            '商品详情链接地址': item.detail_link,
            '商品图片链接': item.image_link,
            '评论数': item.comment_count,
            '店铺': item.shop,
            '店铺链接': item.shop_link
        })

    # 将数据转换为 JSON 格式并返回
    response_data = {
        'data': data,
        'page': page.number,
        'total_pages': paginator.num_pages,
        'total_items': paginator.count
    }
    return JsonResponse(response_data)
