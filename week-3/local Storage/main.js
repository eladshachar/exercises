let wisdom = []

if(localStorage.wisdom){
    wisdom = JSON.parse(localStorage.wisdom)
}

let str = ""

wisdom.forEach( w => {
    str += `<br>${w.text}`
})

$("#text").html(str)

$(document).ready(function(){
    $("#button").on("click", function(e){
        e.preventDefault()
        wisdom.push({text: `${$("#input").val()}`})

        if(wisdom.length%2 === 0){
           localStorage.wisdom = JSON.stringify(wisdom)
        }

        let str =  $("#text").html()
        str += `<br>${$("#input").val()}`
        $("#text").html(str)
        $("#input").val("")
        
   })
})

$(document).ready(function(){
    $("#clear").on("click", function(e){
        e.preventDefault()
        localStorage.removeItem('wisdom')
        $("#text").html("")
        
   })
})



