from django.db import models


class Persona(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    edad = models.IntegerField()
    ciudad = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    TIPO_ESTUDIANTE = 1
    TIPO_DOCENTE = 2
    tipo = models.IntegerField(
        choices=((TIPO_ESTUDIANTE, 'Estudiante'), (TIPO_DOCENTE, 'Docente')),
        default=TIPO_DOCENTE
    )

    def __str__(self):
        return self.nombres
