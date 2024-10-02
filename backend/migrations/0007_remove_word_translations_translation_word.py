# Generated by Django 5.1 on 2024-08-19 14:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_translation_translated_entry_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='word',
            name='translations',
        ),
        migrations.AddField(
            model_name='translation',
            name='word',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.word'),
        ),
    ]