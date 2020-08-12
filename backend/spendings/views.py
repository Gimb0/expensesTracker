from django.shortcuts import render
from rest_framework import viewsets         
from .serializers import ExpensesSerializer, CategorySerializer   
from .models import Expenses, Categories               

class ExpensesView(viewsets.ModelViewSet):      
    serializer_class = ExpensesSerializer     
    queryset = Expenses.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Categories.objects.all()