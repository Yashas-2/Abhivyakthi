from django.urls import path
from .views import get_members, get_roles, get_wings

urlpatterns = [
    path('members/', get_members),
    path('roles/', get_roles),
    path('wings/', get_wings),
]
