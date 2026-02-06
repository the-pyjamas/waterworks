from django.shortcuts import render
from django.views import View

from technicians.models import Technician


class ListTechnicianView(View):
    """
    List all active technicians.

    Methods:
        get (GET HTTP).
    """
    template_name = "technicians/list_technicians.html"

    def get(self, request):
        """
        Gets all active technicians and list them.
        """
        technicians = Technician.objects.filter(is_active=True)

        context = {"technicians": technicians}
        return render(
            request=request,
            template_name=self.template_name,
            context=context
        )
