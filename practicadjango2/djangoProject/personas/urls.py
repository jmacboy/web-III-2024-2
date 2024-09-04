from django.urls import path

from personas import views

urlpatterns = [
    path("hola", views.hola_mundo, name="hola"),
    path("", views.home, name="home"),

    path("personas/", views.persona_list, name="personas_list"),
    path("personas/create", views.persona_create, name="persona_create"),
    path("personas/store", views.persona_store, name="persona_store"),
    path("personas/edit/<int:id>", views.persona_edit, name="persona_edit"),
    path("personas/update/<int:id>", views.persona_update, name="persona_update"),
    path("personas/delete/<int:id>", views.persona_delete, name="persona_delete"),
    path("personas/picture/<int:id>", views.persona_picture, name="persona_picture"),

    path("mascotas/", views.mascota_list, name="mascotas_list"),
    path("mascotas/create", views.mascota_store, name="mascota_store"),
    path("mascotas/edit/<int:id>", views.mascota_update, name="mascota_edit"),
    path("mascotas/delete/<int:id>", views.mascota_delete, name="mascota_delete"),

    path("contactos/", views.ContactoListView.as_view(), name="contactos_list"),
    path("contactos/create", views.ContactoCreateView.as_view(), name="contacto_create"),
    path("contactos/edit/<int:pk>", views.ContactoUpdateView.as_view(), name="contacto_edit"),
    path("contactos/delete/<int:pk>", views.ContactoDeleteView.as_view(), name="contacto_delete"),

    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
]
