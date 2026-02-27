from django.urls import reverse_lazy

from common.views import BaseRoleProfileUpdateView
from vendors.models import Vendor
from vendors.forms import VendorUpdateForm


class VendorUpdateView(BaseRoleProfileUpdateView):
    model = Vendor
    role = "Vendor"
    form_class = VendorUpdateForm
    template_name = "vendors/vendor_update.html"
