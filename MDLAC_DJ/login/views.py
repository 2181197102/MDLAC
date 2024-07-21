from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import User, Role

from django.contrib import messages
from .models import User
from shows.models import JdGood
from shows.models import JdDetail

def index(request):
    print("Rendering index page")
    user = request.user
    if request.method == 'GET':
        user.username = user.username
        print(user.username)

    # brands = JdDetail.objects.values_list('brand', flat=True).distinct()
    # print(len(brands))
    # # 提取品牌列的所有内容
    # brands = [str(brand) for brand in JdDetail.objects.values_list('brand', flat=True)]
    # 初始化一个字典来统计品牌数量
    # brand_counts = {}
    # print(brands)
    # 统计每个品牌的数量
    # for brand in brands:
    #     # 检查品牌是否在字典中
    #     if brand in brand_counts:
    #         brand_counts[brand] += 1
    #     else:
    #         brand_counts[brand] = 1
    # 打印每个品牌和其出现的次数
    # for brand, count in brand_counts.items():
    #     print(f"{brand}: {count}")
    # 根据品牌数量排序
    # sorted_brand_counts = sorted(brand_counts.items(), key=lambda x: x[1], reverse=True)
    # print(sorted_brand_counts)

    context = {
        'username': user.username,
        'nickname': user.nickname,
        'role_ID': user.role_ID
    }
    return render(request, 'index/index.html', context)


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
        try:
            user = User(
                username=username,
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
                role_ID=Role()
            )
            user.set_password(password)  # 使用set_password方法对密码进行哈希处理
            user.save()
            print("insert成功了")
            return redirect('login')
        except Exception as e:
            print(e)
            context = {'error_message': '注册失败'}
            return render(request, 'login/pages-register.html', context)

    # 处理 GET 请求或其他请求情况，返回登录页面
    return render(request, 'login/pages-register.html')

    # 处理 GET 请求或其他请求情况，返回登录页面
    return render(request, 'login/pages-register.html')


def recoverpw(request):
    if request.method == 'POST':
        email = request.POST.get('email')

        try:
            user = User.objects.get(email=email)
            print(
                f'User found: {user.email}, {user.security_question1}, {user.security_question2}, {user.security_question3}, {user.username}')
            return render(request, 'login/pages-recoverpw-withsq.html',
                          {'Email': user.email, 'security_question1': user.security_question1,
                           'security_question2': user.security_question2,
                           'security_question3': user.security_question3,
                           'username': user.username, })

        except User.DoesNotExist:
            messages.error(request, '未找到该邮箱对应的用户，请重试')
            return render(request, 'login/pages-recoverpw.html')

    return render(request, 'login/pages-recoverpw.html')


def recoverpw_withsq(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        answer1 = request.POST.get('answer1')
        answer2 = request.POST.get('answer2')
        answer3 = request.POST.get('answer3')
        print(f'User input: {email}, {answer1}, {answer2}, {answer3}')

        try:
            user = User.objects.get(email=email)
            if (user.security_answer1 == answer1 and
                    user.security_answer2 == answer2 and
                    user.security_answer3 == answer3):
                # 验证成功
                messages.success(request, '验证成功，请重置你的密码')
                request.session['reset_user_id'] = user.id  # Store user id in session
                return redirect('reset_password')
            else:
                # 验证失败
                messages.error(request, '密保问题答案错误，请重试')
                return render(request, 'login/pages-recoverpw-withsq.html', {'Email': user.email,
                                                                             'security_question1': user.security_question1,
                                                                             'security_question2': user.security_question2,
                                                                             'security_question3': user.security_question3,
                                                                             'username': user.username}, )

        except User.DoesNotExist:
            messages.error(request, '未找到该邮箱对应的用户，请重试')
            return render(request, 'login/pages-recoverpw.html')

    return render(request, 'login/pages-recoverpw.html')


def reset_password(request):
    if request.method == 'POST':
        new_password = request.POST.get('new_password')
        user_id = request.session.get('reset_user_id')

        if user_id:
            try:
                user = User.objects.get(id=user_id)
                user.set_password(new_password)
                user.save()
                messages.success(request, '密码重置成功，请使用新密码登录')
                return redirect('login')
            except User.DoesNotExist:
                messages.error(request, '用户不存在，请重试')
        else:
            messages.error(request, '无效的会话，请重试')

    return render(request, 'login/pages-resetpw.html')


def logout_view(request):  # 避免与内置logout函数重名
    logout(request)  # 使用Django内置的logout函数
    print("User logged out successfully")
    return redirect('login')
