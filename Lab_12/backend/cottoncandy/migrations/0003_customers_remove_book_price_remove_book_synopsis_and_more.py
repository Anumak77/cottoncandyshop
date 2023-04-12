# Generated by Django 4.1.5 on 2023-02-06 13:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cottoncandy', '0002_rename_mymodel_book'),
    ]

    operations = [
        migrations.CreateModel(
            name='customers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='book',
            name='price',
        ),
        migrations.RemoveField(
            model_name='book',
            name='synopsis',
        ),
        migrations.AddField(
            model_name='book',
            name='number_in_inventory',
            field=models.IntegerField(default=1),
        ),
        migrations.CreateModel(
            name='Borrow',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('due_date', models.DateTimeField()),
                ('is_returned', models.BooleanField()),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cottoncandy.book')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cottoncandy.customers')),
            ],
        ),
    ]