import requests



# this file is going to house the entire back end for the website

user_query = input("What unit are you interested in? ")


#scraping open library for books

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


search_book_in_library(user_query)
