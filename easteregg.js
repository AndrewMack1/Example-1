
(function() {
  // Konami code: up up down down left right left right b a
  const konami = [38,38,40,40,37,39,37,39,66,65];
  let konamiPos = 0;
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === konami[konamiPos]) {
      konamiPos++;
      if (konamiPos === konami.length) {
        document.getElementById('secret-section').classList.add('show-secret');
        konamiPos = 0;
      }
    } else {
      konamiPos = 0;
    }
  });

  let logoClicks = 0;
  const logo = document.querySelector('.logo-glitch');
  if (logo) {
    logo.addEventListener('click', function() {
      logoClicks++;
      if (logoClicks === 5) {
        document.getElementById('secret-section').classList.add('show-secret');
        logoClicks = 0;
      }
    });
  }
})();
