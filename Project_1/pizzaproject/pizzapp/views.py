from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from .forms import *


def homepage(request):
    return render(request, 'homepage.html')


def Pizza(request):
    if request.method == "POST":
        form = pizzaform(request.POST)
        if form.is_valid():
            pizza = form.save()
            return redirect('customer', pizzaId = pizza.id) 
        else:
            return render(request, 'homepage.html', {'form': form})
    else:
        form = pizzaform()
        return render(request, 'homepage.html', {'form': form})


def customer(request, pizzaId=0):
    if request.method == "POST":
        form = customerform(request.POST)
        piza = get_object_or_404(pizza, id=request.POST['pizza'])
        if form.is_valid():
            customer = form.save(commit=False) 
            form.save()
            return redirect('created', pizzaId = customer.id) 
        else:
            return render(request, 'customer.html', {'form': form, 'pizzaId': pizza.id})
    else:
        form = customerform()
        return render(request, 'customer.html', {'form': form, 'pizzaId': pizzaId})

def created(request, pizzaId):
    piza = get_object_or_404(pizza, id=pizzaId)
    return render(request, 'created.html', {'pizza': pizza})

