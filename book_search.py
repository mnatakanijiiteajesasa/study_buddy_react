import requests
from flask import Flask, render_template

app = Flask(__name__)

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




