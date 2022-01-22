

const menu2 = document.querySelectorAll(".item-2")
const menu3 = document.querySelector(".item-3")
const sidebar = document.querySelector(".sidebar1")
const menu4 = document.querySelector(".item-4")


menu2[0].addEventListener("click", () => {
    let cards = document.querySelectorAll(".card")
    cards.forEach(el => el.parentElement.removeChild(el))
})

menu3.addEventListener("mouseenter", () => {
    console.log("HOLA")
    sidebar.style.background = "orange"
})

menu3.addEventListener("mouseleave", () => {
    sidebar.style.background = "#cb530e"
})

menu4.addEventListener("click", sidebarText)

function sidebarText () {
    let tag = document.createElement("h1")
    tag.innerText = "Hola Mundo!"
    tag.setAttribute("class", "sidebar-text")
    sidebar.appendChild(tag)
    menu4.removeEventListener("click", sidebarText)
}