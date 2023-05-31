const burgerMenu = document.querySelector("#burgermenu")
const navMenu = document.querySelector(".nav-menu")

burgerMenu.addEventListener("click", function ()  {
    burgerMenu.classList.toggle("active")
    navMenu.classList.toggle("active")
})