from django.urls import path
from . import views
from .views import *

from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'customer', views.CustomerViewSet)
router.register(r'books', views.BookViewSet)
router.register(r'borrowing', views.BorrowingViewSet)

urlpatterns = [
   path('', views.index, name="index"),
   path('books', views.view_all_books, name='all_books'),
   path('books/<int:bookid>', views.view_single_book, name='single_book'),
   path('books/year/<int:year>', views.view_year_book, name='year_book'),
   path('books/category/<str:category>', views.view_category_books, name="books_category" ),
   path('books/category/<str:category>/year/<int:year>', views.view_category_year_books, name="books_category_year" ),
   path('customer/<int:customerid>', view_customer, name='customer'),


   path('add', views.api_add, name='api_add'),
   path('subtract', views.api_subtract, name='api_subtract'),
   path('divide', views.api_divide, name='api_divide'),
   path('multiply', views.api_multiply, name='api_multiply'),
   path('exponential', views.api_exponential, name='api_exponential'),

   path('api', include(router.urls)),

]



