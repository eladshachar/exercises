from fastapi import FastAPI, Request
import uvicorn

app = FastAPI()

id_counter = 1

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/wonder/{id}')
def display_wonder(id):
    for wonder in wonders:
        if wonder['ID'] == int(id):
            return wonder


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter
    id_counter += 1
    new_wonder['ID'] = id_counter
    wonders.append(new_wonder)
    return "Created"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
