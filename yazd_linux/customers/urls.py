from django.urls import path

from customers.views import (
    CreateCustomerUserView,
    CreateCustomerView,
    ListCustomerView
)

app_name = "customers"

CUSTOMER_CRUD_URLS = [
    path(
        "create/user/",
        CreateCustomerUserView.as_view(),
        name="create-customer-user"
    ),
    path("create/", CreateCustomerView.as_view(), name="create-customer"),
    path("list/", ListCustomerView.as_view(), name="list-customers")
]

urlpatterns = CUSTOMER_CRUD_URLS
