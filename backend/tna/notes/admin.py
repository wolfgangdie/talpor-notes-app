from django.contrib import admin

from tna.notes.models import Note


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ["__str__", "owner", "created_at"]
