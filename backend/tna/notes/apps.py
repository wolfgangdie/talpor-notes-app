from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class NotesConfig(AppConfig):
    name = "tna.notes"
    verbose_name = _("Notes")

    def ready(self):
        try:
            import tna.notes.signals  # noqa F401
        except ImportError:
            pass
