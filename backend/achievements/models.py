from django.db import models
from events.models import Event

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    year = models.IntegerField()
