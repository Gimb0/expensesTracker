from django.contrib import admin

from .models import Categories, Expenses

class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('id', 'category')

class ExpensesAdmin(admin.ModelAdmin):
    list_display = ('id', 'expense', 'amount', 'date', 'category')

# Register your models here.
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(Expenses, ExpensesAdmin)
