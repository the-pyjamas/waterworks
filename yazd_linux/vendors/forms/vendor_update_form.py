from django import forms

from vendors.models import Vendor
from phonenumber_field.widgets import PhoneNumber


class VendorUpdateForm(forms.ModelForm):
    """
    Updating form to update a vendor profile,
    only the admin user and superuser are be able to
    update a profile.
    """
    class Meta:
        model = Vendor
        fields = ("shop_name", "contact_email", "contact_phone", "is_active")

        widgets = {
            "shop_name": forms.TextInput(
                attrs={"class": "form-control"}
            ),
            "contact_email": forms.EmailInput(
                attrs={"class": "form-control"}
            ),
            "contact_phone": PhoneNumber(
                region="IR",
                attrs={"class": "form-control"}
            ),
            "is_active": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
        }
