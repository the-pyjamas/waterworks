from django.urls import path

from vendors.views import (
    VendorCreateUserView,
    VendorUpdateUserProfileView,
    VendorCreateView,
    # List and retrieve
    VendorListView,
    VendorRetrieveView
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
    path("<int:vendor_pk>/", VendorRetrieveView.as_view(), name="vendor-retrieve"),
]

urlpatterns = VENDORS_CRUD_URLS
