from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages
from django.utils.translation import gettext_lazy as _

from .forms import DeviceCreateForm
from .models import Device


class DeviceCreateView(View):
	"""
	Creating a new device model object.
	Renders the form and validates its sent data
	from the client and then save a new device object.

	Methods:
		dispatch(predecision).
		get (GET HTTP).
		post (POST HTTP).
	"""
	form_class = DeviceCreateForm
	template_name = "devices/device_create.html"

	def dispatch(self, *args, **kwargs):
		"""
		Ensures that the user who creating a new user
		has an appropriate role.
		"""
		user = self.request.user
		is_allowed = (
		    user.is_superuser
		    or user.role == "Admin"
		)

		# Redirects user only if user is neither
		# a superuser nor has an authorized role
		if not is_allowed:
		    return redirect("dashboard:dashboard")

		return super().dispatch(*args, **kwargs)

	def get(self, request):
		"""
		Simply renders the form.
		"""
		form = self.form_class()

		context = {"form": form}
		return render(
			request=request,
			template_name=self.template_name,
			context=context
		)

	def post(self, request):
		"""
		Creating a new device model after checks the form
		data is valid.
		"""
		form = self.form_class(request.POST)

		if form.is_valid():
			# Save the new device model
			form.save()

			messages.success(
			    request=request,
			    message=_(f"Device created successfully."),
			    extra_tags="success"
			)
			return redirect("dashboard:dashboard")
		else:
			messages.error(
			    request=request,
			    message=_("The data you sent are invalid."),
			    extra_tags="danger"
			)

		context = {"form": form}
		return render(
			request=request,
			template_name=self.template_name,
			context=context
		)
