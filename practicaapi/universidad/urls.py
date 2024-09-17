from rest_framework.routers import DefaultRouter

from universidad.api import HomeViewSet, PersonaViewSet, MateriaViewSet

router = DefaultRouter()
router.register(r'home', HomeViewSet, basename='home')
router.register(r'personas', PersonaViewSet, basename='persona')
router.register(r'materias', MateriaViewSet, basename='materia')
urlpatterns = router.urls
