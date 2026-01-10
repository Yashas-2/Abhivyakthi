from django.contrib import admin
from .models import Member, Role, Wing, MemberProfile

admin.site.register(Role)
admin.site.register(Wing)
admin.site.register(Member)
admin.site.register(MemberProfile)
