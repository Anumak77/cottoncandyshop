from django.db import models

# This code is just an example, do not copy/paste
# Use this as a reference to create your model called Book !
class Book(models.Model):
       
    categories = [
        ('horror', 'horror'),
        ('crime', 'crime'),
        ('not specified', 'not specified'),
    ]
    id = models.AutoField(primary_key=True)
    year = models.IntegerField()
    author = models.CharField(max_length=40) # charfields have to have a max length
    title = models.CharField(max_length=40)
    category = models.CharField(max_length=20, choices=categories, default='not specified')
    number_in_inventory = models.IntegerField(default=1)


class customers(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    
class Borrow(models.Model):
    id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(customers, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    due_date = models.DateTimeField()
    is_returned = models.BooleanField()

   
   
   


