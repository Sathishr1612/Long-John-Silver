
// Highlight current page nav link
(function highlightCurrentPage() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('#')[0];
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();




// ================================================
// HERO CAROUSEL
// ================================================
let heroCur = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots   = document.querySelectorAll('.hero-dot');
let heroTimer;

function goToSlide(n) {
    heroSlides[heroCur].classList.remove('active');
    heroDots[heroCur].classList.remove('active');
    heroCur = (n + heroSlides.length) % heroSlides.length;
    heroSlides[heroCur].classList.add('active');
    heroDots[heroCur].classList.add('active');
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
const btt    = document.getElementById('btt');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (topBar) topBar.classList.toggle('scrolled', y > 50);
    if (btt)    btt.classList.toggle('visible',     y > 400);
}, { passive: true });

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
    indian:      document.getElementById('sec-indian'),
    chinese:     document.getElementById('sec-chinese'),
    continental: document.getElementById('sec-continental'),
    combos:      document.getElementById('sec-combos'),
    beverages:   document.getElementById('sec-beverages'),
    all:         document.getElementById('sec-all'),
};

// Scroll-spy only tracks these four visible page sections
const navSections = {
    indian:      sections.indian,
    chinese:     sections.chinese,
    continental: sections.continental,
    beverages:   sections.beverages,
};

// ================================================
// CATEGORY NAV — SMOOTH SCROLL + ACTIVE HIGHLIGHT
// ================================================
const catNav = document.getElementById('catNav');

document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = navSections[tab.dataset.target];
        if (!target) return;
        const offset = (catNav  ? catNav.offsetHeight  : 0)
                     + (topBar  ? topBar.offsetHeight  : 0);
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
window.addEventListener('scroll', updateActiveTab, { passive: true });




// ================================================
// BUILD "ALL" SECTION
// ================================================
function buildAllSection() {
    const allSec = sections.all;
    if (!allSec) return;

    allSec.innerHTML = `
    <div class="section-header reveal">
        <div class="section-label-wrap">
            <div class="section-label">Full Menu</div>
            <div class="section-title-big">Every <em>Dish</em></div>
        </div>
    </div>
    <div class="featured-row reveal">
        <div class="featured-card">
            <img src="assets/images/food-long-john/chicken-curry.jpg" alt="Chicken Curry" class="fc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="fc-overlay"></div>
            <div class="fc-content">
                <span class="fc-ribbon">Indian · Non-Veg</span>
                <div class="fc-name">Chicken Curry</div>
                <div class="fc-desc">Slow-simmered in an aromatic blend of spices, tomatoes and fresh herbs.</div>
                <span class="fc-price">220 <span>/ 4 pcs</span></span>
            </div>
        </div>
        <div class="featured-card">
            <img src="assets/images/food-long-john/chicken-manchurian-gravy.jpg" alt="Chicken Manchurian" class="fc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="fc-overlay"></div>
            <span class="fc-tag">Most Loved</span>
            <div class="fc-content">
                <span class="fc-ribbon">Chinese · Gravy</span>
                <div class="fc-name">Chicken Manchurian</div>
                <div class="fc-desc">Crispy chicken in tangy, glossy Manchurian gravy with peppers and spring onion.</div>
                <span class="fc-price">260</span>
            </div>
        </div>
    </div>
    <div class="grid-row reveal">
        <div class="grid-card">
            <img src="assets/images/food-long-john/veg-schezwan-fried-rice.jpg" alt="Schezwan Fried Rice" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Chinese · Rice</span><div class="gc-name">Veg Schezwan Fried Rice</div><div class="gc-price"><span class="rupee">₹</span> 160</div></div>
        </div>
        <div class="grid-card">
            <img src="assets/images/food-long-john/veg-cocktail-pasta.jpg" alt="Cocktail Pasta" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Continental · Pasta</span><div class="gc-name">Cocktail Pasta — Veg</div><div class="gc-price"><span class="rupee">₹</span> 190</div></div>
        </div>
        <div class="grid-card">
            <img src="assets/images/food-long-john/chicken-chow.jpg" alt="Chicken Chow" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Chinese · Noodles</span><div class="gc-name">Chicken Chowmein</div><div class="gc-price"><span class="rupee">₹</span> 170</div></div>
        </div>
    </div>
    <div class="grid-row reveal">
        <div class="grid-card">
            <img src="assets/images/food-long-john/veg-pulao.jpg" alt="Veg Pulao" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Indian · Rice</span><div class="gc-name">Veg Pulao</div><div class="gc-price"><span class="rupee">₹</span> 200</div></div>
        </div>
        <div class="grid-card">
            <img src="assets/images/food-long-john/white-chicken-pasta.jpg" alt="White Chicken Pasta" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Continental · Pasta</span><div class="gc-name">White Pasta — Chicken</div><div class="gc-price"><span class="rupee">₹</span> 220</div></div>
        </div>
        <div class="grid-card">
            <img src="assets/images/food-long-john/chicken-kasha.jpg" alt="Chicken Kasha" class="gc-img" onerror="this.parentNode.style.background='#1C2409'">
            <div class="gc-overlay"></div>
            <div class="gc-content"><span class="gc-ribbon">Indian · Signature</span><div class="gc-name">Chicken Kasha</div><div class="gc-price"><span class="rupee">₹</span> 230</div></div>
        </div>
    </div>

    <div class="list-section reveal"><div class="list-section-title">Quick Scan — Indian</div>
    <div class="list-grid">
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Plain Chapati</div><div class="li-price">15</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Butter Chapati</div><div class="li-price">20</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Onion Pakora 8pc</div><div class="li-price">130</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Pakora Boneless 8pc</div><div class="li-price">220</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Paneer Pakora</div><div class="li-price">220</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>French Fries w/ Hot Garlic Sauce</div><div class="li-price">120</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Roll</div><div class="li-price">90</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Roll</div><div class="li-price">100</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Dal Fry</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Jeera Rice</div><div class="li-price">140</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Pulao</div><div class="li-price">200</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Biryani</div><div class="li-price">300</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Mutton Biryani</div><div class="li-price">360</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Paneer Butter Masala</div><div class="li-price">250</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Curry 4pc</div><div class="li-price">220</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Butter Masala 4pc</div><div class="li-price">270</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Kasha</div><div class="li-price">230</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Mutton Curry 4pc</div><div class="li-price">300</div></div>
    </div></div>

    <div class="list-section reveal"><div class="list-section-title">Quick Scan — Chinese</div>
    <div class="list-grid">
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Fried Rice</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Schezwan Fried Rice</div><div class="li-price">160</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Fried Rice</div><div class="li-price">170</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Egg Fried Rice</div><div class="li-price">170</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Noodles</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Schezwan Noodles</div><div class="li-price">160</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Noodles</div><div class="li-price">170</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Schezwan Noodles</div><div class="li-price">180</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Chowmein Gravy</div><div class="li-price">200</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Gobi Manchurian</div><div class="li-price">200</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Manchurian</div><div class="li-price">260</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Chilly Dry</div><div class="li-price">260</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken in Hot Garlic Sauce</div><div class="li-price">280</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Steam Momo</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Prawn Fried Rice</div><div class="li-price">260</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Pork Noodles</div><div class="li-price">190</div></div>
    </div></div>

    <div class="list-section reveal"><div class="list-section-title">Quick Scan — Continental &amp; Beverages</div>
    <div class="list-grid">
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>White Pasta — Veg</div><div class="li-price">190</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>White Pasta — Chicken</div><div class="li-price">220</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Cocktail Pasta — Veg</div><div class="li-price">190</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Cocktail Pasta — Chicken</div><div class="li-price">220</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Burger with Fries</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Cheese Burger with Fries</div><div class="li-price">160</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Veg Sandwich</div><div class="li-price">100</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot nonveg"></span>Chicken Grilled Sandwich</div><div class="li-price">150</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Milk Tea</div><div class="li-price">30</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Coffee</div><div class="li-price">50</div></div>
        <div class="list-item"><div class="li-name"><span class="veg-dot veg"></span>Seasonal Juice</div><div class="li-price">50</div></div>
    </div></div>
    `;
}

buildAllSection();

// ================================================
// FILTER BUTTONS (.filter-btn)
// ================================================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;

        Object.values(sections).forEach(s => { if (s) s.classList.remove('visible'); });

        const target = sections[cat];
        if (target) target.classList.add('visible');

        setTimeout(triggerReveal, 50);
    });
});

// ================================================
// LIGHTBOX
// ================================================
const lbImgs = [
    'image29.jpg','image30.jpg','image31.jpg','image32.jpg',
    'image33.jpg','image34.jpg','image35.jpg'
];
let lbCur = 0;
const lb   = document.getElementById('lightbox');
const lbEl = document.getElementById('lbImg');

function openLb(i) {
    lbCur    = i;
    lbEl.src = lbImgs[i];
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeLb() {
    lb.style.display = 'none';
    document.body.style.overflow = '';
}
function lbNav(d) {
    lbCur    = (lbCur + d + lbImgs.length) % lbImgs.length;
    lbEl.src = lbImgs[lbCur];
}

if (lb) {
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
});







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
// SMOOTH SCROLL — single unified listener
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const offset = (catNav ? catNav.offsetHeight : 0)
                     + (topBar ? topBar.offsetHeight : 0);
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
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
window.addEventListener('scroll', triggerReveal, { passive: true });
triggerReveal();
forceRevealVisible();



/* ── MENU  background slideshow ── */

(function () {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    let current  = 0;
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


(function(){

  /* ── DATA ─────────────────────────────────────────── */
  const DATA = [
    {src:'assets/images/food-long-john/lemon-chicken-gravy.jpg',     name:'Lemon Chicken Gravy',    cat:'chicken'},
    {src:'assets/images/food-long-john/chicken-thali.jpg',           name:'Chicken Thali',          cat:'chicken'},
    {src:'assets/images/food-long-john/mutton-keema-with-roti-2-pc.jpg',name:'Mutton Keema & Roti', cat:'mutton'},
    {src:'assets/images/food-long-john/mutton-curry.jpg',            name:'Mutton Curry',           cat:'mutton'},
    {src:'assets/images/food-long-john/chicke-drumstick.jpg',        name:'Chicken Drumstick',      cat:'chicken'},
    {src:'assets/images/food-long-john/pork-chilly-dry.jpg',         name:'Pork Chilly Dry',        cat:'specials'},
    {src:'assets/images/food-long-john/noodles-about.jpg',           name:'Wok Noodles',            cat:'sides'},
  ];

  const CAT_LABEL = {
    chicken:'Chicken', mutton:'Mutton', specials:'Specials', sides:'Sides'
  };

  let idx  = 0;
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
      if(e.isIntersecting) e.target.classList.add('fst-visible');
    });
  },{threshold:.12});
  tiles.forEach(t => io.observe(t));

  /* ── FILTER ───────────────────────────────────────── */
  document.querySelectorAll('.fst-tab').forEach(btn => {
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.fst-tab').forEach(b=>b.classList.remove('fst-tab-on'));
      btn.classList.add('fst-tab-on');

      const f = btn.dataset.f;

      // Get visible tiles
      const visibleTiles = [];
      tiles.forEach((tile, index) => {
        const match = f==='all' || tile.dataset.cat===f;
        if (match) {
          visibleTiles.push({tile: tile, originalIndex: index});
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
          const match = f==='all' || tile.dataset.cat===f;
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

      pool = f==='all' ? [...DATA] : DATA.filter(d=>d.cat===f);
    });
  });

  /* ── LIGHTBOX ─────────────────────────────────────── */
  window.fstOpen = function(i){
    idx = i;
    renderLb();
    document.getElementById('fstLb').classList.add('fst-lb-open');
    document.body.style.overflow='hidden';
  };

  window.fstClose = function(){
    document.getElementById('fstLb').classList.remove('fst-lb-open');
    document.body.style.overflow='';
  };

  window.fstNav = function(dir){
    idx = (idx + dir + pool.length) % pool.length;
    renderLb();
  };

  function renderLb(){
    const d = pool[idx] ?? DATA[idx];
    const photo = document.getElementById('fstLbPhoto');
    const bar   = document.getElementById('fstBar');

    /* fade swap */
    photo.style.opacity='0';
    bar.style.width='0%';
    setTimeout(()=>{
      photo.src = d.src;
      photo.alt = d.name;
      document.getElementById('fstLbTag').textContent  = CAT_LABEL[d.cat]||d.cat;
      document.getElementById('fstLbName').textContent = d.name;
      photo.style.opacity='1';
    },240);

    /* progress bar */
    bar.style.width = Math.round(((idx+1)/pool.length)*100)+'%';

    /* count */
    document.getElementById('fstCount').textContent =
      String(idx+1).padStart(2,'0') + ' / ' + String(pool.length).padStart(2,'0');

    /* dots */
    const dotsEl = document.getElementById('fstDots');
    dotsEl.innerHTML='';
    pool.forEach((_,i)=>{
      const d2=document.createElement('button');
      d2.className='fst-lb-dot'+(i===idx?' fst-lb-dot-on':'');
      d2.setAttribute('aria-label','Image '+(i+1));
      d2.onclick=()=>{ idx=i; renderLb(); };
      dotsEl.appendChild(d2);
    });
  }

  /* keyboard */
  document.addEventListener('keydown',e=>{
    if(!document.getElementById('fstLb').classList.contains('fst-lb-open')) return;
    if(e.key==='ArrowLeft')  fstNav(-1);
    if(e.key==='ArrowRight') fstNav(1);
    if(e.key==='Escape')     fstClose();
  });

  /* touch swipe in lightbox */
  let tx=0;
  const lb=document.getElementById('fstLb');
  lb.addEventListener('touchstart',e=>{ tx=e.touches[0].clientX; },{passive:true});
  lb.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>50) fstNav(dx<0?1:-1);
  });

  /* Handle resize - reset grid when going back to all */
  window.addEventListener('resize', () => {
    // Optional: refresh layout on resize if needed
  });

})();