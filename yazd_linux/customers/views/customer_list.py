from django.shortcuts import render
from django.views import View

from customers.models import Customer


class CustomerListView(View):
    """
    List all active customers.
    """
    template_name = "customers/customers_list.html"

    def get(self, request):
        customers = Customer.objects.filter(is_active=True)

        context = {"customers": customers}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
