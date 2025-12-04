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
 })
closePopup.addEventListener("click",()=>{
   popup.style.display = "none"
      main.style.display = "block"
 })

const greetingElement = document.querySelector(".greeting");
const now = new Date()
const hour = now.getHours()
let greetingText = ""
if (hour < 12) {
  greetingText = "Morning"
} else if (hour < 17) {
  greetingText = "Afternoon"
} else {
  greetingText = " Evening"
}
greetingElement.textContent = greetingText

const nameEl = document.querySelector(".name-span")
  const fullname = document.querySelector(".guest-h3")
  const email = document.querySelector(".guest-a")
  const imageletter = document.querySelector(".guest-img")
  const namevalue = JSON.parse(localStorage.getItem("fullname"))
  const emailvalue = JSON.parse(localStorage.getItem("email"))
  const imagelettervalue = JSON.parse(localStorage.getItem("imageletter"))
  
function capitalizeEachWord(text) {
  return text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
if (namevalue) {
  const capitalized = capitalizeEachWord(namevalue)
  fullname.textContent = capitalized
  nameEl.textContent = capitalized
}
   if (emailvalue) email.textContent = emailvalue
  if (imagelettervalue) imageletter.textContent = imagelettervalue
console.log(namevalue, emailvalue, imagelettervalue)
//hr

 const submit = document.querySelector("#submit-note")
 const reset = document.querySelector("#reset")
 const titleInput = document.querySelector("#title-input")
 const tasksList = document.querySelector(".tasks-list")
 const center = document.querySelector(".center")
 const textarea = document.querySelector(".textarea-list")
 const textareaContent = document.querySelector("#content")
 const savednumbers = document.querySelector(".newtask-p")
const notesDisplay = document.querySelector(".notes-display")

//  window.addEventListener("DOMContentLoaded", () => {
//   let savedTitle = JSON.parse(localStorage.getItem("title"))
//   let savedContent = JSON.parse(localStorage.getItem("content"))
//   if (savedTitle) tasksList.textContent = savedTitle
//   if (savedContent) textarea.textContent = savedContent
//       center.style.display = "none"
// })

// submit.addEventListener("click", () => {
//   const titleValue = titleInput.value.trim()
//   const contentValue = textareaContent.value.trim()
//   localStorage.setItem("title", JSON.stringify(titleValue))
//   localStorage.setItem("content", JSON.stringify(contentValue))
//   tasksList.textContent = titleValue
//   textarea.textContent = contentValue
//  titleInput.value = ""
//  textareaContent.value = ""
//  let count
//  total = count++
//       savednumbers.textContent =2
// })

// reset.addEventListener("click",()=>{
//  tasksList.textContent = ""
// textarea.textContent = ""
// // localStorage.clear()     //clear all the list of items in the storage
//   center.style.display = "block"
//  })

window.addEventListener("DOMContentLoaded", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || []
  displayNotes(notes)
    center.style.display = "none"
   updateTaskCount(notes)

    reset.addEventListener("click",()=>{
        notes.pop()
        localStorage.setItem("notes", JSON.stringify(notes))
const container = document.querySelector(".notes-display")
if (container.children.length >= 2) {
  container.removeChild(container.lastElementChild) 
  container.removeChild(container.lastElementChild) 
}
 const count = document.querySelectorAll(".newtask-p").length
const countDisplay = document.querySelector(".taskes-p") 
countDisplay.textContent = count -1
   const countDisplay2 = document.querySelector(".taskes-p2") 
  countDisplay2.textContent = count -1
 setTimeout(() => {
 if(container.children.length === 0){
 center.style.display = "block"
 }
}, 1000)
})
})
submit.addEventListener("click", () => {
  const title = titleInput.value.trim()
  const content = textareaContent.value.trim()
  if (!title || !content) return

  const newNote = { title, content }
  const notes = JSON.parse(localStorage.getItem("notes")) || []
  notes.push(newNote)
  localStorage.setItem("notes", JSON.stringify(notes))

  displayNotes(notes)
  titleInput.value = ""
  textareaContent.value = ""
    center.style.display = "none"
})

function displayNotes(notesArray) {
  notesDisplay.innerHTML = ""
  notesArray.forEach(note => {
    const titleEl = document.createElement("h1")
    titleEl.className = "tasks-list"
    titleEl.textContent = note.title

    const contentEl = document.createElement("p")
    contentEl.className = "textarea-list newtask-p"
    contentEl.textContent = note.content

    notesDisplay.appendChild(titleEl)
    notesDisplay.appendChild(contentEl)
  })
}
function updateTaskCount() {
  const count = document.querySelectorAll(".newtask-p").length
  const countDisplay = document.querySelector(".taskes-p") 
  countDisplay.textContent = count
  const countDisplay2 = document.querySelector(".taskes-p2") 
  countDisplay2.textContent = count
}
