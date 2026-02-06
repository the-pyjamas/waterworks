from django.urls import path

from technicians.views import (
    # Creation
    TechnicianCreateUserView,
    TechnicianUpdateUserProfileView,
    TechnicianCreateView,
    # List and Retrieve
    TechnicianListView,
    TechnicianRetrieveView
)


app_name = "technicians"

TECHNICIAN_CRUD_URLS = [
    path(
        "create/user/",
        TechnicianCreateUserView.as_view(),
        name="create-technician-user"
    ),
    path(
        "user/profile/",
        TechnicianUpdateUserProfileView.as_view(),
        name="update-technician-user-profile"
    ),
    path("create/", TechnicianCreateView.as_view(), name="create-technician"),

    path("list/", TechnicianListView.as_view(), name="list-technicians"),
    path("<int:technician_pk>/", TechnicianRetrieveView.as_view(), name="technician-retrieve"),
]

urlpatterns = TECHNICIAN_CRUD_URLS
