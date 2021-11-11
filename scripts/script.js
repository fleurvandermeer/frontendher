const button = document.querySelector('button');
const nav = document.querySelector('nav:first-of-type ul');

button.addEventListener('click', ietsDoen);

function ietsDoen() {
  nav.classList.toggle('active');
}