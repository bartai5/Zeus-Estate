from django.contrib import admin
from django.urls import path, include
from api.views import ListCreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/user/register/', ListCreateUserView.as_view(), name='create-user'),
    path('api/token/', TokenObtainPairView.as_view(), name='get-token'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='refresh-token'),
    path('apu-auth/', include('rest_framework.urls')),
    
    path('api/', include('api.urls')),
]
