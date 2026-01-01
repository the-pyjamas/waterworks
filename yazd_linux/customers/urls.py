from django.urls import path

from customers.views import (
    CreateCustomerUserView
)

app_name = "customers"

CUSTOMER_CRUD_URLS = [
    path(
        "create/",
        CreateCustomerUserView.as_view(),
        name="create-customer-user"
    )
]

urlpatterns = CUSTOMER_CRUD_URLS
