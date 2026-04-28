from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


DJANGO_URLS = [
    path('admin/', admin.site.urls),
]
LOCAL_URLS = [
    path("", include("home.urls", namespace="home")),

    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("customers/", include("customers.urls", namespace="customers")),
    path("technicians/", include("technicians.urls", namespace="technicians")),
    path("vendors/", include("vendors.urls", namespace="vendors")),
    path("devices/", include("devices.urls", namespace="devices")),
]

urlpatterns = DJANGO_URLS + LOCAL_URLS

# Add media files and staticfiles paths to the urlpatterns
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
