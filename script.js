const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');

if (saved === 'light') {
  document.body.classList.add('light');
}

toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
