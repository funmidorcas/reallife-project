const header = document.querySelector(".header")
const main = document.querySelector("main")
window.addEventListener("load", ()=>{
    main.classList.add("header-click")
console.log("it worked")
})
header.addEventListener("click", ()=>{
    main.classList.toggle("header-click")
})
