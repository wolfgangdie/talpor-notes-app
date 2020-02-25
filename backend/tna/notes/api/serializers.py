from rest_framework import serializers

from tna.notes.models import Note


class NoteSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%d-%m-%Y %I:%M %p", read_only=True)

    class Meta:
        fields = ["id", "text", "created_at"]
        model = Note
