/**
 * PHONE CULTURE GAMPOLA — Central Products Store & Data Layer
 * Address: No 374, Bothalapitiya, Gampola, Sri Lanka
 * Phone / WhatsApp: 077 468 7888
 * Products curated from ONEi.lk & iDealz.lk real market catalogues
 */

const STORE_CONFIG = {
  name: "Phone Culture Gampola",
  tagline: "Premier Smartphone & Luxury Technology Showroom",
  address: "No 374, Bothalapitiya, Gampola, Sri Lanka",
  district: "Kandy District / Central Province",
  phone: "077 468 7888",
  phoneRaw: "077468788",
  whatsappNumber: "94774687888",
  whatsappDisplay: "+94 77 468 7888",
  instagramUrl: "https://www.instagram.com/thephoneculture/",
  currencySymbol: "Rs.",
  currencyCode: "LKR",
  storeLocation: "No 374, Bothalapitiya, Gampola, Sri Lanka",
  email: "phoneculturegampola@gmail.com",
  hours: "Monday – Sunday: 9:30 AM – 8:30 PM",
  sameDayDelivery: "Gampola, Kandy, Peradeniya & Nawalapitiya",
  islandwideDelivery: "Islandwide Insured Delivery within 24-48 Hours"
};

const PRODUCTS_DATA = [
  // ================= APPLE FLAGSHIPS =================
  {
    id: "iphone-18-pro-max",
    name: "Apple iPhone 18 Pro Max (Next-Gen)",
    brand: "Apple",
    category: "iPhone",
    badge: "2026 FLAGSHIP",
    price: 529900,
    oldPrice: 569000,
    rating: 5.0,
    reviewsCount: 29,
    stock: true,
    stockText: "In Stock (Phone Culture Gampola)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Liquid Titanium", hex: "#7D8289", bg: "#E6E9ED" },
      { name: "Cosmic Gold", hex: "#D6BF9E", bg: "#F8F1E7" },
      { name: "Deep Obsidian", hex: "#232428", bg: "#161719" }
    ],
    storage: [
      { size: "256GB", price: 529900 },
      { size: "512GB", price: 599000 },
      { size: "1TB", price: 689000 }
    ],
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-holding-a-smartphone-with-a-blank-green-screen-40742-large.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1695048065051-789a42f56708?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Apple A19 Pro 2nm architecture, under-display biometric sensors, and 8K ProRes cinematic video.",
    description: "The pinnacle of mobile engineering. Built with a revolutionary liquid-crystal titanium chassis, second-generation Apple Intelligence Neural Core, and custom 48MP triple telephoto with 10x continuous optical prism zoom.",
    highlights: [
      "6.9-inch Borderless Super Retina XDR with 3500 nits outdoor peak",
      "Apple A19 Pro chip with hardware ray tracing & AI Co-Processor",
      "Triple 48MP system with 10x continuous optical periscope zoom",
      "Up to 36 hours video playback battery life with 45W MagSafe Qi2",
      "Under-display Face ID with Ceramic Shield Pro glass"
    ],
    specs: {
      "Display": "6.9\" LTPO Super Retina XDR OLED, 120Hz ProMotion, 3500 nits",
      "Processor": "Apple A19 Pro (2nm TSMC N2 architecture, 6-core GPU)",
      "RAM": "12GB Unified Memory",
      "Camera": "48MP Primary + 48MP Ultra-Wide + 48MP 10x Periscope Prism Telephoto",
      "Battery": "4950 mAh, 50% in 20 mins, 45W MagSafe Wireless",
      "Operating System": "iOS 19 with Apple Intelligence Pro",
      "Dimensions": "163.2 x 77.4 x 8.1 mm",
      "Weight": "221 grams",
      "Warranty": "1 Year Apple Care International + Phone Culture Gampola Assurance"
    }
  },
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "iPhone",
    badge: "BEST SELLER",
    price: 479900,
    oldPrice: 515000,
    rating: 5.0,
    reviewsCount: 74,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Desert Titanium", hex: "#C5A992", bg: "#F4EBE2" },
      { name: "Natural Titanium", hex: "#9E9990", bg: "#EFECE8" },
      { name: "White Titanium", hex: "#E3E4E5", bg: "#FBFBFC" },
      { name: "Black Titanium", hex: "#3A393E", bg: "#2A292E" }
    ],
    storage: [
      { size: "256GB", price: 479900 },
      { size: "512GB", price: 545000 },
      { size: "1TB", price: 625000 }
    ],
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-modern-smartphone-with-a-blank-screen-40744-large.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1695048065051-789a42f56708?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Grade 5 Titanium architecture with tactile Camera Control button and A18 Pro chip.",
    description: "The most powerful iPhone ever engineered. Thinnest borders ever, 48MP Fusion primary camera with 5x Telephoto optical zoom, and studio quality Audio Mix.",
    highlights: [
      "6.9-inch Super Retina XDR display with ProMotion 120Hz",
      "Apple A18 Pro chip built on 2nd-gen 3nm technology",
      "Tactile Camera Control button for instant framing and capture",
      "Up to 33 hours battery life - longest in an iPhone"
    ],
    specs: {
      "Display": "6.9\" Super Retina XDR OLED, 2868 x 1320, 120Hz",
      "Processor": "Apple A18 Pro Bionic",
      "RAM": "8GB Unified",
      "Camera": "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
      "Battery": "4685 mAh, 25W MagSafe Wireless",
      "Operating System": "iOS 18 with Apple Intelligence",
      "Dimensions": "163.0 x 77.6 x 8.25 mm",
      "Weight": "227 grams",
      "Warranty": "1 Year Apple Care International Warranty"
    }
  },
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    category: "iPhone",
    badge: "POPULAR",
    price: 424900,
    oldPrice: 449000,
    rating: 4.9,
    reviewsCount: 52,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: false,
    newArrival: true,
    colors: [
      { name: "Natural Titanium", hex: "#9E9990", bg: "#EFECE8" },
      { name: "Desert Titanium", hex: "#C5A992", bg: "#F4EBE2" },
      { name: "Black Titanium", hex: "#3A393E", bg: "#2A292E" }
    ],
    storage: [
      { size: "128GB", price: 424900 },
      { size: "256GB", price: 465000 },
      { size: "512GB", price: 535000 }
    ],
    image: "https://images.unsplash.com/photo-1695048065051-789a42f56708?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1695048065051-789a42f56708?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Compact 6.3\" pro powerhouse featuring A18 Pro, 5x telephoto and tactile Camera Control.",
    description: "Packed with Grade 5 Titanium, 48MP Fusion Camera, and full Apple Intelligence.",
    highlights: [
      "6.3-inch Super Retina XDR with ProMotion 120Hz",
      "Apple A18 Pro 3nm chipset",
      "5x Telephoto optical zoom lens",
      "Studio quality 4-mic array"
    ],
    specs: {
      "Display": "6.3\" Super Retina XDR OLED, 2622 x 1206",
      "Processor": "Apple A18 Pro",
      "RAM": "8GB",
      "Camera": "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
      "Battery": "3582 mAh, 25W MagSafe Fast Wireless",
      "Operating System": "iOS 18",
      "Dimensions": "149.6 x 71.5 x 8.25 mm",
      "Weight": "199 grams",
      "Warranty": "1 Year Official Apple Warranty"
    }
  },
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    brand: "Apple",
    category: "iPhone",
    badge: "VIBRANT",
    price: 319000,
    oldPrice: 345000,
    rating: 4.8,
    reviewsCount: 41,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Ultramarine", hex: "#3E5788", bg: "#4F6E9F" },
      { name: "Teal", hex: "#7CA7A6", bg: "#93BFBE" },
      { name: "Pink", hex: "#DF889F", bg: "#F1AABF" },
      { name: "Black", hex: "#2B2D31", bg: "#1C1D21" }
    ],
    storage: [
      { size: "128GB", price: 319000 },
      { size: "256GB", price: 365000 }
    ],
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Apple A18 chip, color-infused back glass, Action Button and 48MP 2-in-1 Fusion camera.",
    description: "Designed for Apple Intelligence. Includes Camera Control and aerospace-grade aluminum chassis.",
    highlights: [
      "Apple A18 chip built for artificial intelligence",
      "48MP Fusion 2-in-1 camera with 2x optical Telephoto",
      "Tactile Action Button & Camera Control"
    ],
    specs: {
      "Display": "6.1\" Super Retina XDR OLED",
      "Processor": "Apple A18",
      "RAM": "8GB",
      "Camera": "48MP Main + 12MP Ultra Wide",
      "Battery": "3561 mAh",
      "Operating System": "iOS 18",
      "Dimensions": "147.6 x 71.6 x 7.80 mm",
      "Weight": "170 grams",
      "Warranty": "1 Year Official Apple Warranty"
    }
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15 (128GB)",
    brand: "Apple",
    category: "iPhone",
    badge: "VALUE PICK",
    price: 249000,
    oldPrice: 275000,
    rating: 4.8,
    reviewsCount: 65,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: true,
    newArrival: false,
    colors: [
      { name: "Black", hex: "#2B2D31", bg: "#1C1D21" },
      { name: "Blue", hex: "#C5D5E4", bg: "#DEE7EF" },
      { name: "Pink", hex: "#E8C8D2", bg: "#F4DFE5" }
    ],
    storage: [
      { size: "128GB", price: 249000 },
      { size: "256GB", price: 289000 }
    ],
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Dynamic Island, 48MP main camera, USB-C connector, and A16 Bionic chip.",
    description: "Features Dynamic Island, durable color-infused back glass, and USB-C connectivity.",
    highlights: ["Dynamic Island", "48MP Main Camera", "A16 Bionic", "USB-C port"],
    specs: {
      "Display": "6.1\" Super Retina XDR OLED",
      "Processor": "Apple A16 Bionic",
      "RAM": "6GB",
      "Camera": "48MP + 12MP Dual Camera",
      "Battery": "3349 mAh",
      "Operating System": "iOS 17 (Upgradable to iOS 18)",
      "Dimensions": "147.6 x 71.6 x 7.8 mm",
      "Weight": "171 grams",
      "Warranty": "1 Year Official Apple Warranty"
    }
  },

  // ================= SAMSUNG FLAGSHIPS =================
  {
    id: "samsung-galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra 5G (Next-Gen)",
    brand: "Samsung",
    category: "Samsung",
    badge: "2026 GALAXY AI",
    price: 499900,
    oldPrice: 539000,
    rating: 5.0,
    reviewsCount: 31,
    stock: true,
    stockText: "In Stock (Phone Culture Gampola)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Titanium Blue Phantom", hex: "#5C768D", bg: "#DCE5EC" },
      { name: "Titanium Shadow Gray", hex: "#62615E", bg: "#D5D4D1" },
      { name: "Titanium Jet Black", hex: "#1F1F21", bg: "#131315" }
    ],
    storage: [
      { size: "256GB / 12GB", price: 499900 },
      { size: "512GB / 16GB", price: 569000 },
      { size: "1TB / 16GB", price: 649000 }
    ],
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-using-a-smartphone-in-a-coffee-shop-40746-large.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Snapdragon 8 Elite Pro, 200MP Quad Tele with Neural Processing, built-in S Pen and 65W Fast Charge.",
    description: "The apex of Android flagships. Powered by the next generation Snapdragon 8 Elite Pro processor with on-device multimodal Galaxy AI, 3000 nits anti-reflective Armor Glass, and integrated low-latency S Pen.",
    highlights: [
      "Snapdragon 8 Elite Pro (Custom 3nm architecture) with Oryon cores",
      "200MP ProVision Main Sensor + Dual 50MP Periscope Telephoto",
      "6.9-inch Dynamic LTPO AMOLED 2X with Gorilla Glass Armor 2",
      "Integrated S Pen with Air Command gestures",
      "5,200 mAh dual-cell battery with 65W Super Fast Charging"
    ],
    specs: {
      "Display": "6.9\" Dynamic AMOLED 2X, QHD+ 3120 x 1440, 1-120Hz LTPO",
      "Processor": "Qualcomm Snapdragon 8 Elite Pro (4.5GHz)",
      "RAM": "12GB / 16GB LPDDR5X",
      "Camera": "200MP OIS + 50MP (5x Periscope) + 50MP (10x Tele) + 50MP Ultra-Wide",
      "Battery": "5200 mAh, 65W wired, 25W wireless",
      "Operating System": "One UI 8 on Android 16 (7 Years OS Updates)",
      "Dimensions": "162.5 x 77.3 x 8.1 mm",
      "Weight": "216 grams",
      "Warranty": "1 Year Samsung TRCSL Approved Warranty"
    }
  },
  {
    id: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Samsung",
    badge: "GALAXY AI",
    price: 459000,
    oldPrice: 489000,
    rating: 5.0,
    reviewsCount: 52,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Titanium Silverblue", hex: "#7B8FA1", bg: "#E3E9EE" },
      { name: "Titanium Gray", hex: "#6C6B67", bg: "#DFDDD8" },
      { name: "Titanium Black", hex: "#272727", bg: "#1F1F1F" }
    ],
    storage: [
      { size: "256GB", price: 459000 },
      { size: "512GB", price: 519000 }
    ],
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Snapdragon 8 Elite, rounded titanium frames, 200MP Quad Tele and built-in S Pen.",
    description: "Multi-modal Galaxy AI with Gemini Live assistance and Corning Gorilla Armor anti-reflective glass.",
    highlights: [
      "Snapdragon 8 Elite for Galaxy (3nm)",
      "200MP Quad Telephoto Camera System",
      "Integrated S Pen stylus",
      "5,000 mAh battery with 45W charging"
    ],
    specs: {
      "Display": "6.9\" Dynamic AMOLED 2X, 3120 x 1440, 120Hz LTPO",
      "Processor": "Qualcomm Snapdragon 8 Elite",
      "RAM": "12GB",
      "Camera": "200MP + 50MP + 50MP + 10MP",
      "Battery": "5000 mAh, 45W wired",
      "Operating System": "One UI 7 (Android 15)",
      "Dimensions": "162.8 x 77.6 x 8.2 mm",
      "Weight": "219 grams",
      "Warranty": "1 Year Samsung TRCSL Approved Warranty"
    }
  },
  {
    id: "samsung-galaxy-z-fold6",
    name: "Samsung Galaxy Z Fold6",
    brand: "Samsung",
    category: "Samsung",
    badge: "FOLDABLE",
    price: 535000,
    oldPrice: 579000,
    rating: 4.9,
    reviewsCount: 27,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: false,
    newArrival: true,
    colors: [
      { name: "Silver Shadow", hex: "#B5B8BC", bg: "#EAEBED" },
      { name: "Navy", hex: "#202E3E", bg: "#172332" }
    ],
    storage: [
      { size: "256GB", price: 535000 },
      { size: "512GB", price: 595000 }
    ],
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Book-style foldable with dual displays, armor aluminum, and split-screen multitasking.",
    description: "7.6-inch expansive tablet in your pocket with enhanced ray-tracing and Galaxy AI note assist.",
    highlights: ["7.6\" Foldable Display", "Snapdragon 8 Gen 3", "IP48 Water Resistance"],
    specs: {
      "Display": "7.6\" Foldable AMOLED (2160 x 1856) + 6.3\" Cover (2376 x 968)",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "RAM": "12GB",
      "Camera": "50MP Main + 10MP Tele + 12MP Ultrawide",
      "Battery": "4400 mAh, 25W Charging",
      "Operating System": "One UI 6.1.1 on Android 14",
      "Dimensions": "Unfolded: 153.5 x 132.6 x 5.6 mm",
      "Weight": "239 grams",
      "Warranty": "1 Year Official Samsung Warranty"
    }
  },
  {
    id: "samsung-galaxy-a55-5g",
    name: "Samsung Galaxy A55 5G (256GB)",
    brand: "Samsung",
    category: "Samsung",
    badge: "MIDRANGE CHAMP",
    price: 139000,
    oldPrice: 155000,
    rating: 4.8,
    reviewsCount: 58,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: false,
    deals: true,
    newArrival: false,
    colors: [
      { name: "Awesome Iceblue", hex: "#C8DEE8", bg: "#E2EEF4" },
      { name: "Awesome Navy", hex: "#1C2A3A", bg: "#131C27" }
    ],
    storage: [
      { size: "256GB / 8GB RAM", price: 139000 }
    ],
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Metal frame, 50MP OIS camera, 120Hz Super AMOLED, and 5,000mAh battery with IP67.",
    description: "Top-selling midranger with Gorilla Glass Victus+ and 4 generations of Android OS updates.",
    highlights: ["Metal Frame", "50MP OIS Camera", "Super AMOLED 120Hz", "IP67 Rating"],
    specs: {
      "Display": "6.6\" FHD+ Super AMOLED 120Hz, 1000 nits",
      "Processor": "Exynos 1480 (4nm) with AMD Xclipse 530 GPU",
      "RAM": "8GB",
      "Camera": "50MP Main (OIS) + 12MP Ultra-Wide + 5MP Macro",
      "Battery": "5000 mAh, 25W Fast Charging",
      "Operating System": "One UI 6.1 (Android 14)",
      "Dimensions": "161.1 x 77.4 x 8.2 mm",
      "Weight": "213 grams",
      "Warranty": "1 Year Samsung TRCSL Approved Warranty"
    }
  },

  // ================= XIAOMI & REDMI FLAGSHIPS =================
  {
    id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra 5G (Leica Optics)",
    brand: "Xiaomi",
    category: "Android",
    badge: "LEICA MASTER",
    price: 369000,
    oldPrice: 399000,
    rating: 5.0,
    reviewsCount: 38,
    stock: true,
    stockText: "In Stock (Phone Culture Gampola)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Photography Black", hex: "#1E1E1E", bg: "#141414" },
      { name: "Ceramic White", hex: "#EDEFEF", bg: "#FAFAFA" }
    ],
    storage: [
      { size: "512GB / 16GB RAM", price: 369000 }
    ],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-with-a-blank-green-screen-40743-large.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Snapdragon 8 Elite, 1-inch Sony sensor, 200MP Leica Periscope, and 90W HyperCharge.",
    description: "Engineered in partnership with Leica. Features a massive circular camera housing, Quad 50MP+200MP optical system, 6000mAh battery, and titanium frame.",
    highlights: [
      "Snapdragon 8 Elite with custom Xiaomi HyperCore engine",
      "Quad Leica cameras featuring 200MP Periscope zoom lens",
      "6.73\" 2K C8 OLED display with 3200 nits peak brightness",
      "6,000 mAh silicon-carbon battery with 90W wired + 50W wireless charge"
    ],
    specs: {
      "Display": "6.73\" LTPO AMOLED, 3200 x 1440, 120Hz, Dolby Vision",
      "Processor": "Qualcomm Snapdragon 8 Elite (3nm)",
      "RAM": "16GB LPDDR5X",
      "Camera": "50MP 1-inch Sony LYT-900 + 200MP Periscope + 50MP Tele + 50MP Ultrawide",
      "Battery": "6000 mAh, 90W HyperCharge",
      "Operating System": "Xiaomi HyperOS 2 on Android 15",
      "Dimensions": "161.4 x 75.3 x 9.2 mm",
      "Weight": "220 grams",
      "Warranty": "1 Year Official Warranty"
    }
  },
  {
    id: "redmi-note-14-pro-plus",
    name: "Redmi Note 14 Pro+ 5G",
    brand: "Xiaomi",
    category: "Android",
    badge: "BEST VALUE",
    price: 154000,
    oldPrice: 169000,
    rating: 4.8,
    reviewsCount: 62,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Midnight Black", hex: "#222327", bg: "#16171A" },
      { name: "Mirror Porcelain", hex: "#E7E8EB", bg: "#F8F8F9" }
    ],
    storage: [
      { size: "256GB / 12GB RAM", price: 154000 },
      { size: "512GB / 16GB RAM", price: 174000 }
    ],
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Snapdragon 7s Gen 3, 6200mAh Huge Battery, 90W HyperCharge, IP68/IP69K drop resistance.",
    description: "The most durable Redmi Note ever made. Certified IP68 waterproof, 6200mAh silicon battery, and 50MP Light Hunter 800 sensor.",
    highlights: ["Huge 6,200 mAh Battery", "90W HyperCharge", "IP68/IP69K Waterproof", "Snapdragon 7s Gen 3"],
    specs: {
      "Display": "6.67\" 1.5K 120Hz Curved OLED, 3000 nits",
      "Processor": "Qualcomm Snapdragon 7s Gen 3 (4nm)",
      "RAM": "12GB / 16GB",
      "Camera": "50MP Light Hunter 800 (OIS) + 50MP 2.5x Portrait + 8MP Ultrawide",
      "Battery": "6200 mAh, 90W Fast Charging",
      "Operating System": "Xiaomi HyperOS on Android 14",
      "Dimensions": "162.5 x 74.7 x 8.7 mm",
      "Weight": "210 grams",
      "Warranty": "1 Year Phone Culture Gampola Warranty"
    }
  },

  // ================= GOOGLE PIXEL & ONEPLUS =================
  {
    id: "google-pixel-9-pro-xl",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    category: "Google Pixel",
    badge: "GEMINI AI",
    price: 389000,
    oldPrice: 419000,
    rating: 4.9,
    reviewsCount: 34,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Porcelain", hex: "#E7E4DC", bg: "#F5F3ED" },
      { name: "Obsidian", hex: "#28292B", bg: "#1C1D1E" }
    ],
    storage: [
      { size: "128GB", price: 389000 },
      { size: "256GB", price: 429000 }
    ],
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Google Tensor G4, polished metal frame, iconic camera visor, and Gemini Advanced.",
    description: "Crafted with silky matte glass back and dual-finish camera bar. Built with Google Tensor G4 and 16GB RAM for top-tier Gemini AI multimodal capability.",
    highlights: ["Super Actua Display (6.8\")", "Google Tensor G4", "Add Me & Magic Editor AI", "7 Years OS Updates"],
    specs: {
      "Display": "6.8\" Super Actua LTPO OLED (1344 x 2992), 1-120Hz",
      "Processor": "Google Tensor G4",
      "RAM": "16GB",
      "Camera": "50MP Wide + 48MP Ultrawide + 48MP 5x Telephoto",
      "Battery": "5060 mAh, 37W Fast Charge",
      "Operating System": "Pure Android 15",
      "Dimensions": "162.8 x 76.6 x 8.5 mm",
      "Weight": "221 grams",
      "Warranty": "1 Year Phone Culture Comprehensive Warranty"
    }
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13 Flagship",
    brand: "OnePlus",
    category: "Android",
    badge: "SPEED",
    price: 329000,
    oldPrice: 355000,
    rating: 4.8,
    reviewsCount: 23,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Midnight Ocean", hex: "#1E3A5F", bg: "#15263D" },
      { name: "Black Eclipse", hex: "#25262A", bg: "#1B1C1E" }
    ],
    storage: [
      { size: "256GB / 12GB", price: 329000 }
    ],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Snapdragon 8 Elite, 6000mAh Glacier Battery, 100W SuperVOOC & Hasselblad camera.",
    description: "Redefining flagship speed with a quad-curved 2K Oriental Display, IP68/IP69 rating, and custom Hasselblad optics.",
    highlights: ["Snapdragon 8 Elite", "6,000 mAh Glacier battery", "100W Wired + 50W Wireless"],
    specs: {
      "Display": "6.82\" 2K BOE X2 LTPO OLED, 120Hz",
      "Processor": "Qualcomm Snapdragon 8 Elite",
      "RAM": "12GB",
      "Camera": "50MP Main + 50MP Ultra Wide + 50MP 3x Periscope",
      "Battery": "6000 mAh, 100W SuperVOOC",
      "Operating System": "OxygenOS 15 based on Android 15",
      "Dimensions": "162.9 x 76.5 x 8.5 mm",
      "Weight": "210 grams",
      "Warranty": "1 Year Phone Culture Gampola Warranty"
    }
  },

  // ================= APPLE WATCH & WEARABLES =================
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 (Black Titanium)",
    brand: "Apple",
    category: "Smart Watches",
    badge: "RUGGED PRO",
    price: 289000,
    oldPrice: 315000,
    rating: 5.0,
    reviewsCount: 41,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: false,
    newArrival: true,
    colors: [
      { name: "Satin Black Titanium", hex: "#2A2A2E", bg: "#1C1C1F" },
      { name: "Natural Titanium", hex: "#A29F98", bg: "#EFECE8" }
    ],
    storage: [
      { size: "49mm GPS + Cellular", price: 289000 }
    ],
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Rugged 49mm titanium case with 3000 nits display, dual-frequency GPS, and up to 72h battery.",
    description: "The ultimate sports and adventure smartwatch with Double Tap gesture, precision dual GPS, and EN13319 dive certification.",
    highlights: ["Grade 5 Titanium", "3000 nits display", "Up to 72 hours battery in low power"],
    specs: {
      "Display": "1.92\" Always-On Retina LTPO OLED, 3000 nits",
      "Processor": "Apple S9 SiP",
      "Water Resistance": "100m water resistant, 40m recreational dive",
      "Battery": "Up to 72 hours in low power mode",
      "Warranty": "1 Year Apple Care International"
    }
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10 (Jet Black 46mm)",
    brand: "Apple",
    category: "Smart Watches",
    badge: "SLIMMEST EVER",
    price: 175000,
    oldPrice: 195000,
    rating: 4.9,
    reviewsCount: 44,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: true,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Jet Black", hex: "#1C1C1E", bg: "#111112" },
      { name: "Rose Gold", hex: "#E8C8C2", bg: "#F6ECE9" },
      { name: "Silver", hex: "#E0E0E2", bg: "#F8F8FA" }
    ],
    storage: [
      { size: "46mm GPS", price: 175000 }
    ],
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Nearly 10% thinner than Series 9, wide-angle OLED display, sleep apnea detection, and 50m water resistance.",
    description: "The thinnest Apple Watch ever with the biggest display area and fastest charging.",
    highlights: ["Wide-angle OLED Display", "Sleep Apnea Notifications", "Fast Charge 80% in 30 mins"],
    specs: {
      "Display": "Always-On Retina wide-angle OLED, up to 2000 nits",
      "Processor": "Apple S10 SiP",
      "Battery": "Up to 18 hours, 36 hours in low power",
      "Warranty": "1 Year Apple Care International"
    }
  },

  // ================= AIRPODS & AUDIO (iDealz & ONEi styles) =================
  {
    id: "airpods-pro-2-usbc",
    name: "Apple AirPods Pro (2nd Gen) USB-C",
    brand: "Apple",
    category: "AirPods / Audio",
    badge: "BEST AUDIO",
    price: 84900,
    oldPrice: 96000,
    rating: 4.9,
    reviewsCount: 112,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: true,
    newArrival: false,
    colors: [{ name: "Glossy White", hex: "#F5F5F7", bg: "#FFFFFF" }],
    storage: [{ size: "MagSafe USB-C Case", price: 84900 }],
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Apple H2 chip, up to 2x more Active Noise Cancellation, and Hearing Health certified.",
    description: "Adaptive audio, transparency mode, precision finding speaker, and clinical hearing health features.",
    highlights: ["Apple H2 Chip", "Active Noise Cancellation", "Up to 30 hours battery"],
    specs: {
      "Noise Control": "Active Noise Cancellation, Adaptive Audio",
      "Battery Life": "Up to 6 hours listening, 30 hours with case",
      "Warranty": "1 Year Official Apple Warranty"
    }
  },
  {
    id: "airpods-4-anc",
    name: "Apple AirPods 4 with Active Noise Cancellation",
    brand: "Apple",
    category: "AirPods / Audio",
    badge: "OPEN-EAR ANC",
    price: 68500,
    oldPrice: 76000,
    rating: 4.9,
    reviewsCount: 47,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: true,
    newArrival: true,
    colors: [{ name: "White", hex: "#FFFFFF", bg: "#F8F8FA" }],
    storage: [{ size: "USB-C MagSafe Case", price: 68500 }],
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Redesigned acoustic architecture, H2 chip, and Active Noise Cancellation in an open-ear fit.",
    description: "The first open-ear AirPods featuring ANC, Transparency mode, and the smallest wireless charging case.",
    highlights: ["Open-Ear ANC", "Apple H2 Chip", "Wireless Charging Case with Speaker"],
    specs: {
      "Chip": "Apple H2",
      "Battery": "Up to 24 hours with case",
      "Warranty": "1 Year Official Apple Warranty"
    }
  },
  {
    id: "jbl-flip-6",
    name: "JBL Flip 6 Waterproof Portable Bluetooth Speaker",
    brand: "Audio",
    category: "AirPods / Audio",
    badge: "PARTY PROOF",
    price: 36500,
    oldPrice: 42000,
    rating: 4.9,
    reviewsCount: 88,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: true,
    newArrival: false,
    colors: [
      { name: "Midnight Black", hex: "#222222", bg: "#151515" },
      { name: "Ocean Blue", hex: "#1C4E80", bg: "#133557" }
    ],
    storage: [{ size: "Standard 30W", price: 36500 }],
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "2-way speaker system, racetrack-shaped woofer, IP67 waterproof & dustproof, 12 hours playtime.",
    description: "Bold, powerful audio in a compact, rugged frame. Connect multiple speakers with PartyBoost.",
    highlights: ["Bold JBL Original Pro Sound", "IP67 Waterproof & Dustproof", "12 Hours Battery"],
    specs: {
      "Output": "30W RMS (20W woofer + 10W tweeter)",
      "Battery": "Up to 12 hours playtime",
      "Warranty": "6 Months Official Warranty"
    }
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
    brand: "Audio",
    category: "AirPods / Audio",
    badge: "STUDIO KING",
    price: 119000,
    oldPrice: 135000,
    rating: 5.0,
    reviewsCount: 56,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: false,
    newArrival: false,
    colors: [
      { name: "Silver Platinum", hex: "#DDD8D0", bg: "#F1EFEA" },
      { name: "Black", hex: "#212121", bg: "#141414" }
    ],
    storage: [{ size: "Standard Edition", price: 119000 }],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Two processors and 8 microphones for industry-leading noise cancellation, LDAC Hi-Res sound.",
    description: "Precision engineered with 30-hour battery life and ultra-comfortable soft fit leather headband.",
    highlights: ["Dual Processor Noise Canceling", "30-hour Battery with Quick Charge", "Crystal Clear Hands-Free Calling"],
    specs: {
      "Battery": "30 hours with ANC",
      "Codecs": "LDAC, AAC, SBC",
      "Warranty": "1 Year Official Warranty"
    }
  },

  // ================= ACCESSORIES & POWER (iDealz & ONEi styles) =================
  {
    id: "apple-20w-adapter",
    name: "Apple 20W USB-C Power Adapter (Original)",
    brand: "Apple",
    category: "Chargers",
    badge: "GENUINE APPLE",
    price: 8900,
    oldPrice: 11500,
    rating: 5.0,
    reviewsCount: 140,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: true,
    newArrival: false,
    colors: [{ name: "White", hex: "#FFFFFF", bg: "#F8F8FA" }],
    storage: [{ size: "20W UK 3-Pin", price: 8900 }],
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Official Apple 20W USB-C fast power adapter. 50% charge in 30 minutes for iPhone.",
    description: "Authentic sealed Apple adapter with serial number verification. Compatible with all iPhone models.",
    highlights: ["Original Apple Certified", "UK 3-Pin Sri Lanka Plug", "Fast Charges iPhone & iPad"],
    specs: { "Output": "20W USB-C PD", "Warranty": "6 Months Apple Warranty" }
  },
  {
    id: "anker-prime-67w-gan-charger",
    name: "Anker Prime 67W GaN Wall Charger (3-Port)",
    brand: "Anker",
    category: "Chargers",
    badge: "COMPACT GAN",
    price: 23500,
    oldPrice: 27000,
    rating: 5.0,
    reviewsCount: 89,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: true,
    newArrival: false,
    colors: [{ name: "Matte Black", hex: "#2B2D31", bg: "#1E1F22" }],
    storage: [{ size: "67W GaN 3-Port", price: 23500 }],
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Ultra-compact GaNPrime fast charging 2 USB-C and 1 USB-A devices simultaneously.",
    description: "Charges your iPhone, MacBook, and Apple Watch at maximum speeds from one miniature plug.",
    highlights: ["67W Maximum Output", "ActiveShield 2.0 Real-time heat sensor", "51% smaller than Apple 67W"],
    specs: { "Ports": "2x USB-C + 1x USB-A", "Warranty": "18 Months Anker Warranty" }
  },
  {
    id: "anker-maggo-qi2-powerbank",
    name: "Anker MagGo Qi2 15W Magnetic Power Bank 10,000mAh",
    brand: "Anker",
    category: "Accessories",
    badge: "QI2 CERTIFIED",
    price: 29900,
    oldPrice: 34000,
    rating: 4.9,
    reviewsCount: 61,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: true,
    deals: false,
    newArrival: true,
    colors: [
      { name: "Shell White", hex: "#ECEEF0", bg: "#FAFAFB" },
      { name: "Black Obsidian", hex: "#27282B", bg: "#1C1D1F" }
    ],
    storage: [{ size: "10,000mAh with Smart Screen", price: 29900 }],
    image: "https://images.unsplash.com/photo-1609592807906-829d6be0689e?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1609592807906-829d6be0689e?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Certified 15W Qi2 wireless snap-on power with smart LED digital display and fold-out stand.",
    description: "True 15W wireless MagSafe fast charging with real-time battery percentage display and built-in kickstand.",
    highlights: ["15W Qi2 MagSafe", "Smart Digital Display", "Fold-out Kickstand"],
    specs: { "Capacity": "10,000mAh / 38.5Wh", "Warranty": "18 Months Anker Warranty" }
  },
  {
    id: "baseus-blade-100w-powerbank",
    name: "Baseus Blade 100W Ultra-Thin Laptop Power Bank (20,000mAh)",
    brand: "Accessories",
    category: "Accessories",
    badge: "100W LAPTOP POWER",
    price: 27500,
    oldPrice: 32000,
    rating: 4.9,
    reviewsCount: 53,
    stock: true,
    stockText: "In Stock (Gampola Store)",
    featured: false,
    deals: true,
    newArrival: false,
    colors: [{ name: "Space Black", hex: "#1C1D21", bg: "#121316" }],
    storage: [{ size: "20,000mAh 100W PD", price: 27500 }],
    image: "https://images.unsplash.com/photo-1609592807906-829d6be0689e?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1609592807906-829d6be0689e?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Ultra-slim 18mm power bank capable of charging MacBook Pro, Dell XPS, iPhone, and Galaxy at 100W.",
    description: "Features a digital status screen indicating remaining power, voltage, and charging time.",
    highlights: ["100W High Power Output", "Ultra-Slim 18mm Design", "Dual USB-C + Dual USB-A"],
    specs: { "Capacity": "20,000mAh", "Output": "100W Max", "Warranty": "6 Months Warranty" }
  },
  {
    id: "apple-airtag-4pack",
    name: "Apple AirTag (4 Pack Original)",
    brand: "Apple",
    category: "Accessories",
    badge: "PRECISION TRACKING",
    price: 36500,
    oldPrice: 42000,
    rating: 5.0,
    reviewsCount: 78,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: false,
    newArrival: false,
    colors: [{ name: "Silver / White", hex: "#E8E8E8", bg: "#FFFFFF" }],
    storage: [{ size: "Pack of 4", price: 36500 }],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Keep track of keys, wallet, luggage, and backpack in the Apple Find My app with Ultra Wideband.",
    description: "Precision Finding with Apple U1 chip, built-in speaker, IP67 water resistance, and 1-year replaceable battery.",
    highlights: ["Apple Find My Network", "Ultra Wideband Precision Finding", "IP67 Water Resistant"],
    specs: { "Connectivity": "Bluetooth, Apple U1 UWB, NFC", "Warranty": "1 Year Official Apple Warranty" }
  },
  {
    id: "spigen-ultra-hybrid-magfit",
    name: "Spigen Ultra Hybrid MagFit Case for iPhone 16 Pro Max",
    brand: "Accessories",
    category: "Cases & Protection",
    badge: "MILITARY GRADE",
    price: 12500,
    oldPrice: 14500,
    rating: 5.0,
    reviewsCount: 77,
    stock: true,
    stockText: "In Stock (Gampola)",
    featured: false,
    deals: true,
    newArrival: true,
    colors: [
      { name: "Crystal Clear", hex: "#EBF2FA", bg: "#FFFFFF" },
      { name: "Frost Black", hex: "#303236", bg: "#1D1E20" }
    ],
    storage: [
      { size: "iPhone 16 Pro Max", price: 12500 },
      { size: "iPhone 16 Pro", price: 12500 }
    ],
    image: "https://images.unsplash.com/photo-1603539279542-e7589d9eef94?auto=format&fit=crop&w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1603539279542-e7589d9eef94?auto=format&fit=crop&w=900&q=80"],
    shortDesc: "Military grade drop protection with anti-yellowing resin and strong MagSafe magnetic ring.",
    description: "Show off your phone colorway with crystal clarity, air cushion corners, and Camera Control cutout.",
    highlights: ["Anti-yellowing resin", "Strong N52 neodymium magnets", "Raised bezel defense"],
    specs: { "Material": "PC + TPU", "Warranty": "6 Months Replacement Guarantee" }
  }
];

// Global exposure
window.PHONE_CULTURE_PRODUCTS = PRODUCTS_DATA;
window.STORE_CONFIG = STORE_CONFIG;

function getAllProducts() {
  return window.PHONE_CULTURE_PRODUCTS || PRODUCTS_DATA;
}

function getProductById(id) {
  return getAllProducts().find(p => p.id === id) || null;
}

function getFeaturedProducts() {
  return getAllProducts().filter(p => p.featured);
}

function getDealsProducts() {
  return getAllProducts().filter(p => p.deals);
}

function getNewArrivals() {
  return getAllProducts().filter(p => p.newArrival);
}

function getProductsByCategory(category) {
  if (!category || category === "All") return getAllProducts();
  return getAllProducts().filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
}

function getProductsByBrand(brand) {
  if (!brand || brand === "All") return getAllProducts();
  return getAllProducts().filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

function formatLKR(amount) {
  if (!amount && amount !== 0) return "Contact for Price";
  return `Rs. ${Number(amount).toLocaleString('en-US')}`;
}

function getWhatsAppInquiryLink(productName, variant = "", price = "") {
  let message = `Hello Phone Culture Gampola! 👋\n\nI am interested in:\n📱 *${productName}*`;
  if (variant) message += `\n⚙️ Variant: *${variant}*`;
  if (price) message += `\n💰 Listed Price: *${price}*`;
  message += `\n\n📍 Store: No 374, Bothalapitiya, Gampola`;
  message += `\nCould you please confirm current stock availability and delivery options? Thank you!`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getWhatsAppOrderSummaryLink(items, customer = {}, total = 0) {
  let message = `*PHONE CULTURE GAMPOLA — NEW ORDER INQUIRY* 🛍️\n`;
  message += `📍 Showroom: No 374, Bothalapitiya, Gampola\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  if (customer.name) message += `👤 *Customer:* ${customer.name}\n`;
  if (customer.phone) message += `📞 *Phone:* ${customer.phone}\n`;
  if (customer.address) message += `📍 *Delivery Address:* ${customer.address}, ${customer.city || ''}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n*ORDERED ITEMS:*\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
    if (item.selectedColor) message += `   • Color: ${item.selectedColor}\n`;
    if (item.selectedStorage) message += `   • Storage: ${item.selectedStorage}\n`;
    message += `   • Unit: ${formatLKR(item.price)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💳 *Total Amount:* ${formatLKR(total)}\n`;
  message += `🚚 *Delivery:* Gampola / Islandwide Courier\n\n`;
  message += `Please confirm my order and send payment / bank transfer details. Thank you!`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
