from django.shortcuts import render
from django.views import View

from customers.models import Customer
from customers.filters import CustomerFilter


class CustomerListView(View):
    """
    List all customers.

    Methods
        get(GET HTTP).
    """
    template_name = "customers/customers_list.html"

    def get(self, request):
        """
        Lists all the customers,
        filters them base on the client request, the search filter.
        """
        customers = Customer.objects.filter(is_active=True)
        # Search filter according to the 'CustomerFilter'
        filters = CustomerFilter(
            request.GET,
            queryset=Customer.objects.all()
        )
        # Remake the quesryset to the requests of the search filters
        customers = filters.qs

        context = {
            "customers": customers,
            "filters": filters
        }
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
