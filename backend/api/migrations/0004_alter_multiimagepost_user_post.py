# Generated by Django 5.0.6 on 2024-06-09 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_imageuploads_user_listing_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='multiimagepost',
            name='user_post',
            field=models.CharField(max_length=200),
        ),
    ]