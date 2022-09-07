const burger = document.getElementById("burger")
const menu = document.getElementsByClassName("menu")[0]

burger.addEventListener("click", ()=> {
   menu.classList.toggle("active")
})