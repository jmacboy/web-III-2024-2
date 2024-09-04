from django.db import models


class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField()
    ciudad = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    profile_picture = models.ImageField(
        upload_to='static/personas',
        null=True,
        blank=True
    )


    def __str__(self):
        return f'{self.nombre} {self.apellidos}'
