// Shared EO/EN language toggle. Persists across pages via localStorage.
function setLang(l) {
  document.body.className = 'lang-' + l;
  document.documentElement.lang = l;
  var eo = document.getElementById('btn-eo');
  var en = document.getElementById('btn-en');
  if (eo) eo.setAttribute('aria-pressed', l === 'eo');
  if (en) en.setAttribute('aria-pressed', l === 'en');
  try { localStorage.setItem('lang', l); } catch (e) {}
}
try {
  if (localStorage.getItem('lang') === 'en') setLang('en');
} catch (e) {}
