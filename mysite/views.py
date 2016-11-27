from django.shortcuts import render
from django.http import HttpResponse

def index( request ):
    #return HttpResponse("Django / Angular-2 Hybrid Application")
    return render(request, 'mysite/index.html')
