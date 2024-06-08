import requests
from flask import Flask, render_template

app = Flask(__name__)

# Function for scraping the CORE API for journals, articles, and research works
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
        'sort': 'relevance'
    }

    response = requests.get(url=CORE_URL, params=params, headers=headers)
    print(response.json())

# Function for scraping for books
def search_book_in_library(book_query):
    open_library_url = "https://openlibrary.org/search.json"

    headers = {
        "User-Agent": "literary Nexus (mogakanewton0@gmail.com)"
    }
    params = {
        "q": book_query,
        "fields": "title,author_name,cover_i",
        "limit": "5",
        "lang": "en"
    }

    response = requests.get(url=open_library_url, params=params, headers=headers)
    print(response.json())
    books = response.json()['docs']
    book_covers = [
        f"https://covers.openlibrary.org/b/id/{book['cover_i']}-L.jpg" for book in books if 'cover_i' in book
    ]
    return book_covers

@app.route('/search')
def search():
    book_query = request.args.get('q', '')
    book_covers = search_book_in_library(book_query)
    return render_template('search_results.html', book_covers=book_covers)

if __name__ == '__main__':
    app.run(debug=True)

category = input("What do you want to search for? (Books or journals): ")
# Function to decide which search to perform


def search(book_query, journal_query):
    if category.lower() == "books":
        search_book_in_library(book_query)
    else:
        search_core_api(journal_query)

user_jar = input("Enter the name of the article, journal or research work you are searching for: \n")
user_book = input("Enter the subject of the book you are searching for: \n")

search(user_book, user_jar)




