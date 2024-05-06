from django.contrib import admin
from .models import User
from .models import Employee
#from django.contrib.auth.models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name','last_name', 'email')  # Display these fields in the list view
    search_fields = ('username', 'email')  # Enable searching by these fields
    #list_filter = ('is_staff', 'is_active')  # Add filters for these fields
    # You can further customize the admin interface by adding more attributes like list_display, search_fields, list_filter, etc.

#class KotiAdmin(admin.ModelAdmin):
    #list_display = ('field1', 'field2', 'field3')  # Display these fields in the list view
    # Add more customization as needed

# Register the custom admin classes with the respective models
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'employee_name', 'department_id', 'salary', 'department_name', 'department_location')

admin.site.register(Employee, EmployeeAdmin)
admin.site.register(User, UserAdmin)

