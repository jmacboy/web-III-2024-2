# Generated by Django 5.1 on 2024-08-16 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellidos', models.CharField(max_length=100)),
                ('edad', models.IntegerField()),
                ('ciudad', models.CharField(max_length=100)),
                ('fecha_nacimiento', models.DateField()),
            ],
        ),
    ]
