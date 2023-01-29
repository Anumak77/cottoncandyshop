from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import *


def index(request):
    return render(request, 'index.html')

def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, bookid):
	single_book = get_object_or_404(Book, id=bookid)
	return render(request, 'single_book.html', {'book':single_book})

def view_year_book(request, year):
    books_by_year = Book.objects.filter(year=year)
    return render(request,'all_books.html', {'books':books_by_year})

def view_category_books(request, category):
    view_books_category = Book.objects.filter(category=category)
    return render(request,'all_books.html', {'books':view_books_category})

def view_category_year_books(request, category,year):
    view_books_category_year = Book.objects.filter(category=category, year=year)
    return render(request,'all_books.html', {'books':view_books_category_year})


   
    