from rest_framework import serializers
from .models import Categories, Expenses

class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('id', 'expense', 'amount', 'date', 'category')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'category')