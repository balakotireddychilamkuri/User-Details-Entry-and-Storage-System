from django.db import models

class Employee(models.Model):
    employee_id = models.CharField(max_length=20)
    employee_name = models.CharField(max_length=100)
    department_id = models.CharField(max_length=20)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    department_name = models.CharField(max_length=100)
    department_location = models.CharField(max_length=100)

    def __str__(self):
        return self.employee_name
