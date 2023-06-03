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

const label = document.querySelector('label[for="toggle-check"]');

  label.addEventListener('focus', function() {
    this.style.color = 'blue';
  });

  label.addEventListener('blur', function() {
    this.style.color = '';
  });