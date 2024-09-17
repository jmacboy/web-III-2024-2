from django.db import models

from universidad.models import Persona


class Materia(models.Model):
    nombre = models.CharField(max_length=50)
    creditos = models.IntegerField()
    docente = models.ForeignKey(
        Persona,
        on_delete=models.CASCADE,
        related_name='materias_dictadas'
    )

    inscripcion = models.ManyToManyField(
        Persona,
        related_name='materias_inscritas',
    )

    def __str__(self):
        return self.nombre
