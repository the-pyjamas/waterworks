from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse_lazy

from phonenumber_field.modelfields import PhoneNumberField

from common.models import BaseModel
from accounts.models import User


class Vendor(BaseModel):
    """
    Model representing a vendor in the e-commerce platform.

    Attributes:
        user (int, O2O): The user who is the owner of this shop profile.
        shop_name (str): The name of the vendor's shop.
        contact_email (str): The contact email address of the vendor.
        contact_phone (PhoneNumber): The contact phone number of the vendor.
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("User")
    )

    shop_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name=_("Seller Shop Name")
    )
    contact_email = models.EmailField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name=_("Contact Email")
    )
    contact_phone = PhoneNumberField(
        region="IR",
        blank=True,
        null=True,
        verbose_name=_("Contact Phone Number")
    )

    class Meta:
        verbose_name = _("Vendor")
        verbose_name_plural = _("Vendors")
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

    @property
    def get_absolute_url(self):
        """
        Mostly use for retrieving a vendor.
        However, it returns a vendor detail but its PK.
        """
        return reverse_lazy(
            'vendors:vendor-retrieve',
            kwargs={'vendor_pk': self.pk}
        )
