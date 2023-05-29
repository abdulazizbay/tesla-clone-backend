
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer,LoginUserSerializer
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework import status

@api_view(["POST"])
@csrf_exempt
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        password2 = request.data['password2']
        if password == password2:
            user = User.objects.create_user(
                username=username, email=email, password=password)
            if user is not None:
                authenticated_user = authenticate(
                    request, username=username, password=password)
                if authenticated_user is not None:
                    authenticated_user.set_password(password)
                    authenticated_user.save()
                    print(authenticated_user)
                    return Response({'status': 'ok'})
                else:
                    return Response({'error': 'Authentication failed'}, status=401)
            else:
                return Response({'error': 'User creation failed'}, status=500)
        else:
            return Response({'error': 'Passwords do not match'}, status=400)
    else:
        return Response(serializer.errors, status=400)







@api_view(["POST"])
@csrf_exempt
def user_login(request):
    serializer = LoginUserSerializer(data=request.data)
    if serializer.is_valid():
        username = request.data['username']
        password = request.data['password']
        user = authenticate(request, username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                if user.is_superuser:
                    return Response({'status': 'admin'})
                elif user.is_staff:
                    return Response({'status': 'staff'})
                else:
                    return Response({'status': 'user'})
            else:
                return Response({'status': 'inactive'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'status': 'invalid_credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
