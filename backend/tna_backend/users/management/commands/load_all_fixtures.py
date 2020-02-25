from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.core import management


class Command(BaseCommand):
    help = 'Run Talpor notes app fixtures in required order'

    def handle(self, *args, **options):
        try:
            self.stdout.write('Loading Site fixtures')
            management.call_command(
                'loaddata',
                settings.APPS_DIR.path('users/fixtures/site_data.json')
            )

            self.stdout.write('Loading User fixtures')
            management.call_command(
                'loaddata',
                settings.APPS_DIR.path('users/fixtures/user_data.json')
            )

            self.stdout.write('Loading Note fixtures')
            management.call_command(
                'loaddata',
                settings.APPS_DIR.path('notes/fixtures/note_data.json')
            )
        except:
            raise CommandError('An error occurred while running all fixtures')

        self.stdout.write(self.style.SUCCESS('Successfully fixtures loaded'))
