document.addEventListener('DOMContentLoaded', function () {



  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const nav = document.querySelector('.nav');
  
  // When the hamburger menu icon is clicked, show the menu and change icons
  menuIcon.addEventListener('click', function() {
    nav.style.display = 'block';  // Show the navigation menu on mobile
    menuIcon.style.display = 'none';  // Hide the hamburger menu icon
    closeIcon.style.display = 'block';  // Show the close icon
  });

  // When the close icon is clicked, hide the menu and revert the icons
  closeIcon.addEventListener('click', function() {
    nav.style.display = 'none';  // Hide the navigation menu
    closeIcon.style.display = 'none';  // Hide the close icon
    menuIcon.style.display = 'block';  // Show the hamburger menu icon
  });







  const form = document.querySelector('.news-letter');
  const emailInput = document.querySelector('#email');
  const button = form.querySelector('button');
  
  // Prevent form from submitting normally
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the email value
    const email = emailInput.value;

    // Check if the email is valid
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Disable the button to prevent multiple clicks
    button.disabled = true;
    button.textContent = 'Submitting...';

    // Simulate an AJAX call to submit the form
    setTimeout(function () {
      // Assuming the server successfully received and processed the email
      alert('Thank you for signing up! We will send you the latest deals and promotions.');

      // Clear the email input
      emailInput.value = '';

      // Re-enable the button
      button.disabled = false;
      button.textContent = 'Sign Up';
    }, 2000); // Simulate 2 seconds delay (for demonstration purposes)
  });

  // Simple email validation function
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }


      document.getElementById('showMoreButton').addEventListener('click', function() {
        const hideItems = document.querySelectorAll('.hide-item');
        const buttonEl = this;  // Reference to the button element
  
        // Toggle the visibility of the hidden items
        hideItems.forEach(item => {
          if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'block'; // Show the hidden items
          } else {
            item.style.display = 'none'; // Hide the items again
          }
        });
  
        // Change button text based on the state
        if (buttonEl.textContent === 'Show More') {
          buttonEl.textContent = 'Show Less';
        } else {
          buttonEl.textContent = 'Show More';
        }
      });
    
  
});
