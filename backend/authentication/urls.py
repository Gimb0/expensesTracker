from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithColorView, CustomUserCreate

from rest_framework import routers
from spendings.views import ExpensesView, CategoryView

router = routers.DefaultRouter()
router.register(r'expenses', ExpensesView, 'expenses')
router.register(r'categories', CategoryView, 'categories')

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('spendings/', include(router.urls)),

    # path('spendings/expenses/', ExpensesView.as_view, name="expenses"),
    # path('spendings/categories/', CategoryView.as_view, name="categories"),
]