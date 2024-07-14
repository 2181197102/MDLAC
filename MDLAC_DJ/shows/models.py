from django.db import models

# Create your models here.

class JdGood(models.Model):
    acid = models.CharField(max_length=50, primary_key=True)  # 将acid设置为主键
    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    shop_name = models.CharField(max_length=255, default='未知商店')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    operation = models.CharField(max_length=255, default='未知操作')
    level = models.CharField(max_length=50, default='未知等级')
    frequency = models.CharField(max_length=50, default='未知频率')
    purify = models.CharField(max_length=50, null=True, default='无')
    type = models.CharField(max_length=50, default='未知类型')
    cwtype = models.CharField(max_length=50, default='未知类型')
    horse = models.CharField(max_length=50, default='未知马力')
    good_func = models.CharField(max_length=255, null=True, default='无')
    apply_space = models.CharField(max_length=50, null=True, default='未知空间')
    featured = models.CharField(max_length=50, null=True, default='无')
    statu = models.CharField(max_length=50, null=True, default='未知条件')
    set_type = models.CharField(max_length=50, null=True, default='未知类型')
    apply_house = models.CharField(max_length=50, null=True, default='未知')
    duct_form = models.CharField(max_length=50, null=True, default='未知形式')
    brand = models.CharField(max_length=255, default='未知品牌')
    wind_position = models.CharField(max_length=50, null=True, default='未知')
    no_drainage = models.CharField(max_length=50, null=True, default='未知')
    min_height = models.CharField(max_length=50, null=True, default='未知')
    cost = models.CharField(max_length=50, null=True, default='未知')
    user_preference = models.CharField(max_length=50, null=True, default='未知')
    comment_count_str = models.CharField(max_length=50)
    average_score = models.FloatField(default=0.0)
    good_count_str = models.CharField(max_length=50)
    general_count_str = models.CharField(max_length=50)
    poor_count_str = models.CharField(max_length=50)
    good_rate = models.FloatField(default=0.0)

    class Meta:
        db_table = 'jd_goods'
        verbose_name = 'JD Good'
        verbose_name_plural = 'JD Goods'

    def __str__(self):
        return f"{self.acid} - {self.brand} - {self.price}"


class JdComment(models.Model):
    content = models.TextField()  # 评论内容
    date = models.DateTimeField()  # 评论日期
    good_ref = models.ForeignKey(JdGood, to_field='acid', on_delete=models.CASCADE)  # 关联到JdGood的acid字段
    good_id = models.CharField(max_length=50)  # 商品ID
    good_name = models.CharField(max_length=255, null=True)  # 商品名称
    comment_tags = models.CharField(max_length=255, null=True, blank=True)  # 评论标签
    reply_count = models.IntegerField(default=0)  # 回复数量
    score = models.IntegerField()  # 评分
    user_level_id = models.IntegerField()  # 用户等级ID
    user_province = models.CharField(max_length=50, null=True, blank=True)  # 用户所在省份
    user_id = models.CharField(max_length=50)  # 用户ID
    user_name = models.CharField(max_length=50)  # 用户名
    score1 = models.IntegerField(default=0)  # 评分项1
    score2 = models.IntegerField(default=0)  # 评分项2
    score3 = models.IntegerField(default=0)  # 评分项3
    score4 = models.IntegerField(default=0)  # 评分项4
    score5 = models.IntegerField(default=0)  # 评分项5

    class Meta:
        db_table = 'jd_comments'
        verbose_name = 'JD Comment'
        verbose_name_plural = 'JD Comments'

    def __str__(self):
        return f"{self.user_name} - {self.good_name} - {self.date}"
