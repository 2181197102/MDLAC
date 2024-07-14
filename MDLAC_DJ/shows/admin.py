from django.contrib import admin
from .models import JdGood, JdComment

class CommentInline(admin.TabularInline):
    model = JdComment
    extra = 1

class JdGoodAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["acid"]}),
        ("Date information",
         {"fields": ["brand", "price", "level", "type", "cwtype", "comment_count_str", "average_score", "good_count_str", "good_rate"]}),
    ]
    inlines = [CommentInline]
    list_display = ["acid", "brand", "price", "level", "type", "cwtype", "average_score", "good_count_str", "good_rate"]
    search_fields = ["acid", "brand", "price", "level", "type", "cwtype"]
    list_filter = ["level", "type", "cwtype",  "average_score", "good_rate"]

admin.site.register(JdGood, JdGoodAdmin)

class JdCommentAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["good_ref"]}),
        ("Date information",
         {"fields": ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id", "score1", "score", "comment_tags", "reply_count", "content"]}),
    ]
    list_display = ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id"]
    search_fields = ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id"]
    list_filter = ["user_province", "date", "user_level_id"]

admin.site.register(JdComment,JdCommentAdmin)
