const defaultProducts = [];
/*
  {
    id: "acer-al14-37p-c7vd",
    name: "Acer AL14-37P-C7VD",
    price: 6799000,
    stock: 8,
    specs: [
      ["Processor", "Intel Core i3-N355"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel HD Graphics Radeon"],
      ["Lebar Layar", '14"'],
      ["Include", "WiFi 802.11ac"],
      ["OS", "Windows 11 Home Single Language"]
    ]
  },
  {
    id: "asus-vivobook-14-a1405",
    name: "Asus Vivobook 14 A1405",
    price: 7399000,
    stock: 6,
    specs: [
      ["Processor", "AMD Ryzen 5 7520U"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "AMD Radeon Graphics"],
      ["Lebar Layar", '14" FHD'],
      ["Include", "Office Home 2024"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "lenovo-ideapad-slim-3",
    name: "Lenovo IdeaPad Slim 3",
    price: 5899000,
    stock: 12,
    specs: [
      ["Processor", "Intel Core i3-1215U"],
      ["RAM", "8GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel UHD Graphics"],
      ["Lebar Layar", '15.6" FHD'],
      ["Include", "Webcam FHD"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "hp-14s-dq5158tu",
    name: "HP 14s DQ5158TU",
    price: 7249000,
    stock: 7,
    specs: [
      ["Processor", "Intel Core i5-1235U"],
      ["RAM", "8GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel Iris Xe"],
      ["Lebar Layar", '14" FHD'],
      ["Include", "Backlit Keyboard"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "acer-aspire-5-a514",
    name: "Acer Aspire 5 A514",
    price: 8199000,
    stock: 5,
    specs: [
      ["Processor", "Intel Core i5-12450H"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel UHD Graphics"],
      ["Lebar Layar", '14" IPS'],
      ["Include", "Fingerprint"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "asus-tuf-f15-fx507",
    name: "Asus TUF F15 FX507",
    price: 12999000,
    stock: 4,
    specs: [
      ["Processor", "Intel Core i5-12500H"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "RTX 3050 4GB"],
      ["Lebar Layar", '15.6" 144Hz'],
      ["Include", "RGB Keyboard"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "lenovo-v14-g4",
    name: "Lenovo V14 G4",
    price: 6499000,
    stock: 9,
    specs: [
      ["Processor", "AMD Ryzen 5 7520U"],
      ["RAM", "8GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "AMD Radeon 610M"],
      ["Lebar Layar", '14" FHD'],
      ["Include", "HD Webcam"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "msi-modern-14-c12m",
    name: "MSI Modern 14 C12M",
    price: 7899000,
    stock: 6,
    specs: [
      ["Processor", "Intel Core i3-1215U"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel UHD Graphics"],
      ["Lebar Layar", '14" FHD'],
      ["Include", "Type-C Charging"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "dell-inspiron-14-5430",
    name: "Dell Inspiron 14 5430",
    price: 9699000,
    stock: 3,
    specs: [
      ["Processor", "Intel Core i5-1335U"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel Iris Xe"],
      ["Lebar Layar", '14" WVA'],
      ["Include", "Express Charge"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "acer-nitro-v15",
    name: "Acer Nitro V15",
    price: 13999000,
    stock: 4,
    specs: [
      ["Processor", "Intel Core i5-13420H"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "RTX 4050 6GB"],
      ["Lebar Layar", '15.6" 144Hz'],
      ["Include", "Cooling Boost"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "asus-zenbook-14-oled",
    name: "Asus Zenbook 14 OLED",
    price: 15999000,
    stock: 2,
    specs: [
      ["Processor", "Intel Core Ultra 5"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 1TB"],
      ["Grafis", "Intel Arc Graphics"],
      ["Lebar Layar", '14" OLED'],
      ["Include", "Office Home"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "hp-victus-15",
    name: "HP Victus 15",
    price: 11999000,
    stock: 5,
    specs: [
      ["Processor", "AMD Ryzen 5 8645HS"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "RTX 3050 6GB"],
      ["Lebar Layar", '15.6" 144Hz'],
      ["Include", "B&O Audio"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "lenovo-loq-15irh8",
    name: "Lenovo LOQ 15IRH8",
    price: 14999000,
    stock: 3,
    specs: [
      ["Processor", "Intel Core i5-12450HX"],
      ["RAM", "24GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "RTX 4050 6GB"],
      ["Lebar Layar", '15.6" 144Hz'],
      ["Include", "Nahimic Audio"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "msi-thin-gf63",
    name: "MSI Thin GF63",
    price: 10999000,
    stock: 5,
    specs: [
      ["Processor", "Intel Core i5-12450H"],
      ["RAM", "8GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "RTX 2050 4GB"],
      ["Lebar Layar", '15.6" 144Hz'],
      ["Include", "Cooler Boost"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "dell-vostro-3520",
    name: "Dell Vostro 3520",
    price: 6999000,
    stock: 10,
    specs: [
      ["Processor", "Intel Core i3-1215U"],
      ["RAM", "8GB"],
      ["Penyimpanan", "SSD 512GB"],
      ["Grafis", "Intel UHD Graphics"],
      ["Lebar Layar", '15.6" FHD'],
      ["Include", "Numeric Keypad"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "acer-swift-go-14",
    name: "Acer Swift Go 14",
    price: 14499000,
    stock: 4,
    specs: [
      ["Processor", "Intel Core Ultra 7"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 1TB"],
      ["Grafis", "Intel Arc Graphics"],
      ["Lebar Layar", '14" OLED'],
      ["Include", "Thunderbolt 4"],
      ["OS", "Windows 11 Home"]
    ]
  },
  {
    id: "asus-br1100",
    name: "Asus BR1100",
    price: 4299000,
    stock: 15,
    specs: [
      ["Processor", "Intel Celeron N4500"],
      ["RAM", "4GB"],
      ["Penyimpanan", "SSD 256GB"],
      ["Grafis", "Intel UHD Graphics"],
      ["Lebar Layar", '11.6" HD'],
      ["Include", "Rugged Design"],
      ["OS", "Windows 11"]
    ]
  },
  {
    id: "lenovo-yoga-slim-7",
    name: "Lenovo Yoga Slim 7",
    price: 16999000,
    stock: 2,
    specs: [
      ["Processor", "AMD Ryzen 7 8845HS"],
      ["RAM", "16GB"],
      ["Penyimpanan", "SSD 1TB"],
      ["Grafis", "AMD Radeon 780M"],
      ["Lebar Layar", '14" OLED'],
      ["Include", "Rapid Charge"],
      ["OS", "Windows 11 Home"]
    ]
  }
];
*/

const storageKey = "central-computer-products";
const authStorageKey = "central-computer-dashboard-auth";
const exportStateKey = "central-computer-export-state";
const exportSettingsKey = "central-computer-export-settings";
const offlineAdminUsername = "admin";
const offlineAdminPassword = "cencom99";
const remoteConfigEndpoint = "/api/config";
const remoteProductsEndpoint = "/api/products";
const remoteResetEndpoint = "/api/reset-products";
const remoteLoginEndpoint = "/api/admin-login";
const remoteLogoutEndpoint = "/api/admin-logout";
const remoteSessionEndpoint = "/api/admin-session";
const remoteExportPreferencesEndpoint = "/api/export-preferences";
const productList = document.getElementById("productList");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const infoStoreButton = document.getElementById("infoStoreButton");
const contactButton = document.getElementById("contactButton");
const resetDataButton = document.getElementById("resetDataButton");
const productForm = document.getElementById("productForm");
const productIdInput = document.getElementById("productId");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productStockInput = document.getElementById("productStock");
const productTypeInput = document.getElementById("productType");
const productCategoryInput = document.getElementById("productCategory");
const productDescriptionInput = document.getElementById("productDescription");
const descriptionField = document.getElementById("descriptionField");
const productFeatureInput = document.getElementById("productFeature");
const featureField = document.getElementById("featureField");
const specEditorSection = document.getElementById("specEditorSection");
const productImageField = document.getElementById("productImageField");
const productImageInput = document.getElementById("productImageInput");
const productImagePreview = document.getElementById("productImagePreview");
const clearProductImageButton = document.getElementById("clearProductImageButton");
const catalogCategoryStrip = document.querySelector(".catalog-category-strip");
const catalogCategoryButtons = document.querySelectorAll(".catalog-category-chip[data-product-type]");
const specFields = document.getElementById("specFields");
const addSpecButton = document.getElementById("addSpecButton");
const cancelEditButton = document.getElementById("cancelEditButton");
const dashboardList = document.getElementById("dashboardList");
const dashboardPagination = document.getElementById("dashboardPagination");
const productCountBadge = document.getElementById("productCountBadge");
const dashboardSearchInput = document.getElementById("dashboardSearchInput");
const exportSelectionCount = document.getElementById("exportSelectionCount");
const selectAllProductsCheckbox = document.getElementById("selectAllProductsCheckbox");
const selectFilteredButton = document.getElementById("selectFilteredButton");
const clearSelectionButton = document.getElementById("clearSelectionButton");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const loginForm = document.getElementById("loginForm");
const loginUsernameInput = document.getElementById("loginUsername");
const loginPasswordInput = document.getElementById("loginPassword");
const logoutButton = document.getElementById("logoutButton");
const exportGuard = document.getElementById("exportGuard");
const exportWorkspace = document.getElementById("exportWorkspace");
const resetExportOrderButton = document.getElementById("resetExportOrderButton");
const printPdfButton = document.getElementById("printPdfButton");
const exportSettingsForm = document.getElementById("exportSettingsForm");
const exportPageSelect = document.getElementById("exportPageSelect");
const exportStoreNameInput = document.getElementById("exportStoreName");
const exportAddressLine1Input = document.getElementById("exportAddressLine1");
const exportAddressLine2Input = document.getElementById("exportAddressLine2");
const exportPhoneInput = document.getElementById("exportPhone");
const exportNoteInput = document.getElementById("exportNote");
const exportLogoInput = document.getElementById("exportLogoInput");
const clearExportLogoButton = document.getElementById("clearExportLogoButton");
const exportPreview = document.getElementById("exportPreview");
const exportPreviewPagination = document.getElementById("exportPreviewPagination");
const exportSelectionSummary = document.getElementById("exportSelectionSummary");
const exportSelectedBrands = document.getElementById("exportSelectedBrands");

const currencyFormatter = new Intl.NumberFormat("id-ID");
const productTypes = ["Laptop", "Printer", "Monitor", "Komputer", "Proyektor"];
const descriptionProductTypes = new Set(["Printer", "Monitor", "Proyektor"]);
const featureProductTypes = new Set(["Printer", "Monitor", "Proyektor"]);
const imageProductTypes = new Set(["Printer", "Monitor", "Komputer", "Proyektor"]);
const maxProductImageBytes = 2 * 1024 * 1024;
const itemsPerPage = 10;
const dashboardItemsPerPage = 6;
const exportItemsPerPage = 12;
const exportPortraitItemsPerPage = 6;
const defaultSpecTemplate = [
  ["Processor", ""],
  ["RAM", ""],
  ["Penyimpanan", ""],
  ["Grafis", ""],
  ["Lebar Layar", ""],
  ["Include", ""],
  ["OS", ""]
];
const brandThemes = {
  ACER: {
    accent: "#83B81A",
    accentDark: "#5F8F10",
    accentSoft: "rgba(131, 184, 26, 0.12)"
  },
  AXIOO: {
    accent: "#F59E0B",
    accentDark: "#B45309",
    accentSoft: "rgba(245, 158, 11, 0.12)"
  },
  INFINIX: {
    accent: "#00A651",
    accentDark: "#0B7A3D",
    accentSoft: "rgba(0, 166, 81, 0.12)"
  },
  LENOVO: {
    accent: "#E42022",
    accentDark: "#B81719",
    accentSoft: "rgba(228, 32, 34, 0.12)"
  },
  ASUS: {
    accent: "#00529C",
    accentDark: "#003A70",
    accentSoft: "rgba(0, 82, 156, 0.12)"
  },
  HP: {
    accent: "#7B2CBF",
    accentDark: "#5A189A",
    accentSoft: "rgba(123, 44, 191, 0.12)"
  },
  DELL: {
    accent: "#F97316",
    accentDark: "#C2410C",
    accentSoft: "rgba(249, 115, 22, 0.12)"
  },
  MSI: {
    accent: "#111111",
    accentDark: "#111111",
    accentSoft: "rgba(17, 17, 17, 0.12)"
  }
};
const categoryThemes = {
  Gaming: {
    accent: "#E42022",
    soft: "rgba(228, 32, 34, 0.12)"
  },
  Office: {
    accent: "#00529C",
    soft: "rgba(0, 82, 156, 0.12)"
  },
  Kuliahan: {
    accent: "#1F8A4D",
    soft: "rgba(31, 138, 77, 0.12)"
  }
};
const defaultExportSettings = {
  logoImage: "logocencom.png",
  storeName: "TOKO CENTRAL COMPUTER",
  addressLine1: "JALAN YOHANA GODANG",
  addressLine2: "SINGKAWANG",
  phone: "TELP(0562) 638832 081223349983",
  note: "",
  customImagesByPage: {
    "1": ["", "", ""]
  }
};

let products = loadProducts();
let filteredProducts = [...products];
let currentPage = 1;
let dashboardCurrentPage = 1;
let exportPreviewPage = 1;
let isDashboardReady = false;
let searchDebounceTimer;
let dashboardSearchDebounceTimer;
let exportState = loadExportState();
let exportSettings = loadExportSettings();
let dataMode = "local";
let supabaseClient = null;
let supabaseProductsChannel = null;
let remoteAuthenticated = false;
let activeExportPage = 1;
let draggedExportProductId = "";
let draggedExportElement = null;
let currentDropMode = "";
let pendingExportTransitionRects = null;
let draggedBrandName = "";
let currentBrandDropMode = "";
let exportPreferencesSaveTimer = null;
let isApplyingRemoteExportPreferences = false;
let activeCatalogProductType = "Laptop";
let pendingProductImageData = "";

function normalizeProductType(value) {
  return productTypes.includes(value) ? value : "Laptop";
}

function usesDescriptionField(productType) {
  return descriptionProductTypes.has(normalizeProductType(productType));
}

function usesFeatureField(productType) {
  return featureProductTypes.has(normalizeProductType(productType));
}

function supportsProductImage(productType) {
  return imageProductTypes.has(normalizeProductType(productType));
}

function createId() {
  return `product-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function cloneProducts(items) {
  return items.map((product) => ({
    ...product,
    stock: Number(product.stock) || 0,
    productType: normalizeProductType(product.productType),
    category: product.category || "Office",
    description: String(product.description || ""),
    feature: String(product.feature || ""),
    imageData: String(product.imageData || product.image_data || ""),
    specs: product.specs.map(([key, value]) => [key, value])
  }));
}

function loadProducts() {
  const savedProducts = localStorage.getItem(storageKey);

  if (!savedProducts) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedProducts);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map((product) => ({
      id: product.id || createId(),
      name: product.name || "",
      price: Number(product.price) || 0,
      stock: Number(product.stock) || 0,
      productType: normalizeProductType(product.productType),
      category: product.category || "Office",
      description: String(product.description || ""),
      feature: String(product.feature || ""),
      imageData: String(product.imageData || ""),
      specs: Array.isArray(product.specs) ? product.specs : []
    }));
  } catch (error) {
    return [];
  }
}

function saveProducts() {
  localStorage.setItem(storageKey, JSON.stringify(products));
}

function loadExportState() {
  const savedState = localStorage.getItem(exportStateKey);

  if (!savedState) {
    return { selectedProductIds: [], manualOrder: false };
  }

  try {
    const parsed = JSON.parse(savedState);
    return {
      selectedProductIds: Array.isArray(parsed.selectedProductIds)
        ? parsed.selectedProductIds
        : [],
      manualOrder: Boolean(parsed.manualOrder)
    };
  } catch (error) {
    return { selectedProductIds: [], manualOrder: false };
  }
}

function saveExportState(options = {}) {
  localStorage.setItem(exportStateKey, JSON.stringify(exportState));

  if (options.remote !== false) {
    queueRemoteExportPreferencesSave();
  }
}

function loadExportSettings() {
  const savedSettings = localStorage.getItem(exportSettingsKey);

  if (!savedSettings) {
    return { ...defaultExportSettings };
  }

  try {
    const parsed = JSON.parse(savedSettings);
    return {
      ...defaultExportSettings,
      ...parsed,
      logoImage: parsed.logoImage || defaultExportSettings.logoImage,
      customImagesByPage: normalizeCustomImagesByPage(parsed)
    };
  } catch (error) {
    return { ...defaultExportSettings };
  }
}

function saveExportSettings(options = {}) {
  localStorage.setItem(exportSettingsKey, JSON.stringify(exportSettings));

  if (options.remote !== false) {
    queueRemoteExportPreferencesSave();
  }
}

function isRemoteDataMode() {
  return dataMode === "remote";
}

function normalizeProductRecord(product) {
  return {
    id: product.id || createId(),
    name: product.name || "",
    price: Number(product.price) || 0,
    stock: Number(product.stock) || 0,
    productType: normalizeProductType(product.productType || product.product_type),
    category: product.category || "Office",
    description: String(product.description || ""),
    feature: String(product.feature || ""),
    imageData: String(product.imageData || product.image_data || ""),
    specs: Array.isArray(product.specs)
      ? product.specs
          .map((entry) => (Array.isArray(entry) ? [String(entry[0] ?? ""), String(entry[1] ?? "")] : null))
          .filter(Boolean)
      : []
  };
}

async function readJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json()
    : { error: await response.text() };

  if (!response.ok) {
    throw new Error(payload.error || "Permintaan ke server gagal.");
  }

  return payload;
}

async function fetchApiJson(url, options = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  return readJsonResponse(response);
}

async function fetchRemoteConfig() {
  try {
    return await fetchApiJson(remoteConfigEndpoint, { method: "GET" });
  } catch (error) {
    return { enabled: false, supabaseUrl: "", supabaseAnonKey: "" };
  }
}

async function refreshRemoteAuthState() {
  if (!isRemoteDataMode()) {
    remoteAuthenticated = false;
    return false;
  }

  try {
    const payload = await fetchApiJson(remoteSessionEndpoint, { method: "GET" });
    remoteAuthenticated = Boolean(payload.authenticated);
  } catch (error) {
    remoteAuthenticated = false;
  }

  return remoteAuthenticated;
}

async function loadProductsFromRemote() {
  const payload = await fetchApiJson(remoteProductsEndpoint, { method: "GET" });
  const remoteProducts = Array.isArray(payload.products)
    ? payload.products.map(normalizeProductRecord)
    : [];

  products = remoteProducts;
  saveProducts();
  syncExportSelection();
  syncCatalog();
}

function subscribeToRemoteProducts() {
  if (!supabaseClient) {
    return;
  }

  if (supabaseProductsChannel) {
    supabaseClient.removeChannel(supabaseProductsChannel);
  }

  supabaseProductsChannel = supabaseClient
    .channel("public-products-live")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "products"
      },
      () => {
        loadProductsFromRemote().catch(() => {});
      }
    )
    .subscribe();
}

async function initializeRemoteData() {
  const remoteConfig = await fetchRemoteConfig();

  if (
    !remoteConfig.enabled ||
    !remoteConfig.supabaseUrl ||
    !remoteConfig.supabaseAnonKey ||
    !window.supabase?.createClient
  ) {
    dataMode = "local";
    return false;
  }

  supabaseClient = window.supabase.createClient(
    remoteConfig.supabaseUrl,
    remoteConfig.supabaseAnonKey
  );
  dataMode = "remote";

  await Promise.all([loadProductsFromRemote(), refreshRemoteAuthState()]);
  if (remoteAuthenticated) {
    await loadRemoteExportPreferences();
  }
  subscribeToRemoteProducts();
  return true;
}

async function createRemoteProduct(product) {
  await fetchApiJson(remoteProductsEndpoint, {
    method: "POST",
    body: JSON.stringify({ product })
  });
}

async function updateRemoteProduct(product) {
  await fetchApiJson(remoteProductsEndpoint, {
    method: "PUT",
    body: JSON.stringify({ product })
  });
}

async function deleteRemoteProduct(productId) {
  await fetchApiJson(`${remoteProductsEndpoint}?id=${encodeURIComponent(productId)}`, {
    method: "DELETE"
  });
}

async function resetRemoteProducts(items) {
  await fetchApiJson(remoteResetEndpoint, {
    method: "POST",
    body: JSON.stringify({ products: cloneProducts(items) })
  });
}

function normalizeExportStateRecord(state) {
  const nextState = state && typeof state === "object" ? state : {};

  return {
    selectedProductIds: Array.isArray(nextState.selectedProductIds)
      ? nextState.selectedProductIds.map((id) => String(id || "").trim()).filter(Boolean)
      : [],
    manualOrder: Boolean(nextState.manualOrder)
  };
}

function normalizeExportSettingsRecord(settings) {
  const nextSettings = settings && typeof settings === "object" ? settings : {};

  return {
    ...defaultExportSettings,
    ...nextSettings,
    logoImage: nextSettings.logoImage || defaultExportSettings.logoImage,
    storeName: nextSettings.storeName || defaultExportSettings.storeName,
    addressLine1: nextSettings.addressLine1 || defaultExportSettings.addressLine1,
    addressLine2: nextSettings.addressLine2 || defaultExportSettings.addressLine2,
    phone: nextSettings.phone || defaultExportSettings.phone,
    note: nextSettings.note || "",
    customImagesByPage: normalizeCustomImagesByPage(nextSettings)
  };
}

async function loadRemoteExportPreferences() {
  if (!isRemoteDataMode() || !remoteAuthenticated) {
    return false;
  }

  const payload = await fetchApiJson(remoteExportPreferencesEndpoint, { method: "GET" });
  isApplyingRemoteExportPreferences = true;

  try {
    exportSettings = normalizeExportSettingsRecord(payload.settings);
    exportState = normalizeExportStateRecord(payload.state);
    saveExportSettings({ remote: false });
    saveExportState({ remote: false });
    syncExportSelection();
  } finally {
    isApplyingRemoteExportPreferences = false;
  }

  return true;
}

function queueRemoteExportPreferencesSave() {
  if (!isRemoteDataMode() || !remoteAuthenticated || isApplyingRemoteExportPreferences) {
    return;
  }

  if (exportPreferencesSaveTimer) {
    window.clearTimeout(exportPreferencesSaveTimer);
  }

  exportPreferencesSaveTimer = window.setTimeout(async () => {
    exportPreferencesSaveTimer = null;

    if (!isRemoteDataMode() || !remoteAuthenticated) {
      return;
    }

    try {
      await fetchApiJson(remoteExportPreferencesEndpoint, {
        method: "PUT",
        body: JSON.stringify({
          settings: exportSettings,
          state: exportState
        })
      });
    } catch (error) {
      // Keep local state as fallback if autosave to server fails.
    }
  }, 500);
}

function normalizeCustomImagesByPage(parsed) {
  const legacyImages = Array.isArray(parsed?.customImages) ? parsed.customImages : null;
  const rawPages = parsed?.customImagesByPage && typeof parsed.customImagesByPage === "object"
    ? parsed.customImagesByPage
    : null;

  if (rawPages) {
    return Object.fromEntries(
      Object.entries(rawPages).map(([page, images]) => [
        page,
        Array.isArray(images)
          ? Array.from({ length: 3 }, (_, index) => images[index] || "")
          : ["", "", ""]
      ])
    );
  }

  if (legacyImages) {
    return {
      "1": Array.from({ length: 3 }, (_, index) => legacyImages[index] || "")
    };
  }

  return { "1": ["", "", ""] };
}

function ensurePageCustomImages(pageNumber) {
  const pageKey = String(pageNumber);

  if (!exportSettings.customImagesByPage[pageKey]) {
    exportSettings.customImagesByPage[pageKey] = ["", "", ""];
  }

  return exportSettings.customImagesByPage[pageKey];
}

function getActivePageCustomImages() {
  return ensurePageCustomImages(activeExportPage);
}

function syncExportSelection() {
  const validIds = new Set(products.map((product) => product.id));
  exportState.selectedProductIds = exportState.selectedProductIds.filter((id) => validIds.has(id));
  saveExportState();
}

function isProductSelected(productId) {
  return exportState.selectedProductIds.includes(productId);
}

function toggleProductSelection(productId, checked) {
  if (checked) {
    if (!exportState.selectedProductIds.includes(productId)) {
      exportState.selectedProductIds.push(productId);
    }
  } else {
    exportState.selectedProductIds = exportState.selectedProductIds.filter((id) => id !== productId);
  }

  if (!exportState.manualOrder) {
    exportState.selectedProductIds = sortProductIdsByBrandAndName(exportState.selectedProductIds);
  }
  saveExportState();
}

function compareProductsByBrandAndName(left, right) {
  const leftBrand = getBrandName(left);
  const rightBrand = getBrandName(right);

  if (leftBrand !== rightBrand) {
    return leftBrand.localeCompare(rightBrand, "id-ID");
  }

  return left.name.localeCompare(right.name, "id-ID");
}

function sortProductIdsByBrandAndName(productIds) {
  return productIds
    .map((productId) => findProduct(productId))
    .filter(Boolean)
    .sort(compareProductsByBrandAndName)
    .map((product) => product.id);
}

function getBrandName(product) {
  return String(product.name || "")
    .trim()
    .split(/\s+/)[0]
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase() || "LAINNYA";
}

function getBrandTheme(product) {
  return brandThemes[getBrandName(product)] || {
    accent: "#1949c8",
    accentDark: "#15399d",
    accentSoft: "rgba(25, 73, 200, 0.12)"
  };
}

function getCategoryTheme(category) {
  return categoryThemes[category] || {
    accent: "#1949c8",
    soft: "rgba(25, 73, 200, 0.12)"
  };
}

function getFilteredDashboardProducts() {
  const keyword = dashboardSearchInput ? dashboardSearchInput.value.trim().toLowerCase() : "";

    return products.filter((product) => {
      const haystack = [
        product.name,
        normalizeProductType(product.productType),
        `stok ${product.stock}`,
        product.category,
        product.description || "",
        product.feature || "",
        getBrandName(product),
        ...product.specs.flat()
      ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword);
  });
}

function getSelectedExportProducts() {
  const selectedProducts = exportState.selectedProductIds
    .map((productId) => findProduct(productId))
    .filter(Boolean);

  if (!exportState.manualOrder) {
    return [...selectedProducts].sort(compareProductsByBrandAndName);
  }

  return selectedProducts;
}

function getSelectedBrandOrder() {
  const selectedProducts = getSelectedExportProducts();
  return Array.from(new Set(selectedProducts.map((product) => getBrandName(product))));
}

function reorderBrandGroup(draggedBrand, targetBrand) {
  if (!draggedBrand || !targetBrand || draggedBrand === targetBrand) {
    return;
  }

  const selectedProducts = exportState.selectedProductIds
    .map((productId) => findProduct(productId))
    .filter(Boolean);

  const groupedProducts = selectedProducts.reduce((map, product) => {
    const brand = getBrandName(product);

    if (!map.has(brand)) {
      map.set(brand, []);
    }

    map.get(brand).push(product);
    return map;
  }, new Map());

  const brandOrder = Array.from(groupedProducts.keys());
  const draggedIndex = brandOrder.indexOf(draggedBrand);
  const targetIndex = brandOrder.indexOf(targetBrand);

  if (draggedIndex === -1 || targetIndex === -1) {
    return;
  }

  brandOrder.splice(draggedIndex, 1);
  brandOrder.splice(targetIndex, 0, draggedBrand);

  exportState.selectedProductIds = brandOrder.flatMap((brand) =>
    (groupedProducts.get(brand) || []).map((product) => product.id)
  );
  exportState.manualOrder = true;
  saveExportState();
}

function moveBrandGroupAfter(draggedBrand, targetBrand) {
  if (!draggedBrand || !targetBrand || draggedBrand === targetBrand) {
    return;
  }

  const selectedProducts = exportState.selectedProductIds
    .map((productId) => findProduct(productId))
    .filter(Boolean);

  const groupedProducts = selectedProducts.reduce((map, product) => {
    const brand = getBrandName(product);

    if (!map.has(brand)) {
      map.set(brand, []);
    }

    map.get(brand).push(product);
    return map;
  }, new Map());

  const brandOrder = Array.from(groupedProducts.keys());
  const draggedIndex = brandOrder.indexOf(draggedBrand);
  const targetIndex = brandOrder.indexOf(targetBrand);

  if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) {
    return;
  }

  brandOrder.splice(draggedIndex, 1);
  const nextTargetIndex = brandOrder.indexOf(targetBrand);
  brandOrder.splice(nextTargetIndex + 1, 0, draggedBrand);

  exportState.selectedProductIds = brandOrder.flatMap((brand) =>
    (groupedProducts.get(brand) || []).map((product) => product.id)
  );
  exportState.manualOrder = true;
  saveExportState();
}

function swapBrandGroup(firstBrand, secondBrand) {
  if (!firstBrand || !secondBrand || firstBrand === secondBrand) {
    return;
  }

  const selectedProducts = exportState.selectedProductIds
    .map((productId) => findProduct(productId))
    .filter(Boolean);

  const groupedProducts = selectedProducts.reduce((map, product) => {
    const brand = getBrandName(product);

    if (!map.has(brand)) {
      map.set(brand, []);
    }

    map.get(brand).push(product);
    return map;
  }, new Map());

  const brandOrder = Array.from(groupedProducts.keys());
  const firstIndex = brandOrder.indexOf(firstBrand);
  const secondIndex = brandOrder.indexOf(secondBrand);

  if (firstIndex === -1 || secondIndex === -1 || firstIndex === secondIndex) {
    return;
  }

  [brandOrder[firstIndex], brandOrder[secondIndex]] = [brandOrder[secondIndex], brandOrder[firstIndex]];

  exportState.selectedProductIds = brandOrder.flatMap((brand) =>
    (groupedProducts.get(brand) || []).map((product) => product.id)
  );
  exportState.manualOrder = true;
  saveExportState();
}

function clearBrandDragIndicators() {
  if (!exportSelectedBrands) {
    return;
  }

  exportSelectedBrands.querySelectorAll(".export-brand-chip.drag-target, .export-brand-chip.drag-insert-left, .export-brand-chip.drag-insert-right").forEach((chip) => {
    chip.classList.remove("drag-target", "drag-insert-left", "drag-insert-right");
  });
}

function getExportLayoutType(product) {
  return normalizeProductType(product?.productType) === "Laptop" ? "landscape" : "portrait";
}

function getExportItemsPerSheet(layoutType) {
  return layoutType === "portrait" ? exportPortraitItemsPerPage : exportItemsPerPage;
}

function paginateExportProducts(items) {
  const pages = [];
  let currentPage = null;

  items.forEach((product) => {
    const layoutType = getExportLayoutType(product);
    const capacity = getExportItemsPerSheet(layoutType);

    if (
      !currentPage ||
      currentPage.layoutType !== layoutType ||
      currentPage.items.length >= capacity
    ) {
      currentPage = {
        layoutType,
        items: []
      };
      pages.push(currentPage);
    }

    currentPage.items.push(product);
  });

  return pages;
}

function getPortraitPosterHeadline(items) {
  const normalizedTypes = Array.from(
    new Set(items.map((product) => normalizeProductType(product.productType)))
  );

  if (normalizedTypes.length === 1) {
    return `PRICELIST ${normalizedTypes[0].toUpperCase()}`;
  }

  return "PRICELIST PRODUK";
}

function getPortraitPosterSubheadline(items) {
  const normalizedTypes = Array.from(
    new Set(items.map((product) => normalizeProductType(product.productType)))
  );

  if (!normalizedTypes.length) {
    return "";
  }

  return normalizedTypes.join(" - ");
}

function createExportDescription(description) {
  if (!description) {
    return `
      <div class="export-card-description empty">
        Deskripsi belum tersedia.
      </div>
    `;
  }

  return `
    <div class="export-card-description">
      ${escapeHtml(description).replace(/\n/g, "<br>")}
    </div>
  `;
}

function formatPrice(value) {
  return `Rp ${currencyFormatter.format(value)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createSpecs(specs) {
  return specs
    .map(
      ([key, value]) => `
        <div class="spec-row">
          <div class="spec-key">${escapeHtml(key)}</div>
          <div class="spec-colon">:</div>
          <div class="spec-value" title="${escapeHtml(value)}">${escapeHtml(value)}</div>
        </div>
      `
    )
    .join("");
}

function createDescriptionBlock(description) {
  if (!description) {
    return `
      <div class="product-description empty">
        Deskripsi produk belum tersedia.
      </div>
    `;
  }

  return `
    <div class="product-description">
      ${escapeHtml(description).replace(/\n/g, "<br>")}
    </div>
  `;
}

function createFeatureBlock(feature) {
  if (!feature) {
    return "";
  }

  return `
    <div class="product-feature">
      ${escapeHtml(feature).replace(/\n/g, "<br>")}
    </div>
  `;
}

function createExportFeatureBlock(feature) {
  if (!feature) {
    return "";
  }

  return `
    <div class="export-card-feature">
      ${escapeHtml(feature).replace(/\n/g, "<br>")}
    </div>
  `;
}

function createSpecField(key = "", value = "") {
  return `
    <div class="spec-field-row">
      <input
        type="text"
        class="form-control spec-key-input"
        placeholder="Label spesifikasi"
        value="${escapeHtml(key)}"
        required
      >
      <input
        type="text"
        class="form-control spec-value-input"
        placeholder="Isi spesifikasi"
        value="${escapeHtml(value)}"
        required
      >
      <button class="btn btn-outline-dark remove-spec-button" type="button">Hapus</button>
    </div>
  `;
}

function renderProductImagePreview() {
  if (!productImagePreview) {
    return;
  }

  if (!pendingProductImageData) {
    productImagePreview.classList.add("d-none");
    productImagePreview.innerHTML = "";
    return;
  }

  productImagePreview.classList.remove("d-none");
  productImagePreview.innerHTML = `
    <img src="${pendingProductImageData}" alt="Preview gambar produk" class="product-image-preview-img">
  `;
}

function updateProductEditorMode() {
  const currentType = normalizeProductType(productTypeInput?.value);
  const shouldUseDescription = usesDescriptionField(currentType);
  const shouldUseFeature = usesFeatureField(currentType);
  const shouldShowImage = supportsProductImage(currentType);

  if (specEditorSection) {
    specEditorSection.classList.toggle("d-none", shouldUseDescription);
  }

  if (descriptionField) {
    descriptionField.classList.toggle("d-none", !shouldUseDescription);
  }

  if (specFields) {
    specFields.querySelectorAll("input, textarea, button").forEach((element) => {
      element.disabled = shouldUseDescription;
    });
  }

  if (productDescriptionInput) {
    productDescriptionInput.disabled = !shouldUseDescription;
  }

  if (featureField) {
    featureField.classList.toggle("d-none", !shouldUseFeature);
  }

  if (productFeatureInput) {
    productFeatureInput.disabled = !shouldUseFeature;
  }

  if (productImageField) {
    productImageField.classList.toggle("d-none", !shouldShowImage);
  }

  if (productImageInput) {
    productImageInput.disabled = !shouldShowImage;
  }

  if (clearProductImageButton) {
    clearProductImageButton.disabled = !shouldShowImage;
  }

  if (!shouldShowImage) {
    pendingProductImageData = "";
    if (productImageInput) {
      productImageInput.value = "";
    }
    renderProductImagePreview();
  }
}

function handleProductImageUpload(file) {
  if (!file) {
    return;
  }

  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
    Swal.fire({
      title: "Format gambar belum didukung",
      text: "Gunakan file PNG, JPG/JPEG, atau WEBP.",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
    return;
  }

  if (file.size > maxProductImageBytes) {
    Swal.fire({
      title: "Ukuran gambar terlalu besar",
      text: "Ukuran maksimal gambar produk adalah 2MB.",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    pendingProductImageData = String(reader.result);
    renderProductImagePreview();
  };
  reader.readAsDataURL(file);
}

function renderSpecFields(specs = defaultSpecTemplate) {
  if (!specFields) {
    return;
  }

  specFields.innerHTML = specs.map(([key, value]) => createSpecField(key, value)).join("");
}

function getFormSpecs() {
  if (!specFields) {
    return [];
  }

  const rows = specFields.querySelectorAll(".spec-field-row");

  return Array.from(rows)
    .map((row) => {
      const key = row.querySelector(".spec-key-input").value.trim();
      const value = row.querySelector(".spec-value-input").value.trim();

      return [key, value];
    })
    .filter(([key, value]) => key && value);
}

function resetForm() {
  if (!productForm) {
    return;
  }

  productForm.reset();
  productIdInput.value = "";
  if (productStockInput) {
    productStockInput.value = "0";
  }
  if (productTypeInput) {
    productTypeInput.value = "Laptop";
  }
  if (productCategoryInput) {
    productCategoryInput.value = "Office";
  }
  if (productDescriptionInput) {
    productDescriptionInput.value = "";
  }
  if (productFeatureInput) {
    productFeatureInput.value = "";
  }
  pendingProductImageData = "";
  if (productImageInput) {
    productImageInput.value = "";
  }
  renderProductImagePreview();
  renderSpecFields();
  updateProductEditorMode();
}

function startEditProduct(productId) {
  if (!productForm || !productIdInput || !productNameInput || !productPriceInput || !productStockInput || !productTypeInput || !productCategoryInput) {
    return;
  }

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  productIdInput.value = product.id;
  productNameInput.value = product.name;
  productPriceInput.value = product.price;
  productStockInput.value = product.stock;
  productTypeInput.value = normalizeProductType(product.productType);
  productCategoryInput.value = product.category;
  if (productDescriptionInput) {
    productDescriptionInput.value = product.description || "";
  }
  if (productFeatureInput) {
    productFeatureInput.value = product.feature || "";
  }
  pendingProductImageData = String(product.imageData || "");
  renderProductImagePreview();
  renderSpecFields(product.specs);
  updateProductEditorMode();
  productForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteProduct(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  Swal.fire({
    title: "Hapus produk?",
    text: `Produk ${product.name} akan dihapus dari katalog.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal",
    confirmButtonColor: "#ca1111"
  }).then(async (result) => {
    if (!result.isConfirmed) {
      return;
    }

    try {
      if (isRemoteDataMode()) {
        await deleteRemoteProduct(productId);
        await loadProductsFromRemote();
      } else {
        products = products.filter((item) => item.id !== productId);
        saveProducts();
      }
    } catch (error) {
      Swal.fire({
        title: "Gagal menghapus produk",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
        confirmButtonColor: "#ca1111"
      });
      return;
    }

    dashboardCurrentPage = 1;
    syncCatalog();

    Swal.fire({
      title: "Produk dihapus",
      icon: "success",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
  });
}

function renderDashboardList() {
  if (!dashboardList || !productCountBadge || !dashboardPagination) {
    return;
  }

  const filteredDashboardProducts = getFilteredDashboardProducts();

  productCountBadge.textContent = `${filteredDashboardProducts.length} Produk`;
  if (exportSelectionCount) {
    exportSelectionCount.textContent = `${exportState.selectedProductIds.length} Dipilih`;
  }
  if (selectAllProductsCheckbox) {
    const allSelected = products.length > 0 && exportState.selectedProductIds.length === products.length;
    selectAllProductsCheckbox.checked = allSelected;
    selectAllProductsCheckbox.indeterminate = !allSelected && exportState.selectedProductIds.length > 0;
  }

  if (!filteredDashboardProducts.length) {
    dashboardList.innerHTML = `
      <div class="dashboard-empty">
        <h3 class="mb-2">Produk tidak ditemukan</h3>
        <p class="mb-0">Coba kata kunci lain untuk nama, stok, atau spesifikasi.</p>
      </div>
    `;
    dashboardPagination.innerHTML = "";
    return;
  }

  const totalPages = Math.ceil(filteredDashboardProducts.length / dashboardItemsPerPage);

  if (dashboardCurrentPage > totalPages) {
    dashboardCurrentPage = totalPages;
  }

  const startIndex = (dashboardCurrentPage - 1) * dashboardItemsPerPage;
  const visibleDashboardItems = filteredDashboardProducts.slice(
    startIndex,
    startIndex + dashboardItemsPerPage
  );

  dashboardList.innerHTML = visibleDashboardItems
    .map(
      (product) => `
        <article class="dashboard-item">
          <div>
            <h4 class="dashboard-item-title">${escapeHtml(product.name)}</h4>
            <p class="dashboard-item-price">${formatPrice(product.price)}</p>
            <p class="dashboard-item-meta mb-0">Jenis ${escapeHtml(normalizeProductType(product.productType))} | Kategori ${escapeHtml(product.category)} | Stok ${product.stock} | ${
              usesDescriptionField(product.productType)
                ? "Deskripsi produk"
                : `${product.specs.length} spesifikasi`
            }</p>
          </div>
          <div class="dashboard-item-actions">
            <label class="dashboard-select-toggle">
              <input
                type="checkbox"
                class="form-check-input"
                data-select-id="${product.id}"
                ${isProductSelected(product.id) ? "checked" : ""}
              >
              <span>Pilih Export</span>
            </label>
            <button class="btn btn-danger dashboard-action-button" type="button" data-edit-id="${product.id}">
              Edit
            </button>
            <button class="btn btn-outline-dark dashboard-action-button" type="button" data-delete-id="${product.id}">
              Hapus
            </button>
          </div>
        </article>
      `
    )
    .join("");

  renderDashboardPagination(filteredDashboardProducts.length);
}

function renderDashboardPagination(totalItems) {
  if (!dashboardPagination) {
    return;
  }

  const totalPages = Math.ceil(totalItems / dashboardItemsPerPage);

  if (totalPages <= 1) {
    dashboardPagination.innerHTML = "";
    return;
  }

  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return `
      <button
        class="btn pagination-btn ${page === dashboardCurrentPage ? "active" : ""}"
        type="button"
        data-dashboard-page="${page}"
        aria-current="${page === dashboardCurrentPage ? "page" : "false"}"
      >
        ${page}
      </button>
    `;
  }).join("");

  dashboardPagination.innerHTML = `
    <div class="pagination-controls">
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-dashboard-page="${dashboardCurrentPage - 1}"
        ${dashboardCurrentPage === 1 ? "disabled" : ""}
      >
        Sebelumnya
      </button>
      <div class="pagination-pages">${pageButtons}</div>
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-dashboard-page="${dashboardCurrentPage + 1}"
        ${dashboardCurrentPage === totalPages ? "disabled" : ""}
      >
        Berikutnya
      </button>
    </div>
  `;
}

function renderPagination(totalItems) {
  if (!pagination) {
    return;
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return `
      <button
        class="btn pagination-btn ${page === currentPage ? "active" : ""}"
        type="button"
        data-page="${page}"
        aria-current="${page === currentPage ? "page" : "false"}"
      >
        ${page}
      </button>
    `;
  }).join("");

  pagination.innerHTML = `
    <div class="pagination-controls">
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-page="${currentPage - 1}"
        ${currentPage === 1 ? "disabled" : ""}
      >
        Sebelumnya
      </button>
      <div class="pagination-pages">${pageButtons}</div>
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-page="${currentPage + 1}"
        ${currentPage === totalPages ? "disabled" : ""}
      >
        Berikutnya
      </button>
    </div>
  `;
}

function renderProducts(items) {
  if (!productList) {
    return;
  }

  if (!items.length) {
    productList.innerHTML = `
      <div class="col-12">
        <div class="product-empty">
          <h3 class="mb-2">Produk tidak ditemukan</h3>
          <p class="mb-0">Coba kata kunci lain seperti merek, tipe, atau spesifikasi.</p>
        </div>
      </div>
    `;
    pagination.innerHTML = "";
    return;
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  productList.innerHTML = visibleItems
    .map(
      (product) => {
        const brandTheme = getBrandTheme(product);
        const categoryTheme = getCategoryTheme(product.category);
        const normalizedProductType = normalizeProductType(product.productType);
        const shouldUseDescription = usesDescriptionField(normalizedProductType);
        const featureMarkup = usesFeatureField(normalizedProductType)
          ? createFeatureBlock(product.feature)
          : "";
        const imageMarkup = supportsProductImage(normalizedProductType) && product.imageData
          ? `
              <button class="product-media" type="button" onclick="showProductImagePreview('${product.id}')">
                <img src="${product.imageData}" alt="${escapeHtml(product.name)}" class="product-media-image">
              </button>
            `
          : "";

        return `
        <div class="col-12 col-md-6 col-xl-4">
          <article class="product-card-wrap">
            <div
              class="product-card"
              style="--product-accent:${brandTheme.accent}; --product-accent-dark:${brandTheme.accentDark}; --product-accent-soft:${brandTheme.accentSoft};"
            >
              <div class="card-top">
                <div class="logo-mark">
                  <img src="logocencom.png" alt="Logo Central Computer Singkawang" class="logo-mark-image">
                </div>
                <div class="card-top-copy">
                  <h3 class="store-name">Central Computer Singkawang</h3>
                </div>
              </div>

              <h2 class="product-name">${escapeHtml(product.name)}</h2>

              ${imageMarkup}
              ${featureMarkup}

              ${
                shouldUseDescription
                  ? createDescriptionBlock(product.description)
                  : `
                    <div class="spec-list">
                      ${createSpecs(product.specs)}
                    </div>
                  `
              }

              <div class="product-price-row">
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-meta-badges">
                  <span class="product-type-badge">
                    ${escapeHtml(normalizeProductType(product.productType))}
                  </span>
                  <span
                    class="category-badge"
                    style="--category-accent:${categoryTheme.accent}; --category-soft:${categoryTheme.soft};"
                  >
                    ${escapeHtml(product.category)}
                  </span>
                </div>
              </div>

              <div class="card-actions">
                <button class="btn btn-danger flex-fill" type="button" onclick="showOrder('${product.id}')">
                  Pesan Sekarang
                </button>
                <button class="btn btn-outline-dark flex-fill" type="button" onclick="showSpecs('${product.id}')">
                  Detail Produk
                </button>
              </div>
            </div>
          </article>
        </div>
      `;
      }
    )
    .join("");

  renderPagination(items.length);
}

function findProduct(productId) {
  return products.find((product) => product.id === productId);
}

function syncCatalog() {
  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

  filteredProducts = products.filter((product) => {
    const normalizedProductType = normalizeProductType(product.productType);
    const haystack = [
      product.name,
      normalizedProductType,
      `stok ${product.stock}`,
      product.category,
      product.description || "",
      product.feature || "",
      ...product.specs.flat()
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword) && normalizedProductType === activeCatalogProductType;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  currentPage = Math.min(currentPage, totalPages);

  if (isDashboardReady) {
    renderDashboardList();
  }

  renderProducts(filteredProducts);
}

function isAuthenticated() {
  return isRemoteDataMode()
    ? remoteAuthenticated
    : sessionStorage.getItem(authStorageKey) === "true";
}

function setAuthenticated(value) {
  if (isRemoteDataMode()) {
    remoteAuthenticated = Boolean(value);
    return;
  }

  if (value) {
    sessionStorage.setItem(authStorageKey, "true");
    return;
  }

  sessionStorage.removeItem(authStorageKey);
}

function showDashboardState() {
  if (!loginSection || !dashboardSection) {
    return;
  }

  const loggedIn = isAuthenticated();
  loginSection.classList.toggle("d-none", loggedIn);
  dashboardSection.classList.toggle("d-none", !loggedIn);
  isDashboardReady = loggedIn;

  if (loggedIn) {
    resetForm();
    syncCatalog();
    return;
  }

  if (loginForm) {
    loginForm.reset();
  }
}

function updateExportSettingsFromForm() {
  if (!exportSettingsForm) {
    return;
  }

  exportSettings.storeName = exportStoreNameInput.value.trim();
  exportSettings.addressLine1 = exportAddressLine1Input.value.trim();
  exportSettings.addressLine2 = exportAddressLine2Input.value.trim();
  exportSettings.phone = exportPhoneInput.value.trim();
  exportSettings.note = exportNoteInput.value.trim();
  saveExportSettings();
}

function fillExportSettingsForm() {
  if (!exportSettingsForm) {
    return;
  }

  exportStoreNameInput.value = exportSettings.storeName;
  exportAddressLine1Input.value = exportSettings.addressLine1;
  exportAddressLine2Input.value = exportSettings.addressLine2;
  exportPhoneInput.value = exportSettings.phone;
  exportNoteInput.value = exportSettings.note;
}

function fillExportPageSelect(pageCount) {
  if (!exportPageSelect) {
    return;
  }

  const safePageCount = Math.max(1, pageCount);

  if (activeExportPage > safePageCount) {
    activeExportPage = safePageCount;
  }

  exportPageSelect.innerHTML = Array.from({ length: safePageCount }, (_, index) => {
    const page = index + 1;
    return `<option value="${page}" ${page === activeExportPage ? "selected" : ""}>Halaman ${page}</option>`;
  }).join("");
}

function createExportSpecs(specs) {
  return specs
    .map(
      ([key, value]) => `
        <div class="export-spec-row">
          <div class="export-spec-key">${escapeHtml(key)}</div>
          <div class="export-spec-colon">:</div>
          <div class="export-spec-value">${escapeHtml(value)}</div>
        </div>
      `
    )
    .join("");
}

function createPosterSpecRows(specs) {
  return specs
    .slice(0, 4)
    .map(
      ([key, value]) => `
        <div class="export-card-poster-spec-row">
          <span class="export-card-poster-spec-key">${escapeHtml(key)}</span>
          <span class="export-card-poster-spec-value">${escapeHtml(value)}</span>
        </div>
      `
    )
    .join("");
}

function createPosterDescriptionBlock(description) {
  const safeDescription = String(description || "").trim();

  if (!safeDescription) {
    return `
      <div class="export-card-poster-description export-card-poster-description-empty">
        Deskripsi produk akan tampil di sini.
      </div>
    `;
  }

  return `
    <div class="export-card-poster-description">
      ${escapeHtml(safeDescription).replace(/\n/g, "<br>")}
    </div>
  `;
}

function createPosterCaption(product) {
  const normalizedProductType = normalizeProductType(product.productType);
  const pieces = [];

  if (usesFeatureField(normalizedProductType) && product.feature) {
    pieces.push(product.feature);
  }

  if (!usesDescriptionField(normalizedProductType) && Array.isArray(product.specs)) {
    product.specs.slice(0, 2).forEach(([key, value]) => {
      if (key && value) {
        pieces.push(`${key}: ${value}`);
      }
    });
  }

  const combined = pieces.join(" • ").trim();

  if (!combined) {
    return "";
  }

  return `
    <div class="export-card-poster-caption">
      ${escapeHtml(combined).replace(/\n/g, "<br>")}
    </div>
  `;
}

function isPngImageSource(src) {
  const value = String(src || "").trim().toLowerCase();

  if (!value) {
    return false;
  }

  return value.startsWith("data:image/png") || /\.png(\?|#|$)/.test(value);
}

function createExportCard(product, layoutType = "landscape") {
  const brandTheme = getBrandTheme(product);
  const categoryTheme = getCategoryTheme(product.category);
  const normalizedProductType = normalizeProductType(product.productType);
  const shouldUseDescription = usesDescriptionField(normalizedProductType);
  const usesTransparentImage = isPngImageSource(product.imageData);
  const featureMarkup = usesFeatureField(normalizedProductType)
    ? createExportFeatureBlock(product.feature)
    : "";
  const imageMarkup = supportsProductImage(normalizedProductType) && product.imageData
    ? `
        <div class="export-card-media ${usesTransparentImage ? "is-transparent-image" : ""}">
          <img src="${product.imageData}" alt="${escapeHtml(product.name)}" class="export-card-media-image ${usesTransparentImage ? "is-transparent-image" : ""}">
        </div>
      `
    : "";

  if (layoutType === "portrait") {
    const posterImageMarkup = supportsProductImage(normalizedProductType) && product.imageData
      ? `
          <img src="${product.imageData}" alt="${escapeHtml(product.name)}" class="export-card-poster-media-image ${usesTransparentImage ? "is-transparent-image" : ""}">
        `
      : `
          <div class="export-card-poster-media-placeholder">
            ${escapeHtml(getBrandName(product))}
          </div>
        `;
    const posterCaptionMarkup = createPosterCaption(product);

    return `
      <article
        class="export-card export-card-${layoutType} export-card-poster ${usesTransparentImage ? "export-card-poster-transparent-image" : ""}"
        draggable="true"
        data-export-product-id="${product.id}"
        style="--product-accent:${brandTheme.accent}; --product-accent-dark:${brandTheme.accentDark}; --product-accent-soft:${brandTheme.accentSoft}; --category-accent:${categoryTheme.accent}; --category-soft:${categoryTheme.soft};"
      >
        <div class="export-card-poster-hero">
          <div class="export-card-poster-nameplate">
            <div class="export-card-poster-nameplate-title">${escapeHtml(product.name)}</div>
            ${posterCaptionMarkup}
          </div>
          <div class="export-card-poster-media ${usesTransparentImage ? "is-transparent-image" : ""}">
            ${posterImageMarkup}
          </div>
          <div class="export-card-poster-overlay">
            <div class="export-card-poster-badges">
              <div class="export-product-type-badge export-product-type-badge-poster">
                ${escapeHtml(normalizedProductType)}
              </div>
              <div class="export-category-badge export-category-badge-poster">
                ${escapeHtml(product.category)}
              </div>
            </div>
          </div>
          <div class="export-card-poster-bottom">
            <div class="export-card-poster-brandmark">${escapeHtml(getBrandName(product))}</div>
            <div class="export-card-price export-card-price-poster">${formatPrice(product.price)}</div>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article
      class="export-card export-card-${layoutType}"
      draggable="true"
      data-export-product-id="${product.id}"
      style="--product-accent:${brandTheme.accent}; --product-accent-dark:${brandTheme.accentDark}; --product-accent-soft:${brandTheme.accentSoft};"
    >
      <h3 class="export-card-name">${escapeHtml(product.name)}</h3>
      ${imageMarkup}
      ${featureMarkup}
      ${
        shouldUseDescription
          ? ""
          : `
            <div class="export-card-specs">
              ${createExportSpecs(product.specs)}
            </div>
          `
      }
      <div class="export-card-price-row">
        <div class="export-card-price">${formatPrice(product.price)}</div>
        <div class="export-card-badges">
          <div class="export-product-type-badge">
            ${escapeHtml(normalizedProductType)}
          </div>
          <div
            class="export-category-badge"
            style="--category-accent:${categoryTheme.accent}; --category-soft:${categoryTheme.soft};"
          >
            ${escapeHtml(product.category)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function createCustomImageSlot(imageSrc, index) {
  if (imageSrc) {
    const usesTransparentImage = isPngImageSource(imageSrc);
    return `
      <div class="export-custom-box ${usesTransparentImage ? "is-transparent-image" : ""}">
        <img src="${imageSrc}" alt="Gambar Custom ${index + 1}" class="export-custom-image ${usesTransparentImage ? "is-transparent-image" : ""}">
      </div>
    `;
  }
  return "";
}

function renderExportPreviewPagination(totalSheets) {
  if (!exportPreviewPagination) {
    return;
  }

  const totalPages = Math.ceil(totalSheets / 3);

  if (totalPages <= 1) {
    exportPreviewPagination.innerHTML = "";
    return;
  }

  if (exportPreviewPage > totalPages) {
    exportPreviewPage = totalPages;
  }

  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return `
      <button
        class="btn pagination-btn ${page === exportPreviewPage ? "active" : ""}"
        type="button"
        data-export-preview-page="${page}"
        aria-current="${page === exportPreviewPage ? "page" : "false"}"
      >
        ${page}
      </button>
    `;
  }).join("");

  exportPreviewPagination.innerHTML = `
    <div class="pagination-controls">
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-export-preview-page="${exportPreviewPage - 1}"
        ${exportPreviewPage === 1 ? "disabled" : ""}
      >
        Sebelumnya
      </button>
      <div class="pagination-pages">${pageButtons}</div>
      <button
        class="btn pagination-btn pagination-nav"
        type="button"
        data-export-preview-page="${exportPreviewPage + 1}"
        ${exportPreviewPage === totalPages ? "disabled" : ""}
      >
        Berikutnya
      </button>
    </div>
  `;
}

function renderExportPreview() {
  if (!exportPreview || !exportSelectionSummary || !exportSelectedBrands) {
    return;
  }

  syncExportSelection();
  const selectedProducts = getSelectedExportProducts();
  const brands = getSelectedBrandOrder();

  exportSelectionSummary.textContent = `${selectedProducts.length} produk dipilih untuk export PDF.`;
  exportSelectedBrands.innerHTML = brands.length
    ? brands
        .map(
          (brand) => `
            <button
              class="dashboard-count export-brand-chip"
              type="button"
              draggable="true"
              data-brand-chip="${brand}"
            >
              ${escapeHtml(brand)}
            </button>
          `
        )
        .join("")
    : '<span class="dashboard-text">Belum ada produk yang dipilih dari dashboard admin.</span>';

  if (!selectedProducts.length) {
    exportPreview.innerHTML = `
      <article class="dashboard-card export-empty-state">
        <h2 class="dashboard-title">Belum ada produk dipilih</h2>
        <p class="dashboard-text mb-0">
          Kembali ke dashboard admin lalu centang produk yang ingin dimasukkan ke export PDF.
        </p>
      </article>
    `;
    if (exportPreviewPagination) {
      exportPreviewPagination.innerHTML = "";
    }
    return;
  }

  const pages = paginateExportProducts(selectedProducts);
  fillExportPageSelect(pages.length);
  const totalPreviewPages = Math.ceil(pages.length / 3);

  if (exportPreviewPage > totalPreviewPages) {
    exportPreviewPage = totalPreviewPages || 1;
  }

  exportPreview.innerHTML = pages
    .map(
      (page, pageIndex) => `
        <section
          class="export-sheet export-sheet-${page.layoutType} ${page.layoutType === "portrait" ? "export-sheet-pricelist" : ""} ${pageIndex >= (exportPreviewPage - 1) * 3 && pageIndex < exportPreviewPage * 3 ? "" : "export-sheet-hidden"}"
          data-export-sheet-index="${pageIndex + 1}"
        >
          <div class="export-page-number">Halaman ${pageIndex + 1}</div>
          ${(() => {
            const customImagesMarkup = ensurePageCustomImages(pageIndex + 1)
              .map((imageSrc, index) => createCustomImageSlot(imageSrc, index))
              .join("");
            const portraitHeadline = page.layoutType === "portrait"
              ? getPortraitPosterHeadline(page.items)
              : "";
            const portraitSubheadline = page.layoutType === "portrait"
              ? getPortraitPosterSubheadline(page.items)
              : "";

            return `
          <header class="export-sheet-header ${page.layoutType === "portrait" ? "export-sheet-header-pricelist" : ""}">
            <div class="export-sheet-brand">
              <div class="export-sheet-logo ${exportSettings.logoImage ? "has-image" : "is-empty"} ${isPngImageSource(exportSettings.logoImage) ? "is-transparent-image" : ""}">
                ${exportSettings.logoImage ? `<img src="${exportSettings.logoImage}" alt="Logo toko" class="export-sheet-logo-image ${isPngImageSource(exportSettings.logoImage) ? "is-transparent-image" : ""}">` : ""}
              </div>
              <div class="export-sheet-copy">
                <h2>${escapeHtml(exportSettings.storeName)}</h2>
                <p>${escapeHtml(exportSettings.addressLine1)}</p>
                <p>${escapeHtml(exportSettings.addressLine2)}</p>
                <p>${escapeHtml(exportSettings.phone)}</p>
                ${
                  exportSettings.note
                    ? `<p class="export-note">${escapeHtml(exportSettings.note)}</p>`
                    : ""
                }
              </div>
            </div>
            ${
              page.layoutType === "portrait"
                ? `
                  <div class="export-sheet-headline">
                    <h1>${escapeHtml(portraitHeadline)}</h1>
                    ${portraitSubheadline ? `<p>${escapeHtml(portraitSubheadline)}</p>` : ""}
                  </div>
                `
                : ""
            }
            ${customImagesMarkup ? `<div class="export-custom-grid">${customImagesMarkup}</div>` : ""}
          </header>
            `;
          })()}

          <div class="export-sheet-grid-stage ${page.layoutType === "portrait" ? "export-sheet-grid-stage-portrait" : ""}">
            <div class="export-sheet-grid export-sheet-grid-${page.layoutType}">
              ${page.items.map((product) => createExportCard(product, page.layoutType)).join("")}
            </div>
          </div>
        </section>
      `
    )
    .join("");

  applyPortraitExportAutoScale();
  renderExportPreviewPagination(pages.length);

  if (pendingExportTransitionRects) {
    animateExportCards(pendingExportTransitionRects);
    pendingExportTransitionRects = null;
  }
}

function applyPortraitExportAutoScale() {
  if (!exportPreview) {
    return;
  }

  exportPreview.querySelectorAll(".export-sheet-portrait").forEach((sheet) => {
    const stage = sheet.querySelector(".export-sheet-grid-stage-portrait");
    const grid = stage?.querySelector(".export-sheet-grid-portrait");
    const header = sheet.querySelector(".export-sheet-header");

    if (!stage || !grid || !header) {
      return;
    }

    stage.style.removeProperty("--portrait-grid-scale");
    stage.style.removeProperty("--portrait-grid-height");

    const sheetStyles = window.getComputedStyle(sheet);
    const paddingTop = parseFloat(sheetStyles.paddingTop) || 0;
    const paddingBottom = parseFloat(sheetStyles.paddingBottom) || 0;
    const availableHeight = sheet.clientHeight - paddingTop - paddingBottom - header.offsetHeight - 6;

    if (availableHeight <= 0) {
      return;
    }

    const naturalHeight = grid.scrollHeight;

    if (!naturalHeight) {
      return;
    }

    const scale = Math.min(1, Math.max(0.82, availableHeight / naturalHeight));
    stage.style.setProperty("--portrait-grid-scale", String(scale));
    stage.style.setProperty("--portrait-grid-height", `${naturalHeight * scale}px`);
  });
}

function handleCustomImageUpload(index, file) {
  if (!file) {
    return;
  }

  if (!["image/png", "image/jpeg"].includes(file.type)) {
    Swal.fire({
      title: "Format gambar belum didukung",
      text: "Gunakan file PNG atau JPG/JPEG.",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const images = getActivePageCustomImages();
    images[index] = String(reader.result);
    saveExportSettings();
    renderExportPreview();
  };
  reader.readAsDataURL(file);
}

function handleExportLogoUpload(file) {
  if (!file) {
    return;
  }

  if (!["image/png", "image/jpeg"].includes(file.type)) {
    Swal.fire({
      title: "Format logo belum didukung",
      text: "Gunakan file PNG atau JPG/JPEG.",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    exportSettings.logoImage = String(reader.result);
    saveExportSettings();
    renderExportPreview();
  };
  reader.readAsDataURL(file);
}

function showExportPageState() {
  if (!exportGuard || !exportWorkspace) {
    return;
  }

  const loggedIn = isAuthenticated();
  exportGuard.classList.toggle("d-none", loggedIn);
  exportWorkspace.classList.toggle("d-none", !loggedIn);

  if (!loggedIn) {
    return;
  }

  fillExportSettingsForm();
  renderExportPreview();
}

function refreshVisiblePageState() {
  if (loginSection && dashboardSection) {
    showDashboardState();
    return;
  }

  if (exportGuard && exportWorkspace) {
    showExportPageState();
    return;
  }

  syncCatalog();
}

function moveSelectedProductBefore(draggedId, targetId) {
  const nextIds = [...exportState.selectedProductIds];
  const draggedIndex = nextIds.indexOf(draggedId);
  const targetIndex = nextIds.indexOf(targetId);

  if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) {
    return;
  }

  const [draggedIdValue] = nextIds.splice(draggedIndex, 1);
  const nextTargetIndex = nextIds.indexOf(targetId);
  nextIds.splice(nextTargetIndex, 0, draggedIdValue);
  exportState.selectedProductIds = nextIds;
  exportState.manualOrder = true;
  saveExportState();
}

function moveSelectedProductAfter(draggedId, targetId) {
  const nextIds = [...exportState.selectedProductIds];
  const draggedIndex = nextIds.indexOf(draggedId);
  const targetIndex = nextIds.indexOf(targetId);

  if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) {
    return;
  }

  const [draggedIdValue] = nextIds.splice(draggedIndex, 1);
  const nextTargetIndex = nextIds.indexOf(targetId);
  nextIds.splice(nextTargetIndex + 1, 0, draggedIdValue);
  exportState.selectedProductIds = nextIds;
  exportState.manualOrder = true;
  saveExportState();
}

function swapSelectedProducts(firstId, secondId) {
  const nextIds = [...exportState.selectedProductIds];
  const firstIndex = nextIds.indexOf(firstId);
  const secondIndex = nextIds.indexOf(secondId);

  if (firstIndex === -1 || secondIndex === -1 || firstIndex === secondIndex) {
    return;
  }

  [nextIds[firstIndex], nextIds[secondIndex]] = [nextIds[secondIndex], nextIds[firstIndex]];
  exportState.selectedProductIds = nextIds;
  exportState.manualOrder = true;
  saveExportState();
}

function saveExportOrderFromDom() {
  if (!exportPreview) {
    return;
  }

  const orderedIds = Array.from(
    exportPreview.querySelectorAll("[data-export-product-id]")
  ).map((card) => card.dataset.exportProductId);

  if (!orderedIds.length) {
    return;
  }

  exportState.selectedProductIds = orderedIds;
  exportState.manualOrder = true;
  saveExportState();
}

function clearExportDragIndicators() {
  if (!exportPreview) {
    return;
  }

  exportPreview.querySelectorAll(".export-card.drag-target, .export-card.drag-insert-before, .export-card.drag-insert-after, .export-card.drag-insert-left, .export-card.drag-insert-right").forEach((card) => {
    card.classList.remove("drag-target", "drag-insert-before", "drag-insert-after", "drag-insert-left", "drag-insert-right");
  });
}

function captureExportCardRects() {
  if (!exportPreview) {
    return null;
  }

  const rects = new Map();
  exportPreview.querySelectorAll("[data-export-product-id]").forEach((card) => {
    rects.set(card.dataset.exportProductId, card.getBoundingClientRect());
  });
  return rects;
}

function animateExportCards(previousRects) {
  if (!exportPreview || !previousRects) {
    return;
  }

  requestAnimationFrame(() => {
    exportPreview.querySelectorAll("[data-export-product-id]").forEach((card) => {
      const previousRect = previousRects.get(card.dataset.exportProductId);

      if (!previousRect) {
        return;
      }

      const currentRect = card.getBoundingClientRect();
      const deltaX = previousRect.left - currentRect.left;
      const deltaY = previousRect.top - currentRect.top;

      if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
        return;
      }

      card.animate(
        [
          { transform: `translate(${deltaX}px, ${deltaY}px)` },
          { transform: "translate(0, 0)" }
        ],
        {
          duration: 220,
          easing: "ease-out"
        }
      );
    });
  });
}

window.showSpecs = function showSpecs(productId) {
  const product = findProduct(productId);

  if (!product) {
    return;
  }

  Swal.fire({
    title: product.name,
    html: `
      <div class="text-start">
        ${
          supportsProductImage(product.productType) && product.imageData
            ? `<button type="button" onclick="showProductImagePreview('${product.id}')" style="width:100%;padding:0;border:0;background:transparent;cursor:zoom-in;" class="mb-3"><img src="${product.imageData}" alt="${escapeHtml(product.name)}" style="width:100%;max-height:240px;object-fit:contain;border-radius:16px;background:#fff7f2;border:1px solid rgba(17,17,17,0.08);"></button>`
            : ""
        }
        <p class="mb-2"><strong>Jenis Produk</strong>: ${escapeHtml(normalizeProductType(product.productType))}</p>
        <p class="mb-2"><strong>Kategori</strong>: ${escapeHtml(product.category)}</p>
        <p class="mb-2"><strong>Stok</strong>: ${product.stock > 0 ? `${product.stock} unit` : "Habis"}</p>
        ${
          usesFeatureField(product.productType) && product.feature
            ? `<p class="mb-2"><strong>Fitur</strong>: <strong>${escapeHtml(product.feature)}</strong></p>`
            : ""
        }
        ${
          usesDescriptionField(product.productType)
            ? `<p class="mb-2"><strong>Deskripsi</strong>: ${escapeHtml(product.description || "-")}</p>`
            : product.specs
                .map(([key, value]) => `<p class="mb-2"><strong>${escapeHtml(key)}</strong>: ${escapeHtml(value)}</p>`)
                .join("")
        }
        <p class="mb-0 text-danger fs-4"><strong>${formatPrice(product.price)}</strong></p>
      </div>
    `,
    confirmButtonText: "Tutup",
    confirmButtonColor: "#ca1111"
  });
};

window.showProductImagePreview = function showProductImagePreview(productId) {
  const product = findProduct(productId);

  if (!product || !product.imageData) {
    return;
  }

  Swal.fire({
    title: `${product.name} - Preview Gambar`,
    html: `
      <div class="product-preview-swal-wrap">
        <img src="${product.imageData}" alt="${escapeHtml(product.name)}" class="product-preview-swal-image">
      </div>
    `,
    width: "min(92vw, 960px)",
    confirmButtonText: "Tutup",
    confirmButtonColor: "#ca1111"
  });
};

window.showOrder = function showOrder(productId) {
  const product = findProduct(productId);

  if (!product) {
    return;
  }

  const whatsappPhone = "6281223349983";
  const whatsappMessage = `Halo! aku ingin bertanya terkait '${product.name}'`;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  Swal.fire({
    icon: "success",
    title: "Produk dipilih",
    html: `
      <p class="mb-2">Anda memilih <strong>${escapeHtml(product.name)}</strong>.</p>
      <p class="mb-0">Silakan lanjutkan ke WhatsApp atau datang langsung ke toko.</p>
    `,
    confirmButtonText: "Hubungi WhatsApp",
    confirmButtonColor: "#25D366",
    showCancelButton: true,
    cancelButtonText: "Siap",
    cancelButtonColor: "#ca1111"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(whatsappUrl, "_blank", "noopener");
    }
  });
};

function handleSearch() {
  currentPage = 1;
  syncCatalog();
}

if (pagination) {
  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-page]");

    if (!button || button.disabled) {
      return;
    }

    currentPage = Number(button.dataset.page);
    renderProducts(filteredProducts);
  });
}

if (addSpecButton && specFields) {
  addSpecButton.addEventListener("click", () => {
    specFields.insertAdjacentHTML("beforeend", createSpecField());
  });
}

if (productTypeInput) {
  productTypeInput.addEventListener("change", () => {
    updateProductEditorMode();
  });
}

if (productImageInput) {
  productImageInput.addEventListener("change", (event) => {
    handleProductImageUpload(event.target.files[0]);
    productImageInput.value = "";
  });
}

if (clearProductImageButton) {
  clearProductImageButton.addEventListener("click", () => {
    pendingProductImageData = "";
    if (productImageInput) {
      productImageInput.value = "";
    }
    renderProductImagePreview();
  });
}

if (specFields) {
  specFields.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-spec-button");

    if (!removeButton) {
      return;
    }

    const rows = specFields.querySelectorAll(".spec-field-row");

    if (rows.length === 1) {
      rows[0].querySelector(".spec-key-input").value = "";
      rows[0].querySelector(".spec-value-input").value = "";
      return;
    }

    removeButton.closest(".spec-field-row").remove();
  });
}

if (productForm) {
  productForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);
    const stock = Number(productStockInput.value);
    const productType = normalizeProductType(productTypeInput?.value);
    const category = productCategoryInput.value;
    const description = productDescriptionInput ? productDescriptionInput.value.trim() : "";
    const feature = productFeatureInput ? productFeatureInput.value.trim() : "";
    const specs = getFormSpecs();
    const requiresDescription = usesDescriptionField(productType);
    const requiresFeature = usesFeatureField(productType);
    const supportsImage = supportsProductImage(productType);
    const normalizedSpecs = requiresDescription ? [] : specs;
    const imageData = supportsImage ? pendingProductImageData : "";

    if (
      !name ||
      !Number.isFinite(price) ||
      price < 0 ||
      !Number.isFinite(stock) ||
      stock < 0 ||
      !productType ||
      !category ||
      (requiresDescription ? !description : !normalizedSpecs.length) ||
      (requiresFeature ? !feature : false)
    ) {
      Swal.fire({
        title: "Data belum lengkap",
        text: requiresDescription
          ? "Isi nama produk, harga, stok, jenis produk, kategori, deskripsi produk, dan fitur produk."
          : "Isi nama produk, harga, stok, jenis produk, kategori, dan minimal satu spesifikasi yang valid.",
        icon: "warning",
        confirmButtonText: "Mengerti",
        confirmButtonColor: "#ca1111"
      });
      return;
    }

    const productId = productIdInput.value;
    const nextProduct = {
      id: productId || createId(),
      name,
      price,
      stock,
      productType,
      category,
      description,
      feature,
      imageData,
      specs: normalizedSpecs
    };

    try {
      if (isRemoteDataMode()) {
        if (productId) {
          await updateRemoteProduct(nextProduct);
        } else {
          await createRemoteProduct(nextProduct);
        }

        await loadProductsFromRemote();
      } else if (productId) {
        products = products.map((product) =>
          product.id === productId
            ? {
                ...product,
                name,
                price,
                stock,
                productType,
                category,
                description,
                feature,
                imageData,
                specs: normalizedSpecs
              }
            : product
        );
      } else {
        products.unshift(nextProduct);
        saveProducts();
      }
    } catch (error) {
      Swal.fire({
        title: productId ? "Gagal memperbarui produk" : "Gagal menambahkan produk",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
        confirmButtonColor: "#ca1111"
      });
      return;
    }

    if (!isRemoteDataMode() && productId) {
      saveProducts();
    }

    syncExportSelection();
    resetForm();
    currentPage = 1;
    dashboardCurrentPage = 1;
    syncCatalog();

    Swal.fire({
      title: productId ? "Produk diperbarui" : "Produk ditambahkan",
      icon: "success",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#ca1111"
    });
  });
}

if (cancelEditButton) {
  cancelEditButton.addEventListener("click", () => {
    resetForm();
  });
}

if (dashboardList) {
  dashboardList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-id]");
    const deleteButton = event.target.closest("[data-delete-id]");

    if (editButton) {
      startEditProduct(editButton.dataset.editId);
    }

    if (deleteButton) {
      deleteProduct(deleteButton.dataset.deleteId);
    }
  });

  dashboardList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-select-id]");

    if (!checkbox) {
      return;
    }

    toggleProductSelection(checkbox.dataset.selectId, checkbox.checked);
    renderDashboardList();
  });
}

if (dashboardPagination) {
  dashboardPagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dashboard-page]");

    if (!button || button.disabled) {
      return;
    }

    dashboardCurrentPage = Number(button.dataset.dashboardPage);
    renderDashboardList();
  });
}

if (selectFilteredButton) {
  selectFilteredButton.addEventListener("click", () => {
    const nextIds = new Set(exportState.selectedProductIds);

    getFilteredDashboardProducts().forEach((product) => {
      nextIds.add(product.id);
    });

    exportState.selectedProductIds = sortProductIdsByBrandAndName(Array.from(nextIds));
    exportState.manualOrder = false;
    saveExportState();
    renderDashboardList();
  });
}

if (clearSelectionButton) {
  clearSelectionButton.addEventListener("click", () => {
    exportState.selectedProductIds = [];
    exportState.manualOrder = false;
    saveExportState();
    renderDashboardList();
  });
}

if (selectAllProductsCheckbox) {
  selectAllProductsCheckbox.addEventListener("change", (event) => {
    exportState.selectedProductIds = event.target.checked
      ? sortProductIdsByBrandAndName(products.map((product) => product.id))
      : [];
    exportState.manualOrder = false;
    saveExportState();
    renderDashboardList();
  });
}

if (exportSettingsForm) {
  exportSettingsForm.addEventListener("input", (event) => {
    const target = event.target;

    if (target.matches("[data-custom-image-input]") || target.matches("[data-export-logo-input]")) {
      return;
    }

    updateExportSettingsFromForm();
    renderExportPreview();
  });

  exportSettingsForm.addEventListener("change", (event) => {
    const logoInput = event.target.closest("[data-export-logo-input]");

    if (logoInput) {
      handleExportLogoUpload(logoInput.files[0]);
      logoInput.value = "";
      return;
    }

    const imageInput = event.target.closest("[data-custom-image-input]");

    if (!imageInput) {
      return;
    }

    const imageIndex = Number(imageInput.dataset.customImageInput);
    handleCustomImageUpload(imageIndex, imageInput.files[0]);
    imageInput.value = "";
  });

  exportSettingsForm.addEventListener("click", (event) => {
    const clearButton = event.target.closest("[data-clear-image]");

    if (!clearButton) {
      return;
    }

    const imageIndex = Number(clearButton.dataset.clearImage);
    const images = getActivePageCustomImages();
    images[imageIndex] = "";
    saveExportSettings();
    renderExportPreview();
  });
}

if (exportPageSelect) {
  exportPageSelect.addEventListener("change", (event) => {
    activeExportPage = Number(event.target.value) || 1;
    ensurePageCustomImages(activeExportPage);
  });
}

if (clearExportLogoButton) {
  clearExportLogoButton.addEventListener("click", () => {
    exportSettings.logoImage = defaultExportSettings.logoImage;
    saveExportSettings();
    renderExportPreview();
  });
}

if (printPdfButton) {
  printPdfButton.addEventListener("click", () => {
    renderExportPreview();
    window.print();
  });
}

if (exportPreviewPagination) {
  exportPreviewPagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-export-preview-page]");

    if (!button) {
      return;
    }

    const nextPage = Number(button.dataset.exportPreviewPage);

    if (!nextPage || nextPage === exportPreviewPage) {
      return;
    }

    exportPreviewPage = nextPage;
    renderExportPreview();
    exportPreview.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (resetExportOrderButton) {
  resetExportOrderButton.addEventListener("click", () => {
    exportState.selectedProductIds = sortProductIdsByBrandAndName(exportState.selectedProductIds);
    exportState.manualOrder = false;
    saveExportState();
    renderExportPreview();
  });
}

if (exportPreview) {
  exportPreview.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-export-product-id]");

    if (!card) {
      return;
    }

    draggedExportProductId = card.dataset.exportProductId;
    draggedExportElement = card;
    card.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedExportProductId);
    }
  });

  exportPreview.addEventListener("dragover", (event) => {
    const card = event.target.closest("[data-export-product-id]");
    const grid = event.target.closest(".export-sheet-grid");

    if (!draggedExportProductId || !draggedExportElement) {
      return;
    }

    if (!card && !grid) {
      return;
    }

    event.preventDefault();

    if (!card && grid) {
      clearExportDragIndicators();
      currentDropMode = "append";
      return;
    }

    if (card === draggedExportElement) {
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const offsetY = event.clientY - cardRect.top;
    const offsetX = event.clientX - cardRect.left;
    const leftThreshold = cardRect.width * 0.22;
    const rightThreshold = cardRect.width * 0.78;
    const topThreshold = cardRect.height * 0.28;
    const bottomThreshold = cardRect.height * 0.72;

    clearExportDragIndicators();

    if (offsetX < leftThreshold) {
      currentDropMode = "before";
      card.classList.add("drag-insert-left");
      return;
    }

    if (offsetX > rightThreshold) {
      currentDropMode = "after";
      card.classList.add("drag-insert-right");
      return;
    }

    if (offsetY < topThreshold) {
      currentDropMode = "before";
      card.classList.add("drag-insert-before");
      return;
    }

    if (offsetY > bottomThreshold) {
      currentDropMode = "after";
      card.classList.add("drag-insert-after");
      return;
    }

    currentDropMode = "swap";
    card.classList.add("drag-target");
  });

  exportPreview.addEventListener("drop", (event) => {
    const card = event.target.closest("[data-export-product-id]");
    const grid = event.target.closest(".export-sheet-grid");

    if (!draggedExportProductId || !draggedExportElement) {
      return;
    }

    if (!card && !grid) {
      return;
    }

    if (card === draggedExportElement) {
      return;
    }

    event.preventDefault();
    pendingExportTransitionRects = captureExportCardRects();
    clearExportDragIndicators();

    if (currentDropMode === "append" && grid) {
      const nextIds = exportState.selectedProductIds.filter((id) => id !== draggedExportProductId);
      nextIds.push(draggedExportProductId);
      exportState.selectedProductIds = nextIds;
      exportState.manualOrder = true;
      saveExportState();
    } else if (currentDropMode === "before" && card) {
      moveSelectedProductBefore(draggedExportProductId, card.dataset.exportProductId);
    } else if (currentDropMode === "after" && card) {
      moveSelectedProductAfter(draggedExportProductId, card.dataset.exportProductId);
    } else if (card) {
      swapSelectedProducts(draggedExportProductId, card.dataset.exportProductId);
    }
  });

  exportPreview.addEventListener("dragend", () => {
    clearExportDragIndicators();
    exportPreview.querySelectorAll(".export-card.is-dragging").forEach((card) => {
      card.classList.remove("is-dragging");
    });
    draggedExportProductId = "";
    draggedExportElement = null;
    currentDropMode = "";
    renderExportPreview();
  });
}

if (exportSelectedBrands) {
  exportSelectedBrands.addEventListener("dragstart", (event) => {
    const chip = event.target.closest("[data-brand-chip]");

    if (!chip) {
      return;
    }

    draggedBrandName = chip.dataset.brandChip;
    chip.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedBrandName);
    }
  });

  exportSelectedBrands.addEventListener("dragover", (event) => {
    const chip = event.target.closest("[data-brand-chip]");

    if (!chip || !draggedBrandName || chip.dataset.brandChip === draggedBrandName) {
      return;
    }

    event.preventDefault();
    const chipRect = chip.getBoundingClientRect();
    const offsetX = event.clientX - chipRect.left;
    const leftThreshold = chipRect.width * 0.28;
    const rightThreshold = chipRect.width * 0.72;

    clearBrandDragIndicators();

    if (offsetX < leftThreshold) {
      currentBrandDropMode = "before";
      chip.classList.add("drag-insert-left");
      return;
    }

    if (offsetX > rightThreshold) {
      currentBrandDropMode = "after";
      chip.classList.add("drag-insert-right");
      return;
    }

    currentBrandDropMode = "swap";
    chip.classList.add("drag-target");
  });

  exportSelectedBrands.addEventListener("drop", (event) => {
    const chip = event.target.closest("[data-brand-chip]");

    if (!chip || !draggedBrandName || chip.dataset.brandChip === draggedBrandName) {
      return;
    }

    event.preventDefault();
    clearBrandDragIndicators();

    if (currentBrandDropMode === "before") {
      reorderBrandGroup(draggedBrandName, chip.dataset.brandChip);
    } else if (currentBrandDropMode === "after") {
      moveBrandGroupAfter(draggedBrandName, chip.dataset.brandChip);
    } else {
      swapBrandGroup(draggedBrandName, chip.dataset.brandChip);
    }

    draggedBrandName = "";
    currentBrandDropMode = "";
    renderExportPreview();
  });

  exportSelectedBrands.addEventListener("dragend", () => {
    exportSelectedBrands.querySelectorAll(".export-brand-chip").forEach((chip) => {
      chip.classList.remove("is-dragging", "drag-target", "drag-insert-left", "drag-insert-right");
    });
    draggedBrandName = "";
    currentBrandDropMode = "";
  });
}

if (dashboardSearchInput) {
  dashboardSearchInput.addEventListener("input", () => {
    clearTimeout(dashboardSearchDebounceTimer);
    dashboardSearchDebounceTimer = setTimeout(() => {
      dashboardCurrentPage = 1;
      renderDashboardList();
    }, 300);
  });

  dashboardSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      clearTimeout(dashboardSearchDebounceTimer);
      dashboardCurrentPage = 1;
      renderDashboardList();
    }
  });
}

if (searchButton) {
  searchButton.addEventListener("click", handleSearch);
}

if (catalogCategoryStrip) {
  catalogCategoryStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-type]");

    if (!button) {
      return;
    }

    activeCatalogProductType = normalizeProductType(button.dataset.productType);
    catalogCategoryButtons.forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.productType === activeCatalogProductType);
    });
    currentPage = 1;
    syncCatalog();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(handleSearch, 300);
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      clearTimeout(searchDebounceTimer);
      handleSearch();
    }
  });
}

if (infoStoreButton) {
  infoStoreButton.addEventListener("click", () => {
    Swal.fire({
      title: "Central Computer Singkawang",
      html: `
        <div class="text-start">
          <p class="mb-2"><strong>Layanan:</strong> Laptop, PC rakitan, printer, dan aksesoris.</p>
          <p class="mb-2"><strong>Keunggulan:</strong> Harga promo, spesifikasi jelas, dan konsultasi ramah.</p>
          <p class="mb-0"><strong>Catatan:</strong> Alamat dan nomor WhatsApp bisa kamu ganti langsung di file website.</p>
        </div>
      `,
      icon: "info",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#ca1111"
    });
  });
}

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const whatsappUrl = `https://wa.me/6281223349983?text=${encodeURIComponent("Halo! aku ingin bertanya terkait produk di Central Computer Singkawang")}`;

    Swal.fire({
      title: "Hubungi Kami",
      html: `
        <div class="text-start">
          <p class="mb-2"><strong>Alamat:</strong> Jl. Yohana Godang, Pasiran, Kec. Singkawang Bar., Kota Singkawang, Kalimantan Barat 79123</p>
          <p class="mb-2"><strong>Telepon:</strong> 0812-2334-9983</p>
          <div class="mb-2">
            <strong>Jam:</strong>
            <div>Selasa 08.00–20.00</div>
            <div>Rabu 08.00–20.00</div>
            <div>Kamis 08.00–20.00</div>
            <div>Jumat 08.00–20.00</div>
            <div>Sabtu 08.00–20.00</div>
            <div>Minggu Tutup</div>
            <div>Senin 08.00–20.00</div>
          </div>
          <p class="mb-0"><strong>Provinsi:</strong> Kalimantan Barat</p>
        </div>
      `,
      confirmButtonText: "Hubungi WhatsApp",
      confirmButtonColor: "#25D366",
      showCancelButton: true,
      cancelButtonText: "Tutup",
      cancelButtonColor: "#ca1111"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappUrl, "_blank", "noopener");
      }
    });
  });
}

if (resetDataButton) {
  resetDataButton.addEventListener("click", () => {
    Swal.fire({
      title: "Reset semua data?",
      text: "Data produk akan dikembalikan ke katalog bawaan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Reset",
      cancelButtonText: "Batal",
      confirmButtonColor: "#ca1111"
    }).then(async (result) => {
      if (!result.isConfirmed) {
        return;
      }

      try {
        if (isRemoteDataMode()) {
          await resetRemoteProducts(defaultProducts);
          await loadProductsFromRemote();
        } else {
          products = cloneProducts(defaultProducts);
          saveProducts();
        }
      } catch (error) {
        Swal.fire({
          title: "Gagal reset data",
          text: error.message,
          icon: "error",
          confirmButtonText: "Tutup",
          confirmButtonColor: "#ca1111"
        });
        return;
      }

      syncExportSelection();
      resetForm();
      currentPage = 1;
      dashboardCurrentPage = 1;
      syncCatalog();

      Swal.fire({
        title: "Data dipulihkan",
        icon: "success",
        confirmButtonText: "Tutup",
        confirmButtonColor: "#ca1111"
      });
    });
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value;

    if (!isRemoteDataMode()) {
      if (username === offlineAdminUsername && password === offlineAdminPassword) {
        setAuthenticated(true);
        showDashboardState();
        showExportPageState();
        Swal.fire({
          title: "Login offline berhasil",
          text: "Mode sementara aktif karena Supabase belum tersedia.",
          icon: "success",
          confirmButtonText: "Lanjut",
          confirmButtonColor: "#ca1111"
        });
        return;
      }

      Swal.fire({
        title: "Login offline gagal",
        text: "Gunakan username dan password sementara untuk mode offline.",
        icon: "error",
        confirmButtonText: "Coba lagi",
        confirmButtonColor: "#ca1111"
      });
      return;
    }

    try {
      await fetchApiJson(remoteLoginEndpoint, {
        method: "POST",
        body: JSON.stringify({ username, password })
      });

      setAuthenticated(true);
      await loadRemoteExportPreferences();
      showDashboardState();
      showExportPageState();
      Swal.fire({
        title: "Login berhasil",
        icon: "success",
        confirmButtonText: "Lanjut",
        confirmButtonColor: "#ca1111"
      });
    } catch (error) {
      Swal.fire({
        title: "Login gagal",
        text: error.message,
        icon: "error",
        confirmButtonText: "Coba lagi",
        confirmButtonColor: "#ca1111"
      });
    }
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    if (exportPreferencesSaveTimer) {
      window.clearTimeout(exportPreferencesSaveTimer);
      exportPreferencesSaveTimer = null;
    }

    try {
      if (isRemoteDataMode()) {
        await fetchApiJson(remoteLogoutEndpoint, { method: "POST" });
      }
    } catch (error) {
      // Ignore logout network error and still clear the UI state locally.
    }

    setAuthenticated(false);
    showDashboardState();
    showExportPageState();
  });
}

async function bootstrapApplication() {
  syncExportSelection();
  refreshVisiblePageState();

  try {
    await initializeRemoteData();
  } catch (error) {
    dataMode = "local";
  }

  refreshVisiblePageState();
}

bootstrapApplication().catch(() => {
  dataMode = "local";
  refreshVisiblePageState();
});
