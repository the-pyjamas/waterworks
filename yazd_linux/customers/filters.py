from django.forms import Select

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

    class Meta:
        model = Customer
        fields = ("device", "technician", "vendor")
