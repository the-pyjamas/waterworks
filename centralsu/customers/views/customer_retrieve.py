from django.shortcuts import render, get_object_or_404
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

from customers.models import Customer


class CustomerRetrieveView(LoginRequiredMixin, View):
	"""
	Retrieving a customer information,
	It must have showing the detail of a customer.

	Methods:
		get (GET HTTP).
	"""
	template_name = "customers/customer_retrieve.html"

	def get(self, request, customer_pk: int):
		"""
		Gets the customer's PK and shows its detail.

		Args:
			customer_pk (int): The primary-key of customer.
		"""
		customer = get_object_or_404(Customer, pk=customer_pk)

		context = {"customer": customer}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
