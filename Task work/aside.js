   const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen)
    menu.style.height =isOpen ? `${menu.scrollHeight}px` : 0
 }

  const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach(openDropdown => {
            toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false)

    })
  }
document.querySelectorAll(".dropdown-toggle").forEach(dropdownToggle => {
 dropdownToggle.addEventListener("click", e => {
e.preventDefault()
    const dropdown =e.target.closest(".dropdown-container")
    const menu = document.querySelector(".dropdown-menu")
   const isOpen = dropdown.classList.contains("open")
        closeAllDropdowns()

    toggleDropdown(dropdown, menu, !isOpen)

 })   
})

document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach(button => {
button.addEventListener("click", () => {
      closeAllDropdowns()

      document.querySelector(".sidebar").classList.toggle("collapsed")
    })
})
 if(window.innerWidth <= 1024) document.querySelector(".sidebar").classList.toggle("collapsed")


// window.addEventListener("DOMContentLoaded", () => {
  const fullname = document.querySelector(".guest-h3")
  const email = document.querySelector(".guest-a")
  const imageletter = document.querySelector(".guest-img")

  const namevalue = JSON.parse(localStorage.getItem("fullname"))
  const emailvalue = JSON.parse(localStorage.getItem("email"))
  const imagelettervalue = JSON.parse(localStorage.getItem("imageletter"))

  if (namevalue) fullname.textContent = namevalue
  if (emailvalue) email.textContent = emailvalue
  if (imagelettervalue) imageletter.textContent = imagelettervalue
console.log(namevalue, emailvalue, imagelettervalue)

// })

