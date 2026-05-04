from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel


class Device(BaseModel):
	"""
	Represents to the devices that Linux Project provide.

	Attributes:
		name (str): The original name of the device.		
		model (str): The model of the device.
		installed_count (int, unsigned): Installation count of the device.
		is_exists (bool): Existence status of the device.
	"""
	name = models.CharField(
		max_length=50,
		verbose_name=_('Name')
	)
	model = models.CharField(
		max_length=50,
		verbose_name=_('Model')
	)
	installed_count = models.PositiveIntegerField(
		default=0,
		verbose_name=_('Installed Count')
	)
	is_exists = models.BooleanField(
		default=True,
		verbose_name=_('Existence Status')
	)
	guarantee = models.PositiveIntegerField(
		null=True,
		blank=True,
		verbose_name=_('Guarantee'),
		help_text=_('گارانتی دستگاه‌ را به ماه وارد کنید. (مثال: ۲۴)')
	)

	class Meta:
		verbose_name = _('Device')
		verbose_name_plural = _('Devices')
		ordering = ['-created_at']

	def __str__(self) -> str:
		return f"{self.name} - {self.model}"

	@classmethod
	def most_installation(cls, length: int):
		devices = cls.objects.filter(
			is_active=True).order_by('-installed_count')[:length]

		return devices
