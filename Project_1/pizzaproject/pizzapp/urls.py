from django.urls import path
from . import views

urlpatterns = [
   path('', views.Pizza, name="homepage"),
   path('pizza', views.Pizza, name="pizza"),
   path('customer/<int:pizzaId>', views.customer, name='customer'),
   path('customer', views.customer, name='customer'),
   path('created/<int:pizzaId>', views.created, name='created'),

]