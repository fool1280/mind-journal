from google.cloud import language_v1


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


text = "I'm happy"
print(get_sentiment(text))
