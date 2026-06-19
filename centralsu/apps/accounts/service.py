from django.shortcuts import redirect
from django.urls import reverse_lazy

from apps.accounts.models import User


def check_user_registration(user: User, role: str, role_url_namespace: str):
    """
    Check whether an existing user already has the requested role profile.

    This helper is used before creating a new Customer, Vendor, or Technician.
    If the user already exists but the requested role profile does not exist yet,
    the user is redirected to the profile completion page.

    Arguments:
        user (User): Existing user instance.
        role (str): Requested role name. Expected values are
            'customer', 'vendor', or 'technician'.
    """

    # Build URL name dunamically.
    #   customers:customer-create
    #   partners:vendor-create
    #   technicians:technician-create
    redirect_url = f'{role_url_namespace}:{role}-create'

    if user:
        try:
            getattr(user, role)

        except Exception as occurred_exception:
            # Check the current exception if 'relation object does not exist'
            # which raises when the one-to-one role profile does not exist
            if occurred_exception.__class__.__name__ == 'RelatedObjectDoesNotExist':
                return redirect(reverse_lazy(redirect_url))

        # Role profile already exists
        return None
