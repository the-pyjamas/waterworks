from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.crypto import get_random_string
from django.urls import reverse_lazy

from dateutil.relativedelta import relativedelta

from common.models import BaseModel
from vendors.models import Vendor
from technicians.models import Technician
from accounts.models import User
from devices.models import Device


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
        customer_code (char): Unqiue generated code for customer to verify it.
        description (str): Additional notes or description about the customer.
        installation_date (date): The date that the purifier was installed.
        next_inspection_date (date): The date for the next scheduled inspection or maintenance.
        replacement_dates (1, 2, 3, 4) (date): The date when the filter or part was replaced — or should be replaced
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("User")
    )

    vendor = models.ForeignKey(
        Vendor,
        on_delete=models.SET_NULL,
        related_name="customers",
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
    customer_code = models.CharField(
        max_length=6,
        unique=True,
        null=True,
        blank=True,
        verbose_name=_("Customer Code")
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("Description")
    )
    device = models.ForeignKey(
        Device,
        on_delete=models.SET_NULL,
        related_name='customers',
        null=True,
        blank=True,
        verbose_name=_("Device")
    )
    installation_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Installation Date")
    )

    # Replacement dates
    first_replacement_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("First Replacement Date")
    )
    second_replacement_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Second Replacement Date")
    )
    third_replacement_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Third Replacement Date")
    )
    forth_replacement_date = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("Forth Replacement Date")
    )
    # Replacement dates ststus
    first_replacement_status = models.BooleanField(
        default=False,
        verbose_name=_("First Replacement Status")
    )
    second_replacement_status = models.BooleanField(
        default=False,
        verbose_name=_("Second Replacement Status")
    )
    third_replacement_status = models.BooleanField(
        default=False,
        verbose_name=_("Third Replacement Status")
    )
    forth_replacement_status = models.BooleanField(
        default=False,
        verbose_name=_("Forth Replacement Status")
    )

    class Meta:
        verbose_name = _("Customer")
        verbose_name_plural = _("Customers")
        ordering = ['-created_at']

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

    def save(self, *args, **kwargs):
        """
        Override the save method.
        If the target object is new, then generate
        an unique code for the customer in 'customer-code' field,
        and also automatically save the replacement-dates properly.
        """
        is_new = self.pk is None

        if is_new:
            self.customer_code_generator()

            if self.installation_date:
                self.save_replacement_dates()

        super().save(*args, **kwargs)


    def customer_code_generator(self) -> None:
        """
        Generates a unique code with length 6
        for a customer as a customer code.
        """
        length = 6
        generated_string = get_random_string(length)
        self.customer_code = generated_string

    def save_replacement_dates(self) -> None:
        """
        Save replacement dates automatically after calling the method.
        Uses 'relativedelta' to change dates properly.
        """
        first = self.installation_date + relativedelta(months=6)
        second = self.installation_date + relativedelta(years=1)
        third = self.installation_date + relativedelta(years=1, months=6)
        forth = self.installation_date + relativedelta(years=2)

        self.first_replacement_date = first
        self.second_replacement_date = second
        self.third_replacement_date = third
        self.forth_replacement_date = forth

    @property
    def get_absolute_url(self):
        """
        Mostly use for retrieving a customer.
        However, it returns a customer detail but its PK.
        """
        return reverse_lazy(
            'customers:customer-retrieve',
            kwargs={'customer_pk': self.pk}
        )

    @classmethod
    def last_objects(cls, length: int):
        customers = cls.objects.all()[:length]

        return customers
