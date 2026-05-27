// ── NAVBAR SCROLL ─────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar && navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ── MOBILE HAMBURGER ───────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function closeNav() {
  hamburger?.classList.remove('open');
  navLinks?.classList.remove('open');
  navOverlay?.classList.remove('active');
}
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  navOverlay.classList.toggle('active');
});
navOverlay?.addEventListener('click', closeNav);

// Mobile sub-menu toggle
document.querySelectorAll('.has-sub > a, .has-mega > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const li = this.parentElement;
      li.classList.toggle('open');

      // Rotate the arrow icon
      const svg = this.querySelector('svg');
      if (svg) {
        svg.style.transform = li.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    }
  });
});

// ── TABS ──────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const group = this.closest('[data-tabs]') || document;
    const target = this.dataset.tab;
    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    group.querySelector(`#${target}`)?.classList.add('active');
  });
});

// ── ACCORDION ─────────────────────────────────────────
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const body = this.nextElementSibling;
    const isOpen = this.classList.contains('open');
    // close all in same parent
    this.closest('.accordion')?.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('open');
      h.nextElementSibling?.classList.remove('open');
    });
    if (!isOpen) {
      this.classList.add('open');
      body.classList.add('open');
    }
  });
});

// ── FORM SUBMISSION ────────────────────────────────────
document.querySelectorAll('form[data-ajax]').forEach(form => {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    const btn = this.querySelector('[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending…'; btn.disabled = true;

    try {
      const res = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      const successEl = this.closest('.form-wrapper')?.querySelector('.alert-success')
        || document.querySelector('.alert-success');
      if (successEl) { successEl.classList.add('show'); successEl.textContent = result.message; }
      this.reset();
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      btn.textContent = origText; btn.disabled = false;
    }
  });
});

// ── SMOOTH SCROLL for anchor links ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── COUNTER ANIMATION ─────────────────────────────────
function animateCounter(el) {
  const rawTarget = el.dataset.target;
  if (isNaN(parseFloat(rawTarget))) return; // Skip non-numeric targets (like gallery filters)

  const target = parseFloat(rawTarget);
  const isDecimal = rawTarget.includes('.');
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('.stat-val, .stat-num, [data-target]');
if (counters.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); observer.unobserve(e.target); } });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── GALLERY LOGIC ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const galTabs = document.querySelectorAll('.gallery-tab-btn');
  const galContents = document.querySelectorAll('.gallery-content');

  function switchGalleryTab(targetId) {
    galTabs.forEach(b => {
      b.classList.toggle('active', b.dataset.galleryTarget === targetId);
    });
    galContents.forEach(c => {
      c.classList.toggle('active', c.id === targetId);
    });
  }

  if (galTabs.length > 0) {
    galTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        switchGalleryTab(btn.dataset.galleryTarget);
      });
    });

    // Handle URL parameters (e.g., ?type=videos)
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'photos') {
      switchGalleryTab('photo-gallery');
    } else if (type === 'videos') {
      switchGalleryTab('video-gallery');
    }
  }

  // Photo Lightbox
  const photoItems = document.querySelectorAll('.photo-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (photoItems.length > 0 && lightbox) {
    photoItems.forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').src;
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Video Playlist Switcher
  const mainVideo = document.getElementById('main-video');
  const playlistItems = document.querySelectorAll('.playlist-item');

  if (playlistItems.length > 0 && mainVideo) {
    playlistItems.forEach(item => {
      item.addEventListener('click', () => {
        const videoSrc = item.dataset.src;
        mainVideo.src = videoSrc;
        mainVideo.play();

        playlistItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // Auto-play next video
    mainVideo.addEventListener('ended', () => {
      const currentActive = document.querySelector('.playlist-item.active');
      let nextItem = currentActive.nextElementSibling;
      if (!nextItem) nextItem = playlistItems[0];
      nextItem.click();
    });
  }
});
