from django import forms
from django.utils.translation import gettext_lazy as _

from .models import Device


class DeviceCreateForm(forms.ModelForm):
    """
    The creation of the device model.
    """
    class Meta:
        model = Device
        fields = (
            'name',
            'model',
            'guarantee',
            'stock_quantity',
            'is_in_stock',
            'description'
        )

        labels = {
            'name': _('نام دستگاه'),
            'model': _('مدل دستگاه'),
            'guarantee': _('گارانتی دستگاه'),
            'stock_quantity': _('موجودی'),
            'is_in_stock': _('وضعیت موجودی'),
            'description': _('توضیحات دستگاه')
        }


    def __init__(self, *args, **kwargs):
        """
        Initialized the form class.

        Add some same widgets such as 'CSS class' to the all fields,
        or any other same properties.
        """
        super().__init__(*args, **kwargs)

        for name, field in self.fields.items():
            if isinstance(field.widget, forms.CheckboxInput):
                field.widget.attrs.update({
                    'class': 'form-check-input mb-3'
                })
            else:
                field.widget.attrs.update({
                    'class': 'form-control mb-3',
                    'placeholder': field.help_text
                })
