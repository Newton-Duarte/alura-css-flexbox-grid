const btnMenu = document.querySelector('.header__menu');
const sidebar = document.querySelector('.sidebar');

btnMenu.addEventListener('click', function(event) {
  sidebar.classList.toggle('sidebar--active');
});