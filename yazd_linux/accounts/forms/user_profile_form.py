from django import forms
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from accounts.models import UserProfile


User = get_user_model()


class UserProfileUpdateForm(forms.ModelForm):
    """
    Represent updating user profile.
    Just profile info.
    Validate the incoming data from the client and cleaned them.
    """
    username = forms.CharField(label=_("Username"))
    
    class Meta:
        model = UserProfile
        fields = ("username", "first_name", "last_name", "address")


    def __init__(self, *args, **kwargs) -> None:
        """
        Initial fields and update their widget form.
        """
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs.update({
                "class": "form-control"
            })

        # Check if the profile exists, get its owner(user)
        # and set initial username
        if self.instance:
            user = self.instance.user
            if user:
                self.fields["username"].initial = user.username
