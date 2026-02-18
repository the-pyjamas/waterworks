from django.urls import path

from vendors.views import (
    VendorCreateUserView,
    VendorUpdateUserProfileView,
    VendorCreateView,
    # List and retrieve
    VendorListView
)

app_name = "vendors"

VENDORS_CRUD_URLS = [
    path(
        "create/user/",
        VendorCreateUserView.as_view(),
        name="vendor-create-user"
    ),
    path(
        "user/profile/",
        VendorUpdateUserProfileView.as_view(),
        name="vendor-update-user-profile"
    ),
    path(
        "create/",
        VendorCreateView.as_view(),
        name="vendor-create"
    ),
    path("list/", VendorListView.as_view(), name="vendors-list"),
]

urlpatterns = VENDORS_CRUD_URLS
