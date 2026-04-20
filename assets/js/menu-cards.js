const IMG = 'assets/images/food-long-john/';

/* ── MENU DATA ───────────────────────────────────────────
   Each item: { name, cat, veg, img, price, note, desc, badge }
   badge: 'loved' | 'chef' | null
   img: filename relative to IMG path (null = placeholder)
─────────────────────────────────────────────────────── */
const MENU = [
  /* ══ INDIAN ══ */
  { name: 'Chicken Curry', cat: 'indian', veg: false, img: 'chicken-curry.jpg', price: 220, note: '/4 pcs', desc: 'Bone-in chicken slow-simmered in aromatic spices, tomatoes and fresh herbs.', badge: 'loved' },
  { name: 'Chicken Kasha', cat: 'indian', veg: false, img: 'chicken-kasha.jpg', price: 230, desc: 'Thick Bengali-style dry gravy packed with robust spices and tender chicken.', badge: 'chef' },
  { name: 'Chicken Masala', cat: 'indian', veg: false, img: 'chicken-masala.jpg', price: 220, note: '/4 pcs', desc: 'Richly spiced masala base with bone-in chicken pieces.' },
  { name: 'Chicken Butter Masala', cat: 'indian', veg: false, img: 'chicken-masala.jpg', price: 270, note: '/4 pcs', desc: 'Creamy tomato-butter gravy with tender chicken in classic north-Indian style.' },
  { name: 'Chicken Do Piyaza', cat: 'indian', veg: false, img: 'lemon-chicken-gravy.jpg', price: 240, desc: 'Double onion gravy with chicken — tangy, hearty and satisfying.' },
  { name: 'Mutton Curry', cat: 'indian', veg: false, img: 'mutton-curry.jpg', price: 300, note: '/4 pcs', desc: 'Bone-in mutton simmered low and slow in spiced gravy till melt-tender.', badge: 'loved' },
  { name: 'Mutton Kasha', cat: 'indian', veg: false, img: 'mutton-kasha.jpg', price: 300, note: '/4 pcs', desc: 'Bengali-style dry mutton kasha with concentrated spices and caramelised onion.' },
  { name: 'Mutton Masala', cat: 'indian', veg: false, img: 'mutton-kasha.jpg', price: 300, note: '/4 pcs', desc: 'Mutton in a bold masala gravy — hearty and warming.' },
  { name: 'Mutton Biryani', cat: 'indian', veg: false, img: 'mutton-biryani.jpg', price: 360, desc: 'Fragrant basmati layered with spiced mutton, fried onion and saffron.' },
  { name: 'Chicken Biryani', cat: 'indian', veg: false, img: 'egg-biryani.jpg', price: 300, desc: 'Fragrant rice layered with spiced chicken and caramelised onions.', badge: 'loved' },
  { name: 'Paneer Butter Masala', cat: 'indian', veg: true, img: 'paneer-butter-masala.jpg', price: 250, desc: 'Soft cottage cheese in a velvety tomato-butter gravy with cream.', badge: 'loved' },
  { name: 'Veg Pulao', cat: 'indian', veg: true, img: 'peas-pulao.jpg', price: 200, desc: 'Fragrant basmati rice with seasonal vegetables and whole spices.' },
  { name: 'Matar Paneer', cat: 'indian', veg: true, img: 'paneer-butter-masala.jpg', price: 210, desc: 'Tender paneer and green peas in a spiced tomato-onion gravy.' },
  { name: 'Shahi Paneer', cat: 'indian', veg: true, img: 'paneer-butter-masala.jpg', price: 250, desc: 'Paneer in a rich, creamy royal-style gravy with mild spices.' },
  { name: 'Dal Fry', cat: 'indian', veg: true, img: 'veg-pulao.jpg', price: 150, desc: 'Yellow lentils tempered with cumin, garlic and green chillies.' },
  { name: 'Fish Fry', cat: 'indian', veg: false, img: 'fish-fry.jpg', price: 220, desc: 'Crispy golden fish fillets marinated in spices and shallow fried.' },
  { name: 'Fish Finger with Fries', cat: 'indian', veg: false, img: 'fish-finger.jpg', price: 270, note: '/8 pcs', desc: 'Crispy breaded fish fingers served with golden french fries.' },
  { name: 'French Fries', cat: 'indian', veg: true, img: 'french-fries.jpg', price: 120, desc: 'Golden crispy fries served with house-special hot garlic sauce.' },
  { name: 'Chicken Drumstick', cat: 'indian', veg: false, img: 'chicke-drumstick.jpg', price: 200, note: '/4 pc', desc: 'Succulent chicken drumsticks marinated and cooked to perfection.' },
  { name: 'Chicken Roll', cat: 'indian', veg: false, img: 'chicken-roll.jpg', price: 100, desc: 'Soft paratha wrapped around spiced chicken filling.' },
  { name: 'Egg Roll', cat: 'indian', veg: false, img: 'egg-roll.jpg', price: 100, desc: 'Flaky paratha wrapped with masala egg and fresh salad.' },
  { name: 'Paneer Roll', cat: 'indian', veg: true, img: 'paneer-roll.jpg', price: 110, desc: 'Crisp paratha filled with spiced paneer and fresh salad.' },
  { name: 'Veg Roll', cat: 'indian', veg: true, img: 'vg-roll.jpg', price: 90, desc: 'Soft paratha with a filling of spiced vegetables and chutney.' },
  { name: 'Chicken Thali', cat: 'indian', veg: false, img: 'chicken-thali.jpg', price: null, note: 'Ask pricing', desc: 'Wholesome thali with chicken curry, rice, dal, chapati and sides.' },
  { name: 'Mutton Thali', cat: 'indian', veg: false, img: 'mutton-thali.jpg', price: null, note: 'Ask pricing', desc: 'Hearty mutton thali with rice, dal, chapati, pickle and accompaniments.' },

  /* ══ CHINESE ══ */
  { name: 'Chicken Chowmein', cat: 'chinese', veg: false, img: 'chicken-chow.jpg', price: 170, desc: 'Wok-tossed noodles with tender chicken, crisp vegetables and house sauce.', badge: 'loved' },
  { name: 'Chicken Manchurian', cat: 'chinese', veg: false, img: 'chicken-manchurian-gravy.jpg', price: 260, desc: 'Crispy boneless chicken in tangy, glossy Manchurian gravy with spring onion.', badge: 'loved' },
  { name: 'Chilly Chicken Dry', cat: 'chinese', veg: false, img: 'chilly-chicken-dry.jpg', price: 260, desc: 'Crispy chicken tossed with capsicum, onion and green chillies in bold sauce.' },
  { name: 'Lemon Chicken Gravy', cat: 'chinese', veg: false, img: 'lemon-chicken-gravy.jpg', price: 260, desc: 'Tender chicken in a bright, tangy lemon-infused gravy — unique and refreshing.' },
  { name: 'Sweet & Sour Chicken', cat: 'chinese', veg: false, img: 'sweet-and-sour-chicken.jpg', price: 260, desc: 'Crispy chicken glazed in a bright sweet and sour pineapple-chilli sauce.' },
  { name: 'Chicken Fried Rice', cat: 'chinese', veg: false, img: 'chicken-fried-rice.jpg', price: 170, desc: 'Wok-fried rice with chicken, egg, soy sauce and fresh vegetables.' },
  { name: 'Veg Fried Rice', cat: 'chinese', veg: true, img: 'veg-fried-rice.jpg', price: 150, desc: 'Classic wok-tossed rice with seasonal vegetables and soy sauce.' },
  { name: 'Veg Schezwan Fried Rice', cat: 'chinese', veg: true, img: 'veg-schezwan-fried-rice.jpg', price: 160, desc: 'Bold Schezwan-spiced fried rice with crisp garden vegetables.' },
  { name: 'Egg Schezwan Fried Rice', cat: 'chinese', veg: false, img: 'egg-schezwan-fried-rice.jpg', price: 180, desc: 'Fiery Schezwan fried rice tossed with fluffy scrambled egg.' },
  { name: 'Veg Schezwan Chow', cat: 'chinese', veg: true, img: 'veg-schezwan-chow.jpg', price: 160, desc: 'Noodles tossed in bold Schezwan sauce with crunchy fresh vegetables.' },
  { name: 'Veg Chowmein', cat: 'chinese', veg: true, img: 'veg-chow.jpg', price: 150, desc: 'Classic stir-fried noodles with fresh vegetables in a light savory sauce.' },
  { name: 'Chicken Chowmein Gravy', cat: 'chinese', veg: false, img: 'chicken-chowmein-gravy.jpg', price: 200, desc: 'Noodles bathed in rich, glossy chicken gravy sauce — comforting and hearty.' },
  { name: 'Mix Fried Rice', cat: 'chinese', veg: false, img: 'mix-fried-rice.jpg', price: 240, desc: 'Loaded fried rice with chicken, pork, egg and vegetables in one bowl.' },
  { name: 'Prawn Fried Rice', cat: 'chinese', veg: false, img: 'prawns-fried-rice.jpg', price: 260, desc: 'Wok-tossed rice with succulent prawns, egg and light Asian seasonings.' },
  { name: 'Prawn Chowmein', cat: 'chinese', veg: false, img: 'prawns-chow.jpg', price: 260, desc: 'Stir-fried noodles with juicy prawns, vegetables and house sauce.' },
  { name: 'Pork Chilly Dry', cat: 'chinese', veg: false, img: 'pork-chilly-dry.jpg', price: 260, desc: 'Tender pork in a fiery dry chilly preparation with capsicum and onion.' },
  { name: 'Pork Fried Rice', cat: 'chinese', veg: false, img: 'pork-fried-rice.jpg', price: 180, desc: 'Wok-fried rice with tender pork, egg and a hint of soy.' },
  { name: 'Pork Chowmein', cat: 'chinese', veg: false, img: 'pork-chow.jpg', price: 190, desc: 'Noodles stir-fried with pork strips, vegetables and house sauce.' },
  { name: 'Chicken 65', cat: 'chinese', veg: false, img: 'chicken-65.jpg', price: 250, desc: 'Deep-fried chicken marinated in yoghurt, red chillies and curry leaves.', badge: 'loved' },
  { name: 'Chicken Mushroom Soup Chow', cat: 'chinese', veg: false, img: 'chicken-mushroom-soup-chow.jpg', price: 180, desc: 'Noodles in a rich, velvety chicken mushroom soup base.' },
  { name: 'Egg Chowmein', cat: 'chinese', veg: false, img: 'egg-chow.jpg', price: 160, desc: 'Stir-fried noodles with fluffy egg, vegetables and savory seasonings.' },
  { name: 'Prawns Tempura', cat: 'chinese', veg: false, img: 'prawns-tempura.jpg', price: 280, desc: 'Light, crispy battered prawns served with dipping sauce.', badge: 'chef' },

  /* ══ CONTINENTAL ══ */
  { name: 'White Pasta — Chicken', cat: 'continental', veg: false, img: 'white-chicken-pasta.jpg', price: 220, desc: 'Penne pasta in creamy white sauce with tender chicken pieces.', badge: 'loved' },
  { name: 'White Pasta — Veg', cat: 'continental', veg: true, img: 'veg-white-pasta.jpg', price: 190, desc: 'Penne pasta tossed in a rich, creamy béchamel with garden vegetables.' },
  { name: 'Cocktail Pasta — Veg', cat: 'continental', veg: true, img: 'veg-cocktail-pasta.jpg', price: 190, desc: 'A vibrant blend of red and white sauce pasta with crisp vegetables.' },
  { name: 'Cocktail Pasta — Chicken', cat: 'continental', veg: false, img: 'veg-cocktail-pasta.jpg', price: 220, desc: 'Dual-sauce pasta with tender chicken strips and seasonal vegetables.' },
  { name: 'Chicken Burger with Fries', cat: 'continental', veg: false, img: 'chicken-burger.jpg', price: 150, desc: 'Crispy chicken patty in a toasted bun with fresh lettuce and house sauce.' },
  { name: 'Chicken Cheese Burger', cat: 'continental', veg: false, img: 'chicken-cheese-burger.jpg', price: 160, desc: 'Chicken patty topped with melted cheese in a golden toasted bun.' },
  { name: 'Chicken Grilled Sandwich', cat: 'continental', veg: false, img: 'chicken-griiled-sandwich.jpg', price: 150, desc: 'Grilled sandwich with spiced chicken filling, vegetables and mayo.' },
  { name: 'Veg Sandwich', cat: 'continental', veg: true, img: 'vg-roll.jpg', price: 100, desc: 'Fresh vegetables, cheese and house spread between toasted bread.' },
  { name: 'Fish Finger with Fries', cat: 'continental', veg: false, img: 'fish-finger.jpg', price: 270, note: '/8 pcs', desc: 'Golden breaded fish fingers with crispy fries and dipping sauce.' },

  /* ══ COMBOS ══ */
  { name: 'Mutton Keema with Roti', cat: 'combos', veg: false, img: 'mutton-keema-with-roti-2-pc.jpg', price: 140, desc: 'Spiced minced mutton served with 2 fresh soft rotis.', badge: 'loved' },
  { name: 'Chicken Keema with Roti', cat: 'combos', veg: false, img: 'chicken-keema-with-Roti-2-pc.jpg', price: 120, desc: 'Spiced minced chicken served with 2 fresh soft rotis.' },
  { name: 'Butter Chicken with Roti', cat: 'combos', veg: false, img: 'chicken-masala.jpg', price: 300, desc: 'Creamy butter chicken paired with 2 freshly made rotis.' },
  { name: 'Paneer Butter Masala + Roti', cat: 'combos', veg: true, img: 'paneer-butter-masala.jpg', price: 270, desc: 'Rich paneer butter masala served with 2 fresh rotis.' },
  { name: 'Jeera Rice + Chicken Butter Masala', cat: 'combos', veg: false, img: 'chicken-masala.jpg', price: 300, desc: 'Fragrant jeera rice paired with creamy chicken butter masala.' },
  { name: 'Veg Fried Rice + Veg Manchurian + Fries', cat: 'combos', veg: true, img: 'veg-fried-rice.jpg', price: 200, desc: 'Complete Chinese veg meal deal — rice, manchurian and fries.', badge: 'loved' },
  { name: 'Veg Fried Rice + Chilly Chicken + Fries', cat: 'combos', veg: false, img: 'chilly-chicken-dry.jpg', price: 250, desc: 'Rice with crispy chilly chicken and golden fries combo.' },
  { name: 'Veg Chow + Pork Chilly + Fries', cat: 'combos', veg: false, img: 'pork-chilly-dry.jpg', price: 280, desc: 'Noodles and pork chilly gravy/dry served with fries.' },

  /* ══ BEVERAGES ══ */
  { name: 'Milk Tea', cat: 'beverages', veg: true, img: null, price: 30, desc: 'Classic comforting milk tea brewed fresh.', icon: 'fa-mug-hot' },
  { name: 'Black Tea', cat: 'beverages', veg: true, img: null, price: 20, desc: 'Light, refreshing black tea served hot.', icon: 'fa-mug-saucer' },
  { name: 'Coffee', cat: 'beverages', veg: true, img: null, price: 50, desc: 'Freshly brewed hot coffee to warm your soul.', icon: 'fa-coffee' },
  { name: 'Seasonal Juice', cat: 'beverages', veg: true, img: null, price: 50, desc: 'Fresh juice made with seasonal local fruits.', icon: 'fa-blender' },
];

const HOMEMENU = [
  /* ══ INDIAN ══ */
  { name: 'Chicken Butter Masala', cat: 'indian', veg: false, img: 'chicken-masala.jpg', price: 270, note: '/4 pcs', desc: 'Creamy tomato-butter gravy with tender chicken in classic north-Indian style.' },
  { name: 'Chicken Do Piyaza', cat: 'indian', veg: false, img: 'lemon-chicken-gravy.jpg', price: 240, desc: 'Double onion gravy with chicken — tangy, hearty and satisfying.' },
  { name: 'Mutton Curry', cat: 'indian', veg: false, img: 'mutton-curry.jpg', price: 300, note: '/4 pcs', desc: 'Bone-in mutton simmered low and slow in spiced gravy till melt-tender.', badge: 'loved' },
  { name: 'Mutton Kasha', cat: 'indian', veg: false, img: 'mutton-kasha.jpg', price: 300, note: '/4 pcs', desc: 'Bengali-style dry mutton kasha with concentrated spices and caramelised onion.' },
  { name: 'Mutton Masala', cat: 'indian', veg: false, img: 'mutton-kasha.jpg', price: 300, note: '/4 pcs', desc: 'Mutton in a bold masala gravy — hearty and warming.' },
  { name: 'Mutton Biryani', cat: 'indian', veg: false, img: 'mutton-biryani.jpg', price: 360, desc: 'Fragrant basmati layered with spiced mutton, fried onion and saffron.' },
  { name: 'Chicken Biryani', cat: 'indian', veg: false, img: 'egg-biryani.jpg', price: 300, desc: 'Fragrant rice layered with spiced chicken and caramelised onions.', badge: 'loved' },
  { name: 'Paneer Butter Masala', cat: 'indian', veg: true, img: 'paneer-butter-masala.jpg', price: 250, desc: 'Soft cottage cheese in a velvety tomato-butter gravy with cream.', badge: 'loved' },
  { name: 'Veg Pulao', cat: 'indian', veg: true, img: 'peas-pulao.jpg', price: 200, desc: 'Fragrant basmati rice with seasonal vegetables and whole spices.' },
  { name: 'Matar Paneer', cat: 'indian', veg: true, img: 'paneer-butter-masala.jpg', price: 210, desc: 'Tender paneer and green peas in a spiced tomato-onion gravy.' },
  { name: 'Dal Fry', cat: 'indian', veg: true, img: 'veg-pulao.jpg', price: 150, desc: 'Yellow lentils tempered with cumin, garlic and green chillies.' },
  { name: 'Fish Fry', cat: 'indian', veg: false, img: 'fish-fry.jpg', price: 220, desc: 'Crispy golden fish fillets marinated in spices and shallow fried.' },
];

/* ── Category Config ── */
const CATS = [
  { id: 'indian', label: 'Indian', title: 'Desi', em: 'Flavours', icon: '🍛' },
  { id: 'chinese', label: 'Chinese', title: 'Wok', em: 'Wonders', icon: '🥢' },
  { id: 'continental', label: 'Continental', title: 'East', em: 'meets West', icon: '🍔' },
  { id: 'combos', label: 'Combos', title: 'Best', em: 'Value', icon: '🎯' },
  { id: 'beverages', label: 'Beverages', title: 'Sip', em: '& Savour', icon: '☕' },
];

/* ── Build a single card ── */
function buildCard(item, delay) {
  const imgHTML = item.img
    ? `<picture>
        <source srcset="${IMG}${item.img.replace(/\.(jpg|png)$/, '.webp')}" type="image/webp">
        <img class="mc-img" src="${IMG}${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'mc-img-ph\\'><i class=\\'fas fa-utensils\\'></i><span>${item.cat}</span></div>'">
      </picture>`
    : `<div class="mc-img-ph"><i class="fas fa-${item.icon || 'utensils'}"></i><span>${item.name}</span></div>`;

  const badge = item.badge === 'loved'
    ? `<div class="mc-badge-loved"><i class="fas fa-fire"></i> Most Loved</div>`
    : item.badge === 'chef'
      ? `<div class="mc-badge-chef"><i class="fas fa-star"></i> Chef's Pick</div>`
      : '';

  const priceHTML = item.price
    ? `<span class="mc-rupee">₹</span>${item.price}${item.note ? `<span class="mc-note">${item.note}</span>` : ''}`
    : `<span class="mc-rupee" style="font-size:.75rem">Call for Price</span>`;

  return `
  <div class="mc-card" data-cat="${item.cat}" style="transition-delay:${delay}ms">
    <div class="mc-img-wrap">
      ${badge}
      ${imgHTML}
    </div>
    <div class="mc-content">
      <div class="mc-body">
        <div class="mc-top">
          <div class="mc-veg-box ${item.veg ? 'veg' : 'nonveg'}"></div>
          <span class="mc-cat-tag">${item.cat}</span>
        </div>
        <div class="mc-name">${item.name}</div>
        ${item.desc ? `<div class="mc-desc">${item.desc}</div>` : ''}
      </div>
      <div class="mc-footer">
        <div class="mc-price">${priceHTML}</div>
        <a href="https://plumb5.com/" target="_blank" class="mc-btn">Order <i class="fas fa-arrow-right" style="font-size:.55rem"></i></a>
      </div>
    </div>  
  </div>`;
}

/* ── Build a beverage card ── */
function buildBevCard(item, delay) {
  return `
  <div class="mc-bev-card" style="transition-delay:${delay}ms">
    <div class="mc-bev-icon"><i class="fas ${item.icon || 'fa-mug-hot'}"></i></div>
    <div class="mc-bev-name">${item.name}</div>
    <div class="mc-bev-price"><span class="mc-rupee">₹</span>${item.price}</div>
    <div style="font-family:var(--font-serif);font-size:.72rem;color:var(--text-muted);font-style:italic">${item.desc}</div>
    <a href="tel:+916374363370" class="mc-btn">Order <i class="fas fa-arrow-right" style="font-size:.55rem"></i></a>
  </div>`;
}

/* ── Build a section (header + grid) ── */
function buildSection(catId, items) {
  const cat = CATS.find(c => c.id === catId);
  const header = `
  <div class="mc-cat-header">
    <span class="mc-cat-eyebrow">${cat.icon} ${cat.label}</span>
    <div class="mc-cat-title">${cat.title} <em>${cat.em}</em></div>
    <div class="mc-cat-line"></div>
  </div>`;

  if (catId === 'beverages') {
    const cards = items.map((it, i) => buildBevCard(it, i * 60)).join('');
    return `<div id="mc-${catId}" class="mc-section">${header}<div class="mc-bev-grid">${cards}</div></div>`;
  }

  const cards = items.map((it, i) => buildCard(it, i * 40)).join('');
  return `<div id="mc-${catId}" class="mc-section">${header}<div class="mc-grid">${cards}</div></div>`;
}

/* ── Render All Sections (for Menu Page) ── */
function renderMenu() {
  const wrap = document.getElementById('menuCardsWrap');
  if (!wrap) return;

  // "All" super-section
  let allHTML = '<div id="mc-all" class="mc-section mc-visible">';
  CATS.forEach(cat => {
    const items = MENU.filter(m => m.cat === cat.id);
    const header = `<div class="mc-cat-header"><span class="mc-cat-eyebrow">${cat.icon} ${cat.label}</span><div class="mc-cat-title">${cat.title} <em>${cat.em}</em></div><div class="mc-cat-line"></div></div>`;
    if (cat.id === 'beverages') {
      allHTML += header + `<div class="mc-bev-grid">${items.map((it, i) => buildBevCard(it, 0)).join('')}</div>`;
    } else {
      allHTML += header + `<div class="mc-grid">${items.map((it, i) => buildCard(it, 0)).join('')}</div>`;
    }
  });
  allHTML += '</div>';

  // Individual category sections
  const catSections = CATS.map(cat => {
    return buildSection(cat.id, MENU.filter(m => m.cat === cat.id));
  }).join('');

  wrap.innerHTML = allHTML + catSections;
  animateVisible();
}

/* ── Render Homepage Menu (Exactly 12 items, simple grid) ── */
function renderHomeMenu() {
  const wrap = document.getElementById('homeMenuCardsWrap');
  if (!wrap) return;

  // Show exactly 12 items from HOMEMENU in a simple grid (no categories)
  const items = HOMEMENU.slice(0, 12);
  const cards = items.map((it, i) => buildCard(it, i * 40)).join('');

  wrap.innerHTML = `
    <div class="mc-section mc-visible">
      <div class="mc-grid">
        ${cards}
      </div>
    </div>`;

  animateVisible();
}

/* ── Animate cards in viewport ── */
function animateVisible() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.style.transitionDelay || '0ms';
        setTimeout(() => e.target.classList.add('mc-show'), parseInt(delay) || 0);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.mc-card:not(.mc-show), .mc-bev-card:not(.mc-show), .mc-combo-card:not(.mc-show)').forEach(el => io.observe(el));
}

/* ── Tab switching ── */
function switchTab(tabId) {
  // Update active tab button
  document.querySelectorAll('.menu-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Show/hide sections
  document.querySelectorAll('.mc-section').forEach(sec => {
    const isTarget = sec.id === `mc-${tabId}` || (tabId === 'all' && sec.id === 'mc-all');
    sec.classList.toggle('mc-visible', isTarget);
  });

  // Animate newly visible cards
  setTimeout(animateVisible, 50);

  // Scroll to tabs bar
  const bar = document.getElementById('menuTabsBar');
  if (bar) {
    const y = bar.getBoundingClientRect().top + window.scrollY - 10;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/* ── Init: run directly — DOM is already parsed (scripts at end of body) ── */
renderMenu();
renderHomeMenu();

/* ── Event delegation on tab bar (reliable, survives re-renders) ── */
(function () {
  const tabsBar = document.getElementById('menuTabsBar');
  if (tabsBar) {
    tabsBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.menu-tab');
      if (btn) switchTab(btn.dataset.tab);
    });
  }
})();

/* ── Expose switchTab globally (for footer links) ── */
window.switchTab = switchTab;
