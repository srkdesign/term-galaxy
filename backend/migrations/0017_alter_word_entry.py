# Generated by Django 5.1 on 2024-09-11 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0016_alter_word_source'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='entry',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]