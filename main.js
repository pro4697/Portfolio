'use strict';

// work_list
const wl = [
  {
    name: 'Food Ticket',
    url: 'https://foodticket.xyz',
    git: 'https://github.com/pro4697/Food-Ticket',
    type: '*',
    img: 'project_3.png',
    description:
      'React.js, Node.js, Express.js<br /> MongoDB, PG결제, QRcode reader',
  },
  {
    name: 'K-FLIX',
    url: 'https://pro4697.github.io/netflix_app/',
    git: 'https://github.com/pro4697/netflix_app',
    type: 'front-end',
    img: 'project_2.png',
    description: 'React.js, Movie_API',
  },
  {
    name: '모바일 식권 시스템',
    url: 'https://dong-afoodticket.000webhostapp.com/',
    git: 'https://github.com/pro4697/Food_Ticket_jQuery',
    type: '*',
    img: 'project_1.png',
    description:
      'jQuery, PHP, phpMyAdmin, Crawling,<br />PG결제, QRcode reader',
  },
];

(function () {
  if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)) { // IE
    alert('Chrome 또는 Edge 사용을 권장드립니다.');
    let item = document.querySelectorAll('.major__icon');
    for (let i = 0; i < item.length; i++)
      item[i].style.lineHeight = '190px';
    document.querySelector('.work__categories').style.display = 'none';
  }


  const work = document.querySelector('.work__projects');
  const category = [
    document.querySelector('.all'),
    document.querySelector('.front'),
    document.querySelector('.back'),
  ];
  let cnt = [wl.length, 0, 0];
  let html = '';

  for (let i = 0; i < wl.length; i++) {
    if (wl[i].type === '*') {
      cnt[1]++, cnt[2]++;
    } else if (wl[i].type === 'front-end') {
      cnt[1]++;
    } else if (wl[i].type === 'back-end') {
      cnt[2]++;
    }
    //ES5
    html += '<div class="project" target="blank" data-type="' + wl[i].type + '" >';
    html += '<img src="imgs/' + wl[i].img + '" alt="" class="project__img" />';
    html += '<div class="project__description">';
    html += '<h3>' + wl[i].name + '</h3>';
    html += '<span>' + wl[i].description + '</span>';
    html += '<a href="' + wl[i].git + '" target="_blank" class="project__git">';
    html += '<i class="fab fa-github"></i>';
    html += '<span class="project__icon-name">github</span></a>';
    if (wl[i].url) {
      html += '<a href="' + wl[i].url + '" target="_blank" class="project__demo">';
      html += '<span class="project__icon-name">preview</span>';
      html += '<i class="fab fa-internet-explorer"></i></a>';
    }
    html += '</div></div>';

    //ES6
    // html += `<div class="project" target="blank" data-type="${wl[i].type}" >`;
    // html += `<img src="imgs/${wl[i].img}" alt="food_ticket" class="project__img" />`;
    // html += '<div class="project__description">';
    // html += `<h3>${wl[i].name}</h3>`;
    // html += `<span>${wl[i].description}</span>`;
    // html += `<a href="${wl[i].git}" target="_blank" class="project__git">`;
    // html += '<i class="fab fa-github"></i>';
    // html += '<span class="project__icon-name">github</span></a>';
    // if (wl[i].url) {
    //   html += `<a href="${wl[i].url}" target="_blank" class="project__demo">`;
    //   html += '<span class="project__icon-name">preview</span>';
    //   html += '<i class="fab fa-internet-explorer"></i></a>';
    // }
    // html += '</div></div>';
  }
  work.innerHTML = html;
  for (let i = 0; i < category.length; i++) {
    category[i].innerHTML = cnt[i];
  }
})();

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', function () {
  if ((window.scrollY || window.pageYOffset) > navbarHeight) {
    navbar.classList.add('navbar__color');
  } else {
    navbar.classList.remove('navbar__color');
  }
  navbarMenu.classList.remove('open');
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', function () {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  const id = document.querySelector(link);
  //id.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollTo({
    top: id.getBoundingClientRect().top + window.pageYOffset - 50,
    behavior: 'smooth',
  });
});

// Navbar toggle button for small screen
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', function () {
  navbarMenu.classList.toggle('open');
  if ((window.scrollY || window.pageYOffset) < navbarHeight) {
    //navbar.classList.toggle('navbar__color');
  }
});

// Handle click on "contact me" button on home
const honeContactBtn = document.querySelector('.home__contact');
honeContactBtn.addEventListener('click', function () {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', function () {
  home.style.opacity = 1 - (window.scrollY || window.pageYOffset) / homeHeight;
});

// floating button
const arrowUp = document.querySelector('#arrow-up');
document.addEventListener('scroll', function () {
  if ((window.scrollY || window.pageYOffset) > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', function () {
  scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', function (e) {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  //버튼내의 숫자를 클릭시 예외처리 (숫자를 클릭시 부모노드를 가져옴)
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(function () {
    projects.forEach(function (project) {
      if (
        filter === '*' ||
        project.dataset.type === filter ||
        project.dataset.type === '*'
      ) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 220);
});

// Custom function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
