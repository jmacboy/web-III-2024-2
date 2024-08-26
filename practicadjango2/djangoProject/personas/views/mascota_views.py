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
        form = MascotaForm(request.POST)
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
    if request.method == 'POST':
        form = MascotaForm(request.POST, instance=mascota)
        if form.is_valid():
            form.save()
            return redirect('mascotas_list')
    else:
        form = MascotaForm(instance=mascota)

    return render(request, 'personas/mascota/form.html', {
        'form': form
    })


def mascota_delete(request, id):
    mascota = Mascota.objects.get(id=id)
    mascota.delete()
    return redirect('mascotas_list')
