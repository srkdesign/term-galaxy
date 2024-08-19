from django.http import JsonResponse
from .models import Word 
from .serializers import WordSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


@api_view(["GET", "POST"])
def get_word_list(request):
  if request.method == "GET":
    words = Word.objects.all()
    serializer = WordSerializer(words, many=True)
    return JsonResponse({"words": serializer.data})

@api_view(["GET", "PUT", "DELETE"])
def get_word_by_id(request, id):

  try:
    word = Word.objects.get(id=id)
  except Word.DoesNotExist():
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == "GET":
    serializer = WordSerializer(word)
    return Response(serializer.data)
  elif request.method == "PUT":
    pass
  elif request.method == "DELETE":
    pass