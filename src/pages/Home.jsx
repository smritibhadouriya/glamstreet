import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// ── Import centralized product data ──────────────────────────────
import { featuredProducts, signatureProducts } from '../data/Products';

// ── Asset imports (keep as-is from original) ────────────────────
import Banner1 from '../assets/banner.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import Hello1 from '../assets/Beauty/hello1.png';
import Hello2 from '../assets/Beauty/hello2.png';
import Hello3 from '../assets/Beauty/hello3.png';
import Hello4 from '../assets/Beauty/hello4.png';


import HairTypeFilled from '../assets/glamstreet icons/Hair type filled.png'
import HairTypeUnfilled from '../assets/glamstreet icons/Hair type Unfilled.png'

import HaircareFilled from '../assets/glamstreet icons/Haircare filled.png'
import HaircareUnfilled from '../assets/glamstreet icons/Haircare Unfilled.png'

import IngredientsFilled from '../assets/glamstreet icons/ingredeints filled.png'
import IngredientsUnfilled from '../assets/glamstreet icons/Ingredients Unfilled.png'

import MakeupFilled from '../assets/glamstreet icons/makeup Filled.png'
import MakeupUnfilled from '../assets/glamstreet icons/makeup unfilled.png'

import SelfcareFilled from '../assets/glamstreet icons/SelcareFilled.png'
import SelfcareUnfilled from '../assets/glamstreet icons/Selfcare needs unfilled.png'

import SkinTypeUnfilled from '../assets/glamstreet icons/Skin type Unfilled.png'
import SkintypeFilled from '../assets/glamstreet icons/Skintype filled.png'

import SkincareFilled from '../assets/glamstreet icons/Skincare filled.png'
import SkincareUnfilled from '../assets/glamstreet icons/Skincare unfilled.png'


import { FaChevronDown } from 'react-icons/fa';

// ── Banner carousel data ─────────────────────────────────────────
const banners = [
  { id: 1, to: '/shop', bg: 'from-rose-200 via-pink-100 to-amber-100', label: 'HairCare', img: Banner1 },
  { id: 2, to: '/shop/face', bg: 'from-slate-200 via-stone-100 to-rose-100', label: 'Face', img: Banner2 },
  { id: 3, to: '/shop/body', bg: 'from-amber-100 via-orange-50 to-pink-100', label: 'Body', img: Banner3 },
];


// ── Beauty Edits panels ──────────────────────────────────────────
const beautyPanels = [
  { label: 'HairCare', bg: 'from-stone-300 to-stone-400', image: Hello2 },
  { label: 'Face',     bg: 'from-slate-200 to-slate-300', image: Hello3 },
  { label: 'Body',     bg: 'from-amber-100 to-amber-200', image: Hello4 },
  { label: 'Lips',     bg: 'from-rose-200 to-rose-300',   image: Hello1 },
];

// ── Ingredients data ─────────────────────────────────────────────
const ingredients = [
  { name: 'Neem',          image: 'https://imgs.search.brave.com/VUsofQaDUoXl-gzscbX7uszOLDrspihSK3FhBp5EOtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/ODQwLzA2NS9zbWFs/bC9hemFkaXJhY2h0/YS1pbmRpY2EtYS1i/cmFuY2gtb2YtbmVl/bS10cmVlLWxlYXZl/cy1uYXR1cmFsLW1l/ZGljaW5lLXBob3Rv/LmpwZw' },
  { name: 'Salicylic Acid', image: 'https://imgs.search.brave.com/vg0IlaE0kd1049pbJRVsRW49zq_0X5FaddE8lklZLGQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14M2h1/cjB4ZTRyL2ltYWdl/cy9zdGVuY2lsL29y/aWdpbmFsL2ltYWdl/LW1hbmFnZXIvcHJl/dHR5LXlvdW5nLWFz/aWFuLXdvbWFuLXdp/dGgtYWNuZS1wcm9u/ZS1za2luLWhvbGQt/MjAyNC0wMi0yOC0x/Ny0zMC0xMi11dGMt/MWQucG5nP3Q9MTcy/NTUyMjIxMQ' },
  { name: 'Shea Butter',    image: 'https://imgs.search.brave.com/MDSC6-ayLsh5gCiy_7DIV6kCtUDSYfBo0atsUmUfGh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4Lzk4Lzg5LzM5/LzM2MF9GXzE4OTg4/OTM5NzNfQkxOc212/Vm5BeXNmdkM1Z09Q/TE1vWG5RUUZldVdZ/QWMuanBn' },
  { name: 'Aloe Vera',      image: 'https://imgs.search.brave.com/o2wp8XdhD5JDlpp9MLk5LYrmVbi5FQsj4mOxrli5kP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzdi/L2JiLzJhN2JiYjU2/OWUzMTFlZjlmN2M1/YTMzZjZhMzJmZDgw/LmpwZw' },
  { name: 'Vitamin C',      image: 'https://imgs.search.brave.com/eAMx8odfno1Bv4r4lC0p555Q7mSwGjRuCmfQDvCWNZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAz/NDEwNDQxOC9waG90/by9jaXRydXMtZXNz/ZW50aWFsLW9pbC12/aXRhbWluLWMtc2Vy/dW0td2l0aC1mcmVz/aC1qdWljeS1vcmFu/Z2UtZnJ1aXQtb24t/d2hpdGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cnh2Tk5K/enRoYnRBeERaTmx1/TlFCRmdiMzU2NUti/MkFCTWFfTnJ2ZWt1/az0' },
  { name: 'Green Tea',      image: 'https://imgs.search.brave.com/Y1g_U7Nw0QbumpNP5mRat30-fB2g-E1hCUZjiLXs888/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FhLzVk/LzY0L2FhNWQ2NDYz/NGQ0MjEwYTYyNmJh/NjczOTEwNjVhMWEw/LmpwZw' },
];

// ── Quiz data ────────────────────────────────────────────────────
// (kept exactly as original — quiz recommendations are editorial, not product-data driven)
const quizData = {
  "Skin Care": {
    questions: [
      { id: "skin_type", question: "What is your skin type?", options: [{ id: "oily", icon: "💧", label: "Oily", desc: "Shiny appearance, visible pores" },{ id: "dry", icon: "🌿", label: "Dry", desc: "Feeling tight, flaky patches" },{ id: "combination", icon: "☯️", label: "Combination", desc: "Oily T-zone, dry cheeks" },{ id: "acne", icon: "🔴", label: "Acne Prone", desc: "Frequent breakouts, congestion" },{ id: "sensitive", icon: "🌸", label: "Sensitive", desc: "Redness, reacts to products" }] },
      { id: "concern", question: "What is your main skin concern?", options: [{ id: "aging", icon: "⏳", label: "Anti-Aging", desc: "Fine lines, wrinkles" },{ id: "brightening", icon: "✨", label: "Brightening", desc: "Dullness, dark spots" },{ id: "hydration", icon: "💦", label: "Hydration", desc: "Dehydrated, tight skin" },{ id: "pores", icon: "🔬", label: "Pores", desc: "Enlarged, clogged pores" }] },
      { id: "routine", question: "How would you describe your current routine?", options: [{ id: "none", icon: "🚿", label: "Minimal", desc: "Just cleanser & moisturiser" },{ id: "basic", icon: "🧴", label: "Basic", desc: "A few key steps" },{ id: "full", icon: "💎", label: "Full Routine", desc: "Serums, toners, SPF" }] },
    ],
    products: {
      oily: [{ id: 1, name: "Oil-Control Cleanser", brand: "ClearSkin", price: "$24", badge: "Bestseller", color: "#ffe0eb" },{ id: 2, name: "Niacinamide Serum 10%", brand: "The Ordinary", price: "$12", badge: "Top Rated", color: "#fce4ec" },{ id: 3, name: "Mattifying Moisturiser", brand: "Neutrogena", price: "$18", badge: "New", color: "#fde8f0" }],
      dry: [{ id: 4, name: "Hyaluronic Acid Serum", brand: "Vichy", price: "$32", badge: "Bestseller", color: "#fce4ec" },{ id: 5, name: "Rich Barrier Cream", brand: "CeraVe", price: "$16", badge: "Top Rated", color: "#ffe0eb" },{ id: 6, name: "Squalane Facial Oil", brand: "Biossance", price: "$45", badge: "Luxury", color: "#fde8f0" }],
      combination: [{ id: 7, name: "Balancing Toner", brand: "Pixi", price: "$28", badge: "Fan Fave", color: "#fce4ec" },{ id: 8, name: "Lightweight Gel Cream", brand: "Clinique", price: "$30", badge: "Bestseller", color: "#ffe0eb" },{ id: 9, name: "Dual-Action Exfoliant", brand: "Paula's Choice", price: "$35", badge: "Top Rated", color: "#fde8f0" }],
      acne: [{ id: 10, name: "Salicylic Cleanser", brand: "La Roche-Posay", price: "$22", badge: "Dermatologist Pick", color: "#ffe0eb" },{ id: 11, name: "Benzoyl Peroxide Gel", brand: "Proactiv", price: "$19", badge: "Fast Acting", color: "#fce4ec" },{ id: 12, name: "Spot Treatment Patches", brand: "Hero", price: "$13", badge: "Viral", color: "#fde8f0" }],
      sensitive: [{ id: 13, name: "Gentle Micellar Water", brand: "Bioderma", price: "$18", badge: "Fragrance-Free", color: "#fce4ec" },{ id: 14, name: "Centella Calm Serum", brand: "COSRX", price: "$26", badge: "Soothing", color: "#ffe0eb" },{ id: 15, name: "Barrier Repair Cream", brand: "Avène", price: "$34", badge: "Allergy Tested", color: "#fde8f0" }],
      default: [{ id: 16, name: "Daily SPF 50+ Sunscreen", brand: "Altruist", price: "$8", badge: "Must Have", color: "#ffe0eb" },{ id: 17, name: "Vitamin C Brightening Serum", brand: "SkinCeuticals", price: "$58", badge: "Gold Standard", color: "#fce4ec" },{ id: 18, name: "Peptide Eye Cream", brand: "Olay", price: "$29", badge: "Top Rated", color: "#fde8f0" }],
    },
  },
  "Hair Care": {
    questions: [
      { id: "hair_type", question: "What is your hair type?", options: [{ id: "straight", icon: "〰️", label: "Straight", desc: "Sleek, tends to get oily" },{ id: "wavy", icon: "🌊", label: "Wavy", desc: "S-shaped, frizz-prone" },{ id: "curly", icon: "🌀", label: "Curly", desc: "Defined curls, dry ends" },{ id: "coily", icon: "🔁", label: "Coily", desc: "Tight coils, very dry" }] },
      { id: "hair_concern", question: "What is your main hair concern?", options: [{ id: "damage", icon: "🔥", label: "Damage & Breakage", desc: "Heat, chemical damage" },{ id: "frizz", icon: "💨", label: "Frizz Control", desc: "Humidity, flyaways" },{ id: "growth", icon: "🌱", label: "Hair Growth", desc: "Thinning, shedding" },{ id: "scalp", icon: "🧠", label: "Scalp Health", desc: "Dandruff, oiliness" }] },
      { id: "wash_freq", question: "How often do you wash your hair?", options: [{ id: "daily", icon: "📅", label: "Daily", desc: "Every day" },{ id: "few", icon: "🗓️", label: "2–3x a week", desc: "Regular wash" },{ id: "weekly", icon: "📆", label: "Weekly", desc: "Low-poo method" }] },
    ],
    products: {
      straight: [{ id: 20, name: "Volumising Shampoo", brand: "Kérastase", price: "$38", badge: "Salon Grade", color: "#ffe0eb" },{ id: 21, name: "Lightweight Leave-In", brand: "Olaplex", price: "$28", badge: "Bestseller", color: "#fce4ec" },{ id: 22, name: "Shine Serum", brand: "Moroccanoil", price: "$44", badge: "Cult Fave", color: "#fde8f0" }],
      wavy: [{ id: 23, name: "Curl-Enhancing Mousse", brand: "Not Your Mother's", price: "$9", badge: "Value Pick", color: "#fce4ec" },{ id: 24, name: "Anti-Frizz Cream", brand: "Aussie", price: "$14", badge: "Fan Fave", color: "#ffe0eb" },{ id: 25, name: "Deep Conditioning Mask", brand: "Pantene", price: "$12", badge: "Hydrating", color: "#fde8f0" }],
      curly: [{ id: 26, name: "Curl Defining Cream", brand: "Shea Moisture", price: "$16", badge: "Natural", color: "#ffe0eb" },{ id: 27, name: "Co-Wash Conditioner", brand: "As I Am", price: "$12", badge: "Bestseller", color: "#fce4ec" },{ id: 28, name: "Glycerin Curl Gel", brand: "Eco Styler", price: "$8", badge: "Hold Strong", color: "#fde8f0" }],
      coily: [{ id: 29, name: "Moisture Retention Shampoo", brand: "Carol's Daughter", price: "$14", badge: "Hydrating", color: "#fce4ec" },{ id: 30, name: "Whipped Butter Cream", brand: "Cantu", price: "$10", badge: "Bestseller", color: "#ffe0eb" },{ id: 31, name: "Scalp & Hair Oil", brand: "ORS", price: "$9", badge: "Classic", color: "#fde8f0" }],
      default: [{ id: 32, name: "Bond Repair Treatment", brand: "Olaplex No.3", price: "$30", badge: "Iconic", color: "#ffe0eb" },{ id: 33, name: "Purple Toning Shampoo", brand: "Fanola", price: "$22", badge: "Top Rated", color: "#fce4ec" },{ id: 34, name: "Heat Protectant Spray", brand: "TRESemmé", price: "$11", badge: "Essential", color: "#fde8f0" }],
    },
  },
  Makeup: {
    questions: [
      { id: "coverage", question: "What coverage do you prefer?", options: [{ id: "natural", icon: "🌿", label: "No Makeup", desc: "Skin-like, natural finish" },{ id: "light", icon: "☁️", label: "Light Coverage", desc: "Even tone, breathable" },{ id: "medium", icon: "🌓", label: "Medium Coverage", desc: "Buildable, balanced" },{ id: "full", icon: "💄", label: "Full Coverage", desc: "Flawless, long-wear" }] },
      { id: "finish", question: "What finish do you prefer?", options: [{ id: "matte", icon: "🪨", label: "Matte", desc: "No shine, velvety" },{ id: "dewy", icon: "✨", label: "Dewy", desc: "Glassy, luminous" },{ id: "satin", icon: "🎀", label: "Satin", desc: "Balanced, natural sheen" }] },
      { id: "style", question: "What's your go-to makeup style?", options: [{ id: "everyday", icon: "☀️", label: "Everyday", desc: "Quick, effortless" },{ id: "glam", icon: "💫", label: "Glam", desc: "Bold, statement looks" },{ id: "editorial", icon: "🎨", label: "Editorial", desc: "Creative, experimental" },{ id: "natural", icon: "🍃", label: "Clean Beauty", desc: "Natural ingredients" }] },
    ],
    products: {
      natural: [{ id: 40, name: "Skin Tint SPF 30", brand: "ILIA", price: "$48", badge: "Clean Beauty", color: "#ffe0eb" },{ id: 41, name: "Tinted Moisturiser", brand: "Laura Mercier", price: "$54", badge: "Cult Fave", color: "#fce4ec" },{ id: 42, name: "Lip & Cheek Balm", brand: "Rare Beauty", price: "$22", badge: "Bestseller", color: "#fde8f0" }],
      light: [{ id: 43, name: "Weightless Foundation", brand: "Fenty Beauty", price: "$40", badge: "40 Shades", color: "#fce4ec" },{ id: 44, name: "Pressed Powder", brand: "MAC", price: "$35", badge: "Iconic", color: "#ffe0eb" },{ id: 45, name: "Setting Spray", brand: "Urban Decay", price: "$32", badge: "Long Wear", color: "#fde8f0" }],
      medium: [{ id: 46, name: "Serum Foundation", brand: "Giorgio Armani", price: "$68", badge: "Luxury", color: "#ffe0eb" },{ id: 47, name: "Concealer Duo", brand: "NARS", price: "$30", badge: "Top Rated", color: "#fce4ec" },{ id: 48, name: "Baked Blush", brand: "Too Faced", price: "$26", badge: "Bestseller", color: "#fde8f0" }],
      full: [{ id: 49, name: "HD Foundation", brand: "Make Up For Ever", price: "$54", badge: "Pro Grade", color: "#fce4ec" },{ id: 50, name: "Full Cover Concealer", brand: "Dermablend", price: "$36", badge: "High Coverage", color: "#ffe0eb" },{ id: 51, name: "Setting Powder", brand: "Charlotte Tilbury", price: "$45", badge: "Viral", color: "#fde8f0" }],
      default: [{ id: 52, name: "Lengthening Mascara", brand: "L'Oréal Paris", price: "$12", badge: "Fan Fave", color: "#ffe0eb" },{ id: 53, name: "Brow Pencil", brand: "Benefit", price: "$25", badge: "Bestseller", color: "#fce4ec" },{ id: 54, name: "Lip Liner & Lipstick Set", brand: "NYX", price: "$18", badge: "Value Pick", color: "#fde8f0" }],
    },
  },
};

// ── Reviews data ─────────────────────────────────────────────────
const reviews = [
  { id: 1, videoId: "bECCGZgkZTs", name: "Aura Glow Serum",    price: "₹599" },
  { id: 2, videoId: "QSw2iagAtv8", name: "Nocturnal Repair",   price: "₹799" },
  { id: 3, videoId: "YB5HVZdWSpk", name: "Dewy Mist",          price: "₹850" },
  { id: 4, videoId: "UJDke1v_Awk", name: "Petal Infusion",     price: "₹600" },
];

// ── Small Icon Components ────────────────────────────────────────
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#c0175d"/>
    <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="#ddd" strokeWidth="1.5"/>
  </svg>
);
const LockIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="7" y="15" width="22" height="16" rx="3" stroke="#e8a0b8" strokeWidth="1.8"/>
    <path d="M12 15v-4a6 6 0 0112 0v4" stroke="#e8a0b8" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="18" cy="23" r="2.5" fill="#e8a0b8"/>
  </svg>
);

// ════════════════════════════════════════════════════════════════
// Sub-Components
// ════════════════════════════════════════════════════════════════

function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const go = (idx) => {
    setCurrent(idx);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % banners.length), 4000);
  };
  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % banners.length), 4000);
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative w-full overflow-hidden h-[520px]  rounded-3xl">
        {banners.map((b, i) => (
          <Link key={b.id} to={b.to} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <img src={b.img} alt={b.label} className="w-full h-full object-contain-cover"/>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6 pb-4">
        {banners.map((_, i) => (
          <button key={i} onClick={() => go(i)} className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-[#c2185b]' : 'w-4 h-3 bg-gray-500 hover:bg-[#c2185b]'}`}/>
        ))}
      </div>
    </div>
  );
}

function ShopByCategory() {
  // State to track hovered category
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Updated categories with both filled and unfilled icons
  const categories = [
    {
      name: 'Self-care Needs',
      to: '/shop/selfcare',
      iconFilled: SelfcareFilled,
      iconUnfilled: SelfcareUnfilled,
    },
    {
      name: 'Ingredients',
      to: '/shop/ingredients',
      iconFilled: IngredientsFilled,
      iconUnfilled: IngredientsUnfilled,
    },
    {
      name: 'Skin Type',
      to: '/shop/skintype',
      iconFilled: SkintypeFilled,
      iconUnfilled: SkinTypeUnfilled,
    },
    {
      name: 'Skin Care',
      to: '/shop/skincare',
      iconFilled: SkincareFilled,
      iconUnfilled: SkincareUnfilled,
    },
    {
      name: 'Makeup',
      to: '/shop/makeup',
      iconFilled: MakeupFilled,
      iconUnfilled: MakeupUnfilled,
    },
    {
      name: 'Hair Type',
      to: '/shop/hairtype',
      iconFilled: HairTypeFilled,
      iconUnfilled: HairTypeUnfilled,
    },
    {
      name: 'Hair Care',
      to: '/shop/haircare',
      iconFilled: HaircareFilled,
      iconUnfilled: HaircareUnfilled,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-2xl font-bold text-gray-900 text-center mb-8">Shop By Categories</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {categories.map((cat) => {
            const isHovered = hoveredCategory === cat.name;
            return (
              <Link 
                key={cat.name} 
                to={cat.to} 
                className="flex flex-col items-center gap-2 group"
                onMouseEnter={() => setHoveredCategory(cat.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="w-18 h-18  flex items-center justify-center transition-all duration-200  group-hover:bg-pink-100 rounded-2xl group-hover:border-pink-200 group-hover:shadow-md group-hover:shadow-pink-200">
                  <img 
                    src={isHovered ? cat.iconFilled : cat.iconUnfilled} 
                    alt={cat.name}
                    className="w-12 h-12 object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs font-medium text-center leading-tight text-gray-600 group-hover:text-[#c2185b] transition-colors duration-200">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeautyEdits() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="py-12 bg-rose-50/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 flex flex-col justify-start md:mt-20">
            <p className="text-gray-900 text-lg font-medium italic mb-1">The Beauty Edits</p>
            <h2 className="font-playfair text-5xl font-bold text-[#c2185b] leading-none italic">Premium<br/>Essentials</h2>
          </div>
          <div className="lg:w-2/3">
            <div className="flex gap-4">
              {beautyPanels.map((panel, index) => (
                <div key={panel.label} className="flex flex-col transition-all duration-500 ease-in-out" style={{ flex: hoveredIndex === index ? '2' : hoveredIndex === null ? '0.6' : '0.4' }}>
                  <Link to={`/shop/${panel.label.toLowerCase()}`} className="relative rounded-3xl overflow-hidden shadow-lg group" style={{ height: '380px' }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <div className="relative w-full h-full">
                      <img src={panel.image} alt={panel.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                      {hoveredIndex === index && <div className="absolute inset-0 bg-black/40 transition-opacity duration-500"/>}
                      {hoveredIndex === index && <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-3xl drop-shadow-2xl z-10">{panel.label}</span>}
                    </div>
                  </Link>
                  {hoveredIndex !== index && <span className="mt-4 text-center text-[#c2185b] font-semibold text-xl tracking-wide">{panel.label}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ProductCard now uses real product data (images + fields) ─────
function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative flex h-36 sm:h-40 md:h-60 overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black/20 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">{product.badge}</span>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML +=
              `<div class="w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center"><span class="text-5xl">${product.emoji}</span></div>`;
          }}
        />
      </div>
      <div className="p-3 text-left flex flex-col flex-grow">
        <span className="text-[10px] md:text-xs text-[#c2185b] font-medium uppercase tracking-wider mb-1">{product.type}</span>
        <h3 className="font-medium text-gray-900 text-xs md:text-sm line-clamp-2 min-h-[2rem]">{product.name}</h3>
        <p className="text-sm md:text-base font-semibold text-[#c2185b] mt-1">₹{product.price}</p>
      </div>
    </Link>
  );
}

function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/shop" className="text-xs md:text-sm font-medium text-gray-700 hover:text-black flex items-center gap-1 transition">View all →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanners() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          <div className="group relative rounded-2xl overflow-hidden h-80 shadow-lg">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/collection-summer-skincare-products-including-bottles-tubes-beautifully-arranged-sandy-beach-seashells-stylish-sun-411588665.jpg')` }}/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"/>
            <div className="relative h-full flex flex-col justify-between px-8 py-12 text-white">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-3 leading-tight">Summer Glow <br/>Collection</h3>
                <p className="text-base md:text-lg max-w-md">Up to 30% off on all essential sun care products.</p>
              </div>
              <div className="flex justify-end">
                <Link to="/shop" className="inline-block text-white bg-pink-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 hover:text-pink-800 transition-all shadow-md hover:shadow-lg">Shop Offers</Link>
              </div>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-80 shadow-lg">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/skin-care-beauty-close-up-portrait-young-woman-glowing-skin-applying-skincare-product-hydration-cream-skin-care-407651374.jpg')` }}/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"/>
            <div className="relative h-full flex flex-col justify-between px-8 py-12 text-white">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-3 leading-tight">New Arrivals Just In</h3>
                <p className="text-base md:text-lg text-pink-100 max-w-md">Discover our latest microbiome-friendly<br/> launches.</p>
              </div>
              <div className="flex justify-end">
                <Link to="/shop" className="inline-block text-white bg-pink-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 hover:text-pink-800 transition-all shadow-md hover:shadow-lg">Explore New</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeautyIntelligence() {
  const [activeTab, setActiveTab] = useState("Skin Care");
  const [currentQ, setCurrentQ]   = useState(0);
  const [answers, setAnswers]     = useState({});
  const [completed, setCompleted] = useState(false);

  const tabData   = quizData[activeTab];
  const questions = tabData.questions;
  const question  = questions[currentQ];
  const firstAnswer = answers[questions[0]?.id];
  const products  = completed && firstAnswer ? tabData.products[firstAnswer] || tabData.products.default : tabData.products.default;

  const handleTab = (tab) => { setActiveTab(tab); setCurrentQ(0); setAnswers({}); setCompleted(false); };
  const handleSelect = (optionId) => setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  const handleContinue = () => {
    if (!answers[question.id]) return;
    if (currentQ < questions.length - 1) setCurrentQ((q) => q + 1);
    else setCompleted(true);
  };
  const handleReset = () => { setCurrentQ(0); setAnswers({}); setCompleted(false); };

  return (
    <section id="beauty-intelligence" className="py-16 px-4" style={{ background: "#fff" }}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900"><span style={{ color: "#c0175d" }}>Beauty</span> Intelligence</h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto leading-relaxed">Expert tips and product recommendations tailored just for you.</p>
      </div>
      <div className="max-w-7xl mx-auto rounded-3xl p-6 md:p-8" style={{ background: "linear-gradient(135deg, #fce8f0 0%, #fdf0f5 50%, #f9e5ef 100%)" }}>
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-2 rounded-2xl p-5 flex flex-col" style={{ background: "white", minHeight: 380 }}>
            <p className="text-xs font-bold text-gray-700 mb-4 uppercase tracking-widest">Recommended Products</p>
            {!completed ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                <LockIcon/>
                <p className="text-gray-400 text-xs leading-relaxed">Complete the questionnaire to see recommendations based on your profile.</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-3">
                {products.map((p) => (
                  <div key={p.id} className="flex items-center gap-3 rounded-xl p-3 hover:scale-[1.02] transition-all" style={{ background: p.color }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(255,255,255,0.7)" }}>🧴</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 truncate">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.brand}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-gray-800">{p.price}</p>
                      <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#c0175d", color: "white", fontSize: "0.6rem" }}>{p.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-50 transition-all" style={{ border: "1.5px solid #c0175d", color: "#c0175d", background: "transparent" }}>View All Products</button>
          </div>
          <div className="md:col-span-3 flex flex-col">
            <div className="flex gap-2 justify-center md:justify-start mb-6 flex-wrap">
              {Object.keys(quizData).map((tab) => (
                <button key={tab} onClick={() => handleTab(tab)} className="px-5 py-2 rounded-full text-sm font-semibold transition-all" style={{ background: activeTab === tab ? "#c0175d" : "white", color: activeTab === tab ? "white" : "#555", border: "1.5px solid", borderColor: activeTab === tab ? "#c0175d" : "#e0c0cc", boxShadow: activeTab === tab ? "0 2px 12px rgba(192,23,93,0.25)" : "none" }}>{tab}</button>
              ))}
            </div>
            {!completed ? (
              <>
                <p className="font-bold text-gray-800 text-lg mb-4">{question.question}</p>
                <div className="flex flex-col gap-2 flex-1">
                  {question.options.map((opt) => {
                    const selected = answers[question.id] === opt.id;
                    return (
                      <button key={opt.id} onClick={() => handleSelect(opt.id)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-left hover:scale-[1.01] transition-all" style={{ background: selected ? "#fff0f6" : "white", border: `1.5px solid ${selected ? "#c0175d" : "#ead0db"}`, boxShadow: selected ? "0 2px 10px rgba(192,23,93,0.12)" : "none" }}>
                        <span className="text-xl">{opt.icon}</span>
                        <div className="flex-1"><p className="text-sm font-semibold text-gray-800">{opt.label}</p><p className="text-xs text-gray-400">{opt.desc}</p></div>
                        {selected ? <CheckIcon/> : <CircleIcon/>}
                      </button>
                    );
                  })}
                </div>
                <button onClick={handleContinue} disabled={!answers[question.id]} className="mt-5 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all" style={{ background: answers[question.id] ? "linear-gradient(90deg, #c0175d, #e8386e)" : "#ddd", cursor: answers[question.id] ? "pointer" : "not-allowed", boxShadow: answers[question.id] ? "0 4px 18px rgba(192,23,93,0.3)" : "none" }}>
                  {currentQ < questions.length - 1 ? "Continue →" : "See My Recommendations →"}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-8">
                <div className="text-5xl">✨</div>
                <h3 className="text-xl font-bold text-gray-800">Your recommendations are ready!</h3>
                <p className="text-sm text-gray-500 max-w-xs">Based on your answers, we've curated the perfect products for you. Check the left panel!</p>
                <div className="bg-white rounded-xl px-4 py-3 w-full max-w-xs text-left" style={{ border: "1px solid #ead0db" }}>
                  {questions.map((q) => (
                    <div key={q.id} className="flex justify-between items-center py-1">
                      <span className="text-xs text-gray-400">{q.question.replace("What is your ", "").replace("?", "")}</span>
                      <span className="text-xs font-bold" style={{ color: "#c0175d" }}>{q.options.find((o) => o.id === answers[q.id])?.label || "—"}</span>
                    </div>
                  ))}
                </div>
                <button onClick={handleReset} className="text-sm font-semibold underline" style={{ color: "#c0175d" }}>Retake Quiz</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Signature Collection now uses real signatureProducts ─────────
function SignatureCollection() {
  const scrollRef = useRef(null);
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900">The Signature Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Elevate your daily routine with our most-loved essentials.</p>
          </div>
          <Link to="/shop" className="text-[#c2185b] text-sm font-medium hover:underline hidden md:block">View All</Link>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {signatureProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="flex-none w-[calc(25%-12px)] min-w-[200px] overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="h-70 w-full overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-2xl"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML =
                      `<div class="w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center rounded-2xl"><span class="text-5xl">${product.emoji}</span></div>`;
                  }}
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="font-playfair font-semibold text-gray-800 text-sm">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#c2185b]">₹{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchByIngredients() {
  return (
    <section  id="ingredients" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-8">Search by Key Ingredients</h2>
        <div className="flex flex-wrap gap-6 md:gap-8">
          {ingredients.map((ingredient, index) => (
            <Link key={index} to={`/shop?ingredient=${ingredient.name.toLowerCase()}`} className="flex flex-col items-center group">
              <div className="w-20 h-20 md:w-40 md:h-40 rounded-3xl overflow-hidden transition-all duration-300 shadow-md group-hover:shadow-lg">
                <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy"/>
              </div>
              <span className="mt-3 text-sm md:text-base text-gray-700 group-hover:text-pink-600 font-medium transition-colors duration-300">{ingredient.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HairConcern() {
  const concerns = [
    { name: 'Curl',   image: 'https://imgs.search.brave.com/9_1Rjy19a--BB9CrsTrzsYEFAptztJtjxRx0_35B9gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5Lzhk/L2I4LzE5OGRiODI0/NTJlMTBjZTIyYzI1/Yjg1ZjcxMDlhM2Mx/LmpwZw' },
    { name: 'Long',   image: 'https://imgs.search.brave.com/WWUbFcC8WIyLRlnXeGu0oEIQI6MeiXCIQ0RthL2Xhxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5L2Rm/LzM1L2M5ZGYzNTMw/MDFlNjYxNzM3ZWM5/NWY4NTRmYmU2MDgx/LmpwZw' },
    { name: 'Wave',   image: 'https://imgs.search.brave.com/_Geuqref7ijjykD_PdESjIAeVyKQJ9MnTQLyF-QpjyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkyLzY5/LzJkLzkyNjkyZDVh/ODM0NmRlZjNjNGE5/MjRjMGRjMTVlZDJi/LmpwZw' },
    { name: 'Frizzy', image: 'https://imgs.search.brave.com/0NTz5IIKFFP_FesNqKINRpgMaq831ZXddmHOt8cpIWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aW1w/b2xlY2xpbmljLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvRGFt/YWdlZC1IYWlyLTYw/MHg0MDAuanBn' },
  ];
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Hair Concern Solutions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {concerns.map((concern) => (
            <Link key={concern.name} to="/shop" className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
              <img src={concern.image} alt={concern.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-xl md:text-2xl text-center px-2 drop-shadow-lg">{concern.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const scrollRef = useRef(null);
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Beauty <span className="text-[#c2185b]">Reviews</span>
        </h2>
        <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-5 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review) => (
            <div key={review.id} className="flex-none w-[280px] sm:w-[300px] overflow-hidden transition-shadow">
              <iframe width="280" height="498" src={`https://www.youtube.com/embed/${review.videoId}`} title={review.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-2xl"/>
              <div className="p-3 flex-col items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm truncate pr-2">{review.name}</h3>
                <span className="font-bold text-[#c2185b] text-sm">{review.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-16 text-white" style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="font-playfair text-4xl font-bold mb-4">Let's talk beauty.</h2>
          <div className="grid grid-cols-2 gap-8 my-10 md:my-12">
            {[['100k+', 'Happy Customers'],['50+', 'Expert Estheticians'],['15+', 'Awards Won'],['0%', 'Animal Cruelty']].map(([stat, label]) => (
              <div key={label}><p className="text-4xl font-bold text-pink-500">{stat}</p><p className="text-gray-300 mt-2 text-sm md:text-base">{label}</p></div>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">Our team is here to help you navigate your skincare journey. Reach out for a complimentary consultation or any questions.</p>
        </div>
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Reach out to us</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-600 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition"/>
            <input type="email" placeholder="Email Address" className="w-full bg-gray-600 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition"/>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-gray-600 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition resize-none"/>
            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 rounded-xl transition duration-300 text-base uppercase tracking-wide">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-playfair text-3xl font-bold text-center text-[#c2185b] mb-10 md:mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How do I get product recommendations for my skin or hair type?', a: 'Simply fill out your beauty profile—our system will match you with products tailored to your skin, hair, and personal concerns.' },
            { q: 'Can I get suggestions for sensitive or acne-prone skin?', a: 'Absolutely! We have a wide range of products formulated specifically for sensitive and acne-prone skin, all dermatologist-approved.' },
            { q: 'Can I get recommendations based on Indian skin tones and concerns?', a: 'Yes! Our system is designed specifically for Indian women, considering skin tones, climate, and unique concerns like hyperpigmentation and humidity.' },
            { q: 'Do I need to create an account to get personalized recommendations?', a: 'You can explore recommendations as a guest, but creating an account lets you save your profile and get more personalized suggestions over time.' },
          ].map((faq, i) => (
            <details key={i} className="group border border-pink-100 rounded-3xl px-3 py-5 md:py-6 transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-gray-800 text-base md:text-lg hover:text-pink-600 transition-colors duration-200">
                <span>{faq.q}</span>
                <span className="text-gray-900 text-sm group-open:rotate-180 transition-transform duration-300 ease-out"><FaChevronDown/></span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed pl-1 pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnerCircleSection() {
  return (
    <section className="flex items-center justify-center bg-white">
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden px-10 py-16 flex flex-col items-center text-center" style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(220,50,100,0.18) 0%, transparent 80%)" }}/>
        <div className="relative mb-5">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
            <rect x="1" y="1" width="38" height="30" rx="4" stroke="#f0436a" strokeWidth="2.5"/>
            <path d="M1 7L20 19L39 7" stroke="#f0436a" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="relative text-white font-bold text-3xl mb-3 tracking-tight font-playfair">Join the Inner Circle</h2>
        <p className="relative text-gray-400 text-base max-w-lg mb-8 leading-relaxed">Subscribe for early access to new collections, botanical insights, and exclusive invitations.</p>
        <div className="relative flex w-full max-w-xl gap-3">
          <input type="email" placeholder="Your email address" className="flex-1 rounded-xl px-5 py-4 text-white placeholder-gray-500 text-sm outline-none border border-white/10 focus:border-pink-500/50 transition-colors" style={{ background: "rgba(255,255,255,0.06)" }}/>
          <button className="rounded-xl px-7 py-4 font-semibold text-white text-sm whitespace-nowrap hover:brightness-110 active:scale-95 transition-all" style={{ background: "linear-gradient(135deg, #f0436a 0%, #e0255a 100%)", boxShadow: "0 4px 20px rgba(240,67,106,0.35)" }}>Subscribe</button>
        </div>
        <p className="relative text-gray-600 text-xs mt-5">By subscribing, you agree to our <span className="underline cursor-pointer hover:text-gray-400">Terms of Service</span> and <span className="underline cursor-pointer hover:text-gray-400">Privacy Policy</span>.</p>
      </div>
    </section>
  );
}

// ── Main Export ───────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="py-2">
      <BannerCarousel/>
      <ShopByCategory/>
      <BeautyEdits/>
      <FeaturedProducts/>
      <PromoBanners/>
      <BeautyIntelligence/>
      <SignatureCollection/>
      <SearchByIngredients/>
      <Reviews/>
      <div className="max-w-7xl mx-auto">
        <div className="group relative rounded-2xl overflow-hidden h-80 shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://imgs.search.brave.com/Nt57vFtgsU_awOS5tPn2js-obuhYk9RNje2sQk70N1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/NTcvODU2OS8yMzc1/L2ZpbGVzL0Jsb2df/SW1hZ2UtMV8tY3V0/ZS1hbmQtYWVzdGhl/dGljLXNraW5jYXJl/LWJyYW5kcy15b3Vf/bGwtd2FudC1vbi15/b3VyLXZhbml0eV9D/b21wcmVzc2VkLndl/YnA_dj0xNzUwODA5/ODU3')` }}/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"/>
          <div className="relative h-full flex flex-col justify-between px-8 py-12 text-white">
            <div/>
            <div className="flex justify-end">
              <Link to="/blogs" className="inline-block text-white bg-pink-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 hover:text-pink-800 transition-all shadow-md hover:shadow-lg">know more</Link>
            </div>
          </div>
        </div>
      </div>
      <HairConcern/>
      <ContactCTA/>
      <FAQ/>
      <InnerCircleSection/>
    </div>
  );
}