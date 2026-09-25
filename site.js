// Google Analytics 4 (G-G5ST0739FE), loaded on every page that includes site.js
(function () {
  if (window.gtag) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-G5ST0739FE';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-G5ST0739FE');
})();

// Shared bits for every page: social icons in the footer + "Guruji's teachings" link in the menu.
// To change a link, edit it here once.
(function () {
  var SOCIAL = [
    { name: 'Instagram', url: 'https://www.instagram.com/kaulatantra1/', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Kaula-Tantra/61594720761425/', path: 'M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCgOWeiilTvN2WPh3UyWHcDg', path: 'M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-2.5.4-3.8s-.1-2.5-.4-3.8zM10 15V9l5 3-5 3z' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/kaulatantra1/', path: 'M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.8 0 1.2.6 1.2 1.4 0 .9-.5 2.2-.8 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.8-4.2-4.3-4.2-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3l.1.4-.3 1.1c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1 0 12 2z' }
  ];

  var css = document.createElement('style');
  css.textContent = '.social{display:flex;gap:18px;margin-top:20px}.social a{color:#A6822F;display:inline-flex}.social a:hover,.social a:focus-visible{color:#C7A85A}.social svg{width:22px;height:22px;fill:currentColor}';
  document.head.appendChild(css);

  var footer = document.querySelector('.footer-inner');
  if (footer && !footer.querySelector('.social')) {
    var row = document.createElement('div');
    row.className = 'social';
    SOCIAL.forEach(function (s) {
      row.insertAdjacentHTML('beforeend',
        '<a href="' + s.url + '" target="_blank" rel="noopener" aria-label="Kaula Tantra on ' + s.name + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="' + s.path + '"/></svg></a>');
    });
    footer.appendChild(row);
  }

  var nav = document.querySelector('header nav');
  if (nav && !nav.querySelector('a[href="teachings.html"]')) {
    var blog = nav.querySelector('a[href="blog.html"]');
    var a = document.createElement('a');
    a.href = 'teachings.html';
    a.textContent = "Guruji's teachings";
    if (blog) blog.after(a); else nav.appendChild(a);
  }
})();
