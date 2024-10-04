from rest_framework import serializers, viewsets, status
from rest_framework.response import Response

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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(request.data)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
