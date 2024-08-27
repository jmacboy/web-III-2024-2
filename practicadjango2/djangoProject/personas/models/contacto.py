from django.db import models

from personas.models import Persona


class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    parentezco = models.CharField(max_length=100)

    persona = models.ForeignKey(
        Persona,
        on_delete=models.CASCADE,
        related_name='contactos'
    )

    def __str__(self):
        return self.nombre
