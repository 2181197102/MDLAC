import csv
from collections import defaultdict

from django.contrib import messages
from django.forms import forms
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from .models import JdGood, Article
from django.http import JsonResponse
from .forms import ArticleForm


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


def ui_alerts(request):
    return render(request, "shows/vertical/ui-alerts.html")


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
        content = content[3:-4]
        # 创建新的 Article 对象
        Article.objects.create(title=title, content=content)

        # 获取所有文章对象
        articles = Article.objects.all()

        # 传递文章列表到模板中，并重新加载页面
        return render(request, 'shows/vertical/ui-popover-tooltips.html', {'articles': articles})
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
