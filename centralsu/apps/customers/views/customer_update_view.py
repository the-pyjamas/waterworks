from django.urls import reverse_lazy

from apps.common.views import BaseRoleProfileUpdateView
from apps.customers.models import Customer
from apps.customers.forms import CustomerUpdateForm


class CustomerUpdateView(BaseRoleProfileUpdateView):
    model = Customer
    role = "Customer"
    form_class = CustomerUpdateForm
    template_name = "customers/customer_update.html"
