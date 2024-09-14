from django.db import models

class Word(models.Model):
  entry = models.CharField(max_length=255, unique=True)
  meaning = models.TextField(max_length=512)
  published = models.DateTimeField(auto_now_add=True)
  source = models.CharField(max_length=255)

  def __str__(self) -> str:
    return self.entry

class Translation(models.Model):
  LANGUAGE_CHOICES = {
    "ru": "Russian",
    "az": "Azerbaijani",
  }

  word = models.ForeignKey(Word, on_delete=models.CASCADE, 
                           related_name="translations", null=False)
  language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)
  entry = models.CharField(max_length=255, default="", db_index=True)
  meaning = models.TextField(max_length=512, default="")

  def __str__(self) -> str:
    return self.language.upper()