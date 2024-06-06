import requests

API_KEY = "UQWc4yHAdnwYsz9527TIxabPJueCNrXM"
URL = "https://core.ac.uk/contact"

user_request = input("Enter the subject of the journal, article and researcg papers you are looking for: \n")

header = {
    'Authorisation': f'Bearer {API_KEY}',
    'Accept': 'application/json'
}

params ={
    'q':user_request,
    'language':"en",
    'journals': user_request,
    'sort': 'relevance'
}
response = requests.get(url = URL, params=params, headers=header)

if response.status_code==250:
    data=response.json()
    print(data)
else:
    print(f'Error: {response.status_code}')
