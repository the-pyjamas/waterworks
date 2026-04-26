from django import forms
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from accounts.models import UserProfile


User = get_user_model()



class UserUpdateForm(forms.ModelForm):
    """
    Updating use info, not its profile.
    Important fields belongs to the User such as 'usernane'.
    """
    class Meta:
        model = User
        fields = ('username',)


    def __init__(self, *args, **kwargs) -> None:
        """
        Initial fields and update their widget form.
        """
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs.update({
                'class': 'form-control mb-4'
            })


class UserProfileUpdateForm(forms.ModelForm):
    """
    Represent updating user profile.
    Just profile info.
    Validate the incoming data from the client and cleaned them.
    """
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('نام')}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('نام خانوادگی')}))
    address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': _('آدرس')}))

    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'address')


    def __init__(self, *args, **kwargs) -> None:
        """
        Initial fields and update their widget form.
        """
        super().__init__(*args, **kwargs)

        for field in self.fields.values():
            field.widget.attrs.update({
                'class': 'form-control mb-4'
            })
