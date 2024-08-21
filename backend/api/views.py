# from django.http import JsonResponse
from api.models import Word 
from api.serializers import WordSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


@api_view(["GET"])
def get_word_list(request):
  
  if request.method == "GET":
    words = Word.objects.all()
    serializer = WordSerializer(words, many=True)
    return Response({"words": serializer.data})

@api_view(["GET"])
def get_word_by_id(request, id):

  try:
    word = Word.objects.get(id=id)
  except Word.DoesNotExist():
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == "GET":
    serializer = WordSerializer(word)
    return Response(serializer.data)