from django import forms
from django.utils.translation import gettext_lazy as _

from jalali_date.fields import JalaliDateField
from jalali_date.widgets import AdminJalaliDateWidget

from apps.installations.models import Installation


class InstallationCreateForm(forms.ModelForm):
    """
    Creation form for creating a new Installation object.
    Only the admin-user and technician-user be able to
    create a new Installation.
    """
    class Meta:
        model = Installation
        fields = (
            "vendor", "technician", "device",
            "description", "installation_date"
        )
        labels = {
            'vendor': _('فروشنده'),
            'technician': _('نصاب'),
            'device': _('دستگاه'),
            'description': _('توضیحات'),
            'installation_date': _('تاریخ نصب')
        }
        widgets = {
            "installation_date": forms.DateInput(
                attrs={
                    "type": "date",
                    "class": "form-control mb-2"
                }
            ),
            "next_inspection_date": forms.DateInput(
                attrs={
                    "type": "date",
                    "class": "form-control mb-2"
                }
            ),
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
                "class": "form-control mb-2"
            })


class InstallationUpdateForm(forms.ModelForm):
    """
    Updating form to update a Installation profile,
    only the admin user and superuser are be able to
    update a profile.
    """
    # Overriding installation and replacement dates fields
    installation_date = JalaliDateField(
        widget=AdminJalaliDateWidget(attrs={"class": "form-control"})
    )
    first_replacement_date = JalaliDateField(
        widget=AdminJalaliDateWidget(attrs={"class": "form-control"})
    )
    second_replacement_date = JalaliDateField(
        widget=AdminJalaliDateWidget(attrs={"class": "form-control"})
    )
    third_replacement_date = JalaliDateField(
        widget=AdminJalaliDateWidget(attrs={"class": "form-control"})
    )
    forth_replacement_date = JalaliDateField(
        widget=AdminJalaliDateWidget(attrs={"class": "form-control"})
    )

    is_active = forms.BooleanField(required=False)
    first_replacement_status = forms.BooleanField(required=False)
    second_replacement_status = forms.BooleanField(required=False)
    third_replacement_status = forms.BooleanField(required=False)
    forth_replacement_status = forms.BooleanField(required=False)

    class Meta:
        model = Installation
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
            "vendor": forms.Select(attrs={"class": "form-control mb-4"}),
            "device": forms.Select(attrs={"class": "form-control mb-4"}),
            "technician": forms.Select(attrs={"class": "form-control mb-4"}),
            "is_active": forms.CheckboxInput(attrs={"type": "checkbox", "class": "form-control mb-4"}),
            # Replacement dates status
            "first_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control mb-4"}
            ),
            "second_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control mb-4"}
            ),
            "third_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control mb-4"}
            ),
            "forth_replacement_status": forms.CheckboxInput(
                attrs={"type": "checkbox", "class": "form-control mb-4"}
            ),
        }
