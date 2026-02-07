from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


DJANGO_URLS = [
    path('admin/', admin.site.urls),
]
LOCAL_URLS = [
    path("", include("dashboard.urls", namespace="dashboard")),

    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("customers/", include("customers.urls", namespace="customers")),
    path("technicians/", include("technicians.urls", namespace="technicians")),
    path("devices/", include("devices.urls", namespace="devices")),
]

urlpatterns = DJANGO_URLS + LOCAL_URLS

# Add media files path to the urlpatterns
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
