from django.shortcuts import render
from django.views import View


class DashboardView(View):
    template_name = "dashboard/dashboard.html"
    
    def get(self, request):
        context = {"name": "Richie"}

        return render(
            template_name=self.template_name,
            request=request,
            context=context
        )
