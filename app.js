const CATEGORIAS_OFICIAIS = [
  "Entradas",
  "Pratos Principais",
  "Sobremesas",
  "Bebidas",
  "Carta de Vinhos"
];

const CUPONS_VALIDOS = {
  "TUCAN10": { tipo: "percentual", valor: 10, rotulo: "10% OFF" },
  "TUCAN20": { tipo: "percentual", valor: 20, rotulo: "20% OFF" },
  "BISTRO15": { tipo: "percentual", valor: 15, rotulo: "15% OFF" },
  "PRIMEIRACOMPRA": { tipo: "fixo", valor: 15, rotulo: "R$ 15,00 OFF" }
};

const STORAGE_KEYS = {
  CART: "tucan_cart_data",
  HISTORY: "tucan_order_history",
  THEME: "tucan_active_theme",
  COUPON: "tucan_active_coupon"
};

const state = {
  activeCategory: "Todas",
  searchQuery: "",
  minPrice: null,
  maxPrice: null,
  sortOrder: "default",
  cart: [],
  includeWaiterTip: false,
  appliedCoupon: null,
  orderNotes: "",
  paymentMethod: "PIX",
  cashReceived: null,
  clientName: "",
  tableNumber: "",
  currentOrder: null,
  orderHistory: [],
  theme: "light"
};

const formatCurrency = (val) => {
  return val.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

const sanitize = (str) => {
  if (!str) return "";
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
};

const DOM = {
  menuContainer: document.getElementById("menuContainer"),
  searchInput: document.getElementById("searchInput"),
  searchClearBtn: document.getElementById("searchClearBtn"),
  minPriceInput: document.getElementById("minPriceInput"),
  maxPriceInput: document.getElementById("maxPriceInput"),
  btnClearPriceFilter: document.getElementById("btnClearPriceFilter"),
  sortSelect: document.getElementById("sortSelect"),
  categoriesNav: document.getElementById("categoriesNav"),
  resultsCount: document.getElementById("resultsCount"),
  badgeAll: document.getElementById("badgeAll"),
  orderItemsList: document.getElementById("orderItemsList"),
  cartEmptyState: document.getElementById("cartEmptyState"),
  orderCountBadge: document.getElementById("orderCountBadge"),
  headerCartBtn: document.getElementById("headerCartBtn"),
  headerCartCount: document.getElementById("headerCartCount"),
  headerCartTotal: document.getElementById("headerCartTotal"),
  mobileCartBar: document.querySelector(".mobile-cart-bar"),
  mobileCartTrigger: document.getElementById("mobileCartTrigger"),
  mobileCartBadge: document.getElementById("mobileCartBadge"),
  mobileCartTotal: document.getElementById("mobileCartTotal"),
  orderDrawer: document.getElementById("orderDrawer"),
  closeDrawerBtn: document.getElementById("closeDrawerBtn"),
  couponInput: document.getElementById("couponInput"),
  btnApplyCoupon: document.getElementById("btnApplyCoupon"),
  couponAppliedTag: document.getElementById("couponAppliedTag"),
  appliedCouponCode: document.getElementById("appliedCouponCode"),
  appliedCouponDiscount: document.getElementById("appliedCouponDiscount"),
  btnRemoveCoupon: document.getElementById("btnRemoveCoupon"),
  orderNotesInput: document.getElementById("orderNotesInput"),
  paymentRadios: document.querySelectorAll('input[name="paymentMethod"]'),
  changeCalculationBox: document.getElementById("changeCalculationBox"),
  cashReceivedInput: document.getElementById("cashReceivedInput"),
  changeResultRow: document.getElementById("changeResultRow"),
  changeResultValue: document.getElementById("changeResultValue"),
  changeWarningRow: document.getElementById("changeWarningRow"),
  waiterTipCheckbox: document.getElementById("waiterTipCheckbox"),
  waiterTipValue: document.getElementById("waiterTipValue"),
  subtotalValue: document.getElementById("subtotalValue"),
  discountDisplayLine: document.getElementById("discountDisplayLine"),
  discountValue: document.getElementById("discountValue"),
  tipDisplayLine: document.getElementById("tipDisplayLine"),
  tipSummaryValue: document.getElementById("tipSummaryValue"),
  grandTotalValue: document.getElementById("grandTotalValue"),
  clientName: document.getElementById("clientName"),
  tableNumber: document.getElementById("tableNumber"),
  nameError: document.getElementById("nameError"),
  tableError: document.getElementById("tableError"),
  btnFinishOrder: document.getElementById("btnFinishOrder"),
  confirmModal: document.getElementById("confirmModal"),
  confirmClientName: document.getElementById("confirmClientName"),
  confirmTableNumber: document.getElementById("confirmTableNumber"),
  confirmPaymentMethod: document.getElementById("confirmPaymentMethod"),
  confirmChangeBox: document.getElementById("confirmChangeBox"),
  confirmChangeValue: document.getElementById("confirmChangeValue"),
  confirmNotesBox: document.getElementById("confirmNotesBox"),
  confirmNotesText: document.getElementById("confirmNotesText"),
  confirmItemsList: document.getElementById("confirmItemsList"),
  confirmSubtotal: document.getElementById("confirmSubtotal"),
  confirmDiscountRow: document.getElementById("confirmDiscountRow"),
  confirmDiscountLabel: document.getElementById("confirmDiscountLabel"),
  confirmDiscountAmount: document.getElementById("confirmDiscountAmount"),
  confirmTipStatus: document.getElementById("confirmTipStatus"),
  confirmTipAmount: document.getElementById("confirmTipAmount"),
  confirmGrandTotal: document.getElementById("confirmGrandTotal"),
  btnConfirmAndSendOrder: document.getElementById("btnConfirmAndSendOrder"),
  btnBackToCart: document.getElementById("btnBackToCart"),
  receiptModal: document.getElementById("receiptModal"),
  receiptOrderNumber: document.getElementById("receiptOrderNumber"),
  receiptClientName: document.getElementById("receiptClientName"),
  receiptTableNumber: document.getElementById("receiptTableNumber"),
  receiptPaymentMethod: document.getElementById("receiptPaymentMethod"),
  receiptChangeBox: document.getElementById("receiptChangeBox"),
  receiptChangeValue: document.getElementById("receiptChangeValue"),
  receiptNotesBox: document.getElementById("receiptNotesBox"),
  receiptNotesText: document.getElementById("receiptNotesText"),
  receiptItemsList: document.getElementById("receiptItemsList"),
  receiptSubtotal: document.getElementById("receiptSubtotal"),
  receiptDiscountRow: document.getElementById("receiptDiscountRow"),
  receiptDiscountLabel: document.getElementById("receiptDiscountLabel"),
  receiptDiscountAmount: document.getElementById("receiptDiscountAmount"),
  receiptTipStatus: document.getElementById("receiptTipStatus"),
  receiptTipAmount: document.getElementById("receiptTipAmount"),
  receiptGrandTotal: document.getElementById("receiptGrandTotal"),
  receiptTimestamp: document.getElementById("receiptTimestamp"),
  btnPrintReceipt: document.getElementById("btnPrintReceipt"),
  btnCloseReceiptModal: document.getElementById("btnCloseReceiptModal"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  headerHistoryBtn: document.getElementById("headerHistoryBtn"),
  historyBadgeCount: document.getElementById("historyBadgeCount"),
  historyModal: document.getElementById("historyModal"),
  historyListContainer: document.getElementById("historyListContainer"),
  btnClearHistory: document.getElementById("btnClearHistory"),
  btnCloseHistoryModal: document.getElementById("btnCloseHistoryModal"),
  toastContainer: document.getElementById("toastContainer")
};

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;
  const iconSvg = type === "error"
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  toast.innerHTML = `<span>${iconSvg}</span> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  } catch (e) {}
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        state.cart = parsed;
      }
    }
  } catch (e) {}
}

function saveHistoryToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.orderHistory));
    updateHistoryBadge();
  } catch (e) {}
}

function loadHistoryFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        state.orderHistory = parsed;
      }
    }
    updateHistoryBadge();
  } catch (e) {}
}

function updateHistoryBadge() {
  if (DOM.historyBadgeCount) {
    DOM.historyBadgeCount.textContent = state.orderHistory.length;
    DOM.historyBadgeCount.style.display = state.orderHistory.length > 0 ? "flex" : "none";
  }
}

function saveThemeToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  } catch (e) {}
}

function loadThemeFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === "dark" || saved === "light") {
      state.theme = saved;
    } else {
      state.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", state.theme);
  } catch (e) {}
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  saveThemeToStorage();
  showToast(`Modo ${state.theme === "dark" ? "Escuro" : "Claro"} ativado.`);
}

function generateOrderNumber() {
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  return `#TCN-${randomDigits}`;
}

function getFilteredProducts() {
  const query = state.searchQuery.trim().toLowerCase();
  let list = PRODUTOS.filter(prod => {
    const matchesCategory = (state.activeCategory === "Todas" || prod.categoria === state.activeCategory);
    let matchesPrice = true;
    if (state.minPrice !== null && prod.preco < state.minPrice) {
      matchesPrice = false;
    }
    if (state.maxPrice !== null && prod.preco > state.maxPrice) {
      matchesPrice = false;
    }
    if (!query) return matchesCategory && matchesPrice;
    const matchesName = prod.nome.toLowerCase().includes(query);
    const matchesDesc = prod.descricao.toLowerCase().includes(query);
    return matchesCategory && matchesPrice && (matchesName || matchesDesc);
  });

  if (state.sortOrder === "price-asc") {
    list.sort((a, b) => a.preco - b.preco);
  } else if (state.sortOrder === "price-desc") {
    list.sort((a, b) => b.preco - a.preco);
  } else if (state.sortOrder === "name-asc") {
    list.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  return list;
}

function renderMenu() {
  const filtered = getFilteredProducts();
  DOM.menuContainer.innerHTML = "";
  const totalCount = filtered.length;
  DOM.resultsCount.innerHTML = `Exibindo <span>${totalCount}</span> produto${totalCount !== 1 ? 's' : ''}`;
  
  if (filtered.length === 0) {
    DOM.menuContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <h3 class="empty-state-title">Nenhum produto encontrado</h3>
        <p class="empty-state-desc">Não encontramos itens correspondentes aos filtros selecionados.</p>
        <button type="button" class="btn-reset-filters" id="btnResetFilters">Limpar Todos os Filtros</button>
      </div>
    `;
    document.getElementById("btnResetFilters")?.addEventListener("click", () => {
      state.searchQuery = "";
      state.activeCategory = "Todas";
      state.minPrice = null;
      state.maxPrice = null;
      state.sortOrder = "default";
      DOM.searchInput.value = "";
      DOM.minPriceInput.value = "";
      DOM.maxPriceInput.value = "";
      DOM.sortSelect.value = "default";
      DOM.searchClearBtn.classList.remove("visible");
      updateCategoryNavUI();
      renderMenu();
    });
    return;
  }

  if (state.sortOrder !== "default") {
    const section = document.createElement("section");
    section.className = "category-section";
    section.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Resultados Ordenados</h2>
        <span class="section-count">${filtered.length} ${filtered.length === 1 ? 'item' : 'itens'}</span>
      </div>
      <div class="products-grid">
        ${filtered.map(prod => renderProductCard(prod)).join("")}
      </div>
    `;
    DOM.menuContainer.appendChild(section);
  } else {
    CATEGORIAS_OFICIAIS.forEach(categoria => {
      const itemsInCat = filtered.filter(p => p.categoria === categoria);
      if (itemsInCat.length === 0) return;
      const section = document.createElement("section");
      section.className = "category-section";
      section.id = `cat-${categoria.toLowerCase().replace(/\s+/g, '-')}`;
      section.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">${categoria}</h2>
          <span class="section-count">${itemsInCat.length} ${itemsInCat.length === 1 ? 'item' : 'itens'}</span>
        </div>
        <div class="products-grid">
          ${itemsInCat.map(prod => renderProductCard(prod)).join("")}
        </div>
      `;
      DOM.menuContainer.appendChild(section);
    });
  }
}

function renderProductCard(prod) {
  const cartItem = state.cart.find(item => item.id === prod.id);
  const qtyInCart = cartItem ? cartItem.quantidade : 0;
  const inCartClass = qtyInCart > 0 ? "in-cart" : "";
  return `
    <article class="product-card ${inCartClass}" id="card-product-${prod.id}">
      ${qtyInCart > 0 ? `<div class="in-cart-indicator">✓ ${qtyInCart} no pedido</div>` : ""}
      <div class="product-card-top">
        <span class="product-category-tag">${prod.categoria}</span>
        <h3 class="product-title">${sanitize(prod.nome)}</h3>
        <p class="product-desc">${sanitize(prod.descricao)}</p>
      </div>
      <div class="product-card-bottom">
        <div class="product-price-wrapper">
          <span class="price-label">Preço</span>
          <span class="product-price"><span class="currency">R$</span>${prod.preco.toFixed(2).replace('.', ',')}</span>
        </div>
        <button 
          type="button" 
          class="btn-add-cart" 
          onclick="handleAddToCart(${prod.id})" 
          aria-label="Adicionar ${sanitize(prod.nome)} ao pedido"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span>${qtyInCart > 0 ? 'Adicionar +' : 'Adicionar ao pedido'}</span>
        </button>
      </div>
    </article>
  `;
}

window.handleAddToCart = function(productId) {
  const product = PRODUTOS.find(p => p.id === productId);
  if (!product) return;
  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantidade += 1;
    showToast(`+1 "${product.nome}" adicionado!`);
  } else {
    state.cart.push({
      id: product.id,
      nome: product.nome,
      preco: product.preco,
      categoria: product.categoria,
      quantidade: 1
    });
    showToast(`"${product.nome}" adicionado ao pedido!`);
  }
  saveCartToStorage();
  updateCartUI();
  renderMenu();
};

window.handleUpdateQty = function(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  const newQty = item.quantidade + delta;
  if (newQty < 1) return;
  item.quantidade = newQty;
  saveCartToStorage();
  updateCartUI();
  renderMenu();
};

window.handleRemoveItem = function(productId) {
  const itemIndex = state.cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    const removedItem = state.cart[itemIndex];
    state.cart.splice(itemIndex, 1);
    showToast(`"${removedItem.nome}" removido do pedido.`, "error");
    saveCartToStorage();
    updateCartUI();
    renderMenu();
  }
};

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  let discount = 0;
  if (state.appliedCoupon && subtotal > 0) {
    if (state.appliedCoupon.tipo === "percentual") {
      discount = (subtotal * (state.appliedCoupon.valor / 100));
    } else if (state.appliedCoupon.tipo === "fixo") {
      discount = Math.min(subtotal, state.appliedCoupon.valor);
    }
  }
  const baseForTip = Math.max(0, subtotal - discount);
  const waiterTip = state.includeWaiterTip ? (baseForTip * 0.10) : 0;
  const total = baseForTip + waiterTip;
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantidade, 0);

  return {
    subtotal,
    discount,
    waiterTip,
    total,
    totalItemsCount
  };
}

function updateChangeCalculation(grandTotal) {
  if (state.paymentMethod !== "Dinheiro") {
    DOM.changeCalculationBox.style.display = "none";
    return;
  }
  DOM.changeCalculationBox.style.display = "flex";
  const cashVal = parseFloat(DOM.cashReceivedInput.value);
  if (isNaN(cashVal) || cashVal <= 0) {
    DOM.changeResultRow.style.display = "none";
    DOM.changeWarningRow.style.display = "none";
    state.cashReceived = null;
    return;
  }
  state.cashReceived = cashVal;
  if (cashVal < grandTotal) {
    DOM.changeResultRow.style.display = "none";
    DOM.changeWarningRow.style.display = "block";
  } else {
    DOM.changeWarningRow.style.display = "none";
    DOM.changeResultRow.style.display = "flex";
    const change = cashVal - grandTotal;
    DOM.changeResultValue.textContent = formatCurrency(change);
  }
}

function updateCartUI() {
  const { subtotal, discount, waiterTip, total, totalItemsCount } = calculateTotals();
  DOM.orderCountBadge.textContent = totalItemsCount;
  DOM.headerCartCount.textContent = totalItemsCount;
  DOM.headerCartTotal.textContent = formatCurrency(total);
  DOM.mobileCartBadge.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'itens'}`;
  DOM.mobileCartTotal.textContent = formatCurrency(total);
  DOM.subtotalValue.textContent = formatCurrency(subtotal);
  
  if (discount > 0) {
    DOM.discountDisplayLine.style.display = "flex";
    DOM.discountValue.textContent = `- ${formatCurrency(discount)}`;
  } else {
    DOM.discountDisplayLine.style.display = "none";
  }

  DOM.waiterTipValue.textContent = formatCurrency(Math.max(0, subtotal - discount) * 0.10);
  DOM.tipSummaryValue.textContent = formatCurrency(waiterTip);
  DOM.grandTotalValue.textContent = formatCurrency(total);

  if (state.includeWaiterTip && subtotal > 0) {
    DOM.tipDisplayLine.style.display = "flex";
  } else {
    DOM.tipDisplayLine.style.display = "none";
  }

  updateChangeCalculation(total);

  if (state.cart.length === 0) {
    DOM.orderItemsList.innerHTML = `
      <div class="cart-empty-state" id="cartEmptyState">
        <div class="cart-empty-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
          </svg>
        </div>
        <p class="cart-empty-text">Seu pedido está vazio</p>
        <p class="cart-empty-subtext">Navegue pelas categorias e clique em <strong>+ Adicionar</strong> para montar sua refeição.</p>
      </div>
    `;
    DOM.btnFinishOrder.disabled = true;
  } else {
    DOM.btnFinishOrder.disabled = false;
    DOM.orderItemsList.innerHTML = state.cart.map(item => {
      const itemTotal = item.preco * item.quantidade;
      return `
        <div class="order-item-card" id="cart-item-${item.id}">
          <div class="order-item-header">
            <div>
              <h4 class="order-item-name">${sanitize(item.nome)}</h4>
              <span class="order-item-unit-price">${formatCurrency(item.preco)} un.</span>
            </div>
            <button 
              type="button" 
              class="btn-remove-item" 
              onclick="handleRemoveItem(${item.id})" 
              title="Remover item do pedido"
              aria-label="Remover ${sanitize(item.nome)}"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
          </div>
          <div class="order-item-controls">
            <div class="qty-control-group">
              <button 
                type="button" 
                class="qty-btn" 
                onclick="handleUpdateQty(${item.id}, -1)" 
                ${item.quantidade <= 1 ? 'disabled title="Mínimo de 1 unidade"' : ''}
                aria-label="Diminuir quantidade"
              >−</button>
              <span class="qty-value">${item.quantidade}</span>
              <button 
                type="button" 
                class="qty-btn" 
                onclick="handleUpdateQty(${item.id}, 1)"
                aria-label="Aumentar quantidade"
              >+</button>
            </div>
            <div class="order-item-price-col">
              <span class="order-item-total">${formatCurrency(itemTotal)}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

function updateCategoryNavUI() {
  const buttons = DOM.categoriesNav.querySelectorAll(".category-chip");
  buttons.forEach(btn => {
    if (btn.dataset.category === state.activeCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function setupCategoryListeners() {
  DOM.categoriesNav.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (!chip) return;
    state.activeCategory = chip.dataset.category;
    updateCategoryNavUI();
    renderMenu();
    if (state.activeCategory !== "Todas" && !state.searchQuery) {
      const targetId = `cat-${state.activeCategory.toLowerCase().replace(/\s+/g, '-')}`;
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}

function setupSearchAndFilterListeners() {
  DOM.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim().length > 0) {
      DOM.searchClearBtn.classList.add("visible");
    } else {
      DOM.searchClearBtn.classList.remove("visible");
    }
    renderMenu();
  });

  DOM.searchClearBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    state.searchQuery = "";
    DOM.searchClearBtn.classList.remove("visible");
    renderMenu();
    DOM.searchInput.focus();
  });

  DOM.minPriceInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    state.minPrice = !isNaN(val) && val >= 0 ? val : null;
    renderMenu();
  });

  DOM.maxPriceInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    state.maxPrice = !isNaN(val) && val >= 0 ? val : null;
    renderMenu();
  });

  DOM.btnClearPriceFilter.addEventListener("click", () => {
    DOM.minPriceInput.value = "";
    DOM.maxPriceInput.value = "";
    state.minPrice = null;
    state.maxPrice = null;
    renderMenu();
    showToast("Filtro de preço limpo.");
  });

  DOM.sortSelect.addEventListener("change", (e) => {
    state.sortOrder = e.target.value;
    renderMenu();
  });
}

function setupCouponListeners() {
  DOM.btnApplyCoupon.addEventListener("click", () => {
    const code = DOM.couponInput.value.trim().toUpperCase();
    if (!code) {
      showToast("Por favor, digite um cupom.", "error");
      return;
    }
    const couponData = CUPONS_VALIDOS[code];
    if (couponData) {
      state.appliedCoupon = { code, ...couponData };
      DOM.couponInputGroup.style.display = "none";
      DOM.couponAppliedTag.style.display = "flex";
      DOM.appliedCouponCode.textContent = code;
      DOM.appliedCouponDiscount.textContent = `-${couponData.rotulo}`;
      showToast(`Cupom "${code}" aplicado com sucesso!`);
      updateCartUI();
    } else {
      showToast("Cupom inválido ou expirado.", "error");
    }
  });

  DOM.btnRemoveCoupon.addEventListener("click", () => {
    state.appliedCoupon = null;
    DOM.couponInput.value = "";
    DOM.couponAppliedTag.style.display = "none";
    DOM.couponInputGroup.style.display = "flex";
    showToast("Cupom removido.");
    updateCartUI();
  });
}

function setupPaymentListeners() {
  DOM.paymentRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.paymentMethod = e.target.value;
      const { total } = calculateTotals();
      updateChangeCalculation(total);
    });
  });

  DOM.cashReceivedInput.addEventListener("input", () => {
    const { total } = calculateTotals();
    updateChangeCalculation(total);
  });
}

function setupWaiterTipListener() {
  DOM.waiterTipCheckbox.addEventListener("change", (e) => {
    state.includeWaiterTip = e.target.checked;
    updateCartUI();
  });
}

function openDrawer() {
  DOM.orderDrawer.classList.add("open");
  document.body.style.overflow = window.innerWidth < 1040 ? "hidden" : "auto";
}

function closeDrawer() {
  DOM.orderDrawer.classList.remove("open");
  document.body.style.overflow = "auto";
}

function setupDrawerListeners() {
  DOM.headerCartBtn.addEventListener("click", () => {
    if (window.innerWidth < 1040) {
      openDrawer();
    } else {
      DOM.orderDrawer.scrollIntoView({ behavior: "smooth" });
    }
  });
  DOM.mobileCartTrigger.addEventListener("click", openDrawer);
  DOM.closeDrawerBtn.addEventListener("click", closeDrawer);
  DOM.orderDrawer.addEventListener("click", (e) => {
    if (e.target === DOM.orderDrawer && window.innerWidth < 1040) {
      closeDrawer();
    }
  });
}

function validateCustomerData() {
  let isValid = true;
  const nameVal = DOM.clientName.value.trim();
  const tableVal = DOM.tableNumber.value.trim();
  if (!nameVal) {
    DOM.clientName.classList.add("error");
    DOM.nameError.classList.add("visible");
    isValid = false;
  } else {
    DOM.clientName.classList.remove("error");
    DOM.nameError.classList.remove("visible");
  }
  if (!tableVal) {
    DOM.tableNumber.classList.add("error");
    DOM.tableError.classList.add("visible");
    isValid = false;
  } else {
    DOM.tableNumber.classList.remove("error");
    DOM.tableError.classList.remove("visible");
  }
  return isValid;
}

function handleReviewOrder() {
  if (state.cart.length === 0) {
    showToast("Adicione pelo menos 1 produto ao pedido antes de finalizar.", "error");
    return;
  }
  if (!validateCustomerData()) {
    showToast("Por favor, preencha seu nome e número da mesa.", "error");
    if (!DOM.clientName.value.trim()) {
      DOM.clientName.focus();
    } else {
      DOM.tableNumber.focus();
    }
    return;
  }

  const { total } = calculateTotals();
  if (state.paymentMethod === "Dinheiro" && state.cashReceived !== null && state.cashReceived < total) {
    showToast("O valor para troco não pode ser menor que o total do pedido.", "error");
    DOM.cashReceivedInput.focus();
    return;
  }

  state.clientName = DOM.clientName.value.trim();
  state.tableNumber = DOM.tableNumber.value.trim();
  state.orderNotes = DOM.orderNotesInput.value.trim();

  renderConfirmModal();
  openModal(DOM.confirmModal);
}

function renderConfirmModal() {
  const { subtotal, discount, waiterTip, total } = calculateTotals();
  DOM.confirmClientName.textContent = state.clientName;
  DOM.confirmTableNumber.textContent = `Mesa ${state.tableNumber}`;
  DOM.confirmPaymentMethod.textContent = state.paymentMethod;

  if (state.paymentMethod === "Dinheiro" && state.cashReceived !== null) {
    DOM.confirmChangeBox.style.display = "block";
    const change = Math.max(0, state.cashReceived - total);
    DOM.confirmChangeValue.textContent = `Troco para ${formatCurrency(state.cashReceived)} (Devolver ${formatCurrency(change)})`;
  } else {
    DOM.confirmChangeBox.style.display = "none";
  }

  if (state.orderNotes) {
    DOM.confirmNotesBox.style.display = "block";
    DOM.confirmNotesText.textContent = `"${state.orderNotes}"`;
  } else {
    DOM.confirmNotesBox.style.display = "none";
  }

  DOM.confirmItemsList.innerHTML = state.cart.map(item => {
    const itemTotal = item.preco * item.quantidade;
    return `
      <div class="receipt-item-row">
        <div class="receipt-item-left">
          <span class="receipt-item-title">${sanitize(item.nome)}</span>
          <span class="receipt-item-calc">${item.quantidade}x ${formatCurrency(item.preco)}</span>
        </div>
        <span class="receipt-item-total">${formatCurrency(itemTotal)}</span>
      </div>
    `;
  }).join("");

  DOM.confirmSubtotal.textContent = formatCurrency(subtotal);

  if (discount > 0) {
    DOM.confirmDiscountRow.style.display = "flex";
    DOM.confirmDiscountLabel.textContent = `Desconto Cupom (${state.appliedCoupon.code}):`;
    DOM.confirmDiscountAmount.textContent = `- ${formatCurrency(discount)}`;
  } else {
    DOM.confirmDiscountRow.style.display = "none";
  }

  if (state.includeWaiterTip) {
    DOM.confirmTipStatus.textContent = "10% do Garçom (Incluído):";
    DOM.confirmTipAmount.textContent = formatCurrency(waiterTip);
  } else {
    DOM.confirmTipStatus.textContent = "10% do Garçom (Não incluído):";
    DOM.confirmTipAmount.textContent = "R$ 0,00";
  }

  DOM.confirmGrandTotal.textContent = formatCurrency(total);
}

function handleFinalizeOrder() {
  const orderNumber = generateOrderNumber();
  const { subtotal, discount, waiterTip, total, totalItemsCount } = calculateTotals();
  const now = new Date();
  const dateStr = now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

  const orderRecord = {
    id: orderNumber,
    date: dateStr,
    timestamp: now.getTime(),
    clientName: state.clientName,
    tableNumber: state.tableNumber,
    items: JSON.parse(JSON.stringify(state.cart)),
    subtotal,
    discount,
    discountCode: state.appliedCoupon ? state.appliedCoupon.code : null,
    waiterTip,
    total,
    totalItemsCount,
    paymentMethod: state.paymentMethod,
    cashReceived: state.cashReceived,
    notes: state.orderNotes,
    status: "Em Preparo"
  };

  state.orderHistory.unshift(orderRecord);
  saveHistoryToStorage();

  state.currentOrder = orderRecord;
  renderReceiptModal(orderRecord);

  closeModal(DOM.confirmModal);
  openModal(DOM.receiptModal);
  showToast(`Pedido ${orderNumber} enviado com sucesso para a cozinha!`);

  state.cart = [];
  state.appliedCoupon = null;
  state.includeWaiterTip = false;
  state.cashReceived = null;
  state.orderNotes = "";
  DOM.orderNotesInput.value = "";
  DOM.couponInput.value = "";
  DOM.cashReceivedInput.value = "";
  DOM.couponAppliedTag.style.display = "none";
  DOM.couponInputGroup.style.display = "flex";
  DOM.waiterTipCheckbox.checked = false;
  DOM.clientName.value = "";
  DOM.tableNumber.value = "";
  saveCartToStorage();
  updateCartUI();
  renderMenu();
  if (window.innerWidth < 1040) {
    closeDrawer();
  }
}

function renderReceiptModal(order) {
  DOM.receiptOrderNumber.textContent = order.id;
  DOM.receiptTimestamp.textContent = `Pedido emitido em ${order.date}`;
  DOM.receiptClientName.textContent = order.clientName;
  DOM.receiptTableNumber.textContent = `Mesa ${order.tableNumber}`;
  DOM.receiptPaymentMethod.textContent = order.paymentMethod;

  if (order.paymentMethod === "Dinheiro" && order.cashReceived !== null) {
    DOM.receiptChangeBox.style.display = "block";
    const change = Math.max(0, order.cashReceived - order.total);
    DOM.receiptChangeValue.textContent = `Troco para ${formatCurrency(order.cashReceived)} (Devolver ${formatCurrency(change)})`;
  } else {
    DOM.receiptChangeBox.style.display = "none";
  }

  if (order.notes) {
    DOM.receiptNotesBox.style.display = "block";
    DOM.receiptNotesText.textContent = `"${order.notes}"`;
  } else {
    DOM.receiptNotesBox.style.display = "none";
  }

  DOM.receiptItemsList.innerHTML = order.items.map(item => {
    const itemTotal = item.preco * item.quantidade;
    return `
      <div class="receipt-item-row">
        <div class="receipt-item-left">
          <span class="receipt-item-title">${sanitize(item.nome)}</span>
          <span class="receipt-item-calc">${item.quantidade}x ${formatCurrency(item.preco)}</span>
        </div>
        <span class="receipt-item-total">${formatCurrency(itemTotal)}</span>
      </div>
    `;
  }).join("");

  DOM.receiptSubtotal.textContent = formatCurrency(order.subtotal);

  if (order.discount > 0) {
    DOM.receiptDiscountRow.style.display = "flex";
    DOM.receiptDiscountLabel.textContent = `Desconto (${order.discountCode || 'Cupom'}):`;
    DOM.receiptDiscountAmount.textContent = `- ${formatCurrency(order.discount)}`;
  } else {
    DOM.receiptDiscountRow.style.display = "none";
  }

  if (order.waiterTip > 0) {
    DOM.receiptTipStatus.textContent = "10% do Garçom (Incluído):";
    DOM.receiptTipAmount.textContent = formatCurrency(order.waiterTip);
  } else {
    DOM.receiptTipStatus.textContent = "10% do Garçom (Não incluído):";
    DOM.receiptTipAmount.textContent = "R$ 0,00";
  }

  DOM.receiptGrandTotal.textContent = formatCurrency(order.total);
}

function renderHistoryModal() {
  if (state.orderHistory.length === 0) {
    DOM.historyListContainer.innerHTML = `
      <div class="history-empty-state">
        <div class="history-empty-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"/></svg>
        </div>
        <h4 class="history-empty-title">Nenhum pedido anterior</h4>
        <p class="history-empty-desc">Quando você finalizar um pedido, o registro detalhado aparecerá aqui.</p>
      </div>
    `;
    DOM.btnClearHistory.style.display = "none";
    return;
  }

  DOM.btnClearHistory.style.display = "block";
  DOM.historyListContainer.innerHTML = state.orderHistory.map((order, idx) => {
    const itemsSummary = order.items.map(i => `${i.quantidade}x ${sanitize(i.nome)}`).join(" • ");
    return `
      <div class="history-card" id="history-order-${idx}">
        <div class="history-card-header">
          <div>
            <span class="history-order-id">${order.id}</span>
            <div class="history-order-date">${order.date} • Mesa ${order.tableNumber}</div>
          </div>
          <span class="history-status-badge">${order.status}</span>
        </div>
        <div class="history-items-summary">
          ${itemsSummary}
        </div>
        <div class="history-card-footer">
          <div>
            <div class="history-total-price">${formatCurrency(order.total)}</div>
            <span class="history-pay-method">${order.paymentMethod}</span>
          </div>
          <button type="button" class="btn-repeat-order" onclick="handleRepeatOrder(${idx})">
            Repetir Pedido
          </button>
        </div>
      </div>
    `;
  }).join("");
}

window.handleRepeatOrder = function(orderIndex) {
  const order = state.orderHistory[orderIndex];
  if (!order) return;
  order.items.forEach(item => {
    const existing = state.cart.find(i => i.id === item.id);
    if (existing) {
      existing.quantidade += item.quantidade;
    } else {
      state.cart.push({ ...item });
    }
  });
  saveCartToStorage();
  updateCartUI();
  renderMenu();
  closeModal(DOM.historyModal);
  showToast(`Itens do pedido ${order.id} adicionados ao carrinho!`);
  if (window.innerWidth < 1040) {
    openDrawer();
  }
};

function openModal(modalElem) {
  modalElem.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalElem) {
  modalElem.classList.remove("active");
  document.body.style.overflow = "auto";
}

function setupModalListeners() {
  DOM.btnFinishOrder.addEventListener("click", handleReviewOrder);
  DOM.btnBackToCart.addEventListener("click", () => {
    closeModal(DOM.confirmModal);
    openDrawer();
  });
  DOM.btnConfirmAndSendOrder.addEventListener("click", handleFinalizeOrder);
  DOM.btnCloseReceiptModal.addEventListener("click", () => {
    closeModal(DOM.receiptModal);
  });
  DOM.btnPrintReceipt.addEventListener("click", () => {
    window.print();
  });

  DOM.themeToggleBtn.addEventListener("click", toggleTheme);
  
  DOM.headerHistoryBtn.addEventListener("click", () => {
    renderHistoryModal();
    openModal(DOM.historyModal);
  });
  DOM.btnCloseHistoryModal.addEventListener("click", () => {
    closeModal(DOM.historyModal);
  });
  DOM.btnClearHistory.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja limpar todo o seu histórico de pedidos?")) {
      state.orderHistory = [];
      saveHistoryToStorage();
      renderHistoryModal();
      showToast("Histórico de pedidos limpo.");
    }
  });

  [DOM.confirmModal, DOM.receiptModal, DOM.historyModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  DOM.clientName.addEventListener("input", () => {
    if (DOM.clientName.value.trim()) {
      DOM.clientName.classList.remove("error");
      DOM.nameError.classList.remove("visible");
    }
  });
  DOM.tableNumber.addEventListener("input", () => {
    if (DOM.tableNumber.value.trim()) {
      DOM.tableNumber.classList.remove("error");
      DOM.tableError.classList.remove("visible");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(DOM.confirmModal);
      closeModal(DOM.receiptModal);
      closeModal(DOM.historyModal);
      if (window.innerWidth < 1040) {
        closeDrawer();
      }
    }
  });
}

function init() {
  loadThemeFromStorage();
  loadCartFromStorage();
  loadHistoryFromStorage();
  setupCategoryListeners();
  setupSearchAndFilterListeners();
  setupCouponListeners();
  setupPaymentListeners();
  setupWaiterTipListener();
  setupDrawerListeners();
  setupModalListeners();
  updateCategoryNavUI();
  renderMenu();
  updateCartUI();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

