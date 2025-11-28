// Responsive Navbar Toggle
const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const closeBtn = document.querySelector('.close-menu'); // OPTIONAL if you add ❌

// Toggle menu open/close
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Auto-close when clicking any menu link
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


