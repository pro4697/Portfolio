'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__color');
  } else {
    navbar.classList.remove('navbar__color');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  const id = document.querySelector(link);
  //scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollTo({
    top: id.getBoundingClientRect().top + window.pageYOffset - 65,
    behavior: 'smooth',
  });
});
