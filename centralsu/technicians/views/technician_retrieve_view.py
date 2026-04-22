from django.shortcuts import render, get_object_or_404
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

from technicians.models import Technician


class TechnicianRetrieveView(LoginRequiredMixin, View):
	"""
	Retrieving a technician information,
	It must have showing the detail of a technician(installer).

	Methods:
		get (GET HTTP).
	"""
	template_name = "technicians/technician_retrieve.html"

	def get(self, request, technician_pk: int):
		"""
		Gets the technician's PK and shows its detail.

		Args:
			technician_pk (int): The primary-key of technician.
		"""
		technician = get_object_or_404(Technician, pk=technician_pk)
		technician_customers = technician.customers.all()
		customers_count = len(technician_customers)

		context = {
			"technician": technician,
			"customers": technician_customers,
			"customers_count": customers_count
		}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
