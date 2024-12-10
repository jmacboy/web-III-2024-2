from django.urls import path

from djangoSockets.consumers import MyConsumer

websocket_urlpatterns = [
    path("ws/actualizaciones/", MyConsumer.as_asgi()),
]
