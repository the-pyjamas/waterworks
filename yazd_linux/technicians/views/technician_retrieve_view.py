from django.shortcuts import render, get_object_or_404
from django.views import View

from technicians.models import Technician


class TechnicianRetrieveView(View):
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

		context = {"technician": technician}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
