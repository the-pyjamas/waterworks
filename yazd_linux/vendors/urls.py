from django.urls import path

from vendors.views import (
    VendorCreateUserView,
    VendorUpdateUserProfileView,
    VendorCreateView
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
    )
]

urlpatterns = VENDORS_CRUD_URLS
