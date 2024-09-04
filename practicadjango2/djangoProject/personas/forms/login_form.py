from django import forms

from personas.forms.form_utils import password_bootstrap_field, input_bootstrap_field


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100, widget=input_bootstrap_field)
    password = forms.CharField(widget=password_bootstrap_field, max_length=100)
