import datetime

from django.db import models
from django.utils import timezone

# Create your models here.
class Categories(models.Model):
    category = models.CharField(max_length=30)
    def __str__(self):
        return self.category

class Expenses(models.Model):
    expense = models.CharField(max_length=128)
    amount = models.DecimalField(max_digits=9, decimal_places=2)
    date = models.DateField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def bought_today(self):
        return self.date >= timezone.make_aware(timezone.now, timezone=None, is_dst=False) - datetime.timedelta(days=1)

    def __str__(self):
        return str(self.date) + ": " + self.expense