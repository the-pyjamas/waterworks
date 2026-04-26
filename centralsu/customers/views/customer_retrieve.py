from django.shortcuts import render, get_object_or_404, redirect
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

	def dispatch(self, request, *args, **kwargs):
		"""
		Ensures that the user who creating a new user
		has an appropriate role.
		"""
		user = request.user
		if user.is_authenticated:
			is_allowed = (
				user.is_superuser
				or user.role == 'Admin'
				or user.role == 'Technician'
				or user.role == 'Customer'
			)

			# Redirects user only if user is neither
			# a superuser nor has an authorized role
			if not is_allowed:
				return redirect('accounts:user-dashboard')

		return super().dispatch(request, *args, **kwargs)

	def get(self, request, customer_pk: int):
		"""
		Gets the customer's PK and shows its detail.

		Args:
			customer_pk (int): The primary-key of customer.
		"""
		user = request.user
		role = user.role

		if role == 'Technician':
			customer = Customer.objects.filter(technician__user=user).first()
		elif role == 'Customer':
			customer = Customer.objects.filter(user=user).first()
		elif role == 'Admin' or user.is_superuser:
			customer = get_object_or_404(Customer, pk=customer_pk)

		context = {"customer": customer}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
