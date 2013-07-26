# -*- coding: utf-8 -*-
from django.db import models
from pytils import dt

class Review(models.Model):
    name  = models.CharField(u'имя', blank=True, max_length=255)
    phone  = models.CharField(u'телефон', blank=True, max_length=255)
    email  = models.CharField(u'email', blank=True, max_length=255)
    message = models.CharField(u'сообщение', blank=True, max_length=2048)
    request_date = models.DateTimeField(u'дата', auto_now_add=True)
                    
    class Meta:
        verbose_name = u'отзыв'
        verbose_name_plural = u'отзывы'
        ordering = ['-request_date']

    def __unicode__(self):
        return u'№ %s от %s' % (self.id, dt.ru_strftime(u"%d %B %Y", self.request_date))
