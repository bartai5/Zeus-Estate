from django.urls import path
from .views import *

urlpatterns = [
    path('user/', UserHomeView.as_view(), name='user-home'),
    path('user/<int:pk>/', userDetailsView.as_view(), name='user-details'),
    path('user/create/', MultiImageView.as_view(), name='user-create'),
    path('posts/', ListPostView.as_view(), name='post-list'),
    path('posts/<int:pk>/', RetrieveUpdateDestroyPostView.as_view(), name='post-details')
]
