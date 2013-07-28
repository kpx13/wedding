# encoding: utf-8
from django import forms
from django.forms import ModelForm
from django.conf import settings
from django.core.mail import send_mail
from django.template import Context, Template
from models import Review
from livesettings import config_value


def sendmail(subject, body):
    mail_subject = ''.join(subject)
    send_mail(mail_subject, body, settings.DEFAULT_FROM_EMAIL,
        [config_value('MyApp', 'EMAIL')])

class ReviewForm(ModelForm):

    class Meta:
        model = Review
        exclude = ('request_date', )
    

    def save(self, *args, **kwargs):
        m = super(ReviewForm, self).save(*args, **kwargs)
        subject=u'Поступил новый отзыв.',
        body_templ="""
            {% for field in form %}
                {{ field.label }} - {{ field.value }}
            {% endfor %}
            """
        ctx = Context({
            'form': self
        })
        body = Template(body_templ).render(ctx)
        sendmail(subject, body)
        return m
