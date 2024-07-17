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
         {"fields": ["password", "nickname", "email", "phone", "sex", "role_ID", "security_question1",
                     "security_answer1", "security_question2", "security_answer2", "security_question3",
                     "security_answer3"]})
    ]
    list_display = ["username", "nickname", "email", "phone", "sex", "role_ID", "date_joined",]
    search_fields = ["username", "nickname", "email", "phone", "sex", "role_ID", "date_joined", "security_question1",
                     "security_question2", "security_question3"]
    list_filter = ["sex", "role_ID", "date_joined"]


admin.site.register(User, UserAdmin)
