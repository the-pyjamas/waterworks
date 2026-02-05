from django.urls import path

from customers.views import (
    CreateCustomerUserView,
    CreateCustomerView,
    UpdateCustomerUserView,
    ListCustomerView,
    RetrieveCustomerView
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
    path("list/", ListCustomerView.as_view(), name="list-customers"),
    path("<int:customer_pk>/", RetrieveCustomerView.as_view(), name="retrieve-customer")
]

urlpatterns = CUSTOMER_CRUD_URLS
