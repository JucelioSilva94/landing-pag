const menu = document.querySelector('.menu');
const navmain = document.querySelector('.nav-main');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navmain.classList.toggle('ativo');

})