FROM python:3

WORKDIR /app/backend

ENV SECRET_KEY="SECRET_KEY"
ENV DJANGO_SETTINGS_MODULE=financeSite.settings.dev

COPY requirements.txt /app/backend
RUN pip3 install --upgrade pip -r requirements.txt

COPY . /app/backend

EXPOSE 8000

RUN python3 manage.py migrate

CMD python3 manage.py runserver 0.0.0.0:8000
