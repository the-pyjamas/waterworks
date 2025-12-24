from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import Customer


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("phone_number", "first_name", "last_name", "is_active")
    list_filter = ("is_active", "created_at", "updated_at")
    search_fields = ("phone_number", "first_name", "last_name", "email")
    readonly_fields = ("created_at", "updated_at")


    fieldsets = (
        (_("Personal Information"),
            {
                "fields": ("phone_number", "first_name", "last_name", "email")
            }
        ),
        (_("Installation Information"),
            {
                "classes": ("collapse",),
                "fields": ("vendor", "technician", "description")
            }
        ),
        (_("Address & Service Dates"),
            {
                "classes": ("collapse",),
                "fields": (
                    "address",
                    "installation_date",
                    "next_inspection_date",
                    "replacement_date"
                )
            }
        ),
        (_("Default Dates & Status"),
            {
                "classes": ("collapse",),
                "fields": ("is_active", "created_at", "updated_at"),
            }
        ),
    )

    add_fieldsets = (
        (_("Personal Information"),
            {
                "fields": ("phone_number", "first_name", "last_name", "email")
            }
        ),
        (_("Installation Information"),
            {
                "classes": ("collapse",),
                "fields": ("vendor", "technician", "description")
            }
        ),
        (_("Address & Service Dates"),
            {
                "classes": ("collapse",),
                "fields": (
                    "address",
                    "installation_date",
                    "next_inspection_date",
                    "replacement_date"
                )
            }
        ),
        (_("Default Date & Status"),
            {
                "classes": ("collapse",),
                "fields": ("is_active", "created_at", "updated_at"),
            }
        ),
    )
