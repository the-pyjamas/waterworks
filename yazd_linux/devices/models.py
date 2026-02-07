from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel


class Device(BaseModel):
	"""
	Represents to the devices that Linux Project provide.

	Attributes:
		name (str): The original name of the device.		
		model (str): The model of the device.		
	"""
	name = models.CharField(
		max_length=50,
		verbose_name=_("Name")
	)
	model = models.CharField(
		max_length=50,
		verbose_name=_("Model")
	)

	class Meta:
		verbose_name = _("Device")
		verbose_name_plural = _("Devices")

	def __str__(self) -> str:
		return f"{self.name} - {self.model}"
