import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// ── Import centralized product data ──────────────────────────────
import { featuredProducts, signatureProducts, products } from '../data/Products';

// ── Asset imports ────────────────────────────────────────────────
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

// ── Global scroll animation styles injected once ─────────────────
const ANIM_STYLE = `
  .reveal-section {
    opacity: 0;
    transform: translateX(-48px);
    transition: opacity 0.65s cubic-bezier(.4,0,.2,1), transform 0.65s cubic-bezier(.4,0,.2,1);
  }
  .reveal-section.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .reveal-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.55s cubic-bezier(.4,0,.2,1), transform 0.55s cubic-bezier(.4,0,.2,1);
  }
  .reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ── Hook: trigger animations when element enters viewport ─────────
function useReveal(ref, threshold = 0.12) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
}

// Animate a list of card refs with stagger
function useRevealCards(containerRef, selector = '.reveal-card', stagger = 80) {
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * stagger);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [containerRef, selector, stagger]);
}

// ── Banner carousel data ─────────────────────────────────────────
const banners = [
  { id: 1, to: '/shop', bg: 'from-rose-200 via-pink-100 to-amber-100', label: 'HairCare', img: Banner1 },
  { id: 2, to: '/shop', bg: 'from-slate-200 via-stone-100 to-rose-100', label: 'Face', img: Banner2 },
  { id: 3, to: '/shop', bg: 'from-amber-100 via-orange-50 to-pink-100', label: 'Body', img: Banner3 },
];

const beautyPanels = [
  { label: 'Hair', bg: 'from-stone-300 to-stone-400', image: Hello2, filter: { category: 'Hair Care' } },
  { label: 'Face', bg: 'from-slate-200 to-slate-300', image: Hello3, filter: { category: 'Skin Care' } },
  { label: 'Body', bg: 'from-amber-100 to-amber-200', image: Hello4, filter: { category: 'Body' } },
  { label: 'Makeup', bg: 'from-rose-200 to-rose-300', image: Hello1, filter: { category: 'Makeup' } },
];

const ingredients = [
  { name: 'Neem', filter: 'neem', image: 'https://imgs.search.brave.com/VUsofQaDUoXl-gzscbX7uszOLDrspihSK3FhBp5EOtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/ODQwLzA2NS9zbWFs/bC9hemFkaXJhY2h0/YS1pbmRpY2EtYS1i/cmFuY2gtb2YtbmVl/bS10cmVlLWxlYXZl/cy1uYXR1cmFsLW1l/ZGljaW5lLXBob3Rv/LmpwZw' },
  { name: 'Salicylic Acid', filter: 'salicylic acid', image: 'https://imgs.search.brave.com/vg0IlaE0kd1049pbJRVsRW49zq_0X5FaddE8lklZLGQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14M2h1/cjB4ZTRyL2ltYWdl/cy9zdGVuY2lsL29y/aWdpbmFsL2ltYWdl/LW1hbmFnZXIvcHJl/dHR5LXlvdW5nLWFz/aWFuLXdvbWFuLXdp/dGgtYWNuZS1wcm9u/ZS1za2luLWhvbGQt/MjAyNC0wMi0yOC0x/Ny0zMC0xMi11dGMt/MWQucG5nP3Q9MTcy/NTUyMjIxMQ' },
  { name: 'Shea Butter', filter: 'shea butter', image: 'https://imgs.search.brave.com/MDSC6-ayLsh5gCiy_7DIV6kCtUDSYfBo0atsUmUfGh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4Lzk4Lzg5LzM5/LzM2MF9GXzE4OTg4/OTM5NzNfQkxOc212/Vm5BeXNmdkM1Z09Q/TE1vWG5RUUZldVdZ/QWMuanBn' },
  { name: 'Aloe Vera', filter: 'aloe vera', image: 'https://imgs.search.brave.com/o2wp8XdhD5JDlpp9MLk5LYrmVbi5FQsj4mOxrli5kP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzdi/L2JiLzJhN2JiYjU2/OWUzMTFlZjlmN2M1/YTMzZjZhMzJmZDgw/LmpwZw' },
  { name: 'Vitamin C', filter: 'vitamin c', image: 'https://imgs.search.brave.com/eAMx8odfno1Bv4r4lC0p555Q7mSwGjRuCmfQDvCWNZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAz/NDEwNDQxOC9waG90/by9jaXRydXMtZXNz/ZW50aWFsLW9pbC12/aXRhbWluLWMtc2Vy/dW0td2l0aC1mcmVz/aC1qdWljeS1vcmFu/Z2UtZnJ1aXQtb24t/d2hpdGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cnh2Tk5K/enRoYnRBeERaTmx1/TlFCRmdiMzU2NUti/MkFCTWFfTnJ2ZWt1/az0' },
  { name: 'Green Tea', filter: 'green tea', image: 'https://imgs.search.brave.com/Y1g_U7Nw0QbumpNP5mRat30-fB2g-E1hCUZjiLXs888/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FhLzVk/LzY0L2FhNWQ2NDYz/NGQ0MjEwYTYyNmJh/NjczOTEwNjVhMWEw/LmpwZw' },
];

// ── Quiz data (skin/hair/makeup) ─────────────────────────────────
const quizData = {
  "Skin Care": {
    questions: [
      { id: "skin_type", question: "What is your skin type?", options: [
        { id: "oily",        icon: "💧", label: "Oily",        desc: "Shiny appearance, visible pores" },
        { id: "dry",         icon: "🌿", label: "Dry",         desc: "Feeling tight, flaky patches" },
        { id: "combination", icon: "☯️", label: "Combination", desc: "Oily T-zone, dry cheeks" },
        { id: "acne",        icon: "🔴", label: "Acne Prone",  desc: "Frequent breakouts, congestion" },
        { id: "sensitive",   icon: "🌸", label: "Sensitive",   desc: "Redness, reacts to products" },
      ]},
      { id: "concern", question: "What is your main skin concern?", options: [
        { id: "aging",       icon: "⏳", label: "Anti-Aging",  desc: "Fine lines, wrinkles" },
        { id: "brightening", icon: "✨", label: "Brightening", desc: "Dullness, dark spots" },
        { id: "hydration",   icon: "💦", label: "Hydration",   desc: "Dehydrated, tight skin" },
        { id: "pores",       icon: "🔬", label: "Pores",       desc: "Enlarged, clogged pores" },
      ]},
      { id: "routine", question: "How would you describe your current routine?", options: [
        { id: "none",  icon: "🚿", label: "Minimal",      desc: "Just cleanser & moisturiser" },
        { id: "basic", icon: "🧴", label: "Basic",         desc: "A few key steps" },
        { id: "full",  icon: "💎", label: "Full Routine",  desc: "Serums, toners, SPF" },
      ]},
    ],
    subcategoryMap: {
      oily:        "oilyskin",
      dry:         "dryskin",
      combination: "oilyskin",
      acne:        "acneprone",
      sensitive:   "sensitiveskin",
    },
    category: "Skin Care",
  },
  "Hair Care": {
    questions: [
      { id: "hair_type", question: "What is your hair type?", options: [
        { id: "straight", icon: "〰️", label: "Straight", desc: "Sleek, tends to get oily" },
        { id: "wavy",     icon: "🌊", label: "Wavy",     desc: "S-shaped, frizz-prone" },
        { id: "curly",    icon: "🌀", label: "Curly",    desc: "Defined curls, dry ends" },
        { id: "coily",    icon: "🔁", label: "Coily",    desc: "Tight coils, very dry" },
      ]},
      { id: "hair_concern", question: "What is your main hair concern?", options: [
        { id: "damage", icon: "🔥", label: "Damage & Breakage", desc: "Heat, chemical damage" },
        { id: "frizz",  icon: "💨", label: "Frizz Control",    desc: "Humidity, flyaways" },
        { id: "growth", icon: "🌱", label: "Hair Growth",       desc: "Thinning, shedding" },
        { id: "scalp",  icon: "🧠", label: "Scalp Health",      desc: "Dandruff, oiliness" },
      ]},
      { id: "wash_freq", question: "How often do you wash your hair?", options: [
        { id: "daily",  icon: "📅", label: "Daily",      desc: "Every day" },
        { id: "few",    icon: "🗓️", label: "2–3x a week", desc: "Regular wash" },
        { id: "weekly", icon: "📆", label: "Weekly",     desc: "Low-poo method" },
      ]},
    ],
    subcategoryMap: {
      straight: "long",
      wavy:     "wave",
      curly:    "curl",
      coily:    "curl",
    },
    category: "Hair Care",
  },
  Makeup: {
    questions: [
      { id: "coverage", question: "What coverage do you prefer?", options: [
        { id: "natural", icon: "🌿", label: "No Makeup",        desc: "Skin-like, natural finish" },
        { id: "light",   icon: "☁️", label: "Light Coverage",   desc: "Even tone, breathable" },
        { id: "medium",  icon: "🌓", label: "Medium Coverage",  desc: "Buildable, balanced" },
        { id: "full",    icon: "💄", label: "Full Coverage",     desc: "Flawless, long-wear" },
      ]},
      { id: "finish", question: "What finish do you prefer?", options: [
        { id: "matte", icon: "🪨", label: "Matte",  desc: "No shine, velvety" },
        { id: "dewy",  icon: "✨", label: "Dewy",   desc: "Glassy, luminous" },
        { id: "satin", icon: "🎀", label: "Satin",  desc: "Balanced, natural sheen" },
      ]},
      { id: "style", question: "What's your go-to makeup style?", options: [
        { id: "everyday",  icon: "☀️", label: "Everyday",    desc: "Quick, effortless" },
        { id: "glam",      icon: "💫", label: "Glam",         desc: "Bold, statement looks" },
        { id: "editorial", icon: "🎨", label: "Editorial",    desc: "Creative, experimental" },
        { id: "natural",   icon: "🍃", label: "Clean Beauty", desc: "Natural ingredients" },
      ]},
    ],
    subcategoryMap: {},
    category: "Makeup",
  },
};



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

// ── Consistent section heading ────────────────────────────────────
function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`font-playfair text-2xl md:text-3xl font-bold text-gray-900 ${className}`}>
      {children}
    </h2>
  );
}

// Helper function to create shop URL with filters
const createShopUrl = (filters) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });
  return `/shop${params.toString() ? '?' + params.toString() : ''}`;
};

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
    <div className="max-w-6xl mx-auto ">
      <div className="relative w-full overflow-hidden h-100 md:h-[520px] md:rounded-3xl">
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
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  useReveal(sectionRef);
  useRevealCards(cardsRef, '.reveal-card', 60);

  const categories = [
    { name: 'Self-care Needs', to: '/shop?category=Self%20Care',   iconFilled: SelfcareFilled,    iconUnfilled: SelfcareUnfilled },
    { name: 'Ingredients',     to: '/#ingredients', iconFilled: IngredientsFilled, iconUnfilled: IngredientsUnfilled },
    { name: 'Skin Type',       to: '/shop?skinType=All',   iconFilled: SkintypeFilled,    iconUnfilled: SkinTypeUnfilled },
    { name: 'Skin Care',       to: '/shop?category=Skin%20Care',   iconFilled: SkincareFilled,    iconUnfilled: SkincareUnfilled },
    { name: 'Makeup',          to: '/shop?category=Makeup',     iconFilled: MakeupFilled,      iconUnfilled: MakeupUnfilled },
    { name: 'Hair Type',       to: '/shop?hairType=All',   iconFilled: HairTypeFilled,    iconUnfilled: HairTypeUnfilled },
    { name: 'Hair Care',       to: '/shop?category=Hair%20Care',   iconFilled: HaircareFilled,    iconUnfilled: HaircareUnfilled },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section">
          <SectionHeading className="text-center mb-8">Shop By Categories</SectionHeading>
        </div>
        
        {/* Desktop View - Flex layout */}
        <div ref={cardsRef} className="hidden sm:flex flex-wrap gap-6 justify-center">
          {categories.map((cat) => {
            const isHovered = hoveredCategory === cat.name;
            return (
              <Link
                key={cat.name}
                to={cat.to}
                className="reveal-card flex flex-col items-center gap-2 group"
                onMouseEnter={() => setHoveredCategory(cat.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="w-18 h-18 flex items-center justify-center transition-all duration-200 group-hover:bg-pink-100 rounded-2xl group-hover:border-pink-200 group-hover:shadow-md group-hover:shadow-pink-200">
                  <img src={isHovered ? cat.iconFilled : cat.iconUnfilled} alt={cat.name} className="w-12 h-12 object-cover transition-transform duration-200 group-hover:scale-110"/>
                </div>
                <span className="text-xs font-medium text-center leading-tight text-gray-600 group-hover:text-[#c2185b] transition-colors duration-200">{cat.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile View - Carousel */}
        <div className="sm:hidden relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4 min-w-max px-2">
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
                    <div className="w-16 h-16 flex items-center justify-center transition-all duration-200 bg-pink-50 rounded-xl border border-pink-100 shadow-sm shadow-pink-100">
                      <img src={isHovered ? cat.iconFilled : cat.iconUnfilled} alt={cat.name} className="w-10 h-10 object-cover"/>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-600">{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 

function BeautyEdits() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === beautyPanels.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? beautyPanels.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-rose-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div ref={sectionRef} className="reveal-section lg:w-1/3 flex flex-col justify-start lg:mt-20">
            <p className="text-gray-900 text-lg font-medium italic mb-1">The Beauty Edits</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#c2185b] leading-none italic">Premium<br/>Essentials</h2>
          </div>
          
          <div className="lg:w-2/3">
            {/* Mobile/Tablet Carousel (visible on screens smaller than lg) */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {beautyPanels.map((panel, index) => (
                    <div key={panel.label} className="w-full flex-shrink-0 px-2">
                      <Link to={createShopUrl(panel.filter)} className="relative block rounded-3xl overflow-hidden shadow-lg group" style={{ height: '380px' }}>
                        <div className="relative w-full h-full">
                          <img 
                            src={panel.image} 
                            alt={panel.label} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"/>
                          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-3xl drop-shadow-2xl">
                            {panel.label}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {beautyPanels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-6 bg-[#c2185b]' 
                        : 'bg-[#c2185b]/30 hover:bg-[#c2185b]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Optional: Previous/Next Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/80 hover:bg-white text-[#c2185b] p-2 rounded-full shadow-lg transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/80 hover:bg-white text-[#c2185b] p-2 rounded-full shadow-lg transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Desktop Original Layout (visible on lg and above) */}
            <div className="hidden lg:flex gap-4">
              {beautyPanels.map((panel, index) => (
                <div 
                  key={panel.label} 
                  className="flex flex-col transition-all duration-500 ease-in-out" 
                  style={{ flex: hoveredIndex === index ? '2' : hoveredIndex === null ? '0.6' : '0.4' }}
                >
                  <Link 
                    to={createShopUrl(panel.filter)} 
                    className="relative rounded-3xl overflow-hidden shadow-lg group" 
                    style={{ height: '380px' }} 
                    onMouseEnter={() => setHoveredIndex(index)} 
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={panel.image} 
                        alt={panel.label} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {hoveredIndex === index && (
                        <>
                          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500"/>
                          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-3xl drop-shadow-2xl z-10">
                            {panel.label}
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                  {hoveredIndex !== index && (
                    <span className="mt-4 text-center text-[#c2185b] font-semibold text-xl tracking-wide">
                      {panel.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ── ProductCard ──────────────────────────────────────────────────
function ProductCard({ product, className = "" }) {
  return (
    <Link to={`/product/${product.slug}`} className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col ${className}`}>
      <div className="relative flex h-36 sm:h-40 md:h-60 overflow-hidden">
        {product.badge && product.badge[0] !== 'none' && (
          <span className="absolute top-2 left-2 bg-black/20 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">{product.badge[0]}</span>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML +=
              `<div class="w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center"><span class="text-5xl">🌸</span></div>`;
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

// ── Featured Products — horizontal carousel ──────────────────────
function FeaturedProducts() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  useReveal(sectionRef);
  useRevealCards(cardsRef, '.reveal-card', 90);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal-section flex items-center justify-between mb-6 md:mb-8">
          <SectionHeading>Featured Products</SectionHeading>
          <Link to="/shop?featured=true" className="text-[#c2185b] text-sm font-medium hover:underline hidden md:block">View all </Link>
        </div>
        <div ref={cardsRef}>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product) => (
              <div key={product.slug} className="reveal-card flex-none w-[calc(25%-12px)] min-w-[180px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoBanners() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div ref={sectionRef} className="reveal-section max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
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
                <Link to="/shop?badge=summer%20glow" className="inline-block text-white bg-pink-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 hover:text-pink-800 transition-all shadow-md hover:shadow-lg">Shop Offers</Link>
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
                <Link to="/shop?sort=New+Arrival" className="inline-block text-white bg-pink-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 hover:text-pink-800 transition-all shadow-md hover:shadow-lg">Explore New</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Beauty Intelligence — real products from Products.js ─────────
function BeautyIntelligence() {
  const [activeTab, setActiveTab] = useState("Skin Care");
  const [currentQ, setCurrentQ]   = useState(0);
  const [answers, setAnswers]     = useState({});
  const [completed, setCompleted] = useState(false);
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const tabData   = quizData[activeTab];
  const questions = tabData.questions;
  const question  = questions[currentQ];

  // Derive recommended products from real products array
  const getRecommendedProducts = () => {
    const firstAnswer = answers[questions[0]?.id];
    const subcategory = firstAnswer ? tabData.subcategoryMap[firstAnswer] : null;

    let filtered = products.filter(p => p.category === tabData.category);

    if (subcategory) {
      const bySub = filtered.filter(p =>
        Array.isArray(p.subcategory)
          ? p.subcategory.includes(subcategory)
          : p.subcategory === subcategory
      );
      if (bySub.length >= 3) filtered = bySub;
    }

    // Shuffle deterministically based on answer to get variety
    return filtered.slice(0, 3);
  };

  const recommendedProducts = completed ? getRecommendedProducts() : [];

  const handleTab = (tab) => { setActiveTab(tab); setCurrentQ(0); setAnswers({}); setCompleted(false); };
  const handleSelect = (optionId) => setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  const handleContinue = () => {
    if (!answers[question.id]) return;
    if (currentQ < questions.length - 1) setCurrentQ((q) => q + 1);
    else setCompleted(true);
  };
  const handleReset = () => { setCurrentQ(0); setAnswers({}); setCompleted(false); };

  return (
    <section id="beauty-intelligence" className="py-16 px-4 bg-white">
      <div ref={sectionRef} className="reveal-section text-center mb-8">
        <SectionHeading className="inline"><span style={{ color: "#c0175d" }}>Beauty</span> Intelligence</SectionHeading>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto leading-relaxed">Expert tips and product recommendations tailored just for you.</p>
      </div>
      <div className="max-w-7xl mx-auto md:rounded-3xl  md:p-8 md:bg-[#c0175d]/10 ">
        
        {/* Mobile Layout (flex column - quiz first, products below) */}
        <div className="flex flex-col md:hidden gap-5">
          {/* RIGHT — Quiz panel (first on mobile) */}
          <div className="flex flex-col bg-white md:rounded-2xl p-5">
            <div className="flex gap-2 justify-center mb-6 flex-wrap">
              {Object.keys(quizData).map((tab) => (
                <button key={tab} onClick={() => handleTab(tab)} className="px-5 py-2 rounded-full text-sm font-semibold transition-all" style={{ background: activeTab === tab ? "#c0175d" : "white", color: activeTab === tab ? "white" : "#555", border: "1.5px solid", borderColor: activeTab === tab ? "#c0175d" : "#e0c0cc", boxShadow: activeTab === tab ? "0 2px 12px rgba(192,23,93,0.25)" : "none" }}>{tab}</button>
              ))}
            </div>
            
            {!completed ? (
              <>
                <p className="font-bold text-gray-800 text-lg mb-4">{question.question}</p>
                <div className="flex flex-col gap-2">
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
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="text-5xl">✨</div>
                <h3 className="text-xl font-bold text-gray-800">Your recommendations are ready!</h3>
                <p className="text-sm text-gray-500 max-w-xs">Based on your answers, we've curated the perfect products for you. Scroll down to see them!</p>
                <div className="bg-white rounded-xl px-4 py-3 w-full text-left" style={{ border: "1px solid #ead0db" }}>
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

          {/* LEFT — Recommended Products panel (second on mobile) */}
          <div className="md:rounded-2xl p-5 flex flex-col bg-white">
            <p className="text-xs font-bold text-gray-700 mb-4 uppercase tracking-widest">Recommended Products</p>
            {!completed ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
                <LockIcon/>
                <p className="text-gray-400 text-xs leading-relaxed">Complete the questionnaire to see recommendations based on your profile.</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-3">
                {recommendedProducts.length === 0 ? (
                  <p className="text-gray-400 text-xs text-center mt-4">No matching products found.</p>
                ) : (
                  recommendedProducts.map((p) => (
                    <Link key={p.id} to={`/product/${p.slug}`} className="flex items-center gap-3 rounded-xl p-3 hover:scale-[1.02] transition-all bg-pink-50 hover:bg-pink-100">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-white">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1.4rem">🌸</div>`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.brand}</p>
                        <p className="text-xs text-gray-400">{p.type}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-bold text-gray-800">₹{p.price}</p>
                        {p.badge && p.badge[0] !== 'none' && (
                          <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#c0175d", color: "white", fontSize: "0.6rem" }}>{p.badge[0]}</span>
                        )}
                        <div className="flex items-center gap-0.5 mt-0.5 justify-end">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-xs text-gray-500">{p.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
            <Link to="/shop" className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-50 transition-all text-center block" style={{ border: "1.5px solid #c0175d", color: "#c0175d" }}>
              View All Products
            </Link>
          </div>
        </div>

        {/* Desktop Layout (grid - products left, quiz right) */}
        <div className="hidden md:grid md:grid-cols-5 gap-5">
          {/* LEFT — Recommended Products panel */}
          <div className="md:col-span-2 rounded-2xl p-5 flex flex-col bg-white" style={{ minHeight: 380 }}>
            <p className="text-xs font-bold text-gray-700 mb-4 uppercase tracking-widest">Recommended Products</p>
            {!completed ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                <LockIcon/>
                <p className="text-gray-400 text-xs leading-relaxed">Complete the questionnaire to see recommendations based on your profile.</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-3">
                {recommendedProducts.length === 0 ? (
                  <p className="text-gray-400 text-xs text-center mt-4">No matching products found.</p>
                ) : (
                  recommendedProducts.map((p) => (
                    <Link key={p.id} to={`/product/${p.slug}`} className="flex items-center gap-3 rounded-xl p-3 hover:scale-[1.02] transition-all bg-pink-50 hover:bg-pink-100">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-white">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1.4rem">🌸</div>`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.brand}</p>
                        <p className="text-xs text-gray-400">{p.type}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-bold text-gray-800">₹{p.price}</p>
                        {p.badge && p.badge[0] !== 'none' && (
                          <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#c0175d", color: "white", fontSize: "0.6rem" }}>{p.badge[0]}</span>
                        )}
                        <div className="flex items-center gap-0.5 mt-0.5 justify-end">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-xs text-gray-500">{p.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
            <Link to="/shop" className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-50 transition-all text-center block" style={{ border: "1.5px solid #c0175d", color: "#c0175d" }}>
              View All Products
            </Link>
          </div>

          {/* RIGHT — Quiz panel */}
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

// ── Signature Collection ─────────────────────────────────────────
function  SignatureCollection() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  useReveal(sectionRef);
  useRevealCards(cardsRef, '.reveal-card', 90);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section flex items-center justify-between mb-8">
          <div>
            <SectionHeading>The Signature Collection</SectionHeading>
            <p className="text-gray-500 text-sm mt-1">Elevate your daily routine with our most-loved essentials.</p>
          </div>
          <Link to="/shop?signature=true" className="text-[#c2185b] text-sm font-medium hover:underline hidden md:block">View All</Link>
        </div>
        <div ref={cardsRef}>
          <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {signatureProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.slug}`} className="reveal-card flex-none w-[calc(25%-12px)] min-w-[200px] overflow-hidden transition-shadow ">
                <div className="h-70 w-full overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-2xl hover:rounded-2xl" loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center rounded-2xl hover:rounded-2xl"><span class="text-5xl">🌸</span></div>`;
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
      </div>
    </section>
  );
}

function SearchByIngredients() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useReveal(sectionRef);
  useRevealCards(cardsRef, '.reveal-card', 70);

  // Calculate number of slides (showing 3 items per slide on mobile)
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(ingredients.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Get current slide items
  const getCurrentSlideItems = () => {
    const start = currentSlide * itemsPerSlide;
    return ingredients.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="ingredients" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section mb-8">
          <SectionHeading>Search by Key Ingredients</SectionHeading>
        </div>
        
        {/* Mobile Carousel (visible on small screens) */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Carousel Items */}
            <div className="flex justify-center gap-4 transition-opacity duration-300">
              {getCurrentSlideItems().map((ingredient, index) => (
                <Link 
                  key={`${ingredient.filter}-${index}`} 
                  to={`/shop?ingredient=${ingredient.filter}`} 
                  className="flex flex-col items-center group w-[30%]"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <img 
                      src={ingredient.image} 
                      alt={ingredient.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 text-xs text-center text-gray-700 group-hover:text-pink-600 font-medium transition-colors duration-300 line-clamp-2">
                    {ingredient.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Navigation Buttons (only show if more than one slide) */}
            {totalSlides > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/80 hover:bg-white text-pink-600 p-1.5 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/80 hover:bg-white text-pink-600 p-1.5 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-1.5 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-4 bg-pink-600' 
                      : 'bg-pink-200 hover:bg-pink-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop Grid (visible on medium screens and above) */}
        <div ref={cardsRef} className="hidden md:flex flex-wrap gap-6 md:gap-8">
          {ingredients.map((ingredient, index) => (
            <Link 
              key={index} 
              to={`/shop?ingredient=${ingredient.filter}`} 
              className="reveal-card flex flex-col items-center group"
            >
              <div className="w-20 h-20 md:w-40 md:h-40 rounded-3xl overflow-hidden transition-all duration-300 shadow-md group-hover:shadow-lg">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-sm md:text-base text-gray-700 group-hover:text-pink-600 font-medium transition-colors duration-300">
                {ingredient.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HairConcern() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  useReveal(sectionRef);
  useRevealCards(cardsRef, '.reveal-card', 80);

  const concerns = [
    { name: 'Curl', filter: { hairType: 'Curly Hair' }, image: 'https://imgs.search.brave.com/9_1Rjy19a--BB9CrsTrzsYEFAptztJtjxRx0_35B9gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5Lzhk/L2I4LzE5OGRiODI0/NTJlMTBjZTIyYzI1/Yjg1ZjcxMDlhM2Mx/LmpwZw' },
    { name: 'Straight', filter: { hairType: 'Straight Hair' }, image: 'https://imgs.search.brave.com/WWUbFcC8WIyLRlnXeGu0oEIQI6MeiXCIQ0RthL2Xhxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5L2Rm/LzM1L2M5ZGYzNTMw/MDFlNjYxNzM3ZWM5/NWY4NTRmYmU2MDgx/LmpwZw' },
    { name: 'Wave', filter: { hairType: 'Wavy Hair' }, image: 'https://imgs.search.brave.com/_Geuqref7ijjykD_PdESjIAeVyKQJ9MnTQLyF-QpjyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkyLzY5/LzJkLzkyNjkyZDVh/ODM0NmRlZjNjNGE5/MjRjMGRjMTVlZDJi/LmpwZw' },
    { name: 'Frizzy', filter: { hairType: 'Damaged Hair' }, image: 'https://imgs.search.brave.com/0NTz5IIKFFP_FesNqKINRpgMaq831ZXddmHOt8cpIWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aW1w/b2xlY2xpbmljLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvRGFt/YWdlZC1IYWlyLTYw/MHg0MDAuanBn' },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section mb-6">
          <SectionHeading>Hair Concern Solutions</SectionHeading>
        </div>
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {concerns.map((concern) => (
            <Link key={concern.name} to={createShopUrl(concern.filter)} className="reveal-card group relative rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
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
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  // Map video IDs to actual product IDs
  const reviews = [
    { id: 1, videoId: "bECCGZgkZTs", name: "Aura Glow Serum", price: "₹599", productId:3 }, // Aura Glow Serum has id 13
    { id: 2, videoId: "QSw2iagAtv8", name: "Nocturnal Repair", price: "₹799", productId: 7 }, // Nocturnal Repair has id 14
    { id: 3, videoId: "YB5HVZdWSpk", name: "Dewy Mist", price: "₹850", productId: 9 }, // Dewy Mist has id 15
    { id: 4, videoId: "UJDke1v_Awk", name: "Petal Infusion", price: "₹600", productId: 12 }, // Petal Infusion has id 16
  ];

  const handleIframeClick = (e, videoId) => {
    e.preventDefault();
    e.stopPropagation();
    // Open YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section text-center mb-10">
          <SectionHeading>Beauty <span className="text-[#c2185b]">Reviews</span></SectionHeading>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-5 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-none w-[280px] sm:w-[300px] overflow-hidden transition-shadow group"
            >
              <div 
                className="cursor-pointer"
                onClick={(e) => handleIframeClick(e, review.videoId)}
              >
                <iframe 
                  width="280" 
                  height="498" 
                  src={`https://www.youtube.com/embed/${review.videoId}`} 
                  title={review.name} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  className="rounded-2xl pointer-events-auto" // Changed to pointer-events-auto
                />
              </div>
              <Link 
                to={`/product/${review.productId}`}
                className="block p-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm truncate pr-2 group-hover:text-[#c2185b] transition-colors">
                    {review.name}
                  </h3>
                  <span className="font-bold text-[#c2185b] text-sm">{review.price}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', 'loading', null
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setFormStatus(null), 300);
      }, 2000);
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus('error');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setFormStatus(null), 300);
      }, 2000);
      return;
    }

    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setIsAnimating(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after showing success message
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setFormStatus(null), 300);
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-16 text-white" style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}>
      <div ref={sectionRef} className="reveal-section max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Let's talk beauty.</h2>
          <div className="grid grid-cols-2 gap-8 my-10 md:my-12">
            {[['100k+', 'Happy Customers'],['50+', 'Expert Estheticians'],['15+', 'Awards Won'],['0%', 'Animal Cruelty']].map(([stat, label]) => (
              <div key={label}>
                <p className="text-4xl font-bold text-pink-500">{stat}</p>
                <p className="text-gray-300 mt-2 text-sm md:text-base">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">Our team is here to help you navigate your skincare journey. Reach out for a complimentary consultation or any questions.</p>
        </div>
        
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Reach out to us</h3>
          
          {/* Success Message Overlay */}
          {formStatus === 'success' && isAnimating && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl animate-slide-down">
              <p className="text-green-400 text-center font-medium">✨ Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full bg-gray-600 border rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition-all duration-300 ${
                  formStatus === 'error' && !formData.name && isAnimating
                    ? 'border-red-500 animate-shake bg-red-900/20'
                    : 'border-gray-700'
                }`}
                disabled={formStatus === 'loading' || formStatus === 'success'}
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full bg-gray-600 border rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition-all duration-300 ${
                  formStatus === 'error' && (!formData.email || !formData.email.includes('@')) && isAnimating
                    ? 'border-red-500 animate-shake bg-red-900/20'
                    : 'border-gray-700'
                }`}
                disabled={formStatus === 'loading' || formStatus === 'success'}
              />
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full bg-gray-600 border rounded-xl px-5 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-pink-500 transition-all duration-300 resize-none ${
                  formStatus === 'error' && !formData.message && isAnimating
                    ? 'border-red-500 animate-shake bg-red-900/20'
                    : 'border-gray-700'
                }`}
                disabled={formStatus === 'loading' || formStatus === 'success'}
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'loading' || formStatus === 'success'}
              className={`relative overflow-hidden w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 text-base uppercase tracking-wide ${
                formStatus === 'success'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-pink-600 hover:bg-pink-700'
              } ${formStatus === 'loading' ? 'cursor-wait' : ''}`}
            >
              <span className={`transition-all duration-300 inline-block ${
                formStatus === 'loading' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}>
                {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </span>
              
              {/* Loading Spinner */}
              {formStatus === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}

function FAQ() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={sectionRef} className="reveal-section mb-10 md:mb-12 text-center">
          <SectionHeading className="text-[#c2185b]">Frequently Asked Questions</SectionHeading>
        </div>
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
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // 'success', 'error', 'loading', null
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setSubscriptionStatus(null), 300);
      }, 2000);
      return;
    }

    setSubscriptionStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setIsAnimating(true);
      setEmail('');
      
      // Reset after showing success message
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setSubscriptionStatus(null), 3000);
      }, 2500);
    }, 1500);
  };

  return (
    <section className="flex items-center justify-center bg-white">
      <div ref={sectionRef} className="reveal-section relative w-full max-w-3xl md:rounded-2xl overflow-hidden px-10 py-16 flex flex-col items-center text-center" style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(220,50,100,0.18) 0%, transparent 80%)" }}/>
        
        {/* Animated Success/Error Icons */}
        <div className="relative mb-5">
          {subscriptionStatus === 'success' && isAnimating ? (
            <div className="animate-bounce-in">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeLinecap="round"/>
              </svg>
            </div>
          ) : subscriptionStatus === 'error' && isAnimating ? (
            <div className="animate-bounce-in">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeLinecap="round"/>
              </svg>
            </div>
          ) : (
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <rect x="1" y="1" width="38" height="30" rx="4" stroke="#f0436a" strokeWidth="2.5"/>
              <path d="M1 7L20 19L39 7" stroke="#f0436a" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        
        <h2 className="relative text-white font-bold text-2xl md:text-3xl mb-3 tracking-tight font-playfair">
          {subscriptionStatus === 'success' && isAnimating ? 'Thank You!' : 'Join the Inner Circle'}
        </h2>
        
        <p className="relative text-gray-400 text-base max-w-lg mb-8 leading-relaxed">
          {subscriptionStatus === 'success' && isAnimating 
            ? 'You\'re now part of our exclusive community. Check your inbox for a special gift! ✨'
            : 'Subscribe for early access to new collections, botanical insights, and exclusive invitations.'}
        </p>
        
        <form onSubmit={handleSubscribe} className="relative flex w-full max-w-xl gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`w-full rounded-xl px-5 py-4 text-white placeholder-gray-500 text-sm outline-none border transition-all duration-300 ${
                subscriptionStatus === 'error' && isAnimating
                  ? 'border-red-500 animate-shake bg-red-900/20'
                  : subscriptionStatus === 'success' && isAnimating
                  ? 'border-green-500 bg-green-900/20'
                  : 'border-white/10 focus:border-pink-500/50'
              }`}
              style={{ background: "rgba(255,255,255,0.06)" }}
              disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
            />
            
            {/* Success Checkmark */}
            {subscriptionStatus === 'success' && isAnimating && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 animate-bounce-in">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17L4 12" strokeLinecap="round"/>
                </svg>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
            className={`relative overflow-hidden rounded-xl px-7 py-4 font-semibold text-white text-sm whitespace-nowrap transition-all duration-300 ${
              subscriptionStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : ''
            } hover:brightness-110 active:scale-95`}
            style={subscriptionStatus !== 'success' ? { 
              background: "linear-gradient(135deg, #f0436a 0%, #e0255a 100%)",
              boxShadow: "0 4px 20px rgba(240,67,106,0.35)"
            } : {}}
          >
            <span className={`transition-all duration-300 inline-block ${
              subscriptionStatus === 'loading' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}>
              {subscriptionStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
            </span>
            
            {/* Loading Spinner */}
            {subscriptionStatus === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>
        
        {/* Error Message */}
        <div className={`relative overflow-hidden transition-all duration-300 ${
          subscriptionStatus === 'error' && isAnimating
            ? 'max-h-10 opacity-100 mt-3'
            : 'max-h-0 opacity-0'
        }`}>
          <p className="text-red-400 text-xs animate-fade-in">Please enter a valid email address</p>
        </div>
        
        {/* Success Extra Message */}
        {subscriptionStatus === 'success' && isAnimating && (
          <p className="relative text-gray-400 text-xs mt-5 animate-fade-in">
            Check your inbox for the confirmation email ✨
          </p>
        )}
        
        {/* Terms Text - Hide during success animation for cleaner look */}
        {(!subscriptionStatus !== 'success' || !isAnimating) && (
          <p className="relative text-gray-600 text-xs mt-5">
            By subscribing, you agree to our <span className="underline cursor-pointer hover:text-gray-400">Terms of Service</span> and <span className="underline cursor-pointer hover:text-gray-400">Privacy Policy</span>.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
// ── Main Export ───────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const navigate = useNavigate();

  // Inject animation styles once
  useEffect(() => {
    if (!document.getElementById('glamstreet-anim')) {
      const style = document.createElement('style');
      style.id = 'glamstreet-anim';
      style.textContent = ANIM_STYLE;
      document.head.appendChild(style);
    }
  }, []);

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
        <div className="group relative md:rounded-2xl overflow-hidden h-80 shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" onClick={() => navigate("/blogs")} style={{ backgroundImage: `url('https://imgs.search.brave.com/Nt57vFtgsU_awOS5tPn2js-obuhYk9RNje2sQk70N1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/NTcvODU2OS8yMzc1/L2ZpbGVzL0Jsb2df/SW1hZ2UtMV8tY3V0/ZS1hbmQtYWVzdGhl/dGljLXNraW5jYXJl/LWJyYW5kcy15b3Vf/bGwtd2FudC1vbi15/b3VyLXZhbml0eV9D/b21wcmVzc2VkLndl/YnA_dj0xNzUwODA5/ODU3')` }}/>
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