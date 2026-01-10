from django.urls import path
from .views import get_achievements, get_achievement_by_id

urlpatterns = [
    path('achievements/', get_achievements, name='get_achievements'),
    path('achievements/<int:achievement_id>/', get_achievement_by_id, name='get_achievement_by_id'),
]