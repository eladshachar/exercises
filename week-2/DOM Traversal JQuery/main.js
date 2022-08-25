$(".generator").on("click", function(){
    console.log($(this).closest(".computer").find(".processor").attr("id"))
    console.log($(this).closest(".computer").attr("data-id"))
    console.log($(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".processor").find(".generator").text()) 
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".processor").find(".QR").text())
    console.log($(this).closest(".computer").find(".processor").find(".QR").siblings(".QR").text())
})