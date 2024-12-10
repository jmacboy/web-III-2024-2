# Primero instalar las dependencias

```
pip install -r requirements.txt
```

## Para ejecutar el socket y el servicio

```
python manage.py runserver
uvicorn djangoSockets.asgi:application --reload
```
