const navMenu = document.getElementById('nav-menu');
const navigation = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.nav__link');

function resetNavigation() {
  navMenu.checked = false;
  navigation.classList.remove('open');
}

navMenu.addEventListener('change', () => {
  navigation.classList.toggle('open');
});

navLinks.forEach(link => link.addEventListener('click', resetNavigation));

// On Application Load
resetNavigation();
