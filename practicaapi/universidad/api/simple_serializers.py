from rest_framework import serializers

from universidad.models import Persona, Materia


class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'nombres', 'apellidos')


class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'nombres', 'apellidos')


class MateriaSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = ('id', 'nombre')
