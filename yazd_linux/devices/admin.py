from django.contrib import admin

from .models import Device


@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
	list_display = ("name", "model")
	list_filter = ("is_active", "created_at", "updated_at")
	search_fields = ("name", "model")
