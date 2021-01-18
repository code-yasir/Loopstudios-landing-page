const toggle = document.querySelector('#toggle');
const burgerIcon = document.getElementById('burger-menu');
const navbar = document.querySelector('.navbar');
const open = './images/icon-close.svg';
const close = './images/icon-hamburger.svg';
const logo = document.getElementById('logo');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('opened')) {
    toggle.classList.remove('opened');
    logo.style.position = 'static';
    navbar.style.opacity = 0;
    navbar.style.pointerEvents = 'none';
    burgerIcon.src = close;
  } else {
    navbar.style.opacity = 1;
    navbar.style.pointerEvents = 'visible';
    burgerIcon.src = open;
    toggle.classList.add('opened');
    logo.style.position = 'fixed'
    logo.style.zIndex = '30000'
  }
});




