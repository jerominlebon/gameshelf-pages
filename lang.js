(function () {
  var body = document.body;
  var lang = body.getAttribute('data-lang');
  var altUrl = body.getAttribute('data-alt-url');
  var browserIsFr = navigator.language.toLowerCase().indexOf('fr') === 0;
  var stored = localStorage.getItem('gameshelf-lang');

  if (stored) return; // user already picked manually, don't override

  if ((lang === 'fr' && !browserIsFr) || (lang === 'en' && browserIsFr)) {
    window.location.replace(altUrl);
  }
})();

function setGameShelfLang(lang) {
  localStorage.setItem('gameshelf-lang', lang);
}
