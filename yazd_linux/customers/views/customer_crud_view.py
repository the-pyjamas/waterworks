from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.contrib import messages
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from common.views import BaseUserSoftRegisterView
from customers.forms import CreateCustomerForm


User = get_user_model()


class CreateCustomerUserView(BaseUserSoftRegisterView):
    """
    Creates a new user to create a new customer base on the user object.
    Only the admin and technician roles be able to
    do this, creating a new customer object means
    creating a new user with `Customer` role.

    Requests:
        GET (HTTP).
        POST (HTTP).
    """
    template_name = "customers/create_customer_user.html"
    user_role = "Customer"
    sucess_url = reverse_lazy("customers:create-customer")


class CreateCustomerView(LoginRequiredMixin, View):
    """
    Creating a new customer base on the user recently
    created with Customer role.

    Methods:
        dispatch (predecision).
        get (GET HTTP).
        post (POST HTTP).
    """
    form_class = CreateCustomerForm
    template_name = "customers/create_customer.html"

    def dispatch(self, *args, **kwargs):
        """
        Ensures that the user who creating a new user
        is superuser, admin, or technician.
        """
        user = self.request.user
        if not (user.is_superuser) or not (user.role in ["Admin", "Technician"]):
            return redirect("/")

        return super().dispatch(*args, **kwargs)

    def get(self, request):
        """
        Rendering the customer creation form.
        """
        form = self.form_class()

        context = {"form": form}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )

    def post(self, request):
        form = self.form_class(request.POST)
        user_id = request.session.get("user_role_registered_id")

        if not user_id:
            messages.error(
                request=request,
                message=_("No user found for customer creation."),
                extra_tags="danger"
            )
            return redirect("/")

        user = User.objects.get(id=user_id)

        if form.is_valid():
            customer = form.save(commit=False)
            customer.user = user
            user.is_active = True
            customer.save()
            user.save()

            del request.session["user_role_registered_id"]

            messages.success(
                request=request,
                message=_("Customer created successfully."),
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
