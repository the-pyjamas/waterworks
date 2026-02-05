from django.urls import path

from customers.views import (
    CreateCustomerUserView,
    CreateCustomerView,
    UpdateCustomerUserView,
    ListCustomerView
)

app_name = "customers"

CUSTOMER_CRUD_URLS = [
    path(
        "create/user/",
        CreateCustomerUserView.as_view(),
        name="create-customer-user"
    ),
    path(
        "user/profile/",
        UpdateCustomerUserView.as_view(),
        name="update-customer-user-profile"
    ),

    path("create/", CreateCustomerView.as_view(), name="create-customer"),
    path("list/", ListCustomerView.as_view(), name="list-customers")
]

urlpatterns = CUSTOMER_CRUD_URLS
