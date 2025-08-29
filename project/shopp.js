document.addEventListener('DOMContentLoaded', function () {



  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const nav = document.querySelector('.nav');
  
  menuIcon.addEventListener('click', function() {
    nav.style.display = 'block';  
    menuIcon.style.display = 'none'; 
    closeIcon.style.display = 'block';  
  });

  closeIcon.addEventListener('click', function() {
    nav.style.display = 'none'; 
    closeIcon.style.display = 'none';  
    menuIcon.style.display = 'block';  
  });







  const form = document.querySelector('.news-letter');
  const emailInput = document.querySelector('#email');
  const button = form.querySelector('button');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value;

    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    button.disabled = true;
    button.textContent = 'Submitting...';

    setTimeout(function () {
      alert('Thank you for signing up! We will send you the latest deals and promotions.');

      emailInput.value = '';

      button.disabled = false;
      button.textContent = 'Sign Up';
    }, 2000); 
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }


      document.getElementById('showMoreButton').addEventListener('click', function() {
        const hideItems = document.querySelectorAll('.hide-item');
        const buttonEl = this;  
  
        hideItems.forEach(item => {
          if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'block'; 
          } else {
            item.style.display = 'none'; 
          }
        });
  
        if (buttonEl.textContent === 'Show More') {
          buttonEl.textContent = 'Show Less';
        } else {
          buttonEl.textContent = 'Show More';
        }
      });
    
  
});