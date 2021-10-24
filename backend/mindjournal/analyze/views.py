from django.http import JsonResponse
from google.cloud import language_v1
from .models import Mood
import json


def get_sentiment(text_content):
    client = language_v1.LanguageServiceClient.from_service_account_json(
        "key.json")
    type_ = language_v1.Document.Type.PLAIN_TEXT
    language = "en"
    document = {"content": text_content, "type_": type_, "language": language}

    # Available values: NONE, UTF8, UTF16, UTF32
    encoding_type = language_v1.EncodingType.UTF8

    response = client.analyze_sentiment(
        request={'document': document, 'encoding_type': encoding_type})
    return [response.document_sentiment.score, response.document_sentiment.magnitude]


def index(request):
    all_moods = Mood.objects.all().values()
    return JsonResponse({'data': list(all_moods)}, status=200)


def post(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data['text']
        sentiment = get_sentiment(text)[0]
        mood_self_grade = data['mood_self_grade']
        pub_date = data['pub_date']
        print(text, mood_self_grade, pub_date, sentiment)
        Mood.objects.create(text=text, mood_self_grade=mood_self_grade,
                            pub_date=pub_date, sentiment=sentiment)
        return JsonResponse({'data': 'success'}, status=200)
    else:
        return JsonResponse({'data': 'fail'}, status=400)
# def detail(request, user_id):
#     all_moods = Mood.objects.filter(user_id=user_id).values()
#     return JsonResponse({'data': list(all_moods)})
