const posts = [
    {
        name: "David",
        text: "Love ya"
    },
    {
        name: "Limor",
        text: "Miss ya"
    },
    {
        name: "Yoni",
        text: "Happy birthday!"
    }
]

const render = function(){

    $("div").empty()

    for(let post of posts){
        $("body").append(`<div class=\"post\"><p>${post.name}:</p><p>${post.text}</p></div>`)
    }
}

$("#submit").click(function(){
    let newName = $("#name").val()
    let newWish = $("#wish").val()
    let post = {newName, newWish}

    $("#name").val("")
    $("#wish").val("")

    posts.push(post)

    render()
})

render()
