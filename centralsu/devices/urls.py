from django.urls import path

from .views import DeviceCreateView, DevicesListView


app_name = "devices"

CRUD_URLS = [
	path("create/", DeviceCreateView.as_view(), name="device-create"),
	path("list/", DevicesListView.as_view(), name="devices-list"),
]
urlpatterns = CRUD_URLS
