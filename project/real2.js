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

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    alert('Submitted!');
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log('Form data submitted:', data);
  });


// window.addEventListener('DOMContentLoaded', () => {
//   const progressBars = document.querySelectorAll('.progress');
//   progressBars.forEach(bar => {
//     const percent = bar.getAttribute('data-percent');
//     bar.style.width = percent;
//   });

// });


//     document.getElementById('resetBtn').addEventListener('click', () => {
//   const progressBars = document.querySelectorAll('.progress');
//   progressBars.forEach(bar => {
//     bar.style.width = '0%';
//   });
// });


});









