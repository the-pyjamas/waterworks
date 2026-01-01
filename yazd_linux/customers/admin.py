from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import Customer


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = (
        "user__phone_number",
        "vendor__shop_name",
        "technician",
        "is_active"
    )
    list_filter = ("is_active", "created_at", "updated_at")
    search_fields = (
        "user__phone_number",
        "user__username",
        "user__userprofile__address",
        "user__userprofile__last_name"
    )
    readonly_fields = ("created_at", "updated_at")


    fieldsets = (
        (_("Personal Information"),
            {
                "fields": ("user",)
            }
        ),
        (_("Installation Information"),
            {
                "classes": ("collapse",),
                "fields": ("vendor", "technician", "description")
            }
        ),
        (_("Service Dates"),
            {
                "classes": ("collapse",),
                "fields": (
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
                "fields": ("user",)
            }
        ),
        (_("Installation Information"),
            {
                "classes": ("collapse",),
                "fields": ("vendor", "technician", "description")
            }
        ),
        (_("Service Dates"),
            {
                "classes": ("collapse",),
                "fields": (
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
