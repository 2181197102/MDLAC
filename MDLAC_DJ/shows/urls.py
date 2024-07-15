from django.urls import path
from .views import *

from . import views

app_name = "shows"
urlpatterns = [
    # http://127.0.0.1:8000/shows/jdgoods/
    path("jdgoods/", jdgood_list, name='jdgood_list'),
    # http://127.0.0.1:8000/shows/get_data/
    path("get_data/", get_data, name='get_data'),
    path("/", get_data, name='get_data'),

]