# Generated by Django 5.1 on 2024-08-19 12:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='created_at',
            field=models.DateTimeField(null=datetime.datetime(2024, 8, 19, 12, 43, 47, 99846)),
            preserve_default=datetime.datetime(2024, 8, 19, 12, 43, 47, 99846),
        ),
    ]
