const list = document.getElementById("list")

const addItem = function(){
    const newItem = document.createElement('li')
    newItem.innerHTML = "A new Item"
    list.appendChild(newItem)
    
}