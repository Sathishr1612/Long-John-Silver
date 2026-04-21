// Handle ALL .dd-wrapper instances (desktop + mobile) independently
document.querySelectorAll('.dd-wrapper').forEach(wrapper => {
  const btn = wrapper.querySelector('.dd-btn');
  if (!btn) return;

  // Toggle on button click
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Close any other open wrappers first
    document.querySelectorAll('.dd-wrapper.active').forEach(w => {
      if (w !== wrapper) w.classList.remove('active');
    });
    wrapper.classList.toggle('active');
  });

  // Close when a menu item link is clicked
  wrapper.querySelectorAll('.dd-item').forEach(item => {
    item.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
  });
});

// Close all dropdowns when clicking outside any wrapper
document.addEventListener('click', (e) => {
  document.querySelectorAll('.dd-wrapper.active').forEach(wrapper => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('active');
    }
  });
});

// Close all dropdowns on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.dd-wrapper.active').forEach(w => {
      w.classList.remove('active');
    });
  }
});


// Highlight current page nav link & handle hash links
const navLinks = document.querySelectorAll('.nav-link');
function highlightNav() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const scrollPos = window.scrollY + 120; // Increased offset for better trigger

  let anySectionActive = false;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Handle hash links (ScrollSpy) on the home page
    if (href.startsWith('#') && (currentPage === 'index.html' || currentPage === '')) {
      const section = document.querySelector(href);
      if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        link.classList.add('active');
        anySectionActive = true;
      } else {
        link.classList.remove('active');
      }
      return;
    }

    // Handle page links
    const linkPage = href.split('#')[0] || 'index.html';
    if (linkPage === currentPage) {
      if (linkPage === 'index.html' && (currentPage === 'index.html' || currentPage === '')) {
        link.classList.toggle('active', !anySectionActive);
      } else {
        link.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  });
}

// Optimized Scroll handling
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const y = window.scrollY;

      // Navbar/Back-to-top
      if (navbar) navbar.classList.toggle('scrolled', y > 50);
      if (topBar) topBar.classList.toggle('scrolled', y > 50);
      if (btt) btt.classList.toggle('visible', y > 400);

      // Core scroll functions
      highlightNav();
      if (typeof updateActiveTab === 'function') updateActiveTab();

      isScrolling = false;
    });
    isScrolling = true;
  }
}, { passive: true });

// Run initial states
window.addEventListener('load', () => {
  highlightNav();
  if (typeof triggerReveal === 'function') triggerReveal();
  if (typeof updateActiveTab === 'function') updateActiveTab();
});


// ================================================
// HERO CAROUSEL
// ================================================

let heroCur = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
let heroTimer;

function goToSlide(n) {
  if (!heroSlides.length) return;
  heroSlides[heroCur].classList.remove('active');
  heroDots[heroCur]?.classList.remove('active');
  heroCur = (n + heroSlides.length) % heroSlides.length;
  heroSlides[heroCur].classList.add('active');
  heroDots[heroCur]?.classList.add('active');
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToSlide(heroCur + 1), 5500);
}

if (heroSlides.length) startHeroTimer();


// ================================================
// NAVBAR + BACK-TO-TOP
// ================================================
const navbar = document.getElementById('navbar');
const topBar = document.getElementById('topBar');
const btt = document.getElementById('btt');
// Handle scroll logic in the optimized block at top of file

// ================================================
// MOBILE MENU
// ================================================
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const m = document.getElementById('mobileMenu');
    if (m) m.style.display = m.style.display === 'block' ? 'none' : 'block';
  });
}
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => {
    const m = document.getElementById('mobileMenu');
    if (m) m.style.display = 'none';
  });
});

// ================================================
// UNIFIED SECTIONS MAP
// ------------------------------------------------
// Used by: category nav scroll-spy  AND  filter buttons
// ================================================
const sections = {
  indian: document.getElementById('sec-indian'),
  chinese: document.getElementById('sec-chinese'),
  continental: document.getElementById('sec-continental'),
  combos: document.getElementById('sec-combos'),
  beverages: document.getElementById('sec-beverages'),
  all: document.getElementById('sec-all'),
};

// Scroll-spy only tracks these four visible page sections
const navSections = {
  indian: sections.indian,
  chinese: sections.chinese,
  continental: sections.continental,
  beverages: sections.beverages,
};

// ================================================
// CATEGORY NAV — SMOOTH SCROLL + ACTIVE HIGHLIGHT
// ================================================
const catNav = document.getElementById('catNav');

document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = navSections[tab.dataset.target];
    if (!target) return;
    const offset = (catNav ? catNav.offsetHeight : 0)
      + (topBar ? topBar.offsetHeight : 0);
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

function updateActiveTab() {
  const scrollPos = window.scrollY
    + (catNav ? catNav.offsetHeight : 0)
    + (topBar ? topBar.offsetHeight : 0)
    + 60;
  let active = 'indian';
  for (const [key, el] of Object.entries(navSections)) {
    if (el && el.offsetTop <= scrollPos) active = key;
  }
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.target === active);
  });
}
// Listener moved to optimized scroll block





// ================================================
// CONTACT FORM
// ================================================
function handleForm(e) {
  e.preventDefault();
  const s = document.getElementById('formSuccess');
  if (s) {
    s.style.display = 'block';
    setTimeout(() => { s.style.display = 'none'; }, 5000);
  }
  e.target.reset();
}

// ================================================
// SMOOTH SCROLL — Optimized for no-jump & no-reload
// ================================================
document.querySelectorAll('a[href*="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === "#") return;

    // Build absolute URLs for comparison
    const url = new URL(a.href);
    const loc = window.location;

    // Check if target is on the same page
    const isSamePage = url.pathname === loc.pathname ||
      url.pathname === loc.pathname + 'index.html' ||
      (loc.pathname.endsWith('/') && url.pathname.endsWith('/index.html'));

    if (isSamePage) {
      const id = url.hash.slice(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();

        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPos = el.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Update URL hash without jump/reload
        if (history.pushState) {
          history.pushState(null, null, '#' + id);
        }
      }
    }
  });
});

// ================================================
// SCROLL REVEAL — single unified observer
// ================================================
function triggerReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.classList.add('vis');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

function forceRevealVisible() {
  document.querySelectorAll('.menu-section.visible .reveal').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
      el.classList.add('vis');
    }, i * 50);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  forceRevealVisible();
  triggerReveal();
});
// Listener handled in optimized scroll block
forceRevealVisible();



/* ── MENU  background slideshow ── */

(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0;
  let timer;

  if (!slides.length) return;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  // Dot click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startTimer(); // reset timer on manual click
    });
  });

  // Pause on hover
  const hero = document.querySelector('.menu-hero');
  hero?.addEventListener('mouseenter', () => clearInterval(timer));
  hero?.addEventListener('mouseleave', startTimer);

  startTimer();
})();




// ====================  GALLERY  ===========


(function () {

  /* ── DATA ─────────────────────────────────────────── */
  const DATA = [
    { src: 'assets/images/food-long-john/lemon-chicken-gravy.jpg', name: 'Lemon Chicken Gravy', cat: 'chicken' },
    { src: 'assets/images/food-long-john/chicken-thali.jpg', name: 'Chicken Thali', cat: 'chicken' },
    { src: 'assets/images/food-long-john/mutton-keema-with-roti-2-pc.jpg', name: 'Mutton Keema & Roti', cat: 'mutton' },
    { src: 'assets/images/food-long-john/mutton-curry.jpg', name: 'Mutton Curry', cat: 'mutton' },
    { src: 'assets/images/food-long-john/chicke-drumstick.jpg', name: 'Chicken Drumstick', cat: 'chicken' },
    { src: 'assets/images/food-long-john/pork-chilly-dry.jpg', name: 'Pork Chilly Dry', cat: 'specials' },
    { src: 'assets/images/food-long-john/noodles-about.jpg', name: 'Wok Noodles', cat: 'sides' },
  ];

  const CAT_LABEL = {
    chicken: 'Chicken', mutton: 'Mutton', specials: 'Specials', sides: 'Sides'
  };

  let idx = 0;
  let pool = [...DATA];

  // Check if mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Check if tablet
  function isTablet() {
    return window.innerWidth <= 1080 && window.innerWidth > 768;
  }

  /* ── ENTRANCE OBSERVER ────────────────────────────── */
  const tiles = document.querySelectorAll('.fst-tile');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('fst-visible');
    });
  }, { threshold: .12 });
  tiles.forEach(t => io.observe(t));

  /* ── FILTER ───────────────────────────────────────── */
  document.querySelectorAll('.fst-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fst-tab').forEach(b => b.classList.remove('fst-tab-on'));
      btn.classList.add('fst-tab-on');

      const f = btn.dataset.f;

      // Get visible tiles
      const visibleTiles = [];
      tiles.forEach((tile, index) => {
        const match = f === 'all' || tile.dataset.cat === f;
        if (match) {
          visibleTiles.push({ tile: tile, originalIndex: index });
        }
      });

      // Hide all first
      tiles.forEach(tile => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(20px) scale(0.95)';
      });

      setTimeout(() => {
        // Hide non-matching completely
        tiles.forEach((tile, index) => {
          const match = f === 'all' || tile.dataset.cat === f;
          if (!match) {
            tile.style.display = 'none';
            // Reset inline styles when hidden
            tile.style.gridColumn = '';
            tile.style.gridRow = '';
          } else {
            tile.style.display = 'block';
          }
        });

        // Apply new grid positions for visible tiles
        visibleTiles.forEach((item, newIndex) => {
          const tile = item.tile;

          if (isMobile()) {
            // Mobile: 2 columns, simple layout
            // First item spans full width, rest are 50/50
            if (newIndex === 0) {
              tile.style.gridColumn = '1/3';
              tile.style.gridRow = 'auto';
            } else {
              const row = Math.floor((newIndex - 1) / 2) + 2;
              const col = (newIndex - 1) % 2 === 0 ? '1/2' : '2/3';
              tile.style.gridColumn = col;
              tile.style.gridRow = row + '/' + (row + 1);
            }
          } else if (isTablet()) {
            // Tablet: 6 columns
            if (newIndex === 0) {
              tile.style.gridColumn = '1/4';
              tile.style.gridRow = '1/5';
            } else if (newIndex === 1) {
              tile.style.gridColumn = '4/7';
              tile.style.gridRow = '1/4';
            } else if (newIndex === 2) {
              tile.style.gridColumn = '4/7';
              tile.style.gridRow = '4/5';
            } else if (newIndex === 3) {
              tile.style.gridColumn = '1/3';
              tile.style.gridRow = '5/8';
            } else if (newIndex === 4) {
              tile.style.gridColumn = '3/5';
              tile.style.gridRow = '5/8';
            } else if (newIndex === 5) {
              tile.style.gridColumn = '5/7';
              tile.style.gridRow = '5/8';
            } else if (newIndex === 6) {
              tile.style.gridColumn = '1/7';
              tile.style.gridRow = '8/11';
            }
          } else {
            // Desktop: 12 columns
            if (newIndex === 0) {
              tile.style.gridColumn = '1/6';
              tile.style.gridRow = '1/8';
            } else if (newIndex === 1) {
              tile.style.gridColumn = '6/9';
              tile.style.gridRow = '1/5';
            } else if (newIndex === 2) {
              tile.style.gridColumn = '9/13';
              tile.style.gridRow = '1/4';
            } else if (newIndex === 3) {
              tile.style.gridColumn = '6/9';
              tile.style.gridRow = '5/8';
            } else if (newIndex === 4) {
              tile.style.gridColumn = '9/13';
              tile.style.gridRow = '4/8';
            } else if (newIndex === 5) {
              tile.style.gridColumn = '1/5';
              tile.style.gridRow = '8/11';
            } else if (newIndex === 6) {
              tile.style.gridColumn = '5/13';
              tile.style.gridRow = '8/11';
            }
          }

          // Show with animation
          setTimeout(() => {
            tile.style.opacity = '1';
            tile.style.transform = 'translateY(0) scale(1)';
          }, 50 * newIndex);
        });

      }, 300);

      pool = f === 'all' ? [...DATA] : DATA.filter(d => d.cat === f);
    });
  });

  /* ── LIGHTBOX ─────────────────────────────────────── */
  window.fstOpen = function (i) {
    idx = i;
    renderLb();
    document.getElementById('fstLb').classList.add('fst-lb-open');
    document.body.style.overflow = 'hidden';
  };

  window.fstClose = function () {
    document.getElementById('fstLb').classList.remove('fst-lb-open');
    document.body.style.overflow = '';
  };

  window.fstNav = function (dir) {
    idx = (idx + dir + pool.length) % pool.length;
    renderLb();
  };

  function renderLb() {
    const d = pool[idx] ?? DATA[idx];
    const photo = document.getElementById('fstLbPhoto');
    const bar = document.getElementById('fstBar');

    /* fade swap */
    photo.style.opacity = '0';
    bar.style.width = '0%';
    setTimeout(() => {
      const source = photo.previousElementSibling;
      if (source && source.tagName === 'SOURCE') {
        source.srcset = d.src.replace(/\.(jpg|png)$/, '.webp');
      }
      photo.src = d.src;
      photo.alt = d.name;
      document.getElementById('fstLbTag').textContent = CAT_LABEL[d.cat] || d.cat;
      document.getElementById('fstLbName').textContent = d.name;
      photo.style.opacity = '1';
    }, 240);

    /* progress bar */
    bar.style.width = Math.round(((idx + 1) / pool.length) * 100) + '%';

    /* count */
    document.getElementById('fstCount').textContent =
      String(idx + 1).padStart(2, '0') + ' / ' + String(pool.length).padStart(2, '0');

    /* dots */
    const dotsEl = document.getElementById('fstDots');
    dotsEl.innerHTML = '';
    pool.forEach((_, i) => {
      const d2 = document.createElement('button');
      d2.className = 'fst-lb-dot' + (i === idx ? ' fst-lb-dot-on' : '');
      d2.setAttribute('aria-label', 'Image ' + (i + 1));
      d2.onclick = () => { idx = i; renderLb(); };
      dotsEl.appendChild(d2);
    });
  }

  /* keyboard */
  document.addEventListener('keydown', e => {
    if (!document.getElementById('fstLb').classList.contains('fst-lb-open')) return;
    if (e.key === 'ArrowLeft') fstNav(-1);
    if (e.key === 'ArrowRight') fstNav(1);
    if (e.key === 'Escape') fstClose();
  });

  /* touch swipe in lightbox */
  let tx = 0;
  const lb = document.getElementById('fstLb');
  lb?.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb?.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) fstNav(dx < 0 ? 1 : -1);
  });

  /* Handle resize - reset grid when going back to all */
  window.addEventListener('resize', () => {
    // Optional: refresh layout on resize if needed
  });

})();