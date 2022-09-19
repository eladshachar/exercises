import requests
from store import store


def get_price(item):
   return requests.get('http://127.0.0.1:8000/store/{}'.format(item)).text


txt = input("type the name of the desired item: ")

price = get_price(txt)

inventory = requests.get('http://127.0.0.1:8000/buy/{}'.format(txt)).text
 
print(f'congratulations. you\'ve just bought {txt} for {price}. there are {inventory} left now in the store')