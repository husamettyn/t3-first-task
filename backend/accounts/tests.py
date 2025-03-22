from django.test import TestCase
from django.urls import reverse
from accounts.models import CustomUser

class AccountsTests(TestCase):

    def test_register_view(self):
        response = self.client.get(reverse('register'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'accounts/register.html')

    def test_register_user(self):
        response = self.client.post(reverse('register'), {
            'email': 'testuser@example.com',
            'password1': 'complexpassword123',
            'password2': 'complexpassword123'
        })
        self.assertEqual(response.status_code, 302)  # Redirect after successful registration
        self.assertTrue(CustomUser.objects.filter(email='testuser@example.com').exists())

    def test_login_view(self):
        # First, create a user
        self.client.post(reverse('register'), {
            'email': 'testuser@example.com',
            'password1': 'complexpassword123',
            'password2': 'complexpassword123'
        })
        # Now, test the login
        response = self.client.post(reverse('login'), {
            'username': 'testuser@example.com',
            'password': 'complexpassword123'
        })
        self.assertEqual(response.status_code, 302)  # Redirect after successful login

    def test_home_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'accounts/home.html')