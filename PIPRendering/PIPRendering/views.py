from django.http import HttpResponse
from django.shortcuts import render

def renderMap(request):
    return render(request, 'maps.html')
def renderExampleMap(request):
    return render(request, 'exampleMap.html')
