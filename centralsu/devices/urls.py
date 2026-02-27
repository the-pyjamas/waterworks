from django.urls import path

from .views import DeviceCreateView


app_name = "devices"

CRUD_URLS = [
	path("create/", DeviceCreateView.as_view(), name="device-create"),
]
urlpatterns = CRUD_URLS
