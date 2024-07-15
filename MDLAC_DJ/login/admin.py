from django.contrib import admin
from .models import User, Role


# Register your models here.

class UserInline(admin.TabularInline):
    model = User
    extra = 3


class RoleAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["role_ID"]}),
        ("Date information",
         {"fields": ["role_Name"]}),
    ]
    inlines = [UserInline]
    list_display = ["role_ID", "role_Name"]
    search_fields = ["role_ID", "role_Name"]


admin.site.register(Role, RoleAdmin)


class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["username"]}),
        ("Date information",
         {"fields": ["password", "nickname", "email", "phone", "sex", "role_ID"]})
    ]
    list_display = ["username", "password", "nickname", "email", "phone", "sex", "role_ID", "c_time"]
    search_fields = ["username", "nickname", "email", "phone", "sex", "role_ID", "c_time"]
    list_filter = ["sex", "role_ID", "c_time"]


admin.site.register(User, UserAdmin)