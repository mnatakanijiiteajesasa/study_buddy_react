import requests
from flask import Flask

app = Flask(__name__)


@app.route('/search_core_api', methods=['GET'])
def search_core(journal_query):
    # Code for scraping the CORE API goes here
    user_jar = input("Enter the name of the article, journal or research work you are searching for: \n")

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
    journal_results = response.json()['docs']
    return journal_results







