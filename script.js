 
 const menuIcon = document.getElementById('menu-icon');
const fullscreenNav = document.getElementById('fullscreen-nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  fullscreenNav.classList.toggle('open');
  document.body.style.overflow = fullscreenNav.classList.contains('open') ? 'hidden' : 'auto';
});


let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {

    header.style.top = '-100px'; 
  } else {
    
    header.style.top = '0'; 
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

    
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});




fetch('http://localhost:3000/api/visit',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({ page: window.location.pathname })
});
