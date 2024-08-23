from django.urls import path

from personas import views

urlpatterns = [
    path("hola", views.hola_mundo, name="hola"),
    path("", views.persona_list, name="personas_list"),
    path("create", views.persona_create, name="persona_create"),
    path("store", views.persona_store, name="persona_store"),
    path("edit/<int:id>", views.persona_edit, name="persona_edit"),
    path("update/<int:id>", views.persona_update, name="persona_update"),
    path("delete/<int:id>", views.persona_delete, name="persona_delete"),
]
