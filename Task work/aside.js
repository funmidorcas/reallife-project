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



     const links = document.querySelectorAll(".nav-item")
  const activeIndex = localStorage.getItem("activeLink")
  if (activeIndex !== null && links[activeIndex]) {
    links[activeIndex].style.background = "#b1bbe0"
    links[activeIndex].style.borderRadius = "10px"
  }
  links.forEach((link, index) => {
    link.addEventListener("click", () => {
        link.style.background = "#b1bbe0"
        link.style.borderRadius = "10px"
      localStorage.setItem("activeLink", index)
    })
  })

window.addEventListener("load", () => {
  let fullname = document.querySelector(".guest-h3");
  let email = document.querySelector(".guest-a");
  let imageletter = document.querySelector(".guest-img"); // h1 element

  let namevalue = JSON.parse(sessionStorage.getItem("fullname")) || "";
  let imagelettervalue = JSON.parse(sessionStorage.getItem("imageletter")) || "";
  let emailvalue = JSON.parse(sessionStorage.getItem("email")) || "";

  if (fullname) fullname.textContent = namevalue;
  if (email) email.textContent = emailvalue;
  if (imageletter) imageletter.textContent = imagelettervalue;
});




  // const fullnameEl = document.querySelector(".guest-h3");
  // const emailEl = document.querySelector(".guest-a");

  // if (!fullnameEl || !emailEl) return; // safety check

  // // get stored values
  // const fullnameValue = sessionStorage.getItem("fullname") || "";
  // const emailValue = sessionStorage.getItem("email") || "";

  // fullnameEl.textContent = fullnameValue;
  // emailEl.textContent = emailValue;



//   let fullname = document.querySelector(".guest-h3")
// let email = document.querySelector(".guest-a")
// let imageletter = document.querySelector(".guest-img")

//   let namevalue = JSON.parse(sessionStorage.getItem("fullname"))
//   let imagelettervalue = JSON.parse(sessionStorage.getItem("imageletter"))
//   let emailvalue = JSON.parse(sessionStorage.getItem("email"))

// fullname.textContent=namevalue
// email.textContent= emailvalue
// imageletter.textContent = imagelettervalue
