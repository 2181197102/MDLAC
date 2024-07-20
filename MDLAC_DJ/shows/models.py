from django.db import models


# Create your models here.

# 商品模型
# 字段：商品ID,价格,商品名称,商品详情链接地址,商品图片链接,评论数,店铺,店铺链接
class JdGood(models.Model):
    acid = models.CharField(max_length=50, primary_key=True)  # 商品ID，作为主键
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # 价格
    name = models.CharField(max_length=255, null=True, blank=True)  # 商品名称
    detail_link = models.CharField(max_length=255, null=True, blank=True)  # 商品详情链接地址
    image_link = models.CharField(max_length=255, null=True, blank=True)  # 商品图片链接
    comment_count = models.IntegerField(null=True, blank=True)  # 评论数
    shop = models.CharField(max_length=255, null=True, blank=True)  # 店铺
    shop_link = models.CharField(max_length=255, null=True, blank=True)  # 店铺链接

    class Meta:
        db_table = 'jd_goods'
        verbose_name = 'JD 商品'
        verbose_name_plural = 'JD 商品'

    def __str__(self):
        return f"{self.acid} - {self.name} - {self.price}"


class JdDetail(models.Model):
    goods = models.OneToOneField(JdGood, on_delete=models.CASCADE, related_name='details')

    # 商品参数
    brand = models.CharField(max_length=100, null=True, blank=True)
    control_method = models.CharField(max_length=50, null=True, blank=True)
    energy_efficiency = models.CharField(max_length=50, null=True, blank=True)
    inverter_or_not = models.CharField(max_length=20, null=True, blank=True)
    type = models.CharField(max_length=50, null=True, blank=True)
    horse_power = models.CharField(max_length=50, null=True, blank=True)
    cold_warm_type = models.CharField(max_length=50, null=True, blank=True)

    # 主体信息
    series = models.CharField(max_length=100, null=True, blank=True)
    applicable_area = models.CharField(max_length=50, null=True, blank=True)
    certification_model = models.CharField(max_length=100, null=True, blank=True)
    product_model = models.CharField(max_length=100, null=True, blank=True)
    panel_material = models.CharField(max_length=100, null=True, blank=True)  # 新增字段

    # 规格
    voltage_frequency = models.CharField(max_length=50, null=True, blank=True)
    inner_machine_dimensions = models.CharField(max_length=100, null=True, blank=True)
    outer_machine_dimensions = models.CharField(max_length=100, null=True, blank=True)
    inner_machine_weight = models.CharField(max_length=50, null=True, blank=True)
    outer_machine_weight = models.CharField(max_length=50, null=True, blank=True)
    refrigerant = models.CharField(max_length=50, null=True, blank=True)

    # 功能
    circulation_air_volume = models.CharField(max_length=50, null=True, blank=True)
    cooling_power = models.CharField(max_length=50, null=True, blank=True)
    swing_mode = models.CharField(max_length=50, null=True, blank=True)
    max_noise = models.CharField(max_length=50, null=True, blank=True)
    heating_capacity = models.CharField(max_length=50, null=True, blank=True)
    cooling_capacity = models.CharField(max_length=50, null=True, blank=True)
    sleep_mode = models.CharField(max_length=50, null=True, blank=True)
    function_description = models.TextField(null=True, blank=True)  # 新增字段

    purification_type = models.CharField(max_length=100, null=True, blank=True)  # 新增字段
    launch_date = models.DateField(null=True, blank=True)  # 新增字段

    class Meta:
        db_table = 'jd_details'
        verbose_name = 'JD 商品详情'
        verbose_name_plural = 'JD 商品详情'

    def __str__(self):
        return f"{self.goods.acid} - {self.goods.name}"


class JdComment(models.Model):
    content = models.TextField(null=True, blank=True)  # 评论内容
    date = models.DateTimeField(null=True, blank=True)  # 评论日期
    good_ref = models.ForeignKey(JdGood, to_field='acid', on_delete=models.CASCADE)  # 关联到JdGood的acid字段
    good_id = models.CharField(max_length=50)  # 商品ID
    good_name = models.CharField(max_length=255, null=True, blank=True)  # 商品名称
    comment_tags = models.CharField(max_length=255, null=True, blank=True)  # 评论标签
    reply_count = models.IntegerField(default=0, null=True, blank=True)  # 回复数量
    score = models.IntegerField(null=True, blank=True)  # 评分
    user_level_id = models.IntegerField(null=True, blank=True)  # 用户等级ID
    user_province = models.CharField(max_length=50, null=True, blank=True)  # 用户所在省份
    user_id = models.CharField(max_length=50, null=True, blank=True)  # 用户ID
    user_name = models.CharField(max_length=50, null=True, blank=True)  # 用户名
    score1 = models.IntegerField(default=0, null=True, blank=True)  # 评分项1
    score2 = models.IntegerField(default=0, null=True, blank=True)  # 评分项2
    score3 = models.IntegerField(default=0, null=True, blank=True)  # 评分项3
    score4 = models.IntegerField(default=0, null=True, blank=True)  # 评分项4
    score5 = models.IntegerField(default=0, null=True, blank=True)  # 评分项5

    class Meta:
        db_table = 'jd_comments'
        verbose_name = 'JD Comment'
        verbose_name_plural = 'JD Comments'

    def __str__(self):
        return f"{self.user_name} - {self.good_name} - {self.date}"
