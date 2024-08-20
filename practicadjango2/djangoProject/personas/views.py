from django.http import HttpResponse
from django.shortcuts import render, redirect

from personas.models import Persona


# Create your views here.
def hola_mundo(request):
    return HttpResponse('Hola Mundo')


def persona_list(request):
    personas = Persona.objects.all()
    return render(request, 'personas/persona/index.html', {
        'personas': personas
    })


def persona_create(request):
    return render(request, 'personas/persona/form.html')


def persona_store(request):
    nombre = request.POST.get('nombre')
    apellidos = request.POST.get('apellidos')
    edad = request.POST.get('edad')
    ciudad = request.POST.get('ciudad')
    fecha_nacimiento = request.POST.get('fecha_nacimiento')
    persona = Persona(
        nombre=nombre,
        apellidos=apellidos,
        edad=edad,
        ciudad=ciudad,
        fecha_nacimiento=fecha_nacimiento
    )
    persona.save()
    return redirect('personas_list')
