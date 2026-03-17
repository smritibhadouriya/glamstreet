// ─────────────────────────────────────────────────────────────────────────────
// products.js  –  Single source of truth for all product data
// Import this wherever you need products: Home, Shop, ProductDetail
// ─────────────────────────────────────────────────────────────────────────────

export const products = [
  {
    id: 1,
    slug: "radiance-vitamin-c-serum",
    name: "Radiance Vitamin C Serum",
    brand: "Mamaearth",
    category: "Skin Care",
    subcategory: ["dryskin", "sensitiveskin", "acneprone"],
    type: "Serum",
    price: 599,
    rating: 4.9,
    reviewCount: 128,
    desc: "A brightening facial serum packed with antioxidant power to even skin tone.",
    description:
      "Enriched with Vitamin C and Turmeric, this face serum brightens your complexion, reduces dark spots, and gives your skin a natural glow. The gentle formula is safe for daily use and free from harmful chemicals.",
    ingredients:
      "Vitamin C (Ascorbic Acid), Niacinamide, Hyaluronic Acid, Kojic Acid, Aloe Vera Extract, Shea Butter, Turmeric Extract, Glycerin",
    howToUse:
      "Take 3-4 drops and apply evenly on cleansed face and neck. Massage gently in circular motions. Use daily in the morning and evening. Follow with SPF during the day.",
    suitableFor: ["Dry Skin", "Oily Skin", "Combination Skin"],
    targets: ["Brightening", "Dark Spots", "Uneven Skin Tone"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 520, redirect: "https://www.nykaa.com/mamaearth-radiance-vitamin-c-serum/p/123456" },
      { name: "Sephora", price: 560, redirect: "https://www.sephora.com/mamaearth-radiance-vitamin-c-serum-P123456" },
      { name: "Purplle", price: 510, redirect: "https://www.purplle.com/product/mamaearth-radiance-vitamin-c-serum" },
    ],
    images: [
      "https://imgs.search.brave.com/ogVsvq3hPh2_afzwtJt0eTIVh-tYb-P5yc3vdPBvXnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG90YW5ka2V5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9BcnRib2Fy/ZF8yXzJiZGEwZmQy/LTA3ZTktNGMwYi1h/MmNhLTgxYjExN2Fm/NWVlZC5qcGc_dj0x/NzczMzgyMDk0",
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/b/bbe1986DOTKE00000054_1a.jpg",
      "https://tse1.mm.bing.net/th/id/OIP.aOKT-KiPqtWWfKxEFpv97gHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.mOlpD_S_xf9B7dfefjxCswHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
    ],
    featured: true,
    signature: false,
    badge: ["summer glow"],
  },
  {
    id: 2,
    slug: "deep-hydration-dew-cream",
    name: "Deep Hydration Dew Cream",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["dryskin", "oilykin", "sensitiveskin", "acneprone"],
    type: "Moisturizer",
    price: 599,
    rating: 4.8,
    reviewCount: 245,
    desc: "72-hour moisture lock with hyaluronic acid and rosewater extracts.",
    description:
      "An intensive overnight balm that works while you sleep to restore your skin barrier, reduce fine lines, and deliver deep hydration. Formulated with Retinol and Peptides for visible anti-aging benefits.",
    ingredients:
      "Retinol, Peptide Complex, Ceramides, Niacinamide, Squalane, Shea Butter, Vitamin E",
    howToUse:
      "Apply a small amount to clean, dry skin every night as the last step in your routine. Avoid the eye area. Use SPF the following morning.",
    suitableFor: ["All Skin Types"],
    targets: ["Anti-aging", "Hydration", "Repair"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 560, redirect: "https://www.nykaa.com/the-glam-street-deep-hydration-dew-cream/p/123457" },
      { name: "Purplle", price: 540, redirect: "https://www.purplle.com/product/the-glam-street-deep-hydration-dew-cream" },
    ],
    images: [
      "https://imgs.search.brave.com/I2YzkkqWcziXzPvfVqEPqE6bptYNmNLMCOJ2lCIDav0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG90YW5ka2V5LmNv/bS9jZG4vc2hvcC9m/aWxlcy8xLTFfMS5q/cGc_dj0xNzYxODg4/ODY4JndpZHRoPTM2MA",
      "https://m.media-amazon.com/images/I/515zn9w7MyL._SL1500_.jpg",
      "https://smytten-image.gumlet.io/discover_product/1684728156_1683777037_1681725002_1674815232_1674206913_1674202428_1673602918_1664545590_2.avif",
    ],
    featured: true,
    signature: false,
    badge: ["best seller"],
  },
  {
    id: 3,
    slug: "gentle-amino-cleanser",
    name: "Gentle Amino Cleanser",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["oilyskin", "dryskin", "sensitiveskin"],
    type: "Cleanser",
    price: 599,
    rating: 4.7,
    reviewCount: 82,
    desc: "Ph-balanced foaming wash that cleanses without stripping natural oils.",
    description:
      "A gentle, pH-balanced amino acid cleanser that effectively removes makeup, sunscreen, and daily grime while maintaining your skin's natural moisture barrier. Suitable for even the most sensitive skin types.",
    ingredients:
      "Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Glycerin, Panthenol, Allantoin, Ceramide NP, Niacinamide",
    howToUse:
      "Wet face with lukewarm water. Dispense a small amount and work into a lather. Massage gently onto skin for 30–60 seconds, then rinse thoroughly. Use morning and evening.",
    suitableFor: ["Sensitive Skin", "Dry Skin", "All Skin Types"],
    targets: ["Deep Cleansing", "Pore Minimizing", "Barrier Repair"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 570, redirect: "https://www.nykaa.com/the-glam-street-gentle-amino-cleanser/p/123458" },
      { name: "Amazon", price: 549, redirect: "https://www.amazon.in/dp/B0ABC12345" },
      { name: "Purplle", price: 559, redirect: "https://www.purplle.com/product/the-glam-street-gentle-amino-cleanser" },
    ],
    images: [
      "https://imgs.search.brave.com/qxHRfxwAl7Kko71xpvqSA3SkcIjkVTQyJLnQ8efO9B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG90YW5ka2V5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9BcnRib2Fy/ZF8xX2Y5NGY0NDU2/LWQzMjgtNDI3MS1h/YjdlLTk0YmRlOGM5/YmJkMy5qcGc_dj0x/NzQ1MzIzNTE1Jndp/ZHRoPTM2MA",
      "https://tse2.mm.bing.net/th/id/OIP.NTmumcmblzQ739ReVdTaWwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    featured: false,
    signature: false,
    badge: ["none"],
  },
  {
    id: 4,
    slug: "daily-spf-50-shield",
    name: "Daily SPF 50 Shield",
    brand: "The Glam Street",
    category: "Body",
    subcategory: ["oilyskin", "dryskin", "sensitiveskin"],
    type: "Sunscreen",
    price: 599,
    rating: 5.0,
    reviewCount: 15,
    desc: "Broad spectrum mineral protection with a weightless, no-white-cast finish.",
    description:
      "A next-generation mineral sunscreen that delivers broad-spectrum SPF 50+ protection while leaving zero white cast. Infused with skincare actives like Niacinamide and Hyaluronic Acid, it doubles as a hydrating primer.",
    ingredients:
      "Zinc Oxide, Titanium Dioxide, Niacinamide, Hyaluronic Acid, Dimethicone, Glycerin, Vitamin E, Green Tea Extract",
    howToUse:
      "Apply generously as the last step in your morning skincare routine. Dot onto face and blend evenly. Reapply every 2 hours when exposed to direct sunlight.",
    suitableFor: ["All Skin Types", "Oily Skin", "Acne Prone"],
    targets: ["Sun Protection", "Oil Control", "Brightening"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 579, redirect: "https://www.nykaa.com/the-glam-street-daily-spf-50-shield/p/123459" },
      { name: "Sephora", price: 599, redirect: "https://www.sephora.com/the-glam-street-daily-spf-50-shield-P123459" },
    ],
    images: [
      "https://imgs.search.brave.com/rwAVFOl89LPB3k1NX6FqQS-V79rMEBlX0z8AXqCtiAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Rh/bmRrZXl1YXQuZG90/YW5ka2V5LmNvbS9j/ZG4vc2hvcC9maWxl/cy8xLUJSLVNlcnVt/Xzk3ODc4ZGNiLTQ1/NjEtNDUwMC04MDBk/LTkyYWMwNGE0Y2U5/Mi5qcGc_dj0xNzU2/NTA3NTEyJndpZHRo/PTM2MA",
      "https://m.media-amazon.com/images/I/81Y7ZtN+fYL._AC_.jpg",
    ],
    featured: true,
    signature: false,
    badge: ["summer glow"],
  },
  {
    id: 5,
    slug: "night-recovery-oil",
    name: "Night Recovery Oil",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["dryskin", "acneprone", "oilyskin"],
    type: "Treatment",
    price: 599,
    rating: 4.6,
    reviewCount: 56,
    desc: "Overnight treatment with Squalane and Rosehip to repair damaged barrier.",
    description:
      "A luxurious overnight treatment oil that deeply nourishes and repairs your skin while you sleep. Squalane and Rosehip work in harmony to reduce signs of aging, improve elasticity, and restore your skin's natural radiance.",
    ingredients:
      "Rosehip Seed Oil, Squalane, Retinol, Sea Buckthorn, Vitamin E, Jojoba Oil, Lavender Essential Oil",
    howToUse:
      "After cleansing and toning, warm 3–5 drops between palms and press gently onto face and neck. Use as the final step in your evening routine. Follow with your moisturizer if needed.",
    suitableFor: ["Dry Skin", "Mature Skin", "Normal Skin"],
    targets: ["Anti-aging", "Repair", "Nourishment"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 579, redirect: "https://www.nykaa.com/the-glam-street-night-recovery-oil/p/123460" },
      { name: "Amazon", price: 569, redirect: "https://www.amazon.in/dp/B0ABC12346" },
      { name: "Purplle", price: 559, redirect: "https://www.purplle.com/product/the-glam-street-night-recovery-oil" },
    ],
    images: [
      "https://imgs.search.brave.com/VXaD-PzhGJcXA4u12khRyTz6ld-vF3BWHdGi35n234s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzJj/LzMyLzYzMmMzMjc1/MjIyMGYwYzRhMmZk/ZWNmMzQ4YTdkYzk0/LmpwZw",
    ],
    featured: false,
    signature: true,
    badge: ["none"],
  },
  {
    id: 6,
    slug: "bright-eye-lift-cream",
    name: "Bright Eye Lift Cream",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["oilyskin", "dryskin", "sensitiveskin"],
    type: "Eye Cream",
    price: 599,
    rating: 4.9,
    reviewCount: 210,
    desc: "Targeted caffeine formula to reduce puffiness and dark circles instantly.",
    description:
      "Powered by caffeine and peptides, this eye cream targets the delicate under-eye area to reduce puffiness, diminish dark circles, and firm the skin for a well-rested look — even on the most exhausting days.",
    ingredients:
      "Caffeine, Peptide Complex, Retinol, Vitamin K, Hyaluronic Acid, Ceramides, Arnica Extract, Niacinamide",
    howToUse:
      "Using your ring finger, gently pat a small amount around the orbital bone morning and evening. Do not rub or pull the delicate eye area.",
    suitableFor: ["All Skin Types"],
    targets: ["Dark Circles", "Puffiness", "Fine Lines"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-bright-eye-lift-cream/p/123461" },
      { name: "Sephora", price: 589, redirect: "https://www.sephora.com/the-glam-street-bright-eye-lift-cream-P123461" },
    ],
    images: [
      "https://imgs.search.brave.com/sTcYyTi-wp7pJ7HRFrzXI_DMSucWiJncEOytKBA8yU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVt/Z29vZG5lc3MuY29t/L2Nkbi9zaG9wL2Zp/bGVzL25pYS1nZWwt/Xy1uaWEtc2VydW0x/LmpwZz92PTE3MzA5/NzQ0MTgmd2lkdGg9/NDYw",
    ],
    featured: false,
    signature: true,
    badge: ["none"],
  },
  {
    id: 7,
    slug: "rose-essence-mist",
    name: "Rose Essence Mist",
    brand: "The Glam Street",
    category: "Self Care",
    subcategory: ["dryskin", "oilyskin", "sensitiveskin"],
    type: "Toner",
    price: 599,
    rating: 4.8,
    reviewCount: 190,
    desc: "Refreshing rose water mist that tones and preps skin for serums.",
    description:
      "A delicate, alcohol-free rose essence mist that instantly hydrates, tones, and preps skin for the next steps in your routine. Infused with real Damask rose extract for a sensorial, spa-like experience.",
    ingredients:
      "Rosa Damascena Flower Water, Glycerin, Niacinamide, Panthenol, Allantoin, Betaine, Rose Hip Extract",
    howToUse:
      "After cleansing, hold bottle 20–30cm from face and mist evenly. Can also be used throughout the day as a refreshing hydration boost over makeup.",
    suitableFor: ["All Skin Types", "Sensitive Skin"],
    targets: ["Hydration", "Toning", "Radiance"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 549, redirect: "https://www.nykaa.com/the-glam-street-rose-essence-mist/p/123462" },
      { name: "Purplle", price: 529, redirect: "https://www.purplle.com/product/the-glam-street-rose-essence-mist" },
      { name: "Amazon", price: 539, redirect: "https://www.amazon.in/dp/B0ABC12347" },
    ],
    images: [
      "https://imgs.search.brave.com/ThEB6ICsePjz1EkaqN2fnBCFCqv-TLvQv4LsXoUDkyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I5L2E0/LzFjL2I5YTQxYzJk/NmM5MWI3YWZiMmM5/NzZkYTk0ZDczNjI4/LmpwZw",
    ],
    featured: true,
    signature: false,
    badge: ["best seller"],
  },
  {
    id: 8,
    slug: "detox-clay-purifier",
    name: "Detox Clay Purifier",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["acneprone", "oilyskin"],
    type: "Mask",
    price: 599,
    rating: 4.5,
    reviewCount: 67,
    desc: "Deep-cleansing clay mask that draws out impurities and unclogs pores.",
    description:
      "A powerful yet gentle kaolin and bentonite clay mask that draws out deep-seated impurities, excess sebum, and environmental pollutants. Enriched with activated charcoal and tea tree to clarify and refine.",
    ingredients:
      "Kaolin, Bentonite Clay, Activated Charcoal, Tea Tree Oil, Salicylic Acid, Aloe Vera, Zinc PCA",
    howToUse:
      "Apply a thin, even layer to cleansed skin, avoiding the eye and lip area. Leave on for 10–15 minutes until dry. Rinse thoroughly with warm water. Use 1–2 times per week.",
    suitableFor: ["Oily Skin", "Acne Prone", "Combination Skin"],
    targets: ["Acne", "Oil Control", "Clogged Pores"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 549, redirect: "https://www.nykaa.com/the-glam-street-detox-clay-purifier/p/123463" },
      { name: "Amazon", price: 539, redirect: "https://www.amazon.in/dp/B0ABC12348" },
    ],
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.5AfCwOILxUMq86KFlfnSPgHaHu?pid=ImgDet&w=474&h=494&rs=1&o=7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.kwCo85J23AeATetYor6mQAHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
    ],
    featured: true,
    signature: false,
    badge: ["summer glow"],
  },
  {
    id: 9,
    slug: "frizz-control-serum",
    name: "Frizz Control Serum",
    brand: "The Glam Street",
    category: "Hair Care",
    subcategory: ["frizzy", "long"],
    type: "Serum",
    price: 599,
    rating: 4.7,
    reviewCount: 144,
    desc: "Lightweight serum that tames frizz and adds brilliant shine.",
    description:
      "A featherlight hair serum infused with argan oil and keratin that smooths the cuticle, eliminates frizz, and imparts a mirror-like shine. Suitable for all hair types — from wavy to coily.",
    ingredients:
      "Argan Oil, Hydrolyzed Keratin, Cyclopentasiloxane, Dimethicone, Vitamin E, Panthenol, Camellia Oil",
    howToUse:
      "Dispense 1–2 pumps onto palms. Distribute evenly through damp or dry hair, focusing on mid-lengths and ends. Style as usual. Do not apply directly to roots.",
    suitableFor: ["All Hair Types"],
    targets: ["Frizz", "Shine", "Smoothness"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-frizz-control-serum/p/123464" },
      { name: "Amazon", price: 549, redirect: "https://www.amazon.in/dp/B0ABC12349" },
    ],
    images: [
      "https://imgs.search.brave.com/cb6zOvJmgom9hD28YezOH-r9Wx19VHxTJDQmWpMZDiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0LzI3/LzhlLzk0Mjc4ZTg4/ODE3OTU5Yzk2MDZk/MWVkNThiOTE3NTVj/LmpwZw",
    ],
    featured: false,
    signature: false,
    badge: ["none"],
  },
  {
    id: 10,
    slug: "curl-define-cream",
    name: "Curl Define Cream",
    brand: "The Glam Street",
    category: "Hair Care",
    subcategory: ["curl", "wave"],
    type: "Styler",
    price: 599,
    rating: 4.8,
    reviewCount: 98,
    desc: "Defines and nourishes curls with shea butter and coconut oil.",
    description:
      "A rich curl-defining cream that nourishes, defines, and elongates curls from wash day to day three. Shea butter, coconut oil, and flaxseed gel lock in moisture and keep curls springy without crunch.",
    ingredients:
      "Shea Butter, Coconut Oil, Flaxseed Gel, Castor Oil, Glycerin, Hydrolyzed Silk Protein, Aloe Vera",
    howToUse:
      "Apply generously to soaking-wet hair in sections. Scrunch upwards to enhance curl pattern. Diffuse or air dry. Scrunch out the cast once dry for soft, defined curls.",
    suitableFor: ["Curly Hair", "Coily Hair", "Wavy Hair"],
    targets: ["Curl Definition", "Frizz", "Moisture"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-curl-define-cream/p/123465" },
      { name: "Purplle", price: 549, redirect: "https://www.purplle.com/product/the-glam-street-curl-define-cream" },
    ],
    images: [
      "https://imgs.search.brave.com/VXaD-PzhGJcXA4u12khRyTz6ld-vF3BWHdGi35n234s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzJj/LzMyLzYzMmMzMjc1/MjIyMGYwYzRhMmZk/ZWNmMzQ4YTdkYzk0/LmpwZw",
    ],
    featured: false,
    signature: false,
    badge: ["summer glow"],
  },
  {
    id: 11,
    slug: "damage-repair-mask",
    name: "Damage Repair Mask",
    brand: "The Glam Street",
    category: "Hair Care",
    subcategory: ["long", "frizzy"],
    type: "Mask",
    price: 599,
    rating: 4.9,
    reviewCount: 203,
    desc: "Intensive protein treatment that rebuilds and strengthens damaged strands.",
    description:
      "A professional-strength protein treatment mask that penetrates deep into the cortex to rebuild broken bonds, reinforce strand integrity, and dramatically reduce breakage. Perfect for color-treated, heat-damaged, or chemically processed hair.",
    ingredients:
      "Hydrolyzed Wheat Protein, Hydrolyzed Keratin, Argan Oil, Biotin, Panthenol, Coconut Oil, Shea Butter",
    howToUse:
      "After shampooing, apply generously to towel-dried hair. Leave on for 10–20 minutes. Rinse thoroughly. Use weekly for best results.",
    suitableFor: ["Damaged Hair", "Color-Treated Hair", "All Hair Types"],
    targets: ["Damage Repair", "Strengthening", "Shine"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-damage-repair-mask/p/123466" },
      { name: "Amazon", price: 549, redirect: "https://www.amazon.in/dp/B0ABC12350" },
      { name: "Purplle", price: 559, redirect: "https://www.purplle.com/product/the-glam-street-damage-repair-mask" },
    ],
    images: [
      "https://imgs.search.brave.com/ThEB6ICsePjz1EkaqN2fnBCFCqv-TLvQv4LsXoUDkyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I5L2E0/LzFjL2I5YTQxYzJk/NmM5MWI3YWZiMmM5/NzZkYTk0ZDczNjI4/LmpwZw",
    ],
    featured: false,
    signature: false,
    badge: ["best seller"],
  },
  {
    id: 12,
    slug: "velvet-matte-lipstick",
    name: "Velvet Matte Lipstick",
    brand: "The Glam Street",
    category: "Makeup",
    subcategory: ["dryskin", "sensitiveskin"],
    type: "Lip Color",
    price: 599,
    rating: 4.6,
    reviewCount: 312,
    desc: "Long-lasting matte formula in stunning Indian-inspired shades.",
    description:
      "A velvety matte lipstick with rich, buildable pigment that glides on smoothly and stays put for up to 8 hours. Formulated with Vitamin E and Jojoba Oil to keep lips moisturized even under the matte finish. Inspired by the rich, warm hues of Indian culture.",
    ingredients:
      "Castor Oil, Candelilla Wax, Beeswax, Jojoba Oil, Vitamin E, Shea Butter, Caprylyl Methicone",
    howToUse:
      "Line lips first for a precise edge. Apply directly from bullet or with a brush. Build pigment with a second coat for bolder impact. Remove with micellar water or oil cleanser.",
    suitableFor: ["All Lip Types"],
    targets: ["Color", "Longevity", "Moisture"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 549, redirect: "https://www.nykaa.com/the-glam-street-velvet-matte-lipstick/p/123467" },
      { name: "Sephora", price: 579, redirect: "https://www.sephora.com/the-glam-street-velvet-matte-lipstick-P123467" },
      { name: "Ulta", price: 569, redirect: "https://www.ulta.com/the-glam-street-velvet-matte-lipstick" },
    ],
    images: [
      "https://imgs.search.brave.com/qxHRfxwAl7Kko71xpvqSA3SkcIjkVTQyJLnQ8efO9B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG90YW5ka2V5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9BcnRib2Fy/ZF8xX2Y5NGY0NDU2/LWQzMjgtNDI3MS1h/YjdlLTk0YmRlOGM5/YmJkMy5qcGc_dj0x/NzQ1MzIzNTE1Jndp/ZHRoPTM2MA",
    ],
    featured: false,
    signature: false,
    badge: ["none"],
  },
  {
    id: 13,
    slug: "aura-glow-serum",
    name: "Aura Glow Serum",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["oilyskin", "dryskin", "acneprone"],
    type: "Serum",
    price: 599,
    rating: 4.8,
    reviewCount: 167,
    desc: "A luminous serum that gives skin an inner-lit, glass-skin glow.",
    description:
      "Our bestselling Aura Glow Serum is a cocktail of brightening actives — niacinamide, tranexamic acid, and pearl extract — that work synergistically to fade dark spots, boost radiance, and deliver the coveted glass-skin effect.",
    ingredients:
      "Niacinamide, Tranexamic Acid, Pearl Extract, Alpha Arbutin, Hyaluronic Acid, Vitamin C, Licorice Root Extract",
    howToUse:
      "Apply 3-4 drops to a clean face after toner. Gently press into skin and allow to absorb before applying moisturizer. Use morning and evening for best results.",
    suitableFor: ["All Skin Types", "Dull Skin"],
    targets: ["Brightening", "Dark Spots", "Glass Skin"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-aura-glow-serum/p/123468" },
      { name: "Amazon", price: 549, redirect: "https://www.amazon.in/dp/B0ABC12351" },
    ],
    images: [
      "https://imgs.search.brave.com/VXaD-PzhGJcXA4u12khRyTz6ld-vF3BWHdGi35n234s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzJj/LzMyLzYzMmMzMjc1/MjIyMGYwYzRhMmZk/ZWNmMzQ4YTdkYzk0/LmpwZw",
    ],
    featured: false,
    signature: true,
    badge: ["best seller"],
  },
  {
    id: 14,
    slug: "nocturnal-repair",
    name: "Nocturnal Repair",
    brand: "The Glam Street",
    category: "Skin Care",
    subcategory: ["dryskin"],
    type: "Treatment",
    price: 599,
    rating: 4.7,
    reviewCount: 134,
    desc: "A retinol-powered night treatment that repairs and renews skin overnight.",
    description:
      "Nocturnal Repair harnesses the power of encapsulated retinol and bakuchiol to accelerate cell turnover, smooth fine lines, and visibly firm skin — all while you sleep. Wake up to noticeably renewed, plumper skin.",
    ingredients:
      "Encapsulated Retinol, Bakuchiol, Ceramides, Peptide Complex, Squalane, Resveratrol, Vitamin E",
    howToUse:
      "Apply a pea-sized amount to clean, dry skin in the evening. Start with 2–3 nights per week and build up. Always use SPF the following morning.",
    suitableFor: ["Mature Skin", "Normal Skin", "Dry Skin"],
    targets: ["Anti-aging", "Fine Lines", "Firmness"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-nocturnal-repair/p/123469" },
      { name: "Sephora", price: 589, redirect: "https://www.sephora.com/the-glam-street-nocturnal-repair-P123469" },
    ],
    images: [
      "https://imgs.search.brave.com/sTcYyTi-wp7pJ7HRFrzXI_DMSucWiJncEOytKBA8yU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVt/Z29vZG5lc3MuY29t/L2Nkbi9zaG9wL2Zp/bGVzL25pYS1nZWwt/Xy1uaWEtc2VydW0x/LmpwZz92PTE3MzA5/NzQ0MTgmd2lkdGg9/NDYw",
    ],
    featured: false,
    signature: true,
    badge: ["none"],
  },
  {
    id: 15,
    slug: "dewy-mist",
    name: "Dewy Mist",
    brand: "The Glam Street",
    category: "Self Care",
    subcategory: ["dryskin", "oilyskin", "sensitiveskin"],
    type: "Toner",
    price: 599,
    rating: 4.6,
    reviewCount: 89,
    desc: "A dewy, glass-skin setting mist that refreshes and locks in moisture.",
    description:
      "The Dewy Mist is the final touch your routine has been missing. A fine-mist formula of hyaluronic acid, glycerin, and lotus water that sets makeup, boosts hydration, and imparts a luminous, glass-skin finish.",
    ingredients:
      "Lotus Flower Water, Hyaluronic Acid, Glycerin, Niacinamide, Betaine, Panthenol, Centella Asiatica",
    howToUse:
      "Mist onto clean skin or over makeup. Hold 20–30cm from face. Use as often as needed throughout the day for a dewy refresh.",
    suitableFor: ["All Skin Types", "Dry Skin"],
    targets: ["Hydration", "Dewy Finish", "Setting"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 549, redirect: "https://www.nykaa.com/the-glam-street-dewy-mist/p/123470" },
      { name: "Purplle", price: 529, redirect: "https://www.purplle.com/product/the-glam-street-dewy-mist" },
    ],
    images: [
      "https://imgs.search.brave.com/cb6zOvJmgom9hD28YezOH-r9Wx19VHxTJDQmWpMZDiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0LzI3/LzhlLzk0Mjc4ZTg4/ODE3OTU5Yzk2MDZk/MWVkNThiOTE3NTVj/LmpwZw",
    ],
    featured: false,
    signature: true,
    badge: ["summer glow"],
  },
  {
    id: 16,
    slug: "petal-infusion",
    name: "Petal Infusion",
    brand: "The Glam Street",
    category: "Lip",
    subcategory: ["dryskin", "sensitiveskin"],
    type: "Serum",
    price: 599,
    rating: 4.9,
    reviewCount: 211,
    desc: "A floral-infused brightening serum for a petal-soft, luminous complexion.",
    description:
      "A luxurious serum distilled from 100 fresh rose petals per bottle, enriched with precious flower extracts — jasmine, cherry blossom, and peony. Petal Infusion delivers an instant flush of radiance and long-term brightening for a complexion that blooms.",
    ingredients:
      "Rosa Damascena Distillate, Jasmine Extract, Cherry Blossom Extract, Peony Root Extract, Vitamin C, Niacinamide, Hyaluronic Acid",
    howToUse:
      "Apply 4-5 drops to clean skin after toning. Layer under moisturizer. Can be mixed with foundation for an all-over dewy glow. Use morning and/or evening.",
    suitableFor: ["All Skin Types"],
    targets: ["Brightening", "Radiance", "Hydration"],
    inStock: true,
    retailers: [
      { name: "Nykaa", price: 569, redirect: "https://www.nykaa.com/the-glam-street-petal-infusion/p/123471" },
      { name: "Sephora", price: 589, redirect: "https://www.sephora.com/the-glam-street-petal-infusion-P123471" },
      { name: "Amazon", price: 549, redirect: "https://www.amazon.in/dp/B0ABC12352" },
    ],
    images: [
      "https://imgs.search.brave.com/ThEB6ICsePjz1EkaqN2fnBCFCqv-TLvQv4LsXoUDkyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I5L2E0/LzFjL2I5YTQxYzJk/NmM5MWI3YWZiMmM5/NzZkYTk0ZDczNjI4/LmpwZw",
    ],
    featured: false,
    signature: true,
    badge: ["none"]
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Derived helpers – import and use these directly to avoid re-filtering
// ─────────────────────────────────────────────────────────────────────────────

/** All products as a lookup map by id */
export const productsById = products.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

/** All products as a lookup map by slug */
export const productsBySlug = products.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});

/** Products shown in Featured Products section on Home */
export const featuredProducts = products.filter((p) => p.featured);

/** Products shown in The Signature Collection carousel on Home */
export const signatureProducts = products.filter((p) => p.signature);

/** Products used in "You Might Also Love" related section on Product Detail */
export function getRelatedProducts(currentId, count = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, count);
}

/** Get product by slug */
export function getProductBySlug(slug) {
  return productsBySlug[slug] || null;
}

/** Get product by id */
export function getProductById(id) {
  return productsById[id] || null;
}

/** New arrivals for sidebar widget on Shop page - based on summer glow badge */
export const newArrivals = products.filter((p) => p.badge.includes("summer glow")).slice(0, 3);

/** Best sellers for filtering or widgets */
export const bestSellers = products.filter((p) => p.badge.includes("best seller"));