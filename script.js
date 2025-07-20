function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
  document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
}
