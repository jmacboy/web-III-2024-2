from django.urls import path

from sockettest.views import hola

urlpatterns = [
    path('hola', hola)
]
