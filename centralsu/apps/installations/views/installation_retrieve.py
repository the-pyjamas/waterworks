from django.shortcuts import render, get_object_or_404, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

from apps.installations.models import Installation


class InstallationRetrieveView(LoginRequiredMixin, View):
	"""
	Retrieving a Installation information,
	It must have showing the detail of a Installation.

	Methods:
		get (GET HTTP).
	"""
	template_name = "installations/Installation_retrieve.html"

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
				or user.role == 'Vendor'
				or user.role == 'Customer'
			)

			# Redirects user only if user is neither
			# a superuser nor has an authorized role
			if not is_allowed:
				return redirect('accounts:user-dashboard')

		return super().dispatch(request, *args, **kwargs)

	def get(self, request, Installation_pk: int):
		"""
		Gets the Installation's PK and shows its detail.

		Args:
			Installation_pk (int): The primary-key of Installation.
		"""
		user = request.user
		role = user.role

		if role == 'Technician':
			Installation = Installation.objects.filter(technician__user=user).first()
		elif role == 'Customer':
			Installation = Installation.objects.filter(user=user).first()
		elif role == 'Vendor':
			Installation = Installation.objects.filter(vendor__user=user).first()
		elif role == 'Admin' or user.is_superuser:
			Installation = get_object_or_404(Installation, pk=Installation_pk)

		context = {"Installation": Installation}
		return render(
			request=request,
            template_name=self.template_name,
            context=context
		)
