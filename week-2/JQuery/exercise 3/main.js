$("body").prepend("<div class=\"box\" id=\"box1\"></div>")
$("body").prepend("<div class=\"box\" id=\"box2\"></div>")

$("#box1").hover(function(){
   $(this).css("background-color", "#8e44ad")
   $("#box2").css("background-color", "red")
})

$("#box2").hover(function(){
    $(this).css("background-color", "#8e44ad")
    $("#box1").css("background-color", "red")
 })