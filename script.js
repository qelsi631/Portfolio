  // const menuIcon = document.getElementById('menu-icon');
  //   const nav = document.getElementById('fullscreen-nav');
  //   const body = document.body;

  //   menuIcon.addEventListener('click', () => {
  //     nav.classList.toggle('active');
  //     menuIcon.classList.toggle('open');
  //     body.classList.toggle('no-scroll');
  //   });

  //   document.querySelectorAll('.fullscreen-nav a').forEach(link => {
  //     link.addEventListener('click', () => {
  //       nav.classList.remove('active');
  //       menuIcon.classList.remove('open');
  //       body.classList.remove('no-scroll');
  //     });
  //   });



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
    // Scrolling down
    header.style.top = '-100px'; // hide
  } else {
    // Scrolling up
    header.style.top = '0'; // show
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative
});

    
