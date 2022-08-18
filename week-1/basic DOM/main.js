console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
down.innerHTML = "Down"
console.log(playingField.innerHTML)
const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"

const moveRight = function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

const enterColor = function(){
    playingField.style.backgroundColor = "#8e44ad"   
}

const exitColor = function(){
    playingField.style.backgroundColor = "#c0392b"   
}