from django.db import models


class Persona(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    edad = models.IntegerField()
    ciudad = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()

    def __str__(self):
        return self.nombres
