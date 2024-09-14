import django_filters
from django.db.models import Q
from .models import Word

class WordFilter(django_filters.FilterSet):
  q = django_filters.CharFilter(method="filter_q", label="Search for query in entries")

  class Meta:
    model = Word
    fields = []

  def filter_q(self, queryset, name, value):
    if not value:
      return queryset
    return queryset.filter(
      Q(entry__icontains=value) |
      Q(translations__entry__icontains=value)
    ).distinct()