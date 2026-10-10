/**
 * PHONE CULTURE — Wishlist Management
 * Stores bookmarked products in localStorage
 */

const WISHLIST_STORAGE_KEY = "phone_culture_wishlist_items";

function getWishlistItems() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlistItems(items) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    updateWishlistBadges();
    syncWishlistButtons();
  } catch (e) {
    console.error("Error saving wishlist", e);
  }
}

function isInWishlist(productId) {
  const items = getWishlistItems();
  return items.includes(productId);
}

function toggleWishlist(productId) {
  let items = getWishlistItems();
  const exists = items.includes(productId);
  const product = getProductById(productId);

  if (exists) {
    items = items.filter(id => id !== productId);
    saveWishlistItems(items);
    if (typeof showToast === "function") {
      showToast("Removed from wishlist", "heart");
    }
  } else {
    items.push(productId);
    saveWishlistItems(items);
    if (typeof showToast === "function") {
      const name = product ? product.name : "Item";
      showToast(`Saved ${name} to wishlist!`, "heart");
    }
  }

  // If on wishlist.html, re-render the view
  if (typeof renderWishlistPage === "function") {
    renderWishlistPage();
  }
}

function updateWishlistBadges() {
  const items = getWishlistItems();
  const badges = document.querySelectorAll(".wishlist-counter-badge");
  badges.forEach(badge => {
    badge.textContent = items.length;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    if (items.length > 0) {
      badge.classList.add("bump");
    }
  });
}

function syncWishlistButtons() {
  const buttons = document.querySelectorAll("[data-wishlist-id]");
  const items = getWishlistItems();
  buttons.forEach(btn => {
    const id = btn.getAttribute("data-wishlist-id");
    const icon = btn.querySelector("i");
    if (items.includes(id)) {
      btn.classList.add("active");
      if (icon) {
        icon.className = "fa-solid fa-heart";
      }
    } else {
      btn.classList.remove("active");
      if (icon) {
        icon.className = "fa-regular fa-heart";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWishlistBadges();
  syncWishlistButtons();
});
