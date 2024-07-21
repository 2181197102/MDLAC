from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class Role(models.Model):
    """角色表"""
    '''
    101 normal
    102 vip
    '''
    role_ID = models.CharField(max_length=3, primary_key=True, default='101')  # 设置为主键
    role_Name = models.CharField(max_length=128, default="normal")

    class Meta:
        verbose_name = 'Role'
        verbose_name_plural = 'Role'

    def __str__(self):
        return f"{self.role_ID} - {self.role_Name}"


class User(AbstractUser):
    """自定义用户模型，扩展Django内置的User模型"""

    gender = (
        ('male', '男'),
        ('female', '女'),
    )

    nickname = models.CharField(max_length=128)
    phone = models.CharField(max_length=11, unique=True)
    sex = models.CharField(max_length=32, choices=gender, default='男')
    role_ID = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    balance = models.IntegerField(default=0)
    membership_period = models.DateTimeField(null=True, blank=True)
    security_question1 = models.CharField(max_length=256)
    security_answer1 = models.CharField(max_length=256)
    security_question2 = models.CharField(max_length=256)
    security_answer2 = models.CharField(max_length=256)
    security_question3 = models.CharField(max_length=256)
    security_answer3 = models.CharField(max_length=256)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'User'

    def __str__(self):
        return f"{self.username} - {self.email} - {self.phone} - {self.role_ID} - {self.date_joined}"