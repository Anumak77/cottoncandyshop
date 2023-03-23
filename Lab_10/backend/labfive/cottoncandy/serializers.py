
from rest_framework import serializers
from .models import *

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = customers
		fields = ['id','name']

class BookSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Book
		fields = ['id','categories','year','author','title','number_in_inventory']

class BorrowingSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Borrow
		fields = ['id','customer','book','due_date','is_returned']
  