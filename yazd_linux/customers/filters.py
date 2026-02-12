import django_filters

from customers.models import Customer

class CustomerFilter(django_filters.FilterSet):
    """
    Search filter on customers.
    """
    class Meta:
        model = Customer
        fields = ("device", "technician", "vendor")
