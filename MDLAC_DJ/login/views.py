from django.shortcuts import render, redirect
from django.contrib.auth.hashers import check_password
from .models import User


def index(request):
    print("Rendering index page")
    return render(request, 'index/index.html')


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        print(f"Received POST request with username: {username}")

        user = authenticate(username, password)

        if user is not None:
            print(f"Authentication successful for username: {username}")
            request.session['user_id'] = user.id
            request.session['username'] = user.username
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


def logout(request):
    try:
        del request.session['user_id']
        del request.session['username']
        print("User logged out successfully")
    except KeyError:
        print("No user was logged in")
    return redirect('index')


# 加密算法验证
# def authenticate(username, password):
#     print(f"Authenticating user: {username}")
#     try:
#         user = User.objects.get(username=username)
#         print(f"User found: {user.username}")
#         if check_password(password, user.password):
#             print(f"Password check passed for user: {username}")
#             return user
#         else:
#             print(f"Password check failed for user: {username}")
#     except User.DoesNotExist:
#         print(f"User not found: {username}")
#     return None

# 明文密码验证
def authenticate(username, password):
    print(f"Authenticating user: {username}")
    try:
        user = User.objects.get(username=username)
        print(f"User found: {user.username}")
        if password == user.password:
            print(f"Password check passed for user: {username}")
            return user
        else:
            print(f"Password check failed for user: {username}")
    except User.DoesNotExist:
        print(f"User not found: {username}")
    return None
