from django.urls import path
from .views import *

from . import views

app_name = "shows"
urlpatterns = [
    path("jdgoods/", jdgood_list, name='jdgood_list'),
]