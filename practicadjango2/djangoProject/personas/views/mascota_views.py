from django.core.files.storage import default_storage
from django.shortcuts import render, redirect

from personas.forms import MascotaForm
from personas.models import Mascota


def mascota_list(request):
    mascotas = Mascota.objects.all()
    return render(request, 'personas/mascota/index.html', {
        'mascotas': mascotas
    })


def mascota_store(request):
    if request.method == 'POST':
        form = MascotaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()

            return redirect('mascotas_list')
    else:
        form = MascotaForm()
    return render(request, 'personas/mascota/form.html', {
        'form': form
    })


def mascota_update(request, id):
    mascota = Mascota.objects.get(id=id)
    imagen_anterior = mascota.foto_perfil
    if request.method == 'POST':
        form = MascotaForm(request.POST, request.FILES, instance=mascota)

        if form.is_valid():
            nueva_imagen = form.cleaned_data.get('foto_perfil')
            if imagen_anterior and nueva_imagen != None and imagen_anterior != nueva_imagen:
                if default_storage.exists(imagen_anterior.path):
                    default_storage.delete(imagen_anterior.path)

        form.save()
        return redirect('mascotas_list')

    else:
        form = MascotaForm(instance=mascota)

        return render(request, 'personas/mascota/form.html', {
            'form': form
        })


def mascota_delete(request, id):
    mascota = Mascota.objects.get(id=id)
    if mascota.foto_perfil:
        if default_storage.exists(mascota.foto_perfil.path):
            default_storage.delete(mascota.foto_perfil.path)
    mascota.delete()
    return redirect('mascotas_list')
