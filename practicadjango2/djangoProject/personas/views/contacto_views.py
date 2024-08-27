from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView

from personas.forms import ContactoForm
from personas.models import Contacto


class ContactoListView(ListView):
    model = Contacto
    template_name = 'personas/contacto/list.html'


class ContactoCreateView(CreateView):
    model = Contacto
    template_name = 'personas/contacto/form.html'
    success_url = reverse_lazy('contactos_list')
    form_class = ContactoForm


class ContactoUpdateView(UpdateView):
    model = Contacto
    template_name = 'personas/contacto/form.html'
    success_url = reverse_lazy('contactos_list')
    form_class = ContactoForm


class ContactoDeleteView(DeleteView):
    model = Contacto
    success_url = reverse_lazy('contactos_list')
