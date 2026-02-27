from django.urls import path

from customers.views import (
    # Creation
    CustomerCreateUserView,
    CustomerUpdateUserProfileView,
    CustomerCreateView,
    # Updating
    CustomerUpdateView,
    # List and retrieve
    CustomerListView,
    CustomerRetrieveView
)

app_name = "customers"

CUSTOMER_CRUD_URLS = [
    # Creations
    path(
        "create/user/",
        CustomerCreateUserView.as_view(),
        name="customer-create-user"
    ),
    path(
        "user/profile/",
        CustomerUpdateUserProfileView.as_view(),
        name="customer-update-user-profile"
    ),
    path("create/", CustomerCreateView.as_view(), name="customer-create"),

    # Updating
    path(
        "<int:instance_pk>/update/",
        CustomerUpdateView.as_view(),
        name="customer-update"
    ),

    # List and Retrieve
    path("list/", CustomerListView.as_view(), name="customers-list"),
    path("<int:customer_pk>/", CustomerRetrieveView.as_view(), name="customer-retrieve")
]

urlpatterns = CUSTOMER_CRUD_URLS
