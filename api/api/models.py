from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=70)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    password2 = models.CharField(max_length=20)

    def __str__(self):
        return self.username
