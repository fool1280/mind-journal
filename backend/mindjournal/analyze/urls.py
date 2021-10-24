from django.urls import path
from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('post/', views.post, name='post'),
    path('get/', views.get, name='get'),
]
