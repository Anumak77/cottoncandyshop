from django.urls import path
from . import views
from .views import *


urlpatterns = [
   path('', views.index, name="index"),
   path('books', views.view_all_books, name='all_books'),
   path('books/<int:bookid>', views.view_single_book, name='single_book'),
   path('books/year/<int:year>', views.view_year_book, name='year_book'),
   path('books/category/<str:category>', views.view_category_books, name="books_category" ),
   path('books/category/<str:category>/year/<int:year>', views.view_category_year_books, name="books_category_year" ),
   path('customer/<int:customerid>', view_customer, name='customer'),

]