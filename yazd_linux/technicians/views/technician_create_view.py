from django.shortcuts import render, redirect
from django.views import View
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

from common.views import (
    BaseUserSoftRegisterView,
    BaseUserProfileSoftUpdateView,
    BaseRoleProfileCreateView
)
from technicians.forms import CreateTechnicianForm
from technicians.models import Technician


class CreateTechnicianUserView(BaseUserSoftRegisterView):
    """
    Creates a new user to create a new technician base on the user object.
    Only the admin role be able to do this,
    creating a new technician object means creating a new user with `Technician` role.
    """
    success_url = reverse_lazy("technicians:update-technician-user-profile")
    template_name = "technicians/create_technician_user.html"
    user_role = "Technician"
    authorized_roles = ("Admin",)


class UpdateTechnicianUserProfileView(BaseUserProfileSoftUpdateView):
    """
    Updating and make created user's profile complete.
    User personal info, the user who has just created
    softly with the Technician role.
    """
    success_url = reverse_lazy("technicians:create-technician")
    template_name = "technicians/update_technician_user_profile.html"
    authorized_roles = ("Admin",)


class CreateTechnicianView(BaseRoleProfileCreateView):
    """
    Creating a new technician base on the user recently
    created with Technician role.
    Only users who authorized as Admin be able to do it.
    """
    success_url = reverse_lazy("technicians:list-technicians")
    form_class = CreateTechnicianForm
    template_name = "technicians/create_technician.html"
    user_role = "Technician"
    authorized_roles = ("Admin",)
