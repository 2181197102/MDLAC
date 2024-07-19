from django.contrib import admin
from .models import JdGood, JdComment

class CommentInline(admin.TabularInline):
    model = JdComment
    extra = 1


class JdGoodAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["acid"]}),
        ("商品信息",
         {"fields": ["name", "price", "detail_link", "image_link", "comment_count", "shop", "shop_link"]}),
    ]
    inlines = [CommentInline]
    list_display = ["acid", "name", "price", "comment_count", "shop"]
    search_fields = ["acid", "name", "price", "shop"]
    list_filter = ["price", "comment_count", "shop"]


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
