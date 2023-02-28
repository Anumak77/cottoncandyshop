from django import forms
from .models import *
from datetime import datetime

class pizzaform(forms.ModelForm):
    class Meta:
        model = pizza
        fields = ['size', 'crust', 'sauce', 'cheese', 'pepperoni', 'chicken', 'ham', 'pineapple', 'peppers', 'mushrooms', 'onions']

class customerform(forms.ModelForm):
    class Meta:
        model = customer
        fields = ['name', 'address', 'card_no', 'expiry_month', 'expiry_year', 'card_cvv', 'pizza']
        widgets = {'pizza':forms.HiddenInput()}
        labels = {'card_no': 'Card Number'}
    
    def clean(self):
        data = self.cleaned_data
        name = data['name']
        address = data['address']
        card_no = data['card_no']
        expiry_month = data['expiry_month']
        expiry_year = data['expiry_year']
        card_cvv = data['card_cvv']
        pizza = data['pizza']
        
        if len(card_no) < 16 or not (card_no.isnumeric()):
            raise forms.ValidationError("Invalid Card Number")

        elif expiry_month < 1 or expiry_month > 12:
            raise forms.ValidationError("Invalid expiry date")
        
        elif  expiry_year < datetime.now().year or (expiry_year == datetime.now().year and expiry_month < datetime.now().month):
            raise forms.ValidationError("Invalid, the card is expired")
        
        elif len(card_cvv) != 3 or not card_cvv.isnumeric():
            raise forms.ValidationError("Invalid CVV")
        
        return data
