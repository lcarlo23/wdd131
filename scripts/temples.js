const menuButton = document.getElementById('menu');
const nav = document.querySelector('header nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    nav.classList.toggle('show');
})