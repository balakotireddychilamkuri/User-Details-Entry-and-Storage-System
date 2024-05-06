from django.db import models

# Create your models here.
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # You might consider using Django's built-in User model for authentication
    nickname = models.CharField(max_length=50, blank=True, null=True)


    def __str__(self):
        return self.username
class Employee(models.Model):
    employee_id = models.CharField(max_length=20)
    employee_name = models.CharField(max_length=100)
    department_id = models.CharField(max_length=20)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    department_name = models.CharField(max_length=100)
    department_location = models.CharField(max_length=100)
