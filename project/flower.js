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

// let reviewtwo= document.getElementById("review2")
// let reviewthree= document.getElementById("review3")
// let reviewfour= document.getElementById("review4")
// let reviewfive= document.getElementById("review5")
// let reviewsix= document.getElementById("review6")
// let nextbutton =document.querySelectorAll(".nextbutton")
// let buttonone =document.querySelector(".button1")
// let buttontwo =document.querySelector(".button2")
// let buttonthree =document.querySelector(".button3")
// let buttonfour =document.querySelector(".button4")
// let buttonfive =document.querySelector(".button5")




// nextbutton.forEach(function(button) {
//   button.addEventListener("click", function() {
//     button.style.background = "yellow"
//   })
// })
// buttonone.addEventListener("click", function(){
//     reviewtwo.style.display =  "none"
//     reviewthree.style.display = "block"
// })
// buttontwo.addEventListener("click", function(){
//         reviewtwo.style.display =  "none"
//     reviewthree.style.display =  "none"
//     reviewfour.style.display = "block"
// })
// buttonthree.addEventListener("click", function(){
//             reviewtwo.style.display =  "none"
//     reviewthree.style.display =  "none"
//     reviewfour.style.display = "none"
//     reviewfive.style.display = "block"
// })
// buttonfour.addEventListener("click", function(){
//             reviewtwo.style.display =  "none"
//     reviewthree.style.display =  "none"
//     reviewfour.style.display = "none"
//     reviewfive.style.display = "none"
//     reviewsix.style.display = "block"
// })


const reviews = [
  document.getElementById("review2"),
  document.getElementById("review3"),
  document.getElementById("review4"),
  document.getElementById("review5"),
  document.getElementById("review6"),
];

const nextButtons = document.querySelectorAll(".nextbutton");

// Highlight clicked button
nextButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.background = "black";
    
  });
});

// Loop through buttons to show/hide reviews
nextButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    reviews.forEach((rev, i) => {
      rev.style.display = i === index + 1 ? "block" : "none";
    });
  });
});














// console.log(arr.)

//  function button() {
//     nextbutton.forEach(function(button) {
//       button.style.background = "yellow"
//   if(click === true){
//     reviewtwo = reviewthree.style.display = "block"
//   }

//     })
//   }
//   button()


// let arr= [reviewthree,
//     reviewfour,
//     reviewfive,
//     reviewsix
// ]
// function button(){
// arr.forEach(arr => {
//     reviewtwo =
// });
// }





})