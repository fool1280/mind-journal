# Generated by Django 3.2.8 on 2021-10-23 23:34

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analyze', '0002_auto_20211023_2238'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='mood_self_grade',
        ),
        migrations.AddField(
            model_name='mood',
            name='mood_self_grade',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]