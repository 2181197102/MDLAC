from collections import defaultdict

from django.shortcuts import render
from django.core.paginator import Paginator
from .models import JdGood
from django.http import JsonResponse

# Create your views here.

# http://127.0.0.1:8000/shows/jdgoods/
def jdgood_list(request):
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
    answer =defaultdict(int)
    filter_answer = JdGood.objects.all()
    for temp in filter_answer:
        answer[temp.brand] += temp.price
    return render(request, "shows/search.html",{'n1':answer})


# tables-responsive.html
# def get_data(request):
#     data = list(JdGood.objects.values())
#     return JsonResponse(data, safe=False)


def get_data(request):
    data = list(JdGood.objects.values())
    return render(request, "shows/horizontal/tables-responsive.html",{ 'data': data})
