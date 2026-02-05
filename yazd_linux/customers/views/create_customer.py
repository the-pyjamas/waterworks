from django.shortcuts import render
from django.views import View
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from common.views import (
    BaseUserSoftRegisterView,
    BaseRoleProfileCreateView,
    BaseUserProfileSoftUpdateView
)
from customers.forms import CreateCustomerForm
from customers.models import Customer


User = get_user_model()


class CreateCustomerUserView(BaseUserSoftRegisterView):
    """
    Creates a new user to create a new customer base on the user object.
    Only the admin and technician roles be able to
    do this, creating a new customer object means
    creating a new user with `Customer` role.
    """
    success_url = reverse_lazy("customers:update-customer-user-profile")
    template_name = "customers/create_customer_user.html"
    user_role = "Customer"
    authorized_roles = ("Admin", "Technician")


class UpdateCustomerUserView(BaseUserProfileSoftUpdateView):
    """
    Updating and make created user's profile complete.
    User personal info, the user who has just created
    softly with the Customer role.
    """
    success_url = reverse_lazy("customers:create-customer")
    template_name = "customers/customer_user_profile_update.html"
    authorized_roles = ("Admin", "Technician")


class CreateCustomerView(BaseRoleProfileCreateView):
    """
    Creating a new customer base on the user recently
    created with Customer role.
    Only users who authorized as Admin and Technician be able to do it.
    """
    form_class = CreateCustomerForm
    success_url = reverse_lazy("customers:list-customers")
    template_name = "customers/create_customer.html"
    user_role = "Customer"
    authorized_roles = ("Admin", "Technician")
