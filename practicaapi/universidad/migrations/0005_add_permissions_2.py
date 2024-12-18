# Generated by Django 5.1 on 2024-10-18 18:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('universidad', '0004_add_permissions'),
    ]
    def insertData(apps, schema_editor):
        Group = apps.get_model('auth', 'Group')

        admin_group = Group(name='Administrators')
        admin_group.save()
        student_group = Group(name='Students')
        student_group.save()
        teacher_group = Group(name='Teachers')
        teacher_group.save()


    operations = [
        migrations.RunPython(insertData, atomic=True),
    ]
