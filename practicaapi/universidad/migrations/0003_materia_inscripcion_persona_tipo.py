# Generated by Django 5.1 on 2024-09-13 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universidad', '0002_materia'),
    ]

    operations = [
        migrations.AddField(
            model_name='materia',
            name='inscripcion',
            field=models.ManyToManyField(related_name='materias_inscritas', to='universidad.persona'),
        ),
        migrations.AddField(
            model_name='persona',
            name='tipo',
            field=models.IntegerField(choices=[(1, 'Estudiante'), (2, 'Docente')], default=2),
        ),
    ]
