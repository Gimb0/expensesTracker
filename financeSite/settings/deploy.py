from financeSite.settings.base import *
import dj_database_url

# Override base settings here

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8&5ga9cdzy)+hna)e#$f6u#gf_4h8z#5n=a+gxyy70^=do3)bw'

DEBUG = False
ALLOWED_HOSTS = ['https://diligenc3-expenses-backend.herokuapp.com']

# # DATABASE CONFIGURATION
# POSTGRES_USER = 'rbipyotetubsxp'
# POSTGRES_PASS = 'ee1e1f9935f807aabdedf2513d6b480b15c33e87f02542fb2f22453656ae3070'
# POSTGRES_HOST = 'ec2-54-75-229-28.eu-west-1.compute.amazonaws.com'
# POSTGRES_PORT = '5432'
# POSTGRES_DB = 'ddhan5cgloqoh1'

# DATABASES = {'default': dj_database_url.config(default='postgres://' + POSTGRES_USER + ':' + POSTGRES_PASS + '@' + POSTGRES_HOST + ':' + POSTGRES_PORT + '/' + POSTGRES_DB)}

DATABASES = {'default': dj_database_url.config(default=os.envrion["DATABASE_URL"])}