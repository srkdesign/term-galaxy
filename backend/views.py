from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .models import Word
from .serializers import WordSerializer
from .pagination import WordPagination
from .filters import WordFilter
# from rest_framework.decorators import api_view
# from rest_framework.response import Response


class WordsList(generics.ListAPIView):
  queryset = Word.objects.all()
  serializer_class = WordSerializer
  pagination_class = WordPagination
  filter_backends = (DjangoFilterBackend,)
  filterset_class = WordFilter

# @api_view(["GET"])
# def get_word_by_id(request, id):

  # try:
  #   word = Word.objects.get(id=id)
  # except Word.DoesNotExist():
  #   return Response(status=status.HTTP_404_NOT_FOUND)

  # if request.method == "GET":
  #   serializer = WordSerializer(word)
  #   return Response(serializer.data)