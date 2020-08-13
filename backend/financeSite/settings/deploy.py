from financeSite.settings.base import *
import dj_database_url

# Override base settings here

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8&5ga9cdzy)+hna)e#$f6u#gf_4h8z#5n=a+gxyy70^=do3)bw'

DEBUG = False

# DATABASE CONFIGURATION
POSTGRES_USER = 'brad'
POSTGRES_PASS = 'toor'
POSTGRES_HOST = '192.168.1.20'
POSTGRES_PORT = 5432
POSTGRES_DB = 'expenses'

DATABASES = {'default': dj_database_url.config(default='postgres://' + POSTGRES_USER + ':' + POSTGRES_PASS + '@' + POSTGRES_HOST + ':' + POSTGRES_PORT + '/' + POSTGRES_DB)}