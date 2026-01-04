from django.shortcuts import render
from django.views import View
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from common.views import (
    BaseUserSoftRegisterView,
    BaseRoleProfileCreateView
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
    template_name = "customers/create_customer_user.html"
    user_role = "Customer"
    sucess_url = reverse_lazy("customers:create-customer")
    authorized_roles = ("Admin", "Technician")


class CreateCustomerView(BaseRoleProfileCreateView):
    """
    Creating a new customer base on the user recently
    created with Customer role.
    Only users who authorized as Admin and Technician be able to do it.
    """
    form_class = CreateCustomerForm
    template_name = "customers/create_customer.html"
    user_role = "Customer"
    sucess_url = reverse_lazy("customers:list-customers")
    authorized_roles = ("Admin", "Technician")


class ListCustomerView(View):
    """
    List all active customers.
    """
    template_name = "customers/list_customers.html"

    def get(self, request):
        customers = Customer.objects.filter(is_active=True)

        context = {"customers": customers}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
