

  const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// Toggle dropdown on button click
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Reset menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarLinks.classList.remove('active'); // Close menu when screen is resized
    }
});

window.onload = function() {
    const header = document.getElementById('header');
    const text = header.textContent;
    header.textContent = ''; // Clears the text initially
  
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        header.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust the speed of typing 
      }
    }
  
    typeEffect(); // Start the typing effect
  };
  