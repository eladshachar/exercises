$("button").click( function() {
    $("#blogs").append("<div class=\"blog\">bla</div>")
})

$("#blogs").on("click", ".blog", function() {
    $(this).text("blargh")
})


