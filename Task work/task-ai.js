const header = document.querySelector(".header")
const main = document.querySelector("main")
window.addEventListener("load", ()=>{
    main.classList.add("header-click")
console.log("it worked")
})
header.addEventListener("click", ()=>{
    main.classList.toggle("header-click")
})

const links = document.querySelectorAll(".link-item")
  const activeIndex = localStorage.getItem("activeLink")
  if (activeIndex !== null && links[activeIndex]) {
    links[activeIndex].style.background = "white"
  }
  links.forEach((link, index) => {
    link.addEventListener("click", () => {
        link.style.background = "white"
      localStorage.setItem("activeLink", index)
    })
  })
