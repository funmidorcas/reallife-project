document.addEventListener("DOMContentLoaded", function () {

const links = document.querySelectorAll(".link-item")
  const activeIndex = localStorage.getItem("activeLink")
  if (activeIndex !== null && links[activeIndex]) {
    links[activeIndex].classList.add("link")
  }
  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      localStorage.setItem("activeLink", index)
    })
  })

const lock = document.querySelector(".icon4");
const open = document.querySelector(".icon3");
const password = document.querySelector("#password");
const submit = document.querySelector(".submit")
const email = document.querySelector("#email")

lock.addEventListener("click", function() {
  open.style.display = "block";   
   password.type = "text";            
  lock.style.display = "none";
});
open.addEventListener("click", function() {
  lock.style.display = "block";   
   password.type = "password";             
  open.style.display = "none";
});

email.addEventListener("click", ()=>{
    email.classList.add("new-input")
})
password.addEventListener("click", ()=>{
    password.classList.add("new-input")
})

const form = document.getElementById("form")



});