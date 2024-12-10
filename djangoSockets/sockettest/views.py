from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.http import HttpResponse
from django.shortcuts import render


def hola(request):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "actualizaciones", {"type": "send_update", "data": {
            "message": "Hola desde el servidor!"
        }}
    )
    return HttpResponse("Mensaje enviado")
