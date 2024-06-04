from django.urls import path
from .views import *

urlpatterns = [
    path('user/', UserHomeView.as_view(), name='user-home'),
    path('user/<int:pk>/', userDetailsView.as_view(), name='user-details'),
]
