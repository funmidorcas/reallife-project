document.addEventListener('DOMContentLoaded', function () {

const buttonEl = document.querySelectorAll('.showw');

  buttonEl.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const paragraph = btn.previousElementSibling;
      const isHidden = paragraph.style.display === 'none';

      paragraph.style.display = isHidden ? 'block' : 'none';
      btn.textContent = isHidden ? 'Show Less' : 'Show More';
    });
  });


const buttons = [
  document.getElementById("toggleBtn1"),
  document.getElementById("toggleBtn2"),
  document.getElementById("toggleBtn3"),
];

const notes = [
  document.getElementById("note1"),
  document.getElementById("note2"),
  document.getElementById("note3"),
];

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b, idx) => {
      b.style.display = idx === i ? "none" : "block";
      notes[idx].style.display = idx === i ? "block" : "none";
    });
  });
});

notes.forEach((note, i) => {
  note.addEventListener("click", () => {
    note.style.display = "none";
    buttons[i].style.display = "block";
  });
});


document.querySelector('.view').addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});



  const form = document.getElementById('myForm');
  const name =document.getElementById('name')
  const email =document.getElementById('email')
  const password =document.getElementById('password')
  const work =document.getElementById('work')
  const comments =document.getElementById('comments')

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    fetch("https://oladipupofunmilayodorcas@gmail.com", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      
      body: JSON.stringify({
  fullname: name.value,
   worknote : work.value,
   email: email.value, 
   commentnote: comments.textContent
      })
    })
    .then(res => res.json())
    .then(data =>{
          alert('Submitted!');

    })
.catch(err => console.error(err))
    alert('Submitted!');
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log('Form data submitted:', data);
  });


const sections = document.querySelectorAll(".progresss");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("animate");
      void entry.target.offsetWidth;
      entry.target.classList.add("animate");

    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));


 let input = document.querySelectorAll(".input")
  input.forEach(function(e) {
    e.addEventListener("input", event =>{
    e.textContent =  e.style.color = "coral" 
    })
  });
  input.forEach(function(e) {
    e.addEventListener("mouseout", event =>{
    e.textContent =  e.style.color = "black" 
    })
  });


});









