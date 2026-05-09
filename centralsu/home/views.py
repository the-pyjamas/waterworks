from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

from customers.models import Customer
from technicians.models import Technician
from vendors.models import Vendor
from devices.models import Device


class MainHomeView(TemplateView):
    """
    Renders the main home page template with
    the custom contexts.

    Methods:
        get_context_data: Defines custom context.
    """
    template_name =  "home/main_home.html"

    def get_context_data(self, **kwargs):
        """
        Lists of last objects from the selected model.
        List the count of all roles and devices.
        """
        context = super().get_context_data(**kwargs)

        # List of last objects
        context['last_five_customers'] = Customer.last_objects(5)
        context['last_three_devices'] = Device.most_installation(3)

        # Number of objects
        context['customers_count'] = Customer.objects.count()
        context['technicians_count'] = Technician.objects.count()
        context['vendors_count'] = Vendor.objects.count()
        context['devices_count'] = Device.objects.count()

        return context
