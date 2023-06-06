const html = document.querySelector('html');
const toggle = document.querySelector('#toggle-check');
const body = document.querySelector('body');

toggle.addEventListener('click', () =>{
    toggle.checked ? html.classList.add('dark') & body.classList.add('bg-black') : html.classList.remove('dark') & body.classList.remove('bg-black');
}); 

// scrolling
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 20) {
    navbar.style.backgroundColor = 'slategray';
  } else {
    navbar.style.background = 'transparent';
  }
});

// darkMode
const icons = document.querySelector('#icon-darkMode');
icons.addEventListener('click', () =>{
  icons.classList.toggle('bx-sun');
});
const theme = document.querySelector('#theme');
theme.addEventListener('click', () =>{
  icons.classList.toggle('bx-sun');
});

// Mini Menu
const menuToggle = document.querySelector('#toggle-menu');
const menu = document.querySelector('.flex-nav');
menuToggle.addEventListener('click', () =>{
  menuToggle.classList.toggle('bx-x');
  menuToggle.classList.toggle('bx-menu');
  navbar.style.backgroundColor = 'slategray';
  menuToggle.style.transition = 'all 2s ease';

  menu.classList.toggle('active');
});

// remove active if link click
const links = document.querySelectorAll('#menuSlider li a');
links.forEach(link => {
  link.addEventListener('click', () =>{
    menu.classList.remove('active');
    menuToggle.classList.remove('bx-x');
    menuToggle.classList.toggle('bx-menu');  
  });
});