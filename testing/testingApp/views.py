from django.shortcuts import render, redirect
from .models import User, Employee

def employee(request):
    return render(request, 'employe.html')

def index(request):
    if request.method == 'POST':
        username = request.POST['username']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        
        user = User(username=username, first_name=first_name, last_name=last_name, email=email, password=password)
        user.save()
        # Optionally, add validation or error handling here if needed
    return render(request, 'Home.html')

def create_employee(request):
    if request.method == 'POST':
        employee_id = request.POST['employee_id']
        employee_name = request.POST['employee_name']
        department_id = request.POST['department_id']
        salary = request.POST['salary']
        department_name = request.POST['department_name']
        department_location = request.POST['department_location']
        
        employee = Employee(
            employeeId=employee_id,
            employeeName=employee_name,
            department_id=department_id,
            salary=salary,
            departmentName=department_name,
            departmentLocation=department_location
        )
        employee.save()
        
        return redirect('employee_list')  # Assuming there's a URL named 'employee_list' for listing employees
    
    # If request method is not POST, render the form template
    
