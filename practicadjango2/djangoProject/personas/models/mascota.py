from django.db import models

from personas.models import Persona


class Mascota(models.Model):
    TIPO_PERRO = 1
    TIPO_GATO = 2
    TIPO_LORO = 3
    TIPO_LLAMA = 4
    TIPO_CAPIBARA = 5
    TIPO_CHOICES = (
        (TIPO_PERRO, 'Perro'),
        (TIPO_GATO, 'Gato'),
        (TIPO_LORO, 'Loro'),
        (TIPO_LLAMA, 'Llama'),
        (TIPO_CAPIBARA, 'Capibara')
    )
    nombre = models.CharField(max_length=100)
    tipo = models.IntegerField(
        choices=TIPO_CHOICES
    )

    # Foreign Keys
    persona = models.ForeignKey(
        Persona,
        on_delete=models.CASCADE,
        related_name="mascotas"
    )
