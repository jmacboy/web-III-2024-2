from django import forms

select_bootstrap_field = forms.Select(
    attrs={
        'class': 'form-select'
    }
)
input_bootstrap_field = forms.TextInput(
    attrs={
        'class': 'form-control'
    }
)
