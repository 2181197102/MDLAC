from django.shortcuts import render, redirect


# Create your views here.
def index(request):
    pass
    return render(request, 'index/index.html')


def login(request):
    pass
    return render(request, 'login/pages-login.html')


def register(request):
    pass
    return render(request, 'login/pages-register.html')

def recoverpw(request):
    pass
    return render(request, 'login/pages-recoverpw.html')


def logout(request):
    pass
    return redirect('/index/')
