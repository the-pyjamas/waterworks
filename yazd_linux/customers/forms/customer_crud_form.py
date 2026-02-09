from django import forms
from django.utils.translation import gettext_lazy as _

import jdatetime

from customers.models import Customer


class CustomerCreateForm(forms.ModelForm):
    """
    Creation form for creating a new customer object.
    Only the admin-user and technician-user be able to
    create a new customer.
    """
    class Meta:
        model = Customer
        fields = (
            "vendor", "technician", "device",
            "description", "installation_date"
        )
        widgets = {
            "installation_date": forms.DateInput(attrs={"type": "date", "class": "form-control"}),
            "next_inspection_date": forms.DateInput(attrs={"type": "date", "class": "form-control"}),
        }

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


class CustomerUpdateForm(forms.ModelForm):
    """
    Updating form to update a customer profile,
    only the admin user and superuser are be able to
    update a profile.
    """
    class Meta:
        model = Customer
        fields = (
            "vendor", "technician", "description",
            "device", "installation_date",
            "first_replacement_date", "second_replacement_date",
            "third_replacement_date", "forth_replacement_date",
        )

        widgets = {
            "installation_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "first_installation_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs["class"] = "form-control"
