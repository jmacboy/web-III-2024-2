from django.http import HttpResponse
from django.shortcuts import render


def hola_mundo(request):
    return HttpResponse('Hola Mundo')


def home(request):
    return render(request, 'personas/home/index.html')
