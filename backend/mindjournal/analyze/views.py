from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import User, Mood


def index(request):
    all_users = User.objects.all().values()
    # template = loader.get_template('analyze/index.html')
    # context = {
    #     'all_users': all_users,
    # }
    # return HttpResponse(template.render(context, request))
    return JsonResponse({'data': list(all_users)})


def detail(request, user_id):
    all_moods = Mood.objects.filter(user_id=user_id).values()
    return JsonResponse({'data': list(all_moods)})
