from django.forms import Select, TextInput

import django_filters

from devices.models import Device
from technicians.models import Technician
from vendors.models import Vendor
from customers.models import Customer


class CustomerFilter(django_filters.FilterSet):
    """
    Search filter on customers.
    """
    device = django_filters.ModelChoiceFilter(
        queryset=Device.objects.filter(is_active=True),
        widget=Select(attrs={"class": "form-control"})
    )
    technician = django_filters.ModelChoiceFilter(
        queryset=Technician.objects.filter(is_active=True),
        widget=Select(attrs={"class": "form-control"})
    )
    vendor = django_filters.ModelChoiceFilter(
        queryset=Vendor.objects.filter(is_active=True),
        widget=Select(attrs={"class": "form-control"})
    )
    last_name = django_filters.CharFilter(
        field_name="user__userprofile__last_name",
        lookup_expr="icontains",
        widget=TextInput(attrs={"class": "form-control"})
    )
    phone_number = django_filters.CharFilter(
        field_name="user__phone_number",
        lookup_expr="icontains",
        widget=TextInput(attrs={"class": "form-control"})
    )

    class Meta:
        model = Customer
        fields = ("device", "technician", "vendor", "last_name", "phone_number")
