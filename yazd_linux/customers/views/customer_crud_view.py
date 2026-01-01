from django.utils.translation import gettext_lazy as _

from common.views import BaseUserSoftRegisterView


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
