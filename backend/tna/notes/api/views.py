from rest_framework import permissions, status
from rest_framework.exceptions import PermissionDenied
from rest_framework.viewsets import ModelViewSet

from tna.notes.models import Note
from tna.notes.api.serializers import NoteSerializer


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Note.objects.filter(owner=user)
        raise PermissionDenied()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
