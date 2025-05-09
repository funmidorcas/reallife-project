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
  
  })