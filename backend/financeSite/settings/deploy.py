from financeSite.settings.base import *

# Override base settings here

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8&5ga9cdzy)+hna)e#$f6u#gf_4h8z#5n=a+gxyy70^=do3)bw'

DEBUG = False
ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']

DATABASES = {
    # 'postgresDB': { # Requires postgresql client dependencies
    #     'NAME': 'expenses',
    #     'HOST': '192.168.1.20',
    #     'ENGINE': 'django.db.backends.postgresql',
    #     'USER': 'brad',
    #     'PASS': 'toor'
    # },
    'default': { # Requires mysql client dependencies
        'NAME': 'expenses',
        'HOST': '192.168.1.30',
        'ENGINE': 'django.db.backends.mysql',
        'USER': 'gimbo',
        'PASSWORD': 'toor'
    }
}