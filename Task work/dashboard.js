
const header = document.querySelector(".header")
const main = document.querySelector("main")
window.addEventListener("load", ()=>{
    main.classList.add("header-click")
console.log("it worked")
})
header.addEventListener("click", ()=>{
    main.classList.toggle("header-click")
})


//hr
const create = document.querySelector(".create-new-task")
const popup = document.querySelector(".popup-container") 
const closePopup = document.querySelector(".intro-close") 

create.addEventListener("click",()=>{
   popup.style.display = "flex"
       main.style.display = "none"
       //    filter: grayscale(100%)

 })
closePopup.addEventListener("click",()=>{
   popup.style.display = "none"
      main.style.display = "block"

 })
 const submit = document.querySelector("#submit-note")
 const reset = document.querySelector("#reset")
 const titleInput = document.querySelector("#title-input")
 const tasksList = document.querySelector(".tasks-list")
 const center = document.querySelector(".center")
 const textarea = document.querySelector(".textarea-list")
 const textareaContent = document.querySelector("#content")

 submit.addEventListener("click",()=>{
 tasksList.textContent = titleInput.value 
 textarea.textContent =  textareaContent. value
 center.style.display = "none"
 })
 reset.addEventListener("click",()=>{
 tasksList.textContent = ""
textarea.textContent = ""
  center.style.display = "block"

 })

