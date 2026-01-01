from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _

from phonenumber_field.formfields import PhoneNumberField

from accounts.models import User



class UserSoftRegisterForm(forms.Form):
    """
    User registration form class.

    Handle user registration, its exceptions and validations.
    Validates phone-number.
    Validates the existence user with the phone-number.
    """
    phone_number = PhoneNumberField(
        region="IR",
        label=_("Phone number")
    )
    password = forms.CharField(
        label=_("Password"),
        widget=forms.PasswordInput(),
        validators=[validate_password]
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

    def clean_phone(self):
        """
        Cleans the user phone-number.

        Gets the cleaned data (phone-number) and validate it
        if any user with that phone-number is already exists or not.
        """
        phone_number = self.cleaned_data.get("phone_number")

        # Check if the user with the phone-number is already exists
        if User.objects.filter(phone_number__iexact=phone_number).exists():
            # Add error if the user exists
            self.add_error(
                "phone_number",
                ValidationError(
                    _(
                        "You already have an account with this phone number."
                        "You just need to login to your account."
                    )
                )
            )

        return phone_number
