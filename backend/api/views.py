from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.parsers import MultiPartParser, FormParser
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


class userDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset= User.objects.all()
    persmission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    
# View that handles user registeration
class ListCreateUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class MultiImageView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def post(self, request, format=None):
        data = request.data.copy() # Create a mutable copy of request data
        data['user_post'] = request.user.id  # Set user_post to the current user's ID
        print(request.data)
        serializer = MultiImageSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user_post=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListPostView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MultiImageSerializer
    
    def get_queryset(self):
        return MultiImagePost.objects.filter(user_post=self.request.user)

class RetrieveUpdateDestroyPostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MultiImagePost.objects.all()
    serializer_class = MultiImageSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]  # Add parsers for handling multipart data
    
    def get_queryset(self):
        return self.queryset.filter(user_post=self.request.user)