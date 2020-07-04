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
  //id.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollTo({
    top: id.getBoundingClientRect().top + window.pageYOffset - 65,
    behavior: 'smooth',
  });
});

// Handle click on "contact me" button on home
const honeContactBtn = document.querySelector('.home__contact');
honeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
