from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import User

def index(request):
    print("Rendering index page")
    return render(request, 'index/index.html')

def login_view(request):  # 避免与内置login函数重名
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        print(f"Received POST request with username: {username}")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            print(f"Authentication successful for username: {username}")
            login(request, user)  # 使用Django内置的login函数
            return redirect('index')
        else:
            print(f"Authentication failed for username: {username}")
            context = {'error_message': '用户名或密码错误'}
            return render(request, 'login/pages-login.html', context)
    print("Rendering login page")
    return render(request, 'login/pages-login.html')

def register(request):
    print("Rendering register page")
    return render(request, 'login/pages-register.html')

def recoverpw(request):
    print("Rendering recover password page")
    return render(request, 'login/pages-recoverpw.html')

def logout_view(request):  # 避免与内置logout函数重名
    logout(request)  # 使用Django内置的logout函数
    print("User logged out successfully")
    return redirect('login')
