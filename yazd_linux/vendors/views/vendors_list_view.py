from django.shortcuts import render
from django.views import View

from vendors.models import Vendor
from vendors.filters import VendorFilter


class VendorListView(View):
    """
    List all vendors.

    Methods
        get(GET HTTP).
    """
    template_name = "vendors/vendors_list.html"

    def get(self, request):
        """
        Lists all the vendors,
        filters them base on the client request, the search filter.
        """
        vendors = Vendor.objects.filter(is_active=True)
        # Search filter according to the 'VendorFilter'
        filters = VendorFilter(
            request.GET,
            queryset=Vendor.objects.all()
        )
        # Remake the quesryset to the requests of the search filters
        vendors = filters.qs

        context = {
            "vendors": vendors,
            "filters": filters
        }
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
