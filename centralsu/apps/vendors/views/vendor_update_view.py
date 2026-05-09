from django.urls import reverse_lazy

from apps.common.views import BaseRoleProfileUpdateView
from apps.vendors.models import Vendor
from apps.vendors.forms import VendorUpdateForm


class VendorUpdateView(BaseRoleProfileUpdateView):
    model = Vendor
    role = "Vendor"
    form_class = VendorUpdateForm
    template_name = "vendors/vendor_update.html"
