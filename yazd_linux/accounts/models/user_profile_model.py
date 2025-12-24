from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel
from accounts.models import User


class UserProfile(BaseModel):
    """
    Represents to the Users Profiles.
    Basic information of users with different roles.

    Attributes:
        user (int, O2O): The user who is the owner of this profile.
        first_name (str): Provides user's first-name.
        last_name (str): Provides user's last name.
        address (str): Provides user's home address.
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("User"),
        help_text=_("User who is the owner of this profile.")
    )
    first_name = models.CharField(
        max_length=30,
        null=True,
        blank=True,
        verbose_name=_("First name")
    )
    last_name = models.CharField(
        max_length=30,
        null=True,
        blank=True,
        verbose_name=_("Last name")
    )
    address = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("Address")
    )

    class Meta:
        verbose_name = _("User Profile")
        verbose_name_plural = _("Users Profiles")

    def __str__(self) -> str:
        return f"{self.user}"
