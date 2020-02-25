from django.contrib.auth import get_user_model

from rest_framework import permissions, status
from rest_framework.decorators import action, permission_classes
from rest_framework.mixins import (
    ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet, ModelViewSet

from rest_framework_simplejwt.tokens import RefreshToken

from tna.users.api.serializers import UserSerializer, UserCreateSerializer

User = get_user_model()


class UserViewSet(RetrieveModelMixin, ListModelMixin, UpdateModelMixin, GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(id=self.request.user.id)

    @action(detail=False, methods=["GET"])
    def me(self, request):
        serializer = UserSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    @action(detail=False, methods=["POST"], permission_classes=[permissions.AllowAny])
    def register(self, request):
        serializer = UserCreateSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

        user = serializer.save()
        token = RefreshToken.for_user(user)

        res = {
            "refresh": str(token),
            "access": str(token.access_token),
        }

        return Response(res, status.HTTP_201_CREATED)
