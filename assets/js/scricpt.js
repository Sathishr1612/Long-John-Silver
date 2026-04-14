
        // === HERO CAROUSEL ===
        let cur = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let timer;
        function goToSlide(n) {
            slides[cur].classList.remove('active');
            dots[cur].classList.remove('active');
            cur = (n + slides.length) % slides.length;
            slides[cur].classList.add('active');
            dots[cur].classList.add('active');
        }
        function startTimer() {
            clearInterval(timer);
            timer = setInterval(() => goToSlide(cur + 1), 5500);
        }
        startTimer();

        // === NAVBAR ===
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });

        // === MOBILE MENU ===
        document.getElementById('menuToggle').addEventListener('click', () => {
            const m = document.getElementById('mobileMenu');
            m.style.display = m.style.display === 'block' ? 'none' : 'block';
        });
        document.querySelectorAll('#mobileMenu a').forEach(a => {
            a.addEventListener('click', () => { document.getElementById('mobileMenu').style.display = 'none'; });
        });

        // === SCROLL REVEAL ===
        const ro = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const siblings = Array.from(entry.target.parentElement?.children || []);
                    const delay = siblings.indexOf(entry.target) * 90;
                    setTimeout(() => entry.target.classList.add('visible'), delay);
                    ro.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

       // === MENU FILTER ===
document.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all tabs
        document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        const cat = this.dataset.cat;
        
        document.querySelectorAll('.menu-card').forEach(card => {
            const show = cat === 'all' || card.dataset.cat === cat;
            
            if (show) {
                card.style.display = '';
                // Small delay to allow display to apply before opacity transition
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
                card.style.pointerEvents = '';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                card.style.pointerEvents = 'none';
                // Hide completely after transition
                setTimeout(() => {
                    if (!card.style.opacity || card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 400);
            }
        });
    });
});

// Add CSS transition to menu cards if not already present
document.querySelectorAll('.menu-card').forEach(card => {
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
});

        // === LIGHTBOX ===
        const lbImgs = ['image29.jpg', 'image30.jpg', 'image31.jpg', 'image32.jpg', 'image33.jpg', 'image34.jpg', 'image35.jpg']
        let lbCur = 0;
        const lb = document.getElementById('lightbox');
        const lbEl = document.getElementById('lbImg');
        function openLb(i) {
            lbCur = i;
            lbEl.src = lbImgs[i];
            lb.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        function closeLb() {
            lb.style.display = 'none';
            document.body.style.overflow = '';
        }
        function lbNav(d) {
            lbCur = (lbCur + d + lbImgs.length) % lbImgs.length;
            lbEl.src = lbImgs[lbCur];
        }
        lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeLb();
            if (e.key === 'ArrowLeft') lbNav(-1);
            if (e.key === 'ArrowRight') lbNav(1);
        });

        // === FORM ===
        function handleForm(e) {
            e.preventDefault();
            const s = document.getElementById('formSuccess');
            s.style.display = 'block';
            e.target.reset();
            setTimeout(() => { s.style.display = 'none'; }, 5000);
        }

        // === SMOOTH SCROLL ===
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const t = document.querySelector(a.getAttribute('href'));
                if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
            });
        });
    