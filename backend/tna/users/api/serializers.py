from django.contrib.auth import password_validation

from rest_framework import serializers

from tna.users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "name", "url"]

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "username"}
        }


class UserCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    email = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True,
                                     style={"input_type": "password"})

    passwordr = serializers.CharField(write_only=True, required=True,
                                      style={"input_type": "password"},
                                      label="Confirm password")

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
            "passwordr",
        ]

    def create(self, validated_data):
        username = validated_data["username"]
        email = validated_data["email"]
        password = validated_data["password"]
        passwordr = validated_data["passwordr"]

        if (email and User.objects.filter(email=email).exists()):
            raise serializers.ValidationError(
                {"email": ["This email address is already registered."]})

        if password != passwordr:
            raise serializers.ValidationError(
                {"password_mismatch": ["The two password fields didn't match."]})

        user = User(username=username, email=email)
        user.set_password(password)
        user.save()

        return user

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value
