// ============================================================
// AKSHAR HOSPITAL — MAIN JS
// Handles: sticky header, mobile nav, scroll animations, 
//          counter animation, testimonial slider, lightbox, WhatsApp
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Header ── */
  const header = document.getElementById('main-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile Nav ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Sub-menus in mobile
    document.querySelectorAll('.mobile-nav-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        if (target) {
          target.classList.toggle('open');
          btn.querySelector('.toggle-icon').textContent = target.classList.contains('open') ? '−' : '+';
        }
      });
    });
    // Close on backdrop click
    document.addEventListener('click', e => {
      if (!header?.contains(e.target) && !mobileNav?.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Counter Animation ── */
  function animateCounter(el) {
    const target = el.dataset.target;
    const isFloat = target.includes('.');
    const raw = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    const duration = 1800;
    const start = performance.now();
    const update = now => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = raw * eased;
      el.textContent = (isFloat ? value.toFixed(1) : Math.round(value).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  const counters = document.querySelectorAll('[data-target]');
  if (counters.length) {
    const cObserver = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); cObserver.unobserve(e.target); } }),
      { threshold: 0.5 }
    );
    counters.forEach(c => cObserver.observe(c));
  }

  /* ── Testimonial Slider ── */
  const slider = document.querySelector('.testimonial-slider');
  const track  = document.querySelector('.testimonial-track');
  const dots   = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  if (slider && track) {
    let current = 0;
    const items = track.querySelectorAll('.testimonial-slide');
    const count = items.length;
    const perSlide = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const maxIdx = () => Math.max(0, count - perSlide());

    const goTo = idx => {
      current = Math.min(Math.max(idx, 0), maxIdx());
      const w = slider.offsetWidth;
      const gap = 32;
      const itemW = (w - gap * (perSlide() - 1)) / perSlide();
      track.style.transform = `translateX(-${current * (itemW + gap)}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    window.addEventListener('resize', () => goTo(current), { passive: true });

    // Auto-play
    let autoplay = setInterval(() => goTo(current + 1 > maxIdx() ? 0 : current + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(autoplay));
    slider.addEventListener('mouseleave', () => { autoplay = setInterval(() => goTo(current + 1 > maxIdx() ? 0 : current + 1), 5000); });
    goTo(0);
  }

  /* ── Lightbox ── */
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbClose    = document.getElementById('lightbox-close');
  const lbPrev     = document.getElementById('lightbox-prev');
  const lbNext     = document.getElementById('lightbox-next');
  let lbImages     = [];
  let lbIndex      = 0;

  document.querySelectorAll('[data-lightbox]').forEach((el, i) => {
    el.addEventListener('click', () => {
      lbImages = [...document.querySelectorAll('[data-lightbox]')].map(e => e.dataset.src || e.querySelector('img')?.src);
      lbIndex  = i;
      openLightbox();
    });
  });
  function openLightbox() {
    if (!lightbox || !lbImg) return;
    lbImg.src = lbImages[lbIndex];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  }
  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  lbPrev?.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; openLightbox(); });
  lbNext?.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbImages.length; openLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; openLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; openLightbox(); }
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-q');
    const body    = item.querySelector('.faq-a');
    trigger?.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      if (body) body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
      // Close siblings
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const ob = other.querySelector('.faq-a');
          if (ob) ob.style.maxHeight = '0';
        }
      });
    });
  });

  /* ── Appointment Form ── */
  const apptForm = document.getElementById('appointment-form');
  if (apptForm) {
    apptForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = apptForm.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.textContent = 'Booking…';
      btn.disabled = true;

      try {
        const formData = new FormData(apptForm);
        const data = Object.fromEntries(formData.entries());
        
        // TODO: Replace with your actual backend endpoint
        // const response = await fetch('YOUR_API_ENDPOINT', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
        
        // if (!response.ok) throw new Error('Network response was not ok');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1800));

        apptForm.innerHTML = `
          <div style="text-align:center;padding:3rem 1rem">
            <div style="font-size:4rem;margin-bottom:1rem">✅</div>
            <h3 style="font-family:var(--font-head);font-size:1.5rem;color:var(--primary-dark);margin-bottom:0.5rem">Appointment Request Received!</h3>
            <p style="color:var(--text-muted);font-size:1rem;line-height:1.7">Our team will call you within 2 hours to confirm your appointment slot.<br>You may also WhatsApp us at <a href="${HOSPITAL?.whatsapp || '#'}" style="color:var(--primary);font-weight:600">${HOSPITAL?.phone || 'our number'}</a>.</p>
          </div>
        `;
      } catch (error) {
        console.error('Error submitting form:', error);
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('There was an error submitting your request. Please try again or call us directly.');
      }
    });
  }

  /* ── Contact Form ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      
      // Honeypot check
      const honeypot = contactForm.querySelector('input[name="website"]');
      if (honeypot && honeypot.value !== '') return; // Spam detected

      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // TODO: Replace with your actual backend endpoint (e.g. Formspree, Web3Forms)
        // const response = await fetch('YOUR_API_ENDPOINT', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
        // if (!response.ok) throw new Error('Failed to send message');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'var(--success)';
        contactForm.reset();
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 5000);

      } catch (error) {
        console.error('Error sending message:', error);
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('There was an error sending your message. Please try again later.');
      }
    });
  }

  /* ── Active nav link ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
        window.scrollTo({ top: target.offsetTop - offset - 16, behavior: 'smooth' });
      }
    });
  });

});
