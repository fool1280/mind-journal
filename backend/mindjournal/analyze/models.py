from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class User(models.Model):
    def __str__(self):
        return self.name + ", " + self.email
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    #last_login = models.DateTimeField('date published')


class Mood(models.Model):
    def __str__(self):
        return self.text + ": " + str(self.sentiment)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    sentiment = models.FloatField(default=0.0)
    mood_self_grade = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)
    pub_date = models.DateTimeField('date published')
