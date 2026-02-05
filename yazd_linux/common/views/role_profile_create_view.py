from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.contrib import messages
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

User = get_user_model()


class BaseRoleProfileCreateView(LoginRequiredMixin, View):
    """
    Creating a new role profile base on the user recently
    created(BaseUserSoftRegisterView) with the role.

    Methods:
        dispatch (predecision).
        get (GET HTTP).
        post (POST HTTP).
    """
    form_class = None
    template_name = None
    success_url = reverse_lazy("dashboard:dashboard")
    user_role = None
    authorized_roles: tuple[str, ...] = ()

    def dispatch(self, *args, **kwargs):
        """
        Ensures that the user who creating a new user
        is one of the authorized users.
        """
        user = self.request.user
        is_allowed = (
            user.is_superuser
            or user.role in self.authorized_roles
        )

        if not is_allowed:
            return redirect("dashboard:dashboard")

        return super().dispatch(*args, **kwargs)

    def get(self, request):
        """
        Rendering the role profile creation form.
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
        Getting created user with the role created
        and create a role profile (e.g. Customer) for the user.
        Activate user after its role profile created successfully,
        and then delete the session which contains the created user-id.
        """
        form = self.form_class(request.POST)
        # Get user-id from the session
        user_id = request.session.get("user_role_registered_id")

        # Check if there's not any user with the user-id
        # render an error message and redirect user to the dashboard
        if not user_id:
            messages.error(
                request=request,
                message=_(f"No user found for {self.user_role} creation."),
                extra_tags="danger"
            )
            return redirect("dashboard:dashboard")

        # Get the created user object
        user = User.objects.get(id=user_id)

        if form.is_valid():
            # Saves the new user role profile object but with no commiting to DB,
            # activate the user role and save both
            role = form.save(commit=False)
            role.user = user
            user.is_active = True
            # Saves the role and user both
            role.save()
            user.save()

            # Clean the sessions
            del request.session["user_role_registered_id"]

            messages.success(
                request=request,
                message=_(f"{self.user_role} created successfully."),
                extra_tags="success"
            )
            return redirect(self.success_url)
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
