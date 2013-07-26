# -*- coding: utf-8 -*-
from django.db import models
from django.conf import settings
import pytils
import os

class Photo(models.Model):
    title = models.CharField(max_length=256, blank=True, verbose_name=u'заголовок')
    photo = models.ImageField(u'фото', upload_to=lambda instance, filename: 'uploads/photos/' + filename)
    
    class Meta:
        verbose_name = u'фотография'
        verbose_name_plural = u'фотогаллерея'
        