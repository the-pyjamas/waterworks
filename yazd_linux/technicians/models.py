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

    # def __str__(self):
    #     return f"{self.user.userprofile.first_name} {self.user.last_name}"
