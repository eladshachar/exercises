
const fetch = function (queryType, input) {
    
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${input}`,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

$("#ISBN").on("click", function(){
    const input = $("#input").val()
    fetch("isbn", input)
})

$("#title").on("click", function(){
    const input = $("#input").val()
    fetch("title", input)
})