document.addEventListener('DOMContentLoaded', function () {

let open = document.querySelector(".menu")
let close = document.querySelector(".close")
let house = document.querySelector("ul")
open.addEventListener("click", function(){
house.style.display = "flex"
house.style.flexDirection  = "column"
close.style.visibility = "visible"
open.style.display = "none"
})
close.addEventListener("click", function(){
house.style.display = "none"
open.style.visibility = "visible"
close.style.visibility = "hidden"
open.style.display = "block"

})








})