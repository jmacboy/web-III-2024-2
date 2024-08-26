from django import forms

from personas.models import Mascota, Persona


class MascotaForm(forms.ModelForm):
    nombre = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    tipo = forms.ChoiceField(
        choices=Mascota.TIPO_CHOICES,
        widget=forms.Select(
            attrs={
                'class': 'form-select'
            }
        )
    )
    persona = forms.ModelChoiceField(
        queryset=Persona.objects.all(),
        widget=forms.Select(
            attrs={
                'class': 'form-select'
            }
        )
    )

    class Meta:
        model = Mascota
        fields = ('nombre', 'tipo', 'persona')
