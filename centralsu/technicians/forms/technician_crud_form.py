from django import forms
from django.utils.translation import gettext_lazy as _

from technicians.models import Technician


class CreateTechnicianForm(forms.ModelForm):
    """
    Creation form for creating a new technician object.
    Only the admin-user be able to create a new technician.
    """
    class Meta:
        model = Technician
        fields = (
            "national_code", "experience_years", "skill_level"
        )

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
