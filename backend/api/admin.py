from django.contrib import admin
from .models import Post, PostImages

admin.site.register([Post, PostImages])
