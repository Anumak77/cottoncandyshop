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
    price = models.DecimalField(max_digits=5, decimal_places=2) # number from 0.0-999.99
    synopsis = models.TextField()
    category = models.CharField(max_length=20, choices=categories, default='not specified')
   
   
   


