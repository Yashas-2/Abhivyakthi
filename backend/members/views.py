from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .models import MemberProfile, Role, Wing
from .serializers import MemberProfileSerializer, RoleSerializer, WingSerializer


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_members(request):
    profiles = MemberProfile.objects.all()
    serializer = MemberProfileSerializer(profiles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_roles(request):
    roles = Role.objects.all()
    serializer = RoleSerializer(roles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_wings(request):
    wings = Wing.objects.all()
    serializer = WingSerializer(wings, many=True)
    return Response(serializer.data)
