from django.contrib.auth.models import AbstractUser
from django.db import models

from spendings.models import Expenses

class CustomUser(AbstractUser):
    expense = models.ForeignKey(Expenses, blank=True, null=True, on_delete=models.CASCADE)