# encoding: utf-8
from django import forms
from django.forms import ModelForm
from django.conf import settings
from django.core.mail import send_mail
from django.template import Context, Template
from models import Request


def sendmail(subject, body):
    mail_subject = ''.join(subject)
    send_mail(mail_subject, body, settings.DEFAULT_FROM_EMAIL,
        [settings.EMAIL_SEND_TO])

class RegisterForm(ModelForm):

    class Meta:
        model = Request
        exclude = ('request_date', )
    

    def save(self, *args, **kwargs):
        super(RegisterForm, self).save(*args, **kwargs)
        subject=u'Поступил новый заказ на подарок',
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
