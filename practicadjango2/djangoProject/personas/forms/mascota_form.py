from django import forms

from personas.forms.form_utils import select_bootstrap_field, input_bootstrap_field
from personas.models import Mascota, Persona


class MascotaForm(forms.ModelForm):
    nombre = forms.CharField(
        widget=input_bootstrap_field
    )
    tipo = forms.ChoiceField(
        choices=Mascota.TIPO_CHOICES,
        widget=select_bootstrap_field
    )
    persona = forms.ModelChoiceField(
        queryset=Persona.objects.all(),
        widget=select_bootstrap_field
    )

    class Meta:
        model = Mascota
        fields = ('nombre', 'tipo', 'persona')
