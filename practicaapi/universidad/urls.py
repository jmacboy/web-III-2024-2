from rest_framework.routers import DefaultRouter

from universidad.api import HomeViewSet, PersonaViewSet, MateriaViewSet, UserViewSet

router = DefaultRouter()
router.register(r'home', HomeViewSet, basename='home')
router.register(r'personas', PersonaViewSet, basename='persona')
router.register(r'materias', MateriaViewSet, basename='materia')
router.register(r'auth', UserViewSet, basename='auth')
urlpatterns = router.urls
