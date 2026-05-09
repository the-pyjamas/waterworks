DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
EXTERNAL_APPS = [
    'phonenumber_field',
    'django_jalali',
    'jalali_date',
    'django_filters',
]
LOCAL_APPS = [
    'apps.home.apps.HomeConfig',
    'apps.accounts.apps.AccountsConfig',
    'apps.installations.apps.InstallationsConfig',
    'apps.common.apps.CommonConfig',
    'apps.vendors.apps.VendorsConfig',
    'apps.technicians.apps.TechniciansConfig',
    'apps.devices.apps.DevicesConfig',
]
INSTALLED_APPS = DJANGO_APPS + EXTERNAL_APPS + LOCAL_APPS
