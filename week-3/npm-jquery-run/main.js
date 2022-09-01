$("#example").on("click", function(){
   $(this).css('background-color', '#f39c12')
})

let players = $.get('http://data.nba.net/10s/prod/v1/2016/players.json', function(res){
    $("#result").html(res)
})