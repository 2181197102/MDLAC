from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from login.models import User as CustomUser
from django.contrib.auth.models import User

# Create your views here.

'''
@login_required 修饰器
用于确保只有已登录的用户才能访问某些视图。
如果一个用户没有登录，尝试访问被 login_required 装饰的视图时，会自动重定向到登录页面。
'''


@login_required
def profile(request):
    user = request.user
    context = {
        'username': user.username,
        'nickname': user.nickname,
        'email': user.email,
        'phone': user.phone,
        'sex': user.sex,
        'role_name': user.role_ID.role_Name if user.role_ID else 'N/A',
        'date_joined': user.date_joined,
    }
    return render(request, 'index/form-profile.html', context)
