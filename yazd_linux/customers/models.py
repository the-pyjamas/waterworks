from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel
from vendors.models import Vendor
from technicians.models import Technician
from accounts.models import User


class Customer(BaseModel):
    """
    Represents the customers of the system.
    Involves customers who had the water purifier services.

    Saves the customers information such as the installation date,
    next inspection date, and their contact details, also replacement dates.

    Attributes:
        user (int, O2O): The user who is the customer with the Customer role!
        vendor (int, FK): The vendor who provided the device, if any.
        technician (int, FK): The technician assigned to this customer. Who done the installation.
        description (str): Additional notes or description about the customer.
        installation_date (date): The date that the purifier was installed.
        next_inspection_date (date): The date for the next scheduled inspection or maintenance.
        replacement_date (date): The date when the filter or part was replaced — or should be replaced
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("User")
    )

    vendor = models.ForeignKey(
        Vendor,
        on_delete=models.SET_NULL,
        related_name="vendors",
        null=True,
        blank=True,
        verbose_name=_("Seller"),
        help_text=_("The vendor who provided the device.")
    )
    technician = models.ForeignKey(
        Technician,
        on_delete=models.SET_NULL,
        related_name="customers",
        null=True,
        blank=True,
        verbose_name=_("Technician"),
        help_text=_("The technician assigned to this customer. Who done the installation.")
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("Description")
    )

    installation_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Installation Date")
    )
    next_inspection_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Next Inspection Date")
    )
    replacement_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Replacement Date")
    )

    class Meta:
        verbose_name = _("Customer")
        verbose_name_plural = _("Customers")

    def __str__(self) -> str:
        """
        Returns the user info by checking the important info.
        """
        lastname = self.user.userprofile.last_name or None
        username = self.user.username or None
        phone_number = self.user.phone_number

        if lastname and username:
            return f"{phone_number} - {username} - {lastname}"
        elif lastname and not username:
            return f"{phone_number} - {lastname}"
        elif username and not lastname:
            return f"{phone_number} - {username}"
        else:
            return f"{phone_number}"
