from django import forms
from django.utils.translation import gettext_lazy as _

from vendors.models import Vendor


class VendorCreateForm(forms.ModelForm):
    """
    Creation form for creating a new vendor object.
    Only the admin-user is be able to create a new vendor.
    """
    class Meta:
        model = Vendor
        fields = ("user", "shop_name", "contact_phone")

    def __init__(self, *args, **kwargs):
        """
        Initialized the form class.

        Add some same widgets such as 'CSS class' to the all fields,
        or any other same properties.
        """
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs.update({
                "class": "form-control"
            })
