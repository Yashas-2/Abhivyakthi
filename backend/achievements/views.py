from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .models import Achievement
from .serializers import AchievementSerializer


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_achievements(request):
    achievements = Achievement.objects.all()
    serializer = AchievementSerializer(achievements, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_achievement_by_id(request, achievement_id):
    try:
        achievement = Achievement.objects.get(id=achievement_id)
        serializer = AchievementSerializer(achievement)
        return Response(serializer.data)
    except Achievement.DoesNotExist:
        return Response({'error': 'Achievement not found'}, status=404)
