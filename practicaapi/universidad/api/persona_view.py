from rest_framework import viewsets, serializers

from universidad.api import MateriaSimpleSerializer
from universidad.models import Persona, Materia


class PersonaSerializer(serializers.ModelSerializer):
    materias_dictadas = MateriaSimpleSerializer(many=True, read_only=True)
    materias_inscritas = MateriaSimpleSerializer(many=True, read_only=True)
    materia_inscritas_ids = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset=Materia.objects.all(),
        source='materias_inscritas',
        many=True
    )

    class Meta:
        model = Persona
        fields = ('id', 'nombres', 'apellidos', 'edad', 'ciudad', 'fecha_nacimiento',
                  'tipo', 'materias_dictadas', 'materia_inscritas_ids', 'materias_inscritas')


class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
