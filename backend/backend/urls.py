from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from posts.views import PostViewSet
from accounts.views import home_view  # Import your home view

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', home_view, name='home'),  # Add this line for the home route
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('posts/', include('posts.urls')),  # Include the posts URLs
    path('api/', include(router.urls)),  # API endpoints
]