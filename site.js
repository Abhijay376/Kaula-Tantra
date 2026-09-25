// Google Analytics 4 (G-G5ST0739FE) is loaded from the gtag.js snippet in
// every page's <head> now, not from here, so it fires before this deferred
// script runs and works even if a page fails to load site.js.

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

  // Home link, anchor text "Kaula Tantric", first item in every page's menu.
  if (nav && !nav.querySelector('a[href="index.html"]')) {
    var home = document.createElement('a');
    home.href = 'index.html';
    home.textContent = 'Kaula Tantric';
    nav.insertBefore(home, nav.firstChild);
  }
})();

// Related-posts sidebar + a reinforced call to action, added to every individual
// post/practice page (not the listing, form or index pages). Update BLOG_POSTS and
// TEACHING_POSTS here whenever a page is added or removed.
(function () {
  var NO_SIDEBAR = ['', 'index.html', 'blog.html', 'teachings.html', 'contact.html', 'guidance.html', 'lineage.html', 'thank-you.html', 'kaula tantra.html'];

  var BLOG_POSTS = [
    { href: 'what-moksha-actually-means.html', title: 'What Moksha Actually Means' },
    { href: 'the-guru-is-inside-you.html', title: 'The Guru Is Inside You' },
    { href: 'what-sri-vidya-means.html', title: 'What Sri Vidya Actually Means' },
    { href: 'why-i-care-about-more-than-moksha.html', title: "Why I Don't Just Chase Moksha and Forget the World" },
    { href: 'when-you-have-no-energy-left.html', title: 'When You Have No Energy Left' },
    { href: 'the-body-is-already-the-temple.html', title: 'The Body Is Already the Temple' },
    { href: 'two-temples-love-and-protection.html', title: 'Two Temples: Love and Protection' },
    { href: 'are-you-the-creator-of-your-own-world.html', title: 'Are You the Creator of Your Own World?' },
    { href: 'ganapati-first.html', title: 'Ganapati First: Clearing the Way' }
  ];

  var TEACHING_POSTS = [
    { href: 'dasha-maha-vidyas.html', title: 'The Ten Mahavidyas Explained' },
    { href: 'hymn-of-kaulas.html', title: 'Hymn of the Kaulas Explained' }
  ];

  var here = decodeURIComponent(location.pathname.split('/').pop() || '');
  if (NO_SIDEBAR.indexOf(here) !== -1) return;

  var hero = document.querySelector('.page-hero');
  var footer = document.querySelector('footer');
  if (!hero || !footer || document.querySelector('.page-layout')) return;

  var siblings = [];
  var node = hero.nextElementSibling;
  while (node && node !== footer) { siblings.push(node); node = node.nextElementSibling; }
  if (!siblings.length) return;

  var css = document.createElement('style');
  css.textContent =
    '.page-layout{display:flex;align-items:flex-start;gap:40px;max-width:900px;margin:0 auto;padding:0 24px 20px}' +
    '.page-layout .main-col{flex:1;min-width:0}' +
    '.page-layout .main-col>*{margin-left:0;margin-right:0}' +
    '.post-sidebar{width:260px;flex-shrink:0}' +
    '.post-sidebar .sidebar-box{background:rgba(255,255,255,0.45);border:1px solid rgba(166,130,47,0.35);padding:20px;margin-bottom:24px}' +
    '.post-sidebar .sidebar-box h4{font-family:"Cormorant Garamond",serif;color:#5C1A22;font-size:19px;margin:0 0 12px}' +
    '.post-sidebar .sidebar-box ul{list-style:none;margin:0;padding:0}' +
    '.post-sidebar .sidebar-box li{margin-bottom:10px}' +
    '.post-sidebar .sidebar-box a{font-size:14px;line-height:1.5;color:#2B2320;display:block}' +
    '.post-sidebar .sidebar-box a:hover{color:#5C1A22}' +
    '.post-sidebar .sidebar-box .see-all{margin-top:4px;font-size:13px;color:#5C1A22;text-decoration:underline;display:inline-block}' +
    '.post-sidebar .cta-box{background:#5C1A22;color:#EDE3CE;padding:24px 20px;text-align:center}' +
    '.post-sidebar .cta-box p{font-size:14px;line-height:1.6;margin:0 0 14px}' +
    '.post-sidebar .cta-box a{display:inline-block;border:1px solid #EDE3CE;padding:10px 22px;font-size:13px;color:#EDE3CE}' +
    '.post-sidebar .cta-box a:hover{background:#EDE3CE;color:#5C1A22}' +
    '@media (max-width:860px){.page-layout{flex-direction:column;gap:0}.post-sidebar{width:100%}}';
  document.head.appendChild(css);

  function box(title, items, seeAllHref, seeAllLabel) {
    var html = '<h4>' + title + '</h4><ul>';
    items.forEach(function (p) {
      html += '<li><a href="' + p.href + '">' + p.title + '</a></li>';
    });
    html += '</ul><a class="see-all" href="' + seeAllHref + '">' + seeAllLabel + ' &rarr;</a>';
    var div = document.createElement('div');
    div.className = 'sidebar-box';
    div.innerHTML = html;
    return div;
  }

  var otherBlog = BLOG_POSTS.filter(function (p) { return p.href !== here; }).slice(0, 4);
  var otherTeachings = TEACHING_POSTS.filter(function (p) { return p.href !== here; });

  var aside = document.createElement('aside');
  aside.className = 'post-sidebar';
  if (otherBlog.length) aside.appendChild(box('From the blog', otherBlog, 'blog.html', 'See all posts'));
  if (otherTeachings.length) aside.appendChild(box("Guruji's teachings", otherTeachings, 'teachings.html', 'See all teachings'));
  var cta = document.createElement('div');
  cta.className = 'cta-box';
  cta.innerHTML = '<p>Want to go deeper?</p><a href="contact.html">Fill out the form</a>';
  aside.appendChild(cta);

  var layout = document.createElement('div');
  layout.className = 'page-layout';
  var mainCol = document.createElement('div');
  mainCol.className = 'main-col';
  siblings.forEach(function (el) { mainCol.appendChild(el); });
  layout.appendChild(mainCol);
  layout.appendChild(aside);
  hero.after(layout);
})();
