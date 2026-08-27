// ============================================================
// AKSHAR HOSPITAL — COMPONENTS (header, footer, whatsapp)
// Injects shared components into every page
// ============================================================

function renderHeader(activePage = '') {
  return `
<header id="main-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <!-- Logo -->
      <a href="index.html" class="logo" aria-label="Akshar Hospital Home">
        <div class="logo-icon" aria-hidden="true">A+</div>
        <div class="logo-text">
          <span class="logo-name">Akshar Hospital</span>
          <span class="logo-tagline">Orthopedics &amp; Skin Care</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="main-nav" role="navigation" aria-label="Main navigation">
        <div class="nav-item">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        </div>

        <div class="nav-item">
          <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">
            About Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="about.html#story" class="dropdown-link"><span class="icon">🏥</span> Our Story</a>
            <a href="doctors.html" class="dropdown-link"><span class="icon">👨‍⚕️</span> Meet Our Doctors</a>
            <a href="facilities.html" class="dropdown-link"><span class="icon">🏗️</span> Infrastructure</a>
            <a href="about.html#insurance" class="dropdown-link"><span class="icon">🛡️</span> Insurance / TPA</a>
            <a href="about.html#equipment" class="dropdown-link"><span class="icon">⚙️</span> Equipment &amp; Tech</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="specialities.html" class="nav-link ${activePage === 'specialities' ? 'active' : ''}">
            Specialities
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown-menu mega">
            <div>
              <div class="dropdown-group-title">🦴 Orthopedics</div>
              <a href="orthopedics.html#joint-replacement" class="dropdown-link"><span class="icon">⚙️</span> Joint Replacement</a>
              <a href="orthopedics.html#sports-medicine" class="dropdown-link"><span class="icon">🏃</span> Sports Medicine</a>
              <a href="orthopedics.html#spine-care" class="dropdown-link"><span class="icon">🫀</span> Spine Care</a>
              <a href="orthopedics.html#fracture-trauma" class="dropdown-link"><span class="icon">🩹</span> Fracture &amp; Trauma</a>
              <a href="orthopedics.html#joint-preservation" class="dropdown-link"><span class="icon">💉</span> Joint Preservation</a>
            </div>
            <div>
              <div class="dropdown-group-title">✨ Skin Care</div>
              <a href="dermatology.html#medical-derm" class="dropdown-link"><span class="icon">🔬</span> Medical Dermatology</a>
              <a href="dermatology.html#cosmetic-derm" class="dropdown-link"><span class="icon">💫</span> Cosmetic Dermatology</a>
              <a href="dermatology.html#hair-scalp" class="dropdown-link"><span class="icon">💆</span> Hair &amp; Scalp</a>
              <a href="dermatology.html#skin-surgery" class="dropdown-link"><span class="icon">🏥</span> Skin Surgery</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="gallery.html" class="nav-link ${activePage === 'gallery' ? 'active' : ''}">Gallery</a>
        </div>

        <div class="nav-item">
          <a href="patient-resources.html" class="nav-link ${activePage === 'resources' ? 'active' : ''}">
            Patient Resources
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="patient-resources.html#blog" class="dropdown-link"><span class="icon">📖</span> Health Blog</a>
            <a href="patient-resources.html#faq" class="dropdown-link"><span class="icon">❓</span> FAQs</a>
            <a href="patient-resources.html#insurance" class="dropdown-link"><span class="icon">🛡️</span> Insurance &amp; TPA</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </div>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <a href="tel:+917940001234" class="click-to-call" aria-label="Call Akshar Hospital">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127 1.003.36 1.99.7 2.94a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.14-1.14a2 2 0 012.11-.45c.95.34 1.937.573 2.94.7A2 2 0 0122 16.92z"/></svg>
          +91-79-4000-1234
        </a>
        <a href="appointment.html" class="btn btn-primary btn-sm header-cta" id="header-book-btn">
          Book Appointment
        </a>
        <!-- Hamburger -->
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
  <a href="index.html" class="mobile-nav-link">Home</a>
  <div>
    <div class="mobile-nav-link" style="cursor:pointer;">
      <span>About Us</span>
      <button class="mobile-nav-toggle" data-target="mob-about" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted)"><span class="toggle-icon">+</span></button>
    </div>
    <div class="mobile-sub" id="mob-about">
      <a href="about.html#story" class="mobile-sub-link">Our Story</a>
      <a href="doctors.html" class="mobile-sub-link">Meet Our Doctors</a>
      <a href="facilities.html" class="mobile-sub-link">Infrastructure</a>
      <a href="about.html#insurance" class="mobile-sub-link">Insurance / TPA</a>
    </div>
  </div>
  <div>
    <div class="mobile-nav-link" style="cursor:pointer;">
      <span>Specialities</span>
      <button class="mobile-nav-toggle" data-target="mob-spec" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted)"><span class="toggle-icon">+</span></button>
    </div>
    <div class="mobile-sub" id="mob-spec">
      <a href="orthopedics.html" class="mobile-sub-link">🦴 Orthopedics</a>
      <a href="dermatology.html" class="mobile-sub-link">✨ Skin Care / Dermatology</a>
    </div>
  </div>
  <a href="gallery.html" class="mobile-nav-link">Gallery</a>
  <a href="patient-resources.html" class="mobile-nav-link">Patient Resources</a>
  <a href="contact.html" class="mobile-nav-link">Contact</a>
  <div class="mobile-actions">
    <a href="tel:+917940001234" class="btn btn-secondary" style="justify-content:center;">📞 Call Us Now</a>
    <a href="appointment.html" class="btn btn-primary" style="justify-content:center;">Book Appointment</a>
  </div>
</div>
`;
}

function renderFooter() {
  return `
<footer id="main-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="logo" style="margin-bottom:1rem">
          <div class="logo-icon">A+</div>
          <div class="logo-text">
            <span class="logo-name">Akshar Hospital</span>
            <span class="logo-tagline">Orthopedics &amp; Skin Care</span>
          </div>
        </div>
        <p>Delivering compassionate, technology-enabled orthopaedic and dermatology care to the people of Ahmedabad and beyond since 2009.</p>
        <div class="footer-social" aria-label="Social media links">
          <a href="https://facebook.com/aksharhospital" class="social-icon" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/aksharhospital" class="social-icon" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/917940001234" class="social-icon" aria-label="WhatsApp" rel="noopener noreferrer" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <div class="footer-col-title">Quick Links</div>
        <div class="footer-links">
          <a href="index.html" class="footer-link">→ Home</a>
          <a href="about.html" class="footer-link">→ About Us</a>
          <a href="doctors.html" class="footer-link">→ Meet Our Doctors</a>
          <a href="specialities.html" class="footer-link">→ Specialities</a>
          <a href="facilities.html" class="footer-link">→ Infrastructure</a>
          <a href="gallery.html" class="footer-link">→ Gallery</a>
          <a href="patient-resources.html" class="footer-link">→ Patient Resources</a>
          <a href="appointment.html" class="footer-link">→ Book Appointment</a>
          <a href="contact.html" class="footer-link">→ Contact / Reach Us</a>
        </div>
      </div>

      <!-- Specialities -->
      <div>
        <div class="footer-col-title">Specialities</div>
        <div class="footer-links">
          <a href="orthopedics.html#joint-replacement" class="footer-link">⚙️ Joint Replacement</a>
          <a href="orthopedics.html#sports-medicine" class="footer-link">🏃 Sports Medicine</a>
          <a href="orthopedics.html#spine-care" class="footer-link">🫀 Spine Care</a>
          <a href="orthopedics.html#fracture-trauma" class="footer-link">🩹 Fracture &amp; Trauma</a>
          <a href="dermatology.html#medical-derm" class="footer-link">🔬 Medical Dermatology</a>
          <a href="dermatology.html#cosmetic-derm" class="footer-link">💫 Cosmetic Dermatology</a>
          <a href="dermatology.html#hair-scalp" class="footer-link">💆 Hair &amp; Scalp</a>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <div class="footer-col-title">Contact &amp; Timings</div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>15, Akshar Complex, Near SG Highway, Bodakdev, Ahmedabad – 380 054, Gujarat</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127 1.003.36 1.99.7 2.94a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.14-1.14a2 2 0 012.11-.45c.95.34 1.937.573 2.94.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:+917940001234" style="color:rgba(255,255,255,0.6);transition:color 0.2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">+91-79-4000-1234</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:info@aksharhospital.com" style="color:rgba(255,255,255,0.6);transition:color 0.2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">info@aksharhospital.com</a>
        </div>
        <div style="margin-top:1rem;padding:1rem;background:rgba(255,255,255,0.06);border-radius:10px;">
          <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:0.6rem;">OPD Timings</div>
          <div style="font-size:0.82rem;color:rgba(255,255,255,0.75);line-height:2">
            🌅 Morning: 9:00 AM – 1:00 PM<br>
            🌇 Evening: 5:00 PM – 9:00 PM<br>
            <span style="color:#FF6B4A">🔴 Closed: Sundays</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Akshar Hospital. All rights reserved.</span>
      <span>Designed with ❤️ for better patient care</span>
    </div>
  </div>
</footer>

<!-- WhatsApp Float -->
<a href="https://wa.me/917940001234?text=Hello%20Akshar%20Hospital%2C%20I%20would%20like%20to%20book%20an%20appointment." class="wa-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" id="whatsapp-float">
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
  <button class="lightbox-close" id="lightbox-close" aria-label="Close">✕</button>
  <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous">‹</button>
  <img class="lightbox-img" id="lightbox-img" src="" alt="Gallery image" loading="lazy"/>
  <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next">›</button>
</div>
`;
}
