# Generated by Django 5.0.7 on 2024-07-21 08:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='content',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='good_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='reply_count',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score1',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score2',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score3',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score4',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='score5',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='user_id',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='user_level_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jdcomment',
            name='user_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.CreateModel(
            name='JdDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(blank=True, max_length=100, null=True)),
                ('control_method', models.CharField(blank=True, max_length=50, null=True)),
                ('energy_efficiency', models.CharField(blank=True, max_length=50, null=True)),
                ('inverter_or_not', models.CharField(blank=True, max_length=20, null=True)),
                ('type', models.CharField(blank=True, max_length=50, null=True)),
                ('horse_power', models.CharField(blank=True, max_length=50, null=True)),
                ('cold_warm_type', models.CharField(blank=True, max_length=50, null=True)),
                ('series', models.CharField(blank=True, max_length=100, null=True)),
                ('applicable_area', models.CharField(blank=True, max_length=50, null=True)),
                ('certification_model', models.CharField(blank=True, max_length=100, null=True)),
                ('product_model', models.CharField(blank=True, max_length=100, null=True)),
                ('panel_material', models.CharField(blank=True, max_length=100, null=True)),
                ('voltage_frequency', models.CharField(blank=True, max_length=50, null=True)),
                ('inner_machine_dimensions', models.CharField(blank=True, max_length=100, null=True)),
                ('outer_machine_dimensions', models.CharField(blank=True, max_length=100, null=True)),
                ('inner_machine_weight', models.CharField(blank=True, max_length=50, null=True)),
                ('outer_machine_weight', models.CharField(blank=True, max_length=50, null=True)),
                ('refrigerant', models.CharField(blank=True, max_length=50, null=True)),
                ('circulation_air_volume', models.CharField(blank=True, max_length=50, null=True)),
                ('cooling_power', models.CharField(blank=True, max_length=50, null=True)),
                ('swing_mode', models.CharField(blank=True, max_length=50, null=True)),
                ('max_noise', models.CharField(blank=True, max_length=50, null=True)),
                ('heating_capacity', models.CharField(blank=True, max_length=50, null=True)),
                ('cooling_capacity', models.CharField(blank=True, max_length=50, null=True)),
                ('sleep_mode', models.CharField(blank=True, max_length=50, null=True)),
                ('function_description', models.TextField(blank=True, null=True)),
                ('purification_type', models.CharField(blank=True, max_length=100, null=True)),
                ('launch_date', models.DateField(blank=True, null=True)),
                ('goods', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='details', to='shows.jdgood')),
            ],
            options={
                'verbose_name': 'JD 商品详情',
                'verbose_name_plural': 'JD 商品详情',
                'db_table': 'jd_details',
            },
        ),
    ]
