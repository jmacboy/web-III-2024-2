from rest_framework.routers import DefaultRouter

from universidad.api import HomeViewSet, PersonaViewSet

router = DefaultRouter()
router.register(r'home', HomeViewSet, basename='home')
router.register(r'persona', PersonaViewSet, basename='persona')
urlpatterns = router.urls
