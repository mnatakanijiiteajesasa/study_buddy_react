import requests
import pywhatkit as kit
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/api/data', method=['GET'])
def get_data():
    data = {'message': 'Hello from backend!'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)


# this file is going to house the entire back end for the website

phone_number = input("Enter your phone number starting with your country code: \n")
user_query = input("What unit are you interested in? ")
time = input("When do you want to receive the message")


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