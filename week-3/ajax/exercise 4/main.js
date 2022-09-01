let apiKey = "ec9oJ0hlTHQ3tUNBgQCMqsRS3gcEEUDB"

let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`

$("#gif").attr("src", giphyAPI)