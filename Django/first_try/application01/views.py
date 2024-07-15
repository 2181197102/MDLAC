from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse(r"Hey man, U can do it!")

def Olsen(request):
    return HttpResponse(r"I love Olsen!!!")

def user(request):
    return HttpResponse(r"User")

def Clarknb(request):
    return render(request, "Clarknb.html")