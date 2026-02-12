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
    is_active = forms.BooleanField(required=False)
    first_replacement_status = forms.BooleanField(required=False)
    second_replacement_status = forms.BooleanField(required=False)
    third_replacement_status = forms.BooleanField(required=False)
    forth_replacement_status = forms.BooleanField(required=False)

    class Meta:
        model = Customer
        fields = (
            "vendor", "technician", "description",
            "device", "installation_date", "is_active",
            # Replacement dates
            "first_replacement_date", "second_replacement_date",
            "third_replacement_date", "forth_replacement_date",
            # Replacement dates status
            "first_replacement_status", "second_replacement_status",
            "third_replacement_status", "forth_replacement_status"
        )

        widgets = {
            "installation_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "vendor": forms.Select(attrs={"class": "form-control"}),
            "device": forms.Select(attrs={"class": "form-control"}),
            "technician": forms.Select(attrs={"class": "form-control"}),
            "is_active": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
            # Replacement dates
            "first_replacement_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "second_replacement_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "third_replacement_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            "forth_replacement_date": forms.DateInput(
                attrs={"type": "date", "class": "form-control"}
            ),
            # Replacement dates status
            "first_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
            "second_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
            "third_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
            "forth_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control"}
            ),
        }
