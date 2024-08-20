from django.shortcuts import render, redirect

from personas.models import Persona


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


def persona_edit(request, id):
    persona = Persona.objects.get(id=id)
    return render(request, 'personas/persona/form.html', {
        'persona': persona
    })


def persona_update(request, id):
    persona = Persona.objects.get(id=id)
    persona.nombre = request.POST.get('nombre')
    persona.apellidos = request.POST.get('apellidos')
    persona.edad = request.POST.get('edad')
    persona.ciudad = request.POST.get('ciudad')
    persona.fecha_nacimiento = request.POST.get('fecha_nacimiento')
    persona.save()
    return redirect('personas_list')


def persona_delete(request, id):
    persona = Persona.objects.get(id=id)
    persona.delete()
    return redirect('personas_list')
