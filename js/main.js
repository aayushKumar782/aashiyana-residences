/* ────────────────────────────────────────────────
   AASHIYANA RESIDENCES — Main JavaScript
   ──────────────────────────────────────────────── */

// ── PROPERTY DATA ── (Edit this to add/remove properties)
const PROPERTIES_DATA = [
  {
    "id": 1,
    "name": "Emerald Heights Villa",
    "location": "Vasant Vihar, New Delhi",
    "city": "Delhi",
    "price": "₹4.2 Cr",
    "priceValue": 42000000,
    "bedrooms": 5,
    "bathrooms": 5,
    "area": "4800 sq ft",
    "type": "Villa",
    "status": "Available",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
    ],
    "description": "A sprawling independent villa nestled in Delhi's most prestigious locality. Floor-to-ceiling windows flood every room with natural light, while the private garden and rooftop terrace offer unparalleled views of the city skyline.",
    "amenities": ["Private Garden", "Rooftop Terrace", "Modular Kitchen", "Home Theatre", "3-Car Garage", "Swimming Pool", "24/7 Security", "Smart Home System"]
  },
  {
    "id": 2,
    "name": "Azure Sky Penthouse",
    "location": "Golf Course Road, Gurugram",
    "city": "Gurugram",
    "price": "₹6.8 Cr",
    "priceValue": 68000000,
    "bedrooms": 4,
    "bathrooms": 4,
    "area": "5200 sq ft",
    "type": "Penthouse",
    "status": "Available",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
    ],
    "description": "Perched on the 42nd floor with a private infinity pool and wrap-around terrace, this penthouse redefines luxury living in Gurugram. Imported Italian marble, Gaggenau appliances, and bespoke furnishings throughout.",
    "amenities": ["Private Infinity Pool", "Wrap-Around Terrace", "Concierge Service", "Private Elevator", "Wine Cellar", "Gym", "Spa Room", "Panoramic City Views"]
  },
  {
    "id": 3,
    "name": "Serene Garden Residency",
    "location": "Noida Extension, Noida",
    "city": "Noida",
    "price": "₹1.8 Cr",
    "priceValue": 18000000,
    "bedrooms": 3,
    "bathrooms": 3,
    "area": "2200 sq ft",
    "type": "Apartment",
    "status": "Available",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
    ],
    "description": "A beautifully designed 3BHK apartment with lush green views and premium interiors. Situated within a gated community featuring world-class amenities, making it an ideal home for families.",
    "amenities": ["Gated Community", "Clubhouse", "Children's Play Area", "Jogging Track", "Power Backup", "Covered Parking", "Vastu Compliant", "Ready to Move"]
  },
  {
    "id": 4,
    "name": "The Royal Farmhouse",
    "location": "Chattarpur, New Delhi",
    "city": "Delhi",
    "price": "₹12 Cr",
    "priceValue": 120000000,
    "bedrooms": 6,
    "bathrooms": 7,
    "area": "12000 sq ft",
    "type": "Farmhouse",
    "status": "Available",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ],
    "description": "An extraordinary farmhouse estate spread across 1.5 acres in South Delhi's green belt. Features a grand reception hall, private swimming pool, orchard, and staff quarters. The ultimate in private luxury.",
    "amenities": ["1.5 Acre Plot", "Private Swimming Pool", "Orchard", "Staff Quarters", "Generator Backup", "CCTV Surveillance", "Banquet Hall", "Multiple Garages"]
  },
  {
    "id": 5,
    "name": "Horizon Smart Apartment",
    "location": "Sector 150, Noida",
    "city": "Noida",
    "price": "₹95 L",
    "priceValue": 9500000,
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "1250 sq ft",
    "type": "Apartment",
    "status": "Available",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    "description": "A contemporary smart home with IoT-enabled appliances, energy-efficient design, and a stunning corner view. Perfect for young professionals seeking modern, connected living.",
    "amenities": ["Smart Home Automation", "Solar Panels", "EV Charging Point", "Co-working Space", "Rooftop Garden", "Package Lockers", "Video Door Phone", "Modular Kitchen"]
  },
  {
    "id": 6,
    "name": "Prestige Row House",
    "location": "DLF Phase 4, Gurugram",
    "city": "Gurugram",
    "price": "₹3.1 Cr",
    "priceValue": 31000000,
    "bedrooms": 4,
    "bathrooms": 3,
    "area": "3200 sq ft",
    "type": "Row House",
    "status": "Available",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80"
    ],
    "description": "An elegant G+2 row house in one of Gurugram's most sought-after addresses. Private terrace garden, dedicated parking for 2 cars, and premium finishes throughout. Walking distance to top schools and malls.",
    "amenities": ["Private Terrace Garden", "2-Car Parking", "Servant Quarter", "Premium Fittings", "Modular Kitchen", "Home Automation", "24/7 Security", "Club Membership"]
  }
];

/* ══════════════════════════════════════
   SHARED UTILITIES
══════════════════════════════════════ */

// Build a property card HTML
function buildPropertyCard(p) {
  return `
    <article class="property-card reveal" onclick="openModal(${p.id})" role="button" tabindex="0" aria-label="View ${p.name}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.featured ? '<span class="card-badge">Featured</span>' : ''}
        <span class="card-type-badge">${p.type}</span>
      </div>
      <div class="card-body">
        <div class="card-location">📍 ${p.location}</div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-specs">
          <span class="card-spec"><span class="card-spec-icon">🛏</span>${p.bedrooms} Beds</span>
          <span class="card-spec"><span class="card-spec-icon">🚿</span>${p.bathrooms} Baths</span>
          <span class="card-spec"><span class="card-spec-icon">📐</span>${p.area}</span>
        </div>
        <div class="card-footer">
          <span class="card-price">${p.price}</span>
          <span class="card-cta">View Details →</span>
        </div>
      </div>
    </article>
  `;
}

// Build modal content HTML
function buildModalContent(p) {
  const imgs = p.images || [p.image];
  const thumbs = imgs.slice(1, 3).map(src =>
    `<div class="modal-img-thumb"><img src="${src}" alt="${p.name}" loading="lazy" /></div>`
  ).join('');
  const amenityTags = (p.amenities || []).map(a =>
    `<span class="amenity-tag">✓ ${a}</span>`
  ).join('');

  return `
    <div class="modal-images">
      <div class="modal-img-main"><img src="${imgs[0]}" alt="${p.name}" /></div>
      ${thumbs}
    </div>
    <div class="modal-info">
      <div class="modal-location">📍 ${p.location}</div>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-price">${p.price}</div>
      <div class="modal-specs">
        <div class="modal-spec">
          <span class="modal-spec-val">${p.bedrooms}</span>
          <span class="modal-spec-label">Bedrooms</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-val">${p.bathrooms}</span>
          <span class="modal-spec-label">Bathrooms</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-val">${p.area}</span>
          <span class="modal-spec-label">Area</span>
        </div>
        <div class="modal-spec">
          <span class="modal-spec-val">${p.type}</span>
          <span class="modal-spec-label">Type</span>
        </div>
      </div>
      <p class="modal-desc">${p.description}</p>
      ${amenityTags ? `<div class="modal-amenities-title">Amenities & Features</div><div class="amenities-grid">${amenityTags}</div>` : ''}
      <div class="modal-actions">
        <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20${encodeURIComponent(p.name)}%20at%20${encodeURIComponent(p.location)}"
           class="btn btn-primary" target="_blank" rel="noopener">
          💬 WhatsApp Inquiry
        </a>
        <a href="tel:+919876543210" class="btn btn-outline">📞 Call Now</a>
        <a href="index.html#contact" class="btn btn-ghost" style="color:#0F172A;border-color:#0F172A;">✉ Send Enquiry</a>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
function openModal(id) {
  const p = PROPERTIES_DATA.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalBody').innerHTML = buildModalContent(p);
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   NAVIGATION
══════════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ══════════════════════════════════════
   MODAL CLOSE
══════════════════════════════════════ */
document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════ */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1800;
        const start = performance.now();
        const update = (time) => {
          const elapsed = time - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + (target >= 100 ? '+' : '+');
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ══════════════════════════════════════
   HOME PAGE: FEATURED PROPERTIES
══════════════════════════════════════ */
function loadFeaturedProperties() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PROPERTIES_DATA.filter(p => p.featured);
  grid.innerHTML = featured.map(p => buildPropertyCard(p)).join('');
  // Also populate property select in contact form
  populatePropertySelect();
  initReveal();
}

function populatePropertySelect() {
  const sel = document.getElementById('propertySelect');
  if (!sel) return;
  PROPERTIES_DATA.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = `${p.name} — ${p.price}`;
    sel.appendChild(opt);
  });
}

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
});

/* ══════════════════════════════════════
   KEYBOARD ACCESS FOR CARDS
══════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('property-card')) {
    e.target.click();
  }
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProperties();
  animateCounters();
  setTimeout(initReveal, 100);
});
