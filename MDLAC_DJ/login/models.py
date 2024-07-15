from django.db import models


# Create your models here.


class Role(models.Model):
    """角色表"""
    '''
    101 normal
    102 vip
    '''
    role_ID = models.CharField(max_length=3, primary_key=True)  # 设置为主键
    role_Name = models.CharField(max_length=128, default="normal")

    class Meta:
        verbose_name = 'Role'
        verbose_name_plural = 'Role'

    def __str__(self):
        return f"{self.role_ID} - {self.role_Name}"


class User(models.Model):
    """用户表"""

    gender = (
        ('male', '男'),
        ('female', '女'),
    )

    username = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=256)
    nickname = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=11, unique=True)
    sex = models.CharField(max_length=32, choices=gender, default='男')
    role_ID = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    c_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'User'

    def __str__(self):
        return f"{self.username} - {self.email} - {self.phone} - {self.role_ID} - {self.c_time}"
