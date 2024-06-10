from django.contrib import admin
from .models import *

db_list = [MultiImagePost]

admin.site.register(db_list)
