from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from common.views import (
    BaseUserSoftRegisterView,
    BaseRoleProfileCreateView,
    BaseUserProfileSoftUpdateView
)
from customers.forms import CustomerCreateForm


User = get_user_model()


class CustomerCreateUserView(BaseUserSoftRegisterView):
    """
    Creates a new user to create a new customer base on the user object.
    Only the admin and technician roles be able to
    do this, creating a new customer object means
    creating a new user with `Customer` role.
    """
    success_url = reverse_lazy("customers:customer-update-user-profile")
    template_name = "customers/customer_create_user.html"
    user_role = "Customer"
    authorized_roles = ("Admin", "Technician")


class CustomerUpdateUserProfileView(BaseUserProfileSoftUpdateView):
    """
    Updating and make created user's profile complete.
    User personal info, the user who has just created
    softly with the Customer role.
    """
    success_url = reverse_lazy("customers:customer-create")
    template_name = "customers/customer_update_user_profile.html"
    authorized_roles = ("Admin", "Technician")


class CustomerCreateView(BaseRoleProfileCreateView):
    """
    Creating a new customer base on the user recently
    created with Customer role.
    Only users who authorized as Admin and Technician be able to do it.
    """
    form_class = CustomerCreateForm
    success_url = reverse_lazy("customers:customers-list")
    template_name = "customers/customer_create.html"
    user_role = "Customer"
    authorized_roles = ("Admin", "Technician")
