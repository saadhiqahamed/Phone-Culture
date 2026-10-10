/**
 * PHONE CULTURE — Product Detail Page Dynamic Controller
 */

let currentProduct = null;
let selectedColor = null;
let selectedStorage = null;
let currentQuantity = 1;

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "iphone-16-pro-max";
  loadProductDetails(productId);
});

function loadProductDetails(id) {
  const product = getProductById(id);
  if (!product) {
    window.location.href = "shop.html";
    return;
  }

  currentProduct = product;
  document.title = `${product.name} — Phone Culture Colombo`;

  // Set default variants
  selectedColor = product.colors && product.colors.length ? product.colors[0].name : "Standard";
  selectedStorage = product.storage && product.storage.length ? product.storage[0].size : "Standard";

  renderProductPage();
  initTabs();
  renderRelatedProducts();
}

function renderProductPage() {
  const p = currentProduct;

  // Breadcrumbs
  const breadcrumbCategory = document.getElementById("p-breadcrumb-category");
  const breadcrumbName = document.getElementById("p-breadcrumb-name");
  if (breadcrumbCategory) breadcrumbCategory.textContent = p.category;
  if (breadcrumbName) breadcrumbName.textContent = p.name;

  // Main Info
  const brandEl = document.getElementById("p-brand");
  const nameEl = document.getElementById("p-name");
  const badgeEl = document.getElementById("p-badge");
  const ratingEl = document.getElementById("p-rating");
  const reviewsEl = document.getElementById("p-reviews");
  const shortDescEl = document.getElementById("p-short-desc");
  const stockEl = document.getElementById("p-stock-status");

  if (brandEl) brandEl.textContent = p.brand;
  if (nameEl) nameEl.textContent = p.name;
  if (badgeEl) badgeEl.textContent = p.badge || p.brand;
  if (ratingEl) ratingEl.textContent = p.rating ? p.rating.toFixed(1) : "5.0";
  if (reviewsEl) reviewsEl.textContent = `(${p.reviewsCount || 42} Reviews)`;
  if (shortDescEl) shortDescEl.textContent = p.shortDesc;
  if (stockEl) stockEl.textContent = p.stockText || "In Stock (Colombo Store)";

  // Gallery
  renderGallery(p);

  // Colors
  renderColorOptions(p);

  // Storage
  renderStorageOptions(p);

  // Pricing update
  updatePricingAndCTA();

  // Specs & Tabs
  renderSpecsTable(p);
  renderBoxContents(p);
}

function renderGallery(p) {
  const mainImg = document.getElementById("p-main-image");
  const thumbsContainer = document.getElementById("p-gallery-thumbs");

  if (mainImg) {
    mainImg.src = p.image;
    mainImg.alt = p.name;
  }

  if (thumbsContainer) {
    const images = p.gallery && p.gallery.length ? p.gallery : [p.image];
    thumbsContainer.innerHTML = images.map((imgUrl, i) => `
      <div class="p-thumb-item ${i === 0 ? 'active' : ''}" onclick="switchMainImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${p.name} preview">
      </div>
    `).join("");
  }
}

function switchMainImage(url, thumbEl) {
  const mainImg = document.getElementById("p-main-image");
  if (mainImg) {
    mainImg.style.opacity = "0.4";
    setTimeout(() => {
      mainImg.src = url;
      mainImg.style.opacity = "1";
    }, 150);
  }

  document.querySelectorAll(".p-thumb-item").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function renderColorOptions(p) {
  const container = document.getElementById("p-color-selector");
  const labelEl = document.getElementById("p-selected-color-label");
  if (!container) return;

  if (!p.colors || p.colors.length === 0) {
    container.innerHTML = `<span style="font-size: 0.9rem; color: var(--text-muted);">Standard Edition</span>`;
    return;
  }

  if (labelEl) labelEl.textContent = selectedColor;

  container.innerHTML = p.colors.map(c => `
    <button class="p-color-pill ${c.name === selectedColor ? 'active' : ''}" 
            onclick="selectProductColor('${c.name}')" 
            style="--color-hex: ${c.hex};" 
            title="${c.name}">
      <span class="p-color-dot" style="background-color: ${c.hex};"></span>
      <span class="p-color-text">${c.name}</span>
    </button>
  `).join("");
}

function selectProductColor(name) {
  selectedColor = name;
  const labelEl = document.getElementById("p-selected-color-label");
  if (labelEl) labelEl.textContent = selectedColor;

  document.querySelectorAll(".p-color-pill").forEach(pill => {
    pill.classList.toggle("active", pill.innerText.includes(name));
  });

  updatePricingAndCTA();
}

function renderStorageOptions(p) {
  const container = document.getElementById("p-storage-selector");
  if (!container) return;

  if (!p.storage || p.storage.length === 0) {
    container.innerHTML = `<span style="font-size: 0.9rem; color: var(--text-muted);">Standard Configuration</span>`;
    return;
  }

  container.innerHTML = p.storage.map(s => `
    <button class="p-storage-pill ${s.size === selectedStorage ? 'active' : ''}" 
            onclick="selectProductStorage('${s.size}')">
      ${s.size}
    </button>
  `).join("");
}

function selectProductStorage(size) {
  selectedStorage = size;
  document.querySelectorAll(".p-storage-pill").forEach(pill => {
    pill.classList.toggle("active", pill.innerText.trim() === size);
  });
  updatePricingAndCTA();
}

function updatePricingAndCTA() {
  const p = currentProduct;
  if (!p) return;

  let currentPrice = p.price;
  if (p.storage && p.storage.length) {
    const sObj = p.storage.find(s => s.size === selectedStorage);
    if (sObj && sObj.price) currentPrice = sObj.price;
  }

  const priceEl = document.getElementById("p-current-price");
  const oldPriceEl = document.getElementById("p-old-price");
  const waBtn = document.getElementById("p-whatsapp-btn");

  if (priceEl) priceEl.textContent = formatLKR(currentPrice);
  if (oldPriceEl) {
    if (p.oldPrice) {
      oldPriceEl.textContent = formatLKR(p.oldPrice);
      oldPriceEl.style.display = "inline-block";
    } else {
      oldPriceEl.style.display = "none";
    }
  }

  // Update WhatsApp pre-filled inquiry link
  if (waBtn) {
    const variantText = `${selectedColor} • ${selectedStorage}`;
    waBtn.href = getWhatsAppInquiryLink(p.name, variantText, formatLKR(currentPrice));
  }
}

function stepQuantity(delta) {
  currentQuantity += delta;
  if (currentQuantity < 1) currentQuantity = 1;
  const qtyEl = document.getElementById("p-quantity-val");
  if (qtyEl) qtyEl.textContent = currentQuantity;
}

function handleProductAddToCart() {
  if (!currentProduct) return;
  addToCart(currentProduct.id, currentQuantity, selectedColor, selectedStorage);
}

function handleProductBuyNow() {
  if (!currentProduct) return;
  addToCart(currentProduct.id, currentQuantity, selectedColor, selectedStorage);
  window.location.href = "cart.html";
}

function initTabs() {
  document.querySelectorAll(".p-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabKey = btn.getAttribute("data-tab");

      document.querySelectorAll(".p-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".p-tab-panel").forEach(panel => {
        panel.classList.toggle("active", panel.getAttribute("data-panel") === tabKey);
      });
    });
  });
}

function renderSpecsTable(p) {
  const container = document.getElementById("p-specs-grid");
  if (!container || !p.specs) return;

  container.innerHTML = Object.entries(p.specs).map(([key, val]) => `
    <div class="spec-row-item">
      <span class="spec-key">${key}</span>
      <span class="spec-val">${val}</span>
    </div>
  `).join("");
}

function renderBoxContents(p) {
  const container = document.getElementById("p-box-contents");
  if (!container) return;

  const defaults = [
    `${p.name} Device`,
    "USB-C to USB-C Fast Charge Cable (1m Braided)",
    "Documentation & Warranty Registration Card",
    "SIM Ejector Tool & Screen Polish Cloth"
  ];

  container.innerHTML = defaults.map(item => `
    <li class="box-content-item">
      <i class="fa-solid fa-check" style="color: var(--pc-magenta);"></i>
      <span>${item}</span>
    </li>
  `).join("");
}

function renderRelatedProducts() {
  const container = document.getElementById("p-related-products-grid");
  if (!container || !currentProduct) return;

  const related = getAllProducts()
    .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.brand === currentProduct.brand))
    .slice(0, 4);

  container.innerHTML = related.map(generateProductCardHTML).join("");
  syncWishlistButtons();
}
