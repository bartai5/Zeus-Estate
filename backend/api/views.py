from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .serializers import *

# View for the root page
class UserHomeView(APIView):
    permission_classes= [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        data = serializer.data
        data['is_staff'] = user.is_staff
        return Response(data, status=status.HTTP_200_OK)


# View that handles user registeration
class ListCreateUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
