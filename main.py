# scraping for books, journals, articles and research works

import requests
import time

category = input("What do you want to search for? (Books or journals )")
user_query = input("Enter the subject of the book, journal, article or research papers you are looking for: \n")

# function for scraping the core api for journals,articles and research works

def  search_core_api(query):
    CORE_API_KEY = "UQWc4yHAdnwYsz9527TIxabPJueCNrXM"
    CORE_URL = "https://core.ac.uk/contact"


    header = {
        'Authorisation': f'Bearer {CORE_API_KEY}',
        'Accept': 'application/json'
    }

    params = {
        'q': query,
        'language': "en",
        'sort': 'relevance'
    }
    
    response = requests.get(url=CORE_URL, params=params, headers=header)
    print(response)

    if response.status_code == 200:
        data = response.json()
        print(data)
    else:
        print(f"Error {response.status_code}")

# function for scraping for books


def search_book_in_library(query):

    open_library_url = "https://openlibrary.org/search.json"

    header = {
        "User-Agent": "literary Nexus (mogakanewton0@gmail.com)"
    }
    params = {
        "q": query,
        "fields": "title, author_name,cover_i ",
        "limit": "5",
        "lang": "en"
    }

    response = requests.get(url=open_library_url, params=params, headers=header)
    print(response)

    if response.status_code == 200:
        books = response.json()
        print(books)
    else:
        print(f"Error {response.status_code}")


def search():
    if category == "books":
        search_book_in_library(user_query)
    else:
        search_core_api(user_query)
    
# max_retries = 5
# retry_delay = 5
# for attempt in range(max_retries):
       
# if response.status_code == 200:
#       data = response.json()
#        print(data)
#       break
#   elif response.status_code == 530:
#       print(f'Error {response.status_code}: Server Unavailable. Retrying in a {retry_delay}seconds')
#       time.sleep(retry_delay)
#   else:
#       print(f'Error: {response.status_code}')
# else:
#    print("Oops! Service not available")



