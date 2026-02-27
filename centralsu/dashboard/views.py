from django.shortcuts import render
from django.views import View

from customers.models import Customer
from technicians.models import Technician
from vendors.models import Vendor
from devices.models import Device


class DashboardView(View):
    template_name = "dashboard/dashboard.html"
    
    def get(self, request):
        # List last five customers
        last_five_customers = Customer.last_objects(5)

        customers_count = Customer.objects.count()
        technicians_count = Technician.objects.count()
        vendors_count = Vendor.objects.count()
        devices_count = Device.objects.count()

        context = {
            "last_five_customers": last_five_customers,
            "customers_count": customers_count,
            "technicians_count": technicians_count,
            "vendors_count": vendors_count,
            "devices_count": devices_count,
        }
        return render(
            template_name=self.template_name,
            request=request,
            context=context
        )
