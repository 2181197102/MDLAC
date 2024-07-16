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
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        sex = request.POST.get('sex')
        nickname = request.POST.get('nickname')
        security_question1 = request.POST.get('security_question1')
        security_question2 = request.POST.get('security_question2')
        security_question3 = request.POST.get('security_question3')
        security_answer1 = request.POST.get('security_answer1')
        security_answer2 = request.POST.get('security_answer2')
        security_answer3 = request.POST.get('security_answer3')
        role_ID = '101'
        try:
            User.objects.create(
                username=username,
                password=password,  # 注意：密码应该经过适当的哈希处理，不应以明文形式存储
                email=email,
                phone=phone,
                sex=sex,
                nickname=nickname,
                security_question1=security_question1,
                security_question2=security_question2,
                security_question3=security_question3,
                security_answer1=security_answer1,
                security_answer2=security_answer2,
                security_answer3=security_answer3,
                role_ID=role_ID,
            )
            print("insert成功了")
            return redirect('login')
        except Exception as e:
            context = {'error_message': '注册失败'}
            return render(request, 'login/pages-register.html', context)

    # 处理 GET 请求或其他请求情况，返回登录页面
    return render(request, 'login/pages-register.html')

def recoverpw(request):
    print("Rendering recover password page")
    return render(request, 'login/pages-recoverpw.html')

def logout_view(request):  # 避免与内置logout函数重名
    logout(request)  # 使用Django内置的logout函数
    print("User logged out successfully")
    return redirect('login')