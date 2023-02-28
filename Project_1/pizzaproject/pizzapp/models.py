from django.db import models

class size(models.Model):
    id = models.AutoField(primary_key=True)
    size = models.CharField(max_length=50)
    
    def __str__(self):
        return '{}'.format(self.size)

class crust(models.Model):
    id = models.AutoField(primary_key=True)
    crust = models.CharField(max_length=50)
    
    def __str__(self):
        return '{}'.format(self.crust)

class sauce(models.Model):
    id = models.AutoField(primary_key=True)
    sauce = models.CharField(max_length=50)
    
    def __str__(self):
        return '{}'.format(self.sauce)

class cheese(models.Model):
    id = models.AutoField(primary_key=True)
    cheese = models.CharField(max_length=50)
    
    def __str__(self):
        return '{}'.format(self.cheese)


class pizza(models.Model):
    id = models.AutoField(primary_key=True)
    size = models.ForeignKey(size, on_delete=models.CASCADE)
    crust = models.ForeignKey(crust, on_delete=models.CASCADE)
    sauce = models.ForeignKey(sauce, on_delete=models.CASCADE)
    cheese = models.ForeignKey(cheese, on_delete=models.CASCADE)
    

    pepperoni = models.BooleanField()
    chicken = models.BooleanField()
    ham = models.BooleanField()
    pineapple = models.BooleanField()
    peppers = models.BooleanField()
    mushrooms = models.BooleanField()
    onions = models.BooleanField()
    

class customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    address = models.TextField(max_length=30)
    card_no = models.CharField(max_length=20)
    expiry_month = models.IntegerField()
    expiry_year = models.IntegerField()
    card_cvv = models.CharField(max_length=5)
    pizza = models.ForeignKey(pizza, on_delete=models.CASCADE)

    
    