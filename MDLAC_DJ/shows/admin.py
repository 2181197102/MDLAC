from django.contrib import admin
from .models import JdGood, JdComment, JdDetail


class CommentInline(admin.TabularInline):
    model = JdComment
    extra = 1


class DetailIline(admin.TabularInline):
    model = JdDetail
    extra = 1


class JdGoodAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["acid"]}),
        ("商品信息",
         {"fields": ["name", "price", "detail_link", "image_link", "comment_count", "shop", "shop_link"]}),
    ]
    inlines = [CommentInline, DetailIline]
    list_display = ["acid", "name", "price", "comment_count", "shop"]
    search_fields = ["acid", "name", "price", "shop"]


admin.site.register(JdGood, JdGoodAdmin)


class JdDetailAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["goods"]}),
        ("Date information",
         {"fields": ["brand", "control_method", "energy_efficiency", "inverter_or_not", "other_parameters",
                     "applicable_area", "inner_machine_dimensions", "outer_machine_dimensions", "cooling_power",
                     "heating_power", "max_noise", "comfort_performance_energy_efficiency_ratio"]}),
    ]
    list_display = ["brand", "energy_efficiency", "applicable_area", "inner_machine_dimensions",
                    "outer_machine_dimensions", "comfort_performance_energy_efficiency_ratio"]
    search_fields = ["goods", "brand", "control_method", "energy_efficiency", "inverter_or_not", "other_parameters",
                     "applicable_area", "inner_machine_dimensions", "outer_machine_dimensions", "cooling_power",
                     "heating_power", "max_noise", "comfort_performance_energy_efficiency_ratio"]
    list_filter = ["energy_efficiency", "inverter_or_not"]


admin.site.register(JdDetail, JdDetailAdmin)


class JdCommentAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["good_ref"]}),
        ("Date information",
         {"fields": ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id", "score1",
                     "score", "comment_tags", "reply_count", "content"]}),
    ]
    list_display = ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id"]
    search_fields = ["good_id", "good_name", "user_id", "user_province", "user_name", "date", "user_level_id"]
    list_filter = ["user_province", "date", "user_level_id"]


admin.site.register(JdComment, JdCommentAdmin)
