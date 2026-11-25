const themeButton = document.querySelector('#theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  themeButton.firstElementChild.textContent = theme === 'dark' ? '☀' : '☾';
}
let savedTheme;
try { savedTheme = localStorage.getItem('ah-theme'); } catch { /* Storage can be unavailable for local files. */ }
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('ah-theme', theme); } catch { /* The toggle still works without persistence. */ }
});

function showPage() {
  const requested = location.hash.slice(1);
  const page = ['about', 'blog', 'publications'].includes(requested) ? requested : 'about';
  document.querySelectorAll('main > section').forEach(section => { section.hidden = section.id !== page; });
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${page === 'about' ? '' : page[0].toUpperCase() + page.slice(1) + ' | '}Asif Hasan`;
}
window.addEventListener('hashchange', () => { showPage(); document.querySelector('#main').focus(); window.scrollTo(0, 0); });
showPage();
