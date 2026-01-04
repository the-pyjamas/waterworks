from django.shortcuts import render, redirect
from django.views import View
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

from common.views import (
    BaseUserSoftRegisterView,
    BaseRoleProfileCreateView
)
from technicians.forms import CreateTechnicianForm
from technicians.models import Technician


class CreateTechnicianUserView(BaseUserSoftRegisterView):
    """
    Creates a new user to create a new customer base on the user object.
    Only the admin and technician roles be able to
    do this, creating a new customer object means
    creating a new user with `Customer` role.

    Requests:
        GET (HTTP).
        POST (HTTP).
    """
    template_name = "technicians/create_technician_user.html"
    user_role = "Technician"
    sucess_url = reverse_lazy("technicians:create-technician")
    authorized_roles = ("Admin",)


class CreateTechnicianView(BaseRoleProfileCreateView):
    """
    Creating a new technician base on the user recently
    created with Technician role.
    Only users who authorized as Admin be able to do it.
    """
    form_class = CreateTechnicianForm
    template_name = "technicians/create_technician.html"
    user_role = "Technician"
    sucess_url = reverse_lazy("technicians:list-technicians")
    authorized_roles = ("Admin",)


class ListTechnicianView(View):
    """
    List all active technicians.
    """
    template_name = "technicians/list_technicians.html"

    def get(self, request):
        technicians = Technician.objects.filter(is_active=True)

        context = {"technicians": technicians}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
