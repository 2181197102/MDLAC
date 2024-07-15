from django.db import connection
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


# 测试数据库
# http://127.0.0.1:8000/jdapp/test-db/
def test_db_connection(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            row = cursor.fetchone()
        return HttpResponse(f"Database connection successful: {row}")
    except Exception as e:
        return HttpResponse(f"Database connection failed: {e}")