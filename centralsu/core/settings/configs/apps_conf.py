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
    'home.apps.HomeConfig',
    'accounts.apps.AccountsConfig',
    'customers.apps.CustomersConfig',
    'common.apps.CommonConfig',
    'vendors.apps.VendorsConfig',
    'technicians.apps.TechniciansConfig',
    'devices.apps.DevicesConfig',
]
INSTALLED_APPS = DJANGO_APPS + EXTERNAL_APPS + LOCAL_APPS
