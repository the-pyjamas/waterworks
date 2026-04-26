from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

from customers.models import Customer
from customers.filters import CustomerFilter


class CustomerListView(LoginRequiredMixin, View):
    """
    List all customers.

    Methods
        get(GET HTTP).
    """
    template_name = "customers/customers_list.html"

    def dispatch(self, request, *args, **kwargs):
        """
		Ensures that the user who creating a new user
		has an appropriate role.
		"""
        user = request.user
        if user.is_authenticated:
            is_allowed = (
                user.is_superuser
                or user.role == 'Admin'
                or user.role == 'Technician'
            )

            # Redirects user only if user is neither
            # a superuser nor has an authorized role
            if not is_allowed:
                return redirect('accounts:user-dashboard')

        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        """
        Lists all the customers,
        filters them base on the client request, the search filter.
        """
        user = request.user

        if user.role == 'Technician':
            customers = Customer.objects.filter(technician__user_id=user.id)
        else:
            customers = Customer.objects.filter(is_active=True)

        # Search filter according to the 'CustomerFilter'
        filters = CustomerFilter(
            request.GET,
            queryset=customers
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
