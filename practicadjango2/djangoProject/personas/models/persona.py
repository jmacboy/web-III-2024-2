from django.db import models


class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField()
    ciudad = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
