from django.db import models
from django.utils.translation import gettext_lazy as _

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
        ordering = ["name"]

    # def __str__(self):
    #     return self.name
