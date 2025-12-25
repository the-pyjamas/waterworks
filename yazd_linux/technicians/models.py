from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel
from accounts.models import User


class Technician(BaseModel):
    """
    Model representing a technician with personal and contact information.

    Attributes:
        user (int, O2O): The user who is the customer. This profile belongs to it.
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("User")
    )

    class Meta:
        verbose_name = _("Technician")
        verbose_name_plural = _("Technicians")

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
