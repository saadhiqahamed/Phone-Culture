/**
 * PHONE CULTURE — Shopping Cart & WhatsApp Order Engine
 * Stores items in localStorage with variants (color, storage)
 */

const CART_STORAGE_KEY = "phone_culture_cart_items";

function getCartItems() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCartItems(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    updateCartBadges();
    renderCartDrawer();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

function addToCart(productId, qty = 1, selectedColor = null, selectedStorage = null) {
  const product = getProductById(productId);
  if (!product) {
    if (typeof showToast === "function") showToast("Product not found", "error");
    return;
  }

  const items = getCartItems();
  const color = selectedColor || (product.colors && product.colors.length ? product.colors[0].name : "Standard");
  
  let unitPrice = product.price;
  let storage = selectedStorage || (product.storage && product.storage.length ? product.storage[0].size : "Standard");
  
  if (product.storage && product.storage.length) {
    const sOption = product.storage.find(s => s.size === storage);
    if (sOption && sOption.price) {
      unitPrice = sOption.price;
    }
  }

  // Find if identical product with same variants already exists
  const existingIdx = items.findIndex(
    item => item.id === productId && item.selectedColor === color && item.selectedStorage === storage
  );

  if (existingIdx > -1) {
    items[existingIdx].quantity += qty;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: unitPrice,
      image: product.image,
      selectedColor: color,
      selectedStorage: storage,
      quantity: qty
    });
  }

  saveCartItems(items);

  if (typeof showToast === "function") {
    showToast(`Added ${product.name} to cart!`, "cart");
  }

  // Open cart drawer for quick feedback
  openCartDrawer();
}

function removeFromCart(index) {
  const items = getCartItems();
  if (index >= 0 && index < items.length) {
    const removed = items.splice(index, 1);
    saveCartItems(items);
    if (typeof showToast === "function") {
      showToast(`Removed from cart`, "trash");
    }
  }
}

function updateCartQuantity(index, newQty) {
  const items = getCartItems();
  if (index >= 0 && index < items.length) {
    if (newQty <= 0) {
      removeFromCart(index);
    } else {
      items[index].quantity = newQty;
      saveCartItems(items);
    }
  }
}

function clearCart() {
  saveCartItems([]);
}

function getCartTotals() {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 0 ? (subtotal > 100000 ? 0 : 450) : 0; // Free delivery over 100k LKR
  const total = subtotal + delivery;
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return { subtotal, delivery, total, count };
}

function updateCartBadges() {
  const { count } = getCartTotals();
  const badges = document.querySelectorAll(".cart-counter-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.classList.remove("bump");
    void badge.offsetWidth; // trigger reflow
    if (count > 0) {
      badge.classList.add("bump");
    }
  });
}

function renderCartDrawer() {
  const drawerBody = document.getElementById("cart-drawer-items");
  const subtotalEl = document.getElementById("cart-drawer-subtotal");
  const deliveryEl = document.getElementById("cart-drawer-delivery");
  const totalEl = document.getElementById("cart-drawer-total");
  const checkoutBtn = document.getElementById("cart-drawer-checkout-btn");
  const whatsappOrderBtn = document.getElementById("cart-drawer-whatsapp-btn");

  if (!drawerBody) return;

  const items = getCartItems();
  const totals = getCartTotals();

  if (items.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
        <h4 class="cart-empty-title">Your Cart is Empty</h4>
        <p class="cart-empty-desc">Explore our flagship Apple, Samsung, and premium tech catalogue.</p>
        <a href="shop.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Start Shopping</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatLKR(0);
    if (deliveryEl) deliveryEl.textContent = formatLKR(0);
    if (totalEl) totalEl.textContent = formatLKR(0);
    if (checkoutBtn) checkoutBtn.style.pointerEvents = "none";
    if (whatsappOrderBtn) whatsappOrderBtn.style.pointerEvents = "none";
    return;
  }

  if (checkoutBtn) checkoutBtn.style.pointerEvents = "auto";
  if (whatsappOrderBtn) whatsappOrderBtn.style.pointerEvents = "auto";

  let html = "";
  items.forEach((item, index) => {
    html += `
      <div class="cart-item-card">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <div class="cart-item-meta">${item.selectedColor || ""} ${item.selectedStorage ? "• " + item.selectedStorage : ""}</div>
          <div class="cart-item-price">${formatLKR(item.price)}</div>
          <div class="cart-qty-stepper">
            <button class="qty-step-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-step-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove item" aria-label="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  drawerBody.innerHTML = html;
  if (subtotalEl) subtotalEl.textContent = formatLKR(totals.subtotal);
  if (deliveryEl) deliveryEl.textContent = totals.delivery === 0 ? "FREE" : formatLKR(totals.delivery);
  if (totalEl) totalEl.textContent = formatLKR(totals.total);

  // Hook WhatsApp order button
  if (whatsappOrderBtn) {
    whatsappOrderBtn.onclick = function() {
      const waLink = getWhatsAppOrderSummaryLink(items, {}, totals.total);
      window.open(waLink, "_blank");
    };
  }
}

function openCartDrawer() {
  const drawerBackdrop = document.getElementById("cart-drawer-backdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawerBackdrop = document.getElementById("cart-drawer-backdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Initial binding on DOM load
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadges();
  renderCartDrawer();

  // Backdrop click closes drawer
  const drawerBackdrop = document.getElementById("cart-drawer-backdrop");
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", (e) => {
      if (e.target === drawerBackdrop) {
        closeCartDrawer();
      }
    });
  }

  // Close button binding
  const closeBtn = document.getElementById("cart-drawer-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCartDrawer);
  }
});
