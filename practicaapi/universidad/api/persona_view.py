from rest_framework import viewsets, serializers

from universidad.models import Persona


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'nombres', 'apellidos', 'edad', 'ciudad', 'fecha_nacimiento')


class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
