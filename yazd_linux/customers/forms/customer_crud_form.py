from django import forms
from django.utils.translation import gettext_lazy as _

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
