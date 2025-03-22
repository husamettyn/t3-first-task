from django.urls import path
from .views import PostViewSet  # Assuming you have a viewset for posts
from . import views

urlpatterns = [
    path('create/', PostViewSet.as_view({'post': 'create'}), name='create_post'),  # Adjust based on your viewset
    path('', views.post_list_view, name='post_list'),
    path('<int:pk>/', PostViewSet.as_view({'get': 'retrieve'}), name='post_detail'),  # Detail view
] 