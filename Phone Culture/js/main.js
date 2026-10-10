/**
 * PHONE CULTURE — Main UI Controller & Global Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initScrollProgressBar();
  initBackToTop();
  initMobileMenu();
  initLiveSearch();
  initQuickViewModal();
  initDealsCountdown();
  initNewsletterForm();
});

/* ==========================================================================
   1. STICKY HEADER & SCROLL PROGRESS
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

function initScrollProgressBar() {
  const progressBar = document.querySelector(".scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  // Close when clicking outside or clicking any nav link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* ==========================================================================
   3. PREDICTIVE SEARCH MODAL
   ========================================================================== */
function initLiveSearch() {
  const openBtns = document.querySelectorAll(".nav-search-trigger");
  const modalBackdrop = document.getElementById("search-modal-backdrop");
  const closeBtn = document.getElementById("search-close-btn");
  const searchInput = document.getElementById("search-input-main");
  const resultsContainer = document.getElementById("search-results-container");

  if (!modalBackdrop || !searchInput) return;

  function openSearch() {
    modalBackdrop.classList.add("active");
    searchInput.value = "";
    performSearch("");
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearch() {
    modalBackdrop.classList.remove("active");
  }

  openBtns.forEach(btn => btn.addEventListener("click", openSearch));
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeSearch();
  });

  // Keyboard shortcut Ctrl+K or / to open, Esc to close
  window.addEventListener("keydown", (e) => {
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && document.activeElement.tagName !== "INPUT")) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeSearch();
    }
  });

  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value.trim());
  });

  function performSearch(query) {
    if (!resultsContainer) return;
    const allProducts = getAllProducts();

    if (!query) {
      // Show featured suggestions
      const featured = allProducts.slice(0, 4);
      resultsContainer.innerHTML = `
        <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.05em;">
          Popular Flagships
        </div>
        ${featured.map(renderSearchItemHTML).join("")}
      `;
      return;
    }

    const q = query.toLowerCase();
    const matches = allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.shortDesc && p.shortDesc.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 10px;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--text-light); margin-bottom: 14px; display: block;"></i>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">No products found for "${query}"</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Try searching for iPhone 16 Pro, Galaxy S25, or Pixel.</p>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = matches.map(renderSearchItemHTML).join("");
    }
  }

  function renderSearchItemHTML(product) {
    return `
      <a href="product.html?id=${product.id}" class="search-result-item">
        <div class="search-item-left">
          <img src="${product.image}" alt="${product.name}" class="search-thumb">
          <div>
            <div class="search-item-name">${product.name}</div>
            <div class="search-item-category">${product.brand} • ${product.category}</div>
          </div>
        </div>
        <div class="search-item-price">${formatLKR(product.price)}</div>
      </a>
    `;
  }
}

/* ==========================================================================
   4. QUICK VIEW MODAL
   ========================================================================== */
function initQuickViewModal() {
  const backdrop = document.getElementById("quick-view-backdrop");
  const closeBtn = document.getElementById("quick-view-close");

  if (!backdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => backdrop.classList.remove("active"));
  }

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) backdrop.classList.remove("active");
  });
}

function openQuickView(productId) {
  const backdrop = document.getElementById("quick-view-backdrop");
  const container = document.getElementById("quick-view-content");
  const product = getProductById(productId);

  if (!backdrop || !container || !product) return;

  const waInquiry = getWhatsAppInquiryLink(product.name, "", formatLKR(product.price));

  container.innerHTML = `
    <div class="quick-view-media">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quick-view-details">
      <div>
        <span class="pill-badge light" style="margin-bottom: 10px;">${product.brand}</span>
        <h3 style="font-size: 1.7rem; font-weight: 800; line-height: 1.2; margin-bottom: 10px;">${product.name}</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 18px;">${product.shortDesc}</p>
        
        <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 24px;">
          ${formatLKR(product.price)}
          ${product.oldPrice ? `<span style="font-size: 1.05rem; color: var(--text-light); text-decoration: line-through; margin-left: 10px;">${formatLKR(product.oldPrice)}</span>` : ""}
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 24px;">
          ${product.colors ? product.colors.map(c => `
            <span style="display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: ${c.hex}; border: 1px solid rgba(0,0,0,0.15);" title="${c.name}"></span>
          `).join("") : ""}
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button class="btn btn-primary" onclick="addToCart('${product.id}'); document.getElementById('quick-view-backdrop').classList.remove('active');">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
        <a href="${waInquiry}" target="_blank" class="btn btn-whatsapp">
          <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
        </a>
        <a href="product.html?id=${product.id}" class="btn btn-secondary">
          Full Specifications & Details →
        </a>
      </div>
    </div>
  `;

  backdrop.classList.add("active");
}

/* ==========================================================================
   5. REUSABLE PRODUCT CARD GENERATOR
   ========================================================================== */
function generateProductCardHTML(product) {
  const inWishlist = isInWishlist(product.id);
  const waInquiry = getWhatsAppInquiryLink(product.name, "", formatLKR(product.price));

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card-thumb-wrap">
        <span class="pill-badge gradient product-badge-corner">${product.badge || product.brand}</span>
        
        <div class="product-actions-floating">
          <button class="product-action-btn ${inWishlist ? 'active' : ''}" 
                  data-wishlist-id="${product.id}" 
                  onclick="toggleWishlist('${product.id}')" 
                  title="Save to Wishlist" 
                  aria-label="Save to Wishlist">
            <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button class="product-action-btn" 
                  onclick="addToCompare('${product.id}')" 
                  title="Compare Device" 
                  aria-label="Compare Device">
            <i class="fa-solid fa-code-compare"></i>
          </button>
        </div>

        <a href="product.html?id=${product.id}" class="product-img-link" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
        </a>

        <div class="product-quick-view-bar">
          <button class="quick-view-btn" onclick="openQuickView('${product.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div>
          <span class="product-brand-tag">${product.brand}</span>
          <h3 class="product-card-name">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>

          <div class="product-color-dots">
            ${product.colors ? product.colors.map(c => `
              <span class="color-dot" style="background-color: ${c.hex};" title="${c.name}"></span>
            `).join("") : ""}
          </div>
        </div>

        <div>
          <div class="product-price-row">
            <span class="product-current-price">${formatLKR(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price">${formatLKR(product.oldPrice)}</span>` : ""}
          </div>

          <div class="product-card-actions">
            <button class="btn btn-primary btn-card-cart" onclick="addToCart('${product.id}')">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
            <a href="${waInquiry}" target="_blank" class="btn-card-wa" title="Inquire on WhatsApp" aria-label="Inquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   6. DEALS COUNTDOWN TIMER
   ========================================================================== */
function initDealsCountdown() {
  const hoursEl = document.getElementById("deal-timer-hours");
  const minsEl = document.getElementById("deal-timer-mins");
  const secsEl = document.getElementById("deal-timer-secs");

  if (!hoursEl || !minsEl || !secsEl) return;

  // Set target to end of current day or 18 hours forward
  let remainingSeconds = 18 * 3600 + 42 * 60 + 15;

  setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds < 0) remainingSeconds = 24 * 3600;

    const hrs = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    hoursEl.textContent = String(hrs).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }, 1000);
}

/* ==========================================================================
   7. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  let iconHtml = '<i class="fa-solid fa-check"></i>';
  if (type === "cart") iconHtml = '<i class="fa-solid fa-bag-shopping"></i>';
  if (type === "heart") iconHtml = '<i class="fa-solid fa-heart"></i>';
  if (type === "scale") iconHtml = '<i class="fa-solid fa-code-compare"></i>';
  if (type === "trash") iconHtml = '<i class="fa-regular fa-trash-can"></i>';

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <div class="toast-icon">${iconHtml}</div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

/* ==========================================================================
   8. NEWSLETTER SIMULATION
   ========================================================================== */
function initNewsletterForm() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      if (input && input.value) {
        showToast("Subscribed to Phone Culture updates!", "info");
        input.value = "";
      }
    });
  });
}
