# Talpor Notes App

Talpor notes app for interview process based on React (frontend) / Django (backend).

Author: Wolfgang Dielingen ([wolfrainx@gmail.com](mailto:wolfrainx@gmail.com)).

## Backend configuration

The backend of the project can be configured in two different forms: as local development environment directly in the host, or as Docker image for quick development environment setting.

### Prerequisites

- [Python 3.7](https://www.python.org/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)

In case of using Docker for setting up your local environment, you will need these prerequisites:

- [Docker](https://docs.docker.com/install/#supported-platforms)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Getting up and running locally

The instructions are based on the configuration process provided by [Cookiecutter Django](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html#setting-up-development-environment).

> To be able to execute the following commands successfully, you must be located in the `/backend` directory at the root of the project.

> I could not test this configuration process because currently, I have been working with Windows OS and Docker to configure my local environment.

1. Create a virtualenv:

   ```
   $ python -m venv <virtual env path>
   ```

2. Activate the virtualenv you have just created:

   ```
   $ source <virtual env path>/bin/activate
   ```

3. Install development requirements:

   ```
   $ pip install -r requirements/local.txt
   ```

4. Create a new PostgreSQL database using createdb:

   ```
   $ createdb tna_backend -U postgres --password <password>
   ```

   > If this is the first time a database is created on your machine you might need an [initial PostgreSQL set up](http://suite.opengeo.org/docs/latest/dataadmin/pgGettingStarted/firstconnect.html) to allow local connections & set a password for the `postgres` user. The [postgres documentation](https://www.postgresql.org/docs/current/static/auth-pg-hba-conf.html) explains the syntax of the config file that you need to change.

5. Set the environment variables for your database(s):

   ```
   $ export DATABASE_URL=postgres://postgres:<password>@127.0.0.1:5432/<DB name given to createdb>
   ```

   > Check out the [Settings](https://cookiecutter-django.readthedocs.io/en/latest/settings.html#settings) page for a comprehensive list of the environments variables.

   > To help setting up your environment variables, you have a few options:
   >
   > - Create an .env file in the root of your project and define all the variables you need in it. Then you just need to have `DJANGO_READ_DOT_ENV_FILE=True` in your machine and all the variables will be read.
   > - Use a local environment manager like [direnv](https://direnv.net/).

6. Apply migrations:

   ```
   $ python manage.py migrate
   ```

7. Load fixtures in required order:

   ```
   $ python manage.py load_all_fixtures
   ```

8. See the application being served through Django development server:

   ```
   $ python manage.py runserver 0.0.0.0:8000
   ```

### Getting up and running locally with Docker

The instructions are based on the configuration process provided by [Cookiecutter Django](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html).

> To be able to execute the following commands successfully, you must be located in the `/backend` directory at the root of the project.

1. Build the stack needed with Docker:

   ```
   $ docker-compose -f local.yml build
   ```

   > The first time it is run it might take a while to get started, but subsequent runs will occur quickly. The `local.yml` configuration file is only useful for local environments.

2. Run the stack with Docker:

   ```
   $ docker-compose -f local.yml up
   ```

3. Execute management commands:

   - Run Django migrations on database:

     ```
     $ docker-compose -f local.yml run --rm django python manage.py migrate
     ```

   - Load fixtures in required order:

     ```
     $ docker-compose -f local.yml run --rm django python manage.py load_all_fixtures
     ```

   - Creation of superuser for Django (optional):
     ```
     $ docker-compose -f local.yml run --rm django python manage.py createsuperuser
     ```

### Additional notes

After completing setting up process, you will have three superusers in Django with the next credentials:

- Alberto Sánchez

  - username: `asanchez`
  - email: `asanchez@talpor.com`
  - password: `1234`

- Pedro Piñango

  - username: `ppinango`
  - email: `ppinango@talpor.com`
  - password: `1234`

- Wolfgang Dielingen
  - username: `wolfgangdie`
  - email: `wolfrainx@gmail.com`
  - password: `1234`

> All users are for testing purpose only, each has a total of two preloaded notes.

## Frontend configuration
