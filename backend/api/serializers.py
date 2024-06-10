from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'required': True},
        }
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class MultiImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiImagePost
        fields = ('id', 'title', 'description', 'image', 'slug', 'created_at')