from django.db import models

class Role(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Wing(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Member(models.Model):
    name = models.CharField(max_length=100)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class MemberProfile(models.Model):
    member = models.OneToOneField(Member, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='members/')
    wing = models.ForeignKey(Wing, on_delete=models.CASCADE)
    year = models.IntegerField()
    contact = models.CharField(max_length=15)

    def __str__(self):
        return self.member.name
