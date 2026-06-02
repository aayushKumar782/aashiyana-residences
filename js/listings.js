/* ────────────────────────────────────────────────
   AASHIYANA RESIDENCES — Listings Page JS
   ──────────────────────────────────────────────── */

let currentFilters = {
  search: '',
  city: '',
  type: '',
  beds: '',
  price: ''
};

function applyFilters() {
  const { search, city, type, beds, price } = currentFilters;

  let filtered = PROPERTIES_DATA.filter(p => {
    // Search
    if (search) {
      const q = search.toLowerCase();
      const match = p.name.toLowerCase().includes(q)
        || p.city.toLowerCase().includes(q)
        || p.location.toLowerCase().includes(q);
      if (!match) return false;
    }
    // City
    if (city && p.city !== city) return false;
    // Type
    if (type && p.type !== type) return false;
    // Beds
    if (beds) {
      const b = parseInt(beds);
      if (b === 5 && p.bedrooms < 5) return false;
      if (b < 5 && p.bedrooms !== b) return false;
    }
    // Price
    if (price) {
      const [min, max] = price.split('-').map(Number);
      if (p.priceValue < min || p.priceValue > max) return false;
    }
    return true;
  });

  renderGrid(filtered);
  updateCount(filtered.length);
}

function renderGrid(properties) {
  const grid = document.getElementById('listingsGrid');
  const noResults = document.getElementById('noResults');

  if (!properties.length) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = properties.map(p => buildPropertyCard(p)).join('');

  // Re-observe new cards for reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function updateCount(n) {
  const el = document.getElementById('resultsCount');
  if (el) el.textContent = `${n} ${n === 1 ? 'property' : 'properties'} found`;
}

function clearAllFilters() {
  currentFilters = { search: '', city: '', type: '', beds: '', price: '' };
  document.getElementById('searchInput').value = '';
  document.getElementById('filterCity').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterBeds').value = '';
  document.getElementById('filterPrice').value = '';
  applyFilters();
}

// ── INIT LISTINGS ──
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderGrid(PROPERTIES_DATA);
  updateCount(PROPERTIES_DATA.length);

  // Search
  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', (e) => {
    currentFilters.search = e.target.value.trim();
    applyFilters();
  });

  // Filters
  document.getElementById('filterCity')?.addEventListener('change', (e) => {
    currentFilters.city = e.target.value;
    applyFilters();
  });
  document.getElementById('filterType')?.addEventListener('change', (e) => {
    currentFilters.type = e.target.value;
    applyFilters();
  });
  document.getElementById('filterBeds')?.addEventListener('change', (e) => {
    currentFilters.beds = e.target.value;
    applyFilters();
  });
  document.getElementById('filterPrice')?.addEventListener('change', (e) => {
    currentFilters.price = e.target.value;
    applyFilters();
  });
  document.getElementById('clearFilters')?.addEventListener('click', clearAllFilters);
});
