from django.shortcuts import render, get_object_or_404
from django.views import View

from vendors.models import Vendor


class VendorRetrieveView(View):
	"""
	Retrieving a vendor information,
	It must have showing the detail of a vendor.

	Methods:
		get (GET HTTP).
	"""
	template_name = "vendors/vendor_retrieve.html"

	def get(self, request, vendor_pk: int):
		"""
		Gets the vendor's PK and shows its detail.

		Args:
			vendor_pk (int): The primary-key of vendor.
		"""
		vendor = get_object_or_404(Vendor, pk=vendor_pk)

		context = {"vendor": vendor}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
