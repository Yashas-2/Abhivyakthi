from rest_framework import serializers
from .models import Role, Wing, Member, MemberProfile

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'


class WingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wing
        fields = '__all__'


class MemberSerializer(serializers.ModelSerializer):
    role = RoleSerializer()

    class Meta:
        model = Member
        fields = '__all__'


class MemberProfileSerializer(serializers.ModelSerializer):
    member = MemberSerializer()
    wing = WingSerializer()

    class Meta:
        model = MemberProfile
        fields = '__all__'
