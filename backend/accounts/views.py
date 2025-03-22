# backend/accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            login(request, user)
            return redirect('login')  # Change this to redirect to the login page
    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/register.html', {'form': form})

from django.contrib.auth.views import LoginView

class CustomLoginView(LoginView):
    template_name = 'accounts/login.html'  # Ensure you have this template
    # You can customize this class further if needed

def home_view(request):
    return render(request, 'accounts/home.html')  # Create a home.html template