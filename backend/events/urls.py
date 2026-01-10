from django.urls import path
from .views import get_events, get_event_by_id

urlpatterns = [
    path('events/', get_events, name='get_events'),
    path('events/<int:event_id>/', get_event_by_id, name='get_event_by_id'),
]