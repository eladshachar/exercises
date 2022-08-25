$("body").append("<input id=\"input\" type=\"text\" placeholder=\"human name\">")
$("body").append("<button id=\"button\">add human</button>")

$("#button").click( function(){
    const addition = `<li class=\"name\">${$("#input").val()}</li>`
    $("#input").val("")
    $("ul").append(addition)
})

$("ul").on("click", ".name", function (){
    $(this).remove()
})