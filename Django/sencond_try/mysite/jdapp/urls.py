from django.urls import path

from .views import *

urlpatterns = [
    path('test-db/', test_db_connection),
]