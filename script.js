  // const burger = document.getElementById('burger');
  // const navMenu = document.getElementById('navMenu');
  // const logo = document.getElementById('logo');

  // burger.addEventListener('click', () => {
  //   burger.classList.toggle('active');
  //   navMenu.classList.toggle('show');
    
  //   // Ndrysho ngjyrat
  //   burger.classList.toggle('white');
  //   logo.classList.toggle('white');
  //   body.classList.toggle('no-scroll'); // This will disable/enable scrol
  // });











  const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const logo = document.querySelector('.logo'); // fix this too
const body = document.body; // <-- Add this line

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('show');

  burger.classList.toggle('white');
  logo.classList.toggle('white');
  body.classList.toggle('no-scroll'); // Now this works
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




  