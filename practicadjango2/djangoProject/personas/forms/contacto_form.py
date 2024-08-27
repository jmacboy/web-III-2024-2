from django import forms

from personas.forms.form_utils import input_bootstrap_field, select_bootstrap_field
from personas.models import Contacto, Persona


class ContactoForm(forms.ModelForm):
    nombre = forms.CharField(
        widget=input_bootstrap_field
    )
    telefono = forms.CharField(
        widget=input_bootstrap_field,
        max_length=15
    )
    parentezco = forms.CharField(
        widget=input_bootstrap_field
    )
    persona = forms.ModelChoiceField(
        queryset=Persona.objects.all(),
        widget=select_bootstrap_field
    )

    class Meta:
        model = Contacto
        fields = ('nombre', 'telefono', 'parentezco', 'persona')
