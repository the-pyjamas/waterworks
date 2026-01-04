from django.urls import path

from technicians.views import (
    CreateTechnicianUserView,
    CreateTechnicianView,
    ListTechnicianView
)


app_name = "technicians"

TECHNICIAN_CRUD_URLS = [
    path(
        "create/user/",
        CreateTechnicianUserView.as_view(),
        name="create-technician-user"
    ),
    path("create/", CreateTechnicianView.as_view(), name="create-technician"),
    path("list/", ListTechnicianView.as_view(), name="list-technicians"),
]

urlpatterns = TECHNICIAN_CRUD_URLS
