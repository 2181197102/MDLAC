"""
URL configuration for MDLAC_DJ project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

from login.views import index, login_view, register, logout_view, recoverpw, recoverpw_withsq, reset_password


urlpatterns = [
    path("admin/", admin.site.urls),
    path('shows/', include('shows.urls')),
    path('index/', include('index.urls')),
    path('index/', index, name='index'),
    path('login/', login_view, name='login'),
    path('register/', register, name='register'),
    path('logout/', logout_view, name='logout'),
    path('recoverpw/', recoverpw, name='recoverpw'),
    path('recoverpw_withsq/', recoverpw_withsq, name='recoverpw_withsq'),
    path('reset_password/', reset_password, name='reset_password'),
    path('', lambda request: redirect('login', permanent=False)),  # 访问 http://127.0.0.1:8000/ 时转到登录页面
]
