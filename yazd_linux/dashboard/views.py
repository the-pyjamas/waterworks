from django.shortcuts import render
from django.views import View

from customers.models import Customer


class DashboardView(View):
    template_name = "dashboard/dashboard.html"
    
    def get(self, request):
        last_five_customers = Customer.last_objects(5)

        context = {
            "last_five_customers": last_five_customers
        }
        return render(
            template_name=self.template_name,
            request=request,
            context=context
        )
