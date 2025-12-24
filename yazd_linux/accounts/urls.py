from django.urls import path

from accounts.views import (
    UserLoginView,
    UserRegisterView,
    UserLogoutView
)


app_name = "accounts"

AUTHENTICATION_URLS = [
    path("login/", UserLoginView.as_view(), name="user-login"),
    path("register/", UserRegisterView.as_view(), name="user-register"),
    path("logout/", UserLogoutView.as_view(), name="user-logout"),
]

urlpatterns = AUTHENTICATION_URLS
