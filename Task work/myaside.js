document.addEventListener("DOMContentLoaded", function () {

    const open = document.querySelector(".open")
    const close = document.querySelector(".close")
    const aside = document.querySelector(".sidebar")

   open.addEventListener("click",()=>{
   aside.style.display = "block"
   close.style.display = "block"
   open.style.display = "none"
   })
   close.addEventListener("click",()=>{
   aside.style.display = "none"
   open.style.display = "block"
   close.style.display ="none"
   })



   const links = document.querySelectorAll(".list-div")
  const activeIndex = localStorage.getItem("activeLink")
  if (activeIndex !== null && links[activeIndex]) {
    links[activeIndex].style.background = "chocolate"
    links[activeIndex].style.borderRadius = "10px"
  }
  links.forEach((link, index) => {
    link.addEventListener("click", () => {
        link.style.background = "chocolate"
        link.style.borderRadius = "10px"
      localStorage.setItem("activeLink", index)
    })
  })


})