from rest_framework import serializers, viewsets

from universidad.api import DocenteSerializer, EstudianteSerializer
from universidad.models import Persona, Materia


class MateriaSerializer(serializers.ModelSerializer):
    docente = DocenteSerializer(read_only=True)
    docente_id = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset=Persona.objects.all(),
        source='docente'
    )
    inscripcion = EstudianteSerializer(many=True, read_only=True)

    class Meta:
        model = Materia
        fields = '__all__'


class MateriaViewSet(viewsets.ModelViewSet):
    serializer_class = MateriaSerializer
    queryset = Materia.objects.all()
