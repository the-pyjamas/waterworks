from django.urls import reverse_lazy

from common.views import BaseRoleProfileUpdateView
from customers.models import Customer
from customers.forms import CustomerUpdateForm


class CustomerUpdateView(BaseRoleProfileUpdateView):
    model = Customer
    role = "Customer"
    form_class = CustomerUpdateForm
    template_name = "customers/customer_update.html"
