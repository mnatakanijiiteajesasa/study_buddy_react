import requests

category = input("What do you want to search for? (Books or journals): ")

# Function for scraping the CORE API for journals, articles, and research works
def search_core_api(user_jar):
    CORE_API_KEY = "UQWc4yHAdnwYsz9527TIxabPJueCNrXM"
    CORE_URL = "https://api.core.ac.uk/v3/search/works"

    headers = {
        'Authorization': f'Bearer {CORE_API_KEY}',
        'Accept': 'application/json'
    }

    params = {
        'q': user_jar,
        'language': "en",
        'sort': 'relevance'
    }

    response = requests.get(url=CORE_URL, params=params, headers=headers)
    print(response.json())

# Function for scraping for books
def search_book_in_library(user_book):
    open_library_url = "https://openlibrary.org/search.json"

    headers = {
        "User-Agent": "literary Nexus (mogakanewton0@gmail.com)"
    }
    params = {
        "q": user_book,
        "fields": "title,author_name,cover_i",
        "limit": "5",
        "lang": "en"
    }

    response = requests.get(url=open_library_url, params=params, headers=headers)
    print(response.json())

# Function to decide which search to perform
def search(user_book, user_jar):
    if category.lower() == "books":
        search_book_in_library(user_book)
    else:
        search_core_api(user_jar)

user_jar = input("Enter the name of the article, journal or research work you are searching for: \n")
user_book = input("Enter the subject of the book you are searching for: \n")

search(user_book, user_jar)




