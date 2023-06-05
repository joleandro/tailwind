const html = document.querySelector('html');
const toggle = document.querySelector('#toggle-check');
const body = document.querySelector('body');

toggle.addEventListener('click', () =>{
    toggle.checked ? html.classList.add('dark') & body.classList.add('bg-black') : html.classList.remove('dark') & body.classList.remove('bg-black');
}); 

// darkMode
const icons = document.querySelector('#icon-darkMode');
icons.addEventListener('click', () => {
    icons.classList.toggle('bx-sun');
});

// Mini Menu
const menuToggle = document.querySelector('#toggle-menu');
const menu = document.querySelector('.flex-nav');
menuToggle.addEventListener('click', () =>{
  menuToggle.classList.toggle('bx-x');
  menuToggle.classList.toggle('bx-menu');
  menuToggle.style.transition = 'all 2s ease';

  menu.classList.toggle('active');
});