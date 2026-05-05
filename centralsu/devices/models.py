from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import BaseModel
from common.utils import path_with_hash


def banner_path(instance, filename: str) -> str:
	"""
	Uploads the device banner/image file with a hash
	method to encrypting the file.
	"""
	return f"devices/{path_with_hash(filename)}"


class Device(BaseModel):
	"""
	Represents to the devices that Linux Project provide.

	Attributes:
		name (str): The original name of the device.		
		model (str): The model of the device.
		installed_count (int, unsigned): Installation count of the device.
		guarantee (int): The months device guaranteed.
		stock_quantity (int): The stock, invenroty of the device.
		is_in_stock (bool): The availability status of device.
		image (str, file): Device's banner, encrypting with path-to-hash method.
		slug (str): Device slug wich filled by name and model of device.
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
	guarantee = models.PositiveIntegerField(
		null=True,
		blank=True,
		verbose_name=_('Guarantee'),
		help_text=_('ماه وارد کنید (مثال: ۲۴)')
	)
	stock_quantity = models.PositiveIntegerField(
		null=True,
		blank=True,
		verbose_name=_('Stock Quantity'),
		help_text=_('تعداد موجودی (برای سایت)')
	)
	is_in_stock = models.BooleanField(
		default=True,
		verbose_name=_('In Stock'),
		help_text=_('وضعیت موجودی در سایت.')
	)
	description = models.TextField(
		null=True,
		blank=True,
		verbose_name=_('Description')
	)
	image = models.ImageField(
		upload_to=banner_path,
		blank=True
	)
	slug = models.SlugField(
        unique=True,
        verbose_name=_('Slug'),
        null=True,
        blank=True,
        allow_unicode=True
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
