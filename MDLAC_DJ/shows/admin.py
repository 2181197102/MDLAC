from django.contrib import admin
from .models import JdGood


# Register your models here.
class JdGoodAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["acid"]}),
        ("Date information",
         {"fields": ["brand", "price", "level", "type", "cwtype", "comment_count_str", "average_score", "good_count_str", "good_rate"]}),
    ]
    list_display = ["acid", "brand", "price", "level", "type", "cwtype", "average_score", "good_count_str", "good_rate"]
    search_fields = ["acid", "brand", "price", "level", "type", "cwtype"]
    list_filter = ["level", "type", "cwtype",  "average_score", "good_rate"]


admin.site.register(JdGood, JdGoodAdmin)
