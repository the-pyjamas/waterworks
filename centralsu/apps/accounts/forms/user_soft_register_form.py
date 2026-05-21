from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _

from phonenumber_field.formfields import PhoneNumberField

from apps.accounts.models import User



class UserSoftRegisterForm(forms.Form):
    """
    User registration form class.

    Handle user registration, its exceptions and validations.
    Validates phone-number.
    Validates the existence user with the phone-number.
    """
    phone_number = PhoneNumberField(
        region='IR',
        label=_('شماره همراه'),
        widget=forms.TextInput(attrs={'placeholder': _('شماره همراه مثل ۰۹۱۲۵۶۵۲۳۳۲')})
    )
    password = forms.CharField(
        label=_("رمزعبور"),
        widget=forms.PasswordInput(attrs={'placeholder': _('رمزعبوری را انتخاب کنید')}),
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
            # Add placeholder for fields
            self.fields['phone_number'].widget.attrs = {
                'placeholder': _('شماره همراه مثل ۰۹۱۲۵۶۵۲۳۳۲'),
                'class': 'mb-4',
            }
            self.fields['password'].widget.attrs = {
                'placeholder': _('رمزعبور'),
                'class': 'mb-4',
            }

        # Get the placeholders to use them in the template fields' placeholders
        self.password_placeholder = self.fields['password'].widget.attrs.get('placeholder')
        self.phone_number_placeholder = self.fields['phone_number'].widget.attrs.get('placeholder')

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
                'phone_number',
                ValidationError(
                    _(
                        'You already have an account with this phone number.'
                        'You just need to login to your account.'
                    )
                )
            )

        return phone_number
