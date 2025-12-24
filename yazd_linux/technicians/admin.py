from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import Technician


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "phone_number", "is_active")
    list_filter = ("is_active", "created_at", "updated_at")
    search_fields = ("first_name", "last_name", "email", "phone_number")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("last_name", "first_name")

    fieldsets = (
        (_("Technician Information"),
            {
                "fields": ("first_name", "last_name", "email", "phone_number")
            }
        ),
        (_("Status & Timestamps"),
            {
                "classes": ("collapse",),
                "fields": ("is_active", "created_at", "updated_at"),
            }
        ),
    )

    add_fieldsets = (
        (_("Technician Information"),
            {
                "fields": ("first_name", "last_name", "email", "phone_number")
            }
        ),
        (_("Status & Timestamps"),
            {
                "classes": ("collapse",),
                "fields": ("is_active", "created_at", "updated_at"),
            }
        ),
    )
