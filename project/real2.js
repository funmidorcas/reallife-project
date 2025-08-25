document.addEventListener('DOMContentLoaded', function () {

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


window.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent;
  });

});


 const skills = document.querySelectorAll('.skill');

 const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = value + '%';
  });




const ctx = document.getElementById('skillChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['React', 'HTML', 'JavaScript', 'Tailwind CSS'],
      datasets: [{
        label: 'Skill Level (%)',
        data: [90, 99, 75, 95],
        backgroundColor: ['#61dafb', '#e34c26', '#f7df1e', '#38bdf8'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

    document.getElementById('resetBtn').addEventListener('click', () => {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    bar.style.width = '0%';
  });
});


});


// const buttons = [
//   document.getElementById("toggleBtn1"),
//   document.getElementById("toggleBtn2"),
//   document.getElementById("toggleBtn3"),
// ];

// const notes = [
//   document.getElementById("note1"),
//   document.getElementById("note2"),
//   document.getElementById("note3"),
// ];

// const colors = ["#f8d7da", "#d1ecf1", "#d4edda"];  

// buttons.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     buttons.forEach((b, idx) => {
//       b.style.display = idx === i ? "none" : "block";
//       notes[idx].style.display = idx === i ? "block" : "none";

//       if (idx === i) {
//         notes[idx].style.backgroundColor = colors[i];
//       } else {
//         notes[idx].style.backgroundColor = ""; 
//       }
//     });
//   });
// });

// notes.forEach((note, i) => {
//   note.addEventListener("click", () => {
//     note.style.display = "none";
//     buttons[i].style.display = "block";
//     note.style.backgroundColor = ""; 
// });
// });
