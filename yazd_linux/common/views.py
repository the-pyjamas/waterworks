from django.shortcuts import render, redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.contrib import messages
from django.utils.translation import gettext_lazy as _
from django.forms import Form, ModelForm
from django.contrib.auth import get_user_model
from django.urls import reverse_lazy

from accounts.forms import UserSoftRegisterForm


User = get_user_model()


class BaseUserSoftRegisterView(LoginRequiredMixin, View):
    """
    Registering a new user by a more soft way.
    Only use for views that will create a new user
    with a special Role (e.g. technician).

    Methods:
        dispatch (predecision).
        form_valid (validation).
        form_invalid (validation).
        get (GET HTTP).
        post (POST HTTP).
    """
    model = User
    form_class = UserSoftRegisterForm
    sucess_url = reverse_lazy("dashboard:dashboard")
    template_name = None
    user_role = None

    def dispatch(self, *args, **kwargs):
        """
        Ensures that the user who creating a new user
        is superuser, admin, or technician.
        """
        user = self.request.user
        if not (user.is_superuser) or not (user.role in ["Admin", "Technician"]):
            return redirect("/")

        return super().dispatch(*args, **kwargs)

    def form_valid(self, form: Form|ModelForm):
        """
        Form validation result.
        The messages should show if the form validated and create user successfully.

        Args:
            form (object): The User Soft Register Form that will be valid in case.
        """
        messages.success(
            request=self.request,
            message=_("User with 'customer' role created successfully."),
            extra_tags="success"
        )

    def form_invalid(self, form: Form|ModelForm):
        """
        Form validation result if the validation failed.
        The message show  if the form will invalid and user had not yet.

        Args:
            form (object): The User Soft Register Form that will be invalid in some cases.
        """
        messages.error(
            request=self.request,
            message=_("The sent data are invalid."),
            extra_tags="danger"
        )

    def get(self, request):
        """
        Renderin the form class simply.
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
        Validates the form data from the client,
        it the form is valid then create a new user
        with the 'Customer' role and showing the message,
        then redirect to the 'success-url'.
        """
        form = self.form_class(request.POST)

        if form.is_valid():
            cleaned_data = form.cleaned_data
            user = User.objects.create_user(
                phone_number=cleaned_data["phone_number"],
                password=cleaned_data["password"],
                role=self.user_role
            )
            # Deactive user until its role profile created
            user.is_active = False
            user.save()

            # Keep created user-id in the session
            # to use it for creating a role object
            # base on created user-role
            request.session["user_role_registered_id"] = user.id
            request.session.modified = True

            self.form_valid(form=form)
            return redirect(self.sucess_url)
        else:
            self.form_invalid(form=form)

        context = {"form": form}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
