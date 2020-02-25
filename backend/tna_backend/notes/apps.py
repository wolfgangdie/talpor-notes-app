from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class NotesConfig(AppConfig):
    name = "tna_backend.notes"
    verbose_name = _("Notes")

    def ready(self):
        try:
            import tna_backend.notes.signals  # noqa F401
        except ImportError:
            pass
