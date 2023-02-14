from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import *

from django.http import JsonResponse

from rest_framework import viewsets
from .models import *
from .serializers import *


def index(request):
    return render(request, 'index.html')

def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    borrowed = Borrow.objects.filter(book=single_book)
    return render(request, 'single_book.html', {'book':single_book, 'borrowed':borrowed})

def view_year_book(request, year):
    books_by_year = Book.objects.filter(year=year)
    return render(request,'all_books.html', {'books':books_by_year})

def view_category_books(request, category):
    view_books_category = Book.objects.filter(category=category)
    return render(request,'all_books.html', {'books':view_books_category})

def view_category_year_books(request, category,year):
    view_books_category_year = Book.objects.filter(category=category, year=year)
    return render(request,'all_books.html', {'books':view_books_category_year})

def view_customer(request, customerid):
    customer = customers.objects.get(id=customerid)
    current_borrow = Borrow.objects.filter(is_returned=False, customer=customer)
    previous_borrow = Borrow.objects.filter(is_returned=True, customer=customer)
    single_customer = get_object_or_404(customers, id=customerid)
    return render(request, 'customer.html', {'customer':single_customer, 'current': current_borrow, 'previous': previous_borrow})



def api_add(request):
	
	num1 = float(request.GET.get('num1',6)) 
	num2 = float(request.GET.get('num2',2))
	added = num1 + num2 

	resp_dict = {'result':added}
	return JsonResponse(resp_dict) 

def api_subtract(request):
	
	num1 = float(request.GET.get('num1',6)) 
	num2 = float(request.GET.get('num2',2))
	subbed = num1 - num2 

	resp_dict = {'result':subbed}
	return JsonResponse(resp_dict) 

def api_divide(request):
	
	num1 = float(request.GET.get('num1',6)) 
	num2 = float(request.GET.get('num2',2))
	divided = num1 / num2 

	resp_dict = {'result':divided}
	return JsonResponse(resp_dict) 

def api_multiply(request):
	
	num1 = float(request.GET.get('num1',6)) 
	num2 = float(request.GET.get('num2',2))
	multi = num1 * num2 

	resp_dict = {'result':multi}
	return JsonResponse(resp_dict) 

def api_exponential(request):
	
	num1 = float(request.GET.get('num1',6)) 
	num2 = float(request.GET.get('num2',2))
	expo = num1 ** num2 

	resp_dict = {'result':expo}
	return JsonResponse(resp_dict) 



class CustomerViewSet(viewsets.ModelViewSet):
	serializer_class = CustomerSerializer
	queryset = customers.objects.all()

class BookViewSet(viewsets.ModelViewSet):
	serializer_class = BookSerializer
	queryset = Book.objects.all()

class BorrowingViewSet(viewsets.ModelViewSet):
	serializer_class = BorrowingSerializer
	queryset = Borrow.objects.all()