from rest_framework import serializers
from .models import Achievement
from events.serializers import EventSerializer


class AchievementSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
    
    class Meta:
        model = Achievement
        fields = '__all__'