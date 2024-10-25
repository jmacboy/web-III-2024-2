from rest_framework import viewsets, serializers
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions

from universidad.api import MateriaSimpleSerializer
from universidad.models import Persona, Materia


class PersonaSerializer(serializers.ModelSerializer):
    materias_dictadas = MateriaSimpleSerializer(many=True, read_only=True)
    materias_inscritas = MateriaSimpleSerializer(many=True, read_only=True)
    materia_inscritas_ids = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset=Materia.objects.all(),
        source='materias_inscritas',
        many=True,
        required=False
    )

    class Meta:
        model = Persona
        fields = ('id', 'nombres', 'apellidos', 'edad', 'ciudad', 'fecha_nacimiento',
                  'tipo', 'materias_dictadas', 'materia_inscritas_ids', 'materias_inscritas')

from rest_framework.pagination import PageNumberPagination

class CustomPageNumberPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100
class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    filterset_fields =["nombres", "apellidos", "ciudad"]
    search_fields = ['nombres', 'apellidos']
    ordering_fields = ['nombres','apellidos', 'edad', 'fecha_nacimiento']
    pagination_class = CustomPageNumberPagination
