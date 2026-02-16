from django.shortcuts import render
from django.views import View

from technicians.models import Technician
from technicians.filters import TechnicianFilter


class TechnicianListView(View):
    """
    List all active technicians.

    Methods:
        get (GET HTTP).
    """
    template_name = "technicians/technician_list.html"

    def get(self, request):
        """
        Gets all active technicians and list them.
        """
        technicians = Technician.objects.filter(is_active=True)
        # Search filter according to the 'TechnicianFilter'
        filters = TechnicianFilter(request.GET, queryset=Technician.objects.all())
        # Remake the quesryset to the requests of the search filters
        technicians = filters.qs

        context = {
            "technicians": technicians,
            "filters": filters
        }
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
