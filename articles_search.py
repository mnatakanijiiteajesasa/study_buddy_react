import requests

user_jar = input("Enter the name of the article, journal or research work you are searching for: \n")

# Function for scraping the CORE API for articles
def search_core_api(journal_query):
    CORE_API_KEY = "UQWc4yHAdnwYsz9527TlxabPJueCNrXM"
    CORE_URL = "https://api.core.ac.uk/v3/search/works"

    headers = {
        'Authorization': f'Bearer {CORE_API_KEY}',
        'Accept': 'application/json'
    }

    params = {
        'q': journal_query,
        'language': "en",
        'limit': '5',
        'journals': journal_query,
        'sort': 'relevance'
    }

    response = requests.get(url=CORE_URL, params=params, headers=headers)
    print(response.json())
