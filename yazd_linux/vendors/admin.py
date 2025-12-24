from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import Vendor

@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = ("name", "shop_name", "contact_phone", "is_active")
    list_filter = ("is_active", "created_at", "updated_at")
    search_fields = ("name", "shop_name", "contact_email", "address")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("name",)


    fieldsets = (
        (_("Vendor Information"),
            {
                "fields": ("name", "shop_name", "contact_email", "contact_phone", "address")
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
        (_("Vendor Information"),
            {
                "fields": ("name", "shop_name", "contact_email", "contact_phone", "address")
            }
        ),
        (_("Status & Timestamps"),
            {
                "classes": ("collapse",),
                "fields": ("is_active", "created_at", "updated_at"),
            }
        ),
    )
