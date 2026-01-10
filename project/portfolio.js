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

const submitBtn = form.querySelector('input[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "07ffa619-1d96-4319-8a11-c135e51b575b");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
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
    e.textContent =  e.style.color = "gray" 
    })
  });
  // input.forEach(function(e) {
  //   e.addEventListener("mouseout", event =>{
  //   e.textContent =  e.style.color = "black" 
  //   })
  // });


});









