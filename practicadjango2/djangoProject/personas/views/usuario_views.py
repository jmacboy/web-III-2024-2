from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.shortcuts import redirect, render

from personas.forms.login_form import LoginForm


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user is not None:
                login(request, user)
                request.session['user_mail'] = user.email
                return redirect('home')
    else:
        form = LoginForm()
    return render(request, 'personas/usuario/login.html', {'form': form})


def logout_view(request):
    if request.user.is_authenticated:
        request.session.flush()
    return redirect('login')

# def register_view(request):
#     if request.method == 'POST':
#         form = RegisterForm(request.POST)
#         if form.is_valid():
#             user = User.objects.create_user(
#                 username=form.cleaned_data['username'],
#                 email=form.cleaned_data['email'],
#                 password=form.cleaned_data['password']
#             )
#             user.save()
#             return redirect('login')
#     else:
#         form = RegisterForm()
#     return render(request, 'personas/usuario/register.html', {'form': form})
