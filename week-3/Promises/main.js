$.get('https://random-word-api.herokuapp.com/word')
   .then(function (word) {
      $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        .then( function(randomBook){
          console.log(randomBook)
        })
})