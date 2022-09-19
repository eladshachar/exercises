from urllib import response
from urllib.request import Request
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests
import uvicorn

app = FastAPI()


#exercise 1

word_list = list()
word_count = []

@app.get("/sanity/{string}")
async def get_appearances(string):
    global word_count
    global word_count

    for word in string.split():
       if word in word_list:
         word_count[word_list.index(word)] += 1
         print(f'the word {word} has appeared {word_count[word_list.index(word)]} time')
       else:
         word_list.append(word)
         word_count.append(1) 

         print(f'the word {word} has appeared 1 time')


#exercise 2

wordCounter = dict()

@app.get("/word-counter/get/{word}")
async def get_word_count(word):
    global wordCounter
    
    count = '0'

    if word in wordCounter:
        count = str(wordCounter[word])

    return {'count': count}


#exercise 3

@app.post("/word-counter/post/word")
async def increment_word(request: Request):
    response = await request.json()
    word = response['word']
    global wordCounter

    if word in wordCounter:
        wordCounter[word] += 1
    else:
        wordCounter[word] = 1
    
    count = wordCounter[word]
    return {f'Added {word}', f'current count: {count}'}


#exercise 4

@app.post("/word-counter/post/sentence")
async def update_sentence(request: Request):
    response = await request.json()
    sentence = response['sentence']
    numNewWords = 0
    numOldWords = 0
    already_registered = list()
    global wordCounter

    for word in sentence.split():
        if word in wordCounter:
          wordCounter[word] += 1
          
          if word not in already_registered:
            numOldWords += 1

        else:
          wordCounter[word] = 1
          numNewWords += 1

        already_registered.append(word)

    return {f'Added {numNewWords} words, {numOldWords} words already existed', f'currentCount: -1'}  


@app.delete("/word-counter/delete/word")
async def delete_word(request: Request):
    response = await request.json()
    word = response['word']
    global wordCounter    

    if word in wordCounter:
        wordCounter.pop(word)
        return {f'{word} was removed'}
    else:
        return {"Error: this word does not exist"}

if __name__ == "__main__":
    uvicorn.run('server: app', host="0.0.0.0", port=8000, reload=True)
