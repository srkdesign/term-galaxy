# Generated by Django 5.1 on 2024-09-10 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0014_alter_word_source'),
    ]

    operations = [
        migrations.AlterField(
            model_name='translation',
            name='entry',
            field=models.CharField(db_index=True, default='', max_length=48),
        ),
    ]