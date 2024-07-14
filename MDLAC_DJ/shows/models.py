from django.db import models


# Create your models here.


class JdGood(models.Model):
    acid = models.CharField(max_length=50)
    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    shop_name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    operation = models.CharField(max_length=255)
    level = models.CharField(max_length=50)
    frequency = models.CharField(max_length=50)
    purify = models.CharField(max_length=50, null=True)
    type = models.CharField(max_length=50)
    cwtype = models.CharField(max_length=50)
    horse = models.CharField(max_length=50)
    good_func = models.CharField(max_length=255, null=True)
    apply_space = models.CharField(max_length=50, null=True)
    featured = models.CharField(max_length=50, null=True)
    statu = models.CharField(max_length=50, null=True)
    set_type = models.CharField(max_length=50, null=True)
    apply_house = models.CharField(max_length=50, null=True)
    duct_form = models.CharField(max_length=50, null=True)
    brand = models.CharField(max_length=255)
    wind_position = models.CharField(max_length=50, null=True)
    no_drainage = models.CharField(max_length=50, null=True)
    min_height = models.CharField(max_length=50, null=True)
    cost = models.CharField(max_length=50, null=True)
    user_preference = models.CharField(max_length=50, null=True)
    comment_count_str = models.CharField(max_length=50)
    average_score = models.FloatField()
    good_count_str = models.CharField(max_length=50)
    general_count_str = models.CharField(max_length=50)
    poor_count_str = models.CharField(max_length=50)
    good_rate = models.FloatField()

    class Meta:
        db_table = 'jd_good'

    def __str__(self):
        return self.acid
