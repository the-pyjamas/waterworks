from django import forms

from .models import Device


class DeviceCreateForm(forms.ModelForm):
    """
    The creation of the device model.
    """
    class Meta:
        model = Device
        fields = ("name", "model")


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
