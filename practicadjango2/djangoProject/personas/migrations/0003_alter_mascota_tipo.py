# Generated by Django 5.1 on 2024-08-23 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0002_mascota'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mascota',
            name='tipo',
            field=models.IntegerField(choices=[(1, 'Perro'), (2, 'Gato'), (3, 'Loro'), (4, 'Llama'), (5, 'Capibara')]),
        ),
    ]
