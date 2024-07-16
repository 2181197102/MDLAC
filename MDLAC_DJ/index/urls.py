from django.urls import path
from .views import *


app_name = "index"
urlpatterns = [
    # http://127.0.0.1:8000/shows/...
    path("profile/", profile, name='profile'),
    # path('reset_password/', reset_password, name='reset_password'),
]