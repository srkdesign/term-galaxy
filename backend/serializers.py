from rest_framework import serializers
from backend.models import Word, Translation

class TranslationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Translation
    fields = ["entry", "meaning"]

class WordSerializer(serializers.ModelSerializer):
  translations = serializers.SerializerMethodField()
  
  class Meta:
    model = Word
    fields = ["id", "entry", "meaning", "translations", "source", "published"]

  def get_translations(self, obj):
    translations = obj.translations.all()

    result = {}
    for t in translations:
      result[t.language] = {
        'entry': t.entry,
        'meaning': t.meaning,
      }

    return result