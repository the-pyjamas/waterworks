from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

from apps.installations.models import Installation
from apps.installations.filters import InstallationFilter


class InstallationListView(LoginRequiredMixin, View):
    """
    List all installations.

    Methods
        get(GET HTTP).
    """
    template_name = "installations/installations_list.html"

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
            )

            # Redirects user only if user is neither
            # a superuser nor has an authorized role
            if not is_allowed:
                return redirect('accounts:user-dashboard')

        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        """
        Lists all the installations,
        filters them base on the client request, the search filter.
        """
        user = request.user

        if user.role == 'Technician':
            installations = Installation.objects.filter(technician__user_id=user.id)
        elif user.role == 'Vendor':
            installations = Installation.objects.filter(vendor__user_id=user.id)
        else:
            installations = Installation.objects.filter(is_active=True)

        # Search filter according to the 'InstallationFilter'
        filters = InstallationFilter(
            request.GET,
            queryset=installations
        )
        # Remake the quesryset to the requests of the search filters
        installations = filters.qs

        context = {
            "installations": installations,
            "filters": filters
        }
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
