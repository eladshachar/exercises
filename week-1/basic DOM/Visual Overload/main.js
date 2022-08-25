const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

for (let i = 0; i < 10; i++){
    const newDiv = document.createElement("div")
    const parent = document.getElementById("container")
    parent.appendChild(newDiv)
    newDiv.setAttribute("class", "box")
    newDiv.id = `box${i}`
    newDiv.setAttribute("onmouseenter", "changeColor()")
}

changeColor = function() {
   this.style.backgroundColor = getRandomColor()
}