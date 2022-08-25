$(".item").click(function (){
    
    if($(this).attr("data-instock") === "true"){
        
        const text = $(this).text()
        $("#cart").append(`<br>${text}`)

    }   
})