# Generated by Django 4.2 on 2023-04-28 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_name_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='user',
            name='password2',
            field=models.CharField(max_length=20),
        ),
    ]