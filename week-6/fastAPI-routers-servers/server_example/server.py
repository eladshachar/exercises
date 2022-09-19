from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests
from store import store
import uvicorn

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get('/')
def root():
    return FileResponse('./static/Himalayan-chocolate-point.jpg')

@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"

@app.get('/sanity')
def shoobi():
    return "Server is up and running smoothly"

#exercise 2

@app.get("/store/{name}")
def get_price(name):
    
    for i in store:
      if i['name'] == name:
        return i['price']
    
    return "item not in inventory"
    
#exercise 4

@app.get("/buy/{item}")
def buy_item(item):
  for i in store:
    if i['name'] == item:
        i['inventory'] -= 1
        return i['inventory']
  

#exercise 6

@app.get("/sale")
def item_sale(admin):
    if bool(admin):
        for i in store:
            if i['inventory'] > 10:
                i['price'] = i['price'] * 0.5
    
        print(store)

@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}

@app.get("/optionalParameters/")
async def query_params(name):
    return {"message":"Hi there {}".format(name)}

if __name__ == "__main__":
    uvicorn.run('server: app', host="0.0.0.0", port=8000, reload=True)