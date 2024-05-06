from django.db import models

# Create your models here.
class Member(models.Model):
    Firstname=models.CharField(max_length=255)
    Lastname=models.CharField(max_length=255)
    phone =models.IntegerField()
    
    