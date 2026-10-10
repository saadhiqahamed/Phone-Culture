/**
 * PHONE CULTURE — Flagship Device Comparison Engine
 * Allows side-by-side comparison of up to 4 smartphones & tech devices.
 */

const COMPARE_STORAGE_KEY = "phone_culture_compare_items";

function getCompareItems() {
  try {
    const raw = localStorage.getItem(COMPARE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : ["iphone-16-pro-max", "samsung-galaxy-s25-ultra"]; // Default comparison pair
  } catch (e) {
    return ["iphone-16-pro-max", "samsung-galaxy-s25-ultra"];
  }
}

function saveCompareItems(items) {
  try {
    localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(items));
    if (typeof renderCompareTable === "function") {
      renderCompareTable();
    }
  } catch (e) {
    console.error("Error saving compare list", e);
  }
}

function addToCompare(productId) {
  const items = getCompareItems();
  if (items.includes(productId)) {
    if (typeof showToast === "function") showToast("Product is already in comparison", "info");
    return;
  }
  if (items.length >= 4) {
    if (typeof showToast === "function") showToast("Maximum 4 devices can be compared at once", "warning");
    return;
  }
  items.push(productId);
  saveCompareItems(items);
  if (typeof showToast === "function") showToast("Added to device comparison!", "scale");
}

function removeFromCompare(productId) {
  let items = getCompareItems();
  items = items.filter(id => id !== productId);
  saveCompareItems(items);
  if (typeof showToast === "function") showToast("Removed from comparison", "trash");
}

function renderCompareTable() {
  const container = document.getElementById("compare-table-container");
  if (!container) return;

  const itemIds = getCompareItems();
  const products = itemIds.map(id => getProductById(id)).filter(Boolean);

  if (products.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state" style="padding: 80px 20px;">
        <div class="cart-empty-icon"><i class="fa-solid fa-code-compare"></i></div>
        <h3 class="cart-empty-title">No Devices to Compare</h3>
        <p class="cart-empty-desc">Choose devices from our shop to view detailed side-by-side specifications.</p>
        <a href="shop.html" class="btn btn-primary btn-sm">Browse Smartphones</a>
      </div>
    `;
    return;
  }

  // Comparison fields list
  const specFields = [
    { key: "Display", label: "Display & Screen" },
    { key: "Processor", label: "Chipset / Processor" },
    { key: "RAM", label: "RAM Memory" },
    { key: "Camera", label: "Camera System" },
    { key: "Battery", label: "Battery & Charging" },
    { key: "Operating System", label: "Operating System" },
    { key: "Dimensions", label: "Dimensions" },
    { key: "Weight", label: "Weight" },
    { key: "Warranty", label: "Warranty & Coverage" }
  ];

  let html = `
    <div class="compare-table-responsive">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="spec-label-col">Device Overview</th>
  `;

  products.forEach(p => {
    html += `
      <th class="product-col">
        <div class="compare-card-header">
          <button class="compare-remove-btn" onclick="removeFromCompare('${p.id}')" title="Remove device">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="compare-thumb">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <span class="pill-badge light">${p.brand}</span>
          <h4 class="compare-name">${p.name}</h4>
          <div class="compare-price">${formatLKR(p.price)}</div>
          <div class="compare-actions-row">
            <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">Add to Cart</button>
            <a href="product.html?id=${p.id}" class="btn btn-secondary btn-sm">Details</a>
          </div>
        </div>
      </th>
    `;
  });

  html += `
          </tr>
        </thead>
        <tbody>
  `;

  // Render rows
  specFields.forEach(field => {
    html += `
      <tr>
        <td class="spec-label-col"><strong>${field.label}</strong></td>
    `;
    products.forEach(p => {
      const val = (p.specs && p.specs[field.key]) ? p.specs[field.key] : "Standard";
      html += `<td class="spec-val-col">${val}</td>`;
    });
    html += `</tr>`;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCompareTable();
});
