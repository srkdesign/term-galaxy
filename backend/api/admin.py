from django.contrib import admin
from api.models import Word, Translation

class TranslationInline(admin.StackedInline):
  model = Translation
  extra = 2
  max_num = 2

class WordEntry(admin.ModelAdmin):
  list_display = ("entry", "meaning", "id", "published",)
  search_fields = ("entry",)
  inlines = [TranslationInline]

admin.site.register(Word, WordEntry)