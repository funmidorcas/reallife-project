document.addEventListener("DOMContentLoaded", function () {

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


const lock = document.querySelector(".icon4");
const open = document.querySelector(".icon3");
let password = document.querySelector("#password");
const submit = document.querySelector(".submit")
let email = document.querySelector("#email")
const fullname = document.querySelector("#fullname")
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
    password.classList.remove("new-input")
    fullname.classList.remove("new-input")
})
password.addEventListener("click", ()=>{
    password.classList.add("new-input")
    email.classList.remove("new-input")
 fullname.classList.remove("new-input")

})

 submit.addEventListener("click", ()=>{
  let passwordinfo = password.value 
let emailinfo   = email.value
  const passwordvalue = JSON.parse(localStorage.getItem("password"))
  const emailvalue = JSON.parse(localStorage.getItem("email"))

 if(emailvalue === emailinfo && passwordvalue === passwordinfo){
      window.location.href = "dashboard.html";
      alert(`opening...`)
 }
 else{
  alert(`invalid parameters,try again`)
 }
})


});