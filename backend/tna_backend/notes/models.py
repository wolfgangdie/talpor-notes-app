from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import Truncator

User = get_user_model()


class Note(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return Truncator(self.text).words(5)
