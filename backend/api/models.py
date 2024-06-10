from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename):
    return 'posts/{filename}'.format(filename=filename)

class MultiImagePost(models.Model):
    user_post = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(_('Image'), upload_to=upload_to, default='posts/default.jpg')
    slug = models.SlugField(max_length=200, unique_for_date='created_at')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title