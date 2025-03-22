from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from accounts.models import CustomUser
from .models import Post

class PostTests(APITestCase):

    def setUp(self):
        # Create a user for testing
        self.user = CustomUser.objects.create_user(
            email='testuser@example.com',
            password='complexpassword123'
        )

    def test_create_post(self):
        self.client.force_authenticate(user=self.user)  # Authenticate the user
        response = self.client.post('/api/posts/', {
            'content': 'This is a test post.',
            'image_url': 'http://example.com/image.jpg'
        })
        self.assertEqual(response.status_code, 201)  # Created status code for API
        self.assertTrue(Post.objects.filter(content='This is a test post.').exists())

    def test_post_list_view(self):
        # Create some test posts
        Post.objects.create(user=self.user, content='Test post 1')
        Post.objects.create(user=self.user, content='Test post 2')
        
        response = self.client.get('/api/posts/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)  # Check that we get both posts

    def test_post_detail_view(self):
        post = Post.objects.create(user=self.user, content='This is a test post.')
        response = self.client.get(f'/api/posts/{post.id}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['content'], 'This is a test post.')
