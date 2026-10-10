/**
 * PHONE CULTURE — Comprehensive Shop & Filter Controller
 */

let activeCategory = "All";
let activeBrand = "All";
let activeSort = "featured";
let maxPrice = 700000;
let inStockOnly = false;
let currentSearchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  // Check URL parameters
  const params = new URLSearchParams(window.location.search);
  if (params.get("category")) activeCategory = params.get("category");
  if (params.get("brand")) activeBrand = params.get("brand");
  if (params.get("search")) currentSearchQuery = params.get("search");

  initShopControls();
  renderFilteredProducts();
});

function initShopControls() {
  // Category filter clicks
  document.querySelectorAll("[data-filter-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-category]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter-category");
      renderFilteredProducts();
    });
  });

  // Brand filter clicks
  document.querySelectorAll("[data-filter-brand]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-brand]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeBrand = btn.getAttribute("data-filter-brand");
      renderFilteredProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSort = e.target.value;
      renderFilteredProducts();
    });
  }

  // Price range slider
  const priceSlider = document.getElementById("shop-price-slider");
  const priceValueDisplay = document.getElementById("shop-price-val");
  if (priceSlider && priceValueDisplay) {
    priceSlider.addEventListener("input", (e) => {
      maxPrice = Number(e.target.value);
      priceValueDisplay.textContent = formatLKR(maxPrice);
      renderFilteredProducts();
    });
  }

  // In-stock checkbox
  const stockCheckbox = document.getElementById("shop-stock-checkbox");
  if (stockCheckbox) {
    stockCheckbox.addEventListener("change", (e) => {
      inStockOnly = e.target.checked;
      renderFilteredProducts();
    });
  }

  // Mobile Filter Drawer Toggle
  const mobileFilterBtn = document.getElementById("mobile-filter-open-btn");
  const filterSidebar = document.querySelector(".shop-sidebar");
  const filterCloseBtn = document.getElementById("mobile-filter-close-btn");

  if (mobileFilterBtn && filterSidebar) {
    mobileFilterBtn.addEventListener("click", () => {
      filterSidebar.classList.add("active-drawer");
    });
  }

  if (filterCloseBtn && filterSidebar) {
    filterCloseBtn.addEventListener("click", () => {
      filterSidebar.classList.remove("active-drawer");
    });
  }
}

function renderFilteredProducts() {
  const container = document.getElementById("shop-products-grid");
  const countEl = document.getElementById("shop-results-count");
  if (!container) return;

  let products = getAllProducts();

  // 1. Filter by category
  if (activeCategory && activeCategory !== "All") {
    products = products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));
  }

  // 2. Filter by brand
  if (activeBrand && activeBrand !== "All") {
    products = products.filter(p => p.brand.toLowerCase() === activeBrand.toLowerCase());
  }

  // 3. Filter by price
  products = products.filter(p => p.price <= maxPrice);

  // 4. In-stock only
  if (inStockOnly) {
    products = products.filter(p => p.stock);
  }

  // 5. Search query
  if (currentSearchQuery) {
    const q = currentSearchQuery.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // 6. Sort
  if (activeSort === "price-low") {
    products.sort((a, b) => a.price - b.price);
  } else if (activeSort === "price-high") {
    products.sort((a, b) => b.price - a.price);
  } else if (activeSort === "name-asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (activeSort === "newest") {
    products.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
  } else {
    // Default featured
    products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (countEl) {
    countEl.textContent = `Showing ${products.length} devices`;
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.8rem; color: var(--text-light); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 8px;">No matching devices found</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 24px;">Try clearing filters or adjusting your price limit.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(generateProductCardHTML).join("");
  syncWishlistButtons();
}

function resetFilters() {
  activeCategory = "All";
  activeBrand = "All";
  activeSort = "featured";
  maxPrice = 700000;
  inStockOnly = false;
  currentSearchQuery = "";

  document.querySelectorAll("[data-filter-category]").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-filter-category") === "All");
  });
  document.querySelectorAll("[data-filter-brand]").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-filter-brand") === "All");
  });

  const priceSlider = document.getElementById("shop-price-slider");
  const priceValueDisplay = document.getElementById("shop-price-val");
  if (priceSlider) priceSlider.value = 700000;
  if (priceValueDisplay) priceValueDisplay.textContent = formatLKR(700000);

  const stockCheckbox = document.getElementById("shop-stock-checkbox");
  if (stockCheckbox) stockCheckbox.checked = false;

  renderFilteredProducts();
}
