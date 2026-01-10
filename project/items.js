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
  
  })