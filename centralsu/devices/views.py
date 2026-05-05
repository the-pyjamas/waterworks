from django.shortcuts import redirect
from django.views.generic import (
	ListView,
	FormView,
	DetailView
)
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.utils.translation import gettext_lazy as _

from .forms import DeviceCreateForm
from .models import Device


class DeviceCreateView(LoginRequiredMixin, FormView):
	"""
	Creating a new device model object.
	Renders the form and validates its sent data
	from the client and then save a new device object.

	Methods:
		dispatch (predecision).
		form_valid (Base View Method).
	"""
	form_class = DeviceCreateForm
	template_name = 'devices/device_create.html'
	success_url = 'devices:devices-list'

	def dispatch(self, request, *args, **kwargs):
		"""
		Ensures that the user who creating a new user
		has an appropriate role.
		"""
		user = request.user
		is_allowed = (
		    user.is_superuser
		    or user.role == "Admin"
		)

		# Redirects user only if user is neither
		# a superuser nor has an authorized role
		if not is_allowed:
			return redirect('devices:devices-list')
		
		return super().dispatch(request, *args, **kwargs)

	def form_valid(self, form):
		"""
		Called when form validated,
		saves the form data and showing a success message.
		Redirects to the devices list.
		"""
		form.save()

		messages.success(
			request=self.request,
			message=_(f"Device created successfully."),
			extra_tags="success"
		)
		return redirect("devices:devices-list")


class DevicesListView(ListView):
	"""
	Lists all devices.
	"""
	model = Device
	queryset = Device.objects.all().order_by('-created_at')
	template_name = 'devices/devices_list.html'


class DeviceDetailView(DetailView):
	"""
	Retrieving a device detail.
	Reads it by its ID and SLUG field.
	"""
	model = Device
	slug_url_kwarg = 'device_slug'
	pk_url_kwarg = 'device_pk'
