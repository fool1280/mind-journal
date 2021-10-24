# Generated by Django 3.2.8 on 2021-10-24 06:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mood',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=500)),
                ('sentiment', models.FloatField(default=0.0)),
                ('mood_self_grade', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
    ]
