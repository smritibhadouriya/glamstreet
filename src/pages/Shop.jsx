import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, newArrivals } from '../data/Products.js';

const categories = ['All Products', 'Skin Care', 'Hair Care', 'Makeup'];

const concerns = [
  'All', 'Brightening', 'Hydration', 'Acne', 'Anti-aging',
  'Frizz', 'Curl Definition', 'Dark Circles', 'Sun Protection',
  'Cleansing', 'Damage Repair', 'Color',
];

const skinTypes = ['All', 'Dry Skin', 'Oily Skin', 'Combination Skin', 'Sensitive Skin', 'All Skin Types'];
const ingredientsList = ['All', 'Niacinamide', 'Retinol', 'Vitamin C', 'Hyaluronic Acid', 'Salicylic Acid', 'Ceramides', 'Peptides'];
const sortOptions = ['Best Selling', 'New Arrival', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

// Custom dropdown select
function FilterSelect({ label, value, options, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:border-[#C2185B] cursor-pointer"
      >
        <option value="All">{label}</option>
        {options.filter(o => o !== 'All').map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [activeConcern, setActiveConcern]   = useState('All');
  const [activeSort, setActiveSort]         = useState('Best Selling');
  const [selectedSkinType, setSelectedSkinType] = useState('All');
  const [selectedIngredient, setSelectedIngredient] = useState('All');
  const [viewMode, setViewMode]             = useState('grid'); // 'grid' | 'list'
  const [visibleCount, setVisibleCount]     = useState(9); // Show 9 products initially

  // Get category-specific heading and description
  const getCategoryContent = () => {
    switch(activeCategory) {
      case 'Skin Care':
        return {
          heading: 'Skincare Essentials',
          description: 'Discover dermatologically tested formulas tailored to your unique skin concerns. From hydration heroes to brightening serums.',
          breadcrumb: 'Skincare'
        };
      case 'Hair Care':
        return {
          heading: 'Hair Care Collection',
          description: 'Nourish, repair, and style your hair with our premium hair care products. From frizz control to deep conditioning masks.',
          breadcrumb: 'Hair Care'
        };
      case 'Makeup':
        return {
          heading: 'Makeup Studio',
          description: 'Express your beauty with our range of long-lasting, skin-loving makeup products. From velvety lipsticks to radiant foundations.',
          breadcrumb: 'Makeup'
        };
      default:
        return {
          heading: 'All Products',
          description: 'Explore our complete collection of beauty essentials. From skincare to makeup, find your perfect match.',
          breadcrumb: 'All Products'
        };
    }
  };

  const categoryContent = getCategoryContent();

  const toggleWishlist = (id) => setWishlist(prev => ({ ...prev, [id]: !prev[id] }));

  // Filter
  let filtered = products.filter((p) => {
    if (activeCategory !== 'All Products' && p.category !== activeCategory) return false;
    if (activeConcern !== 'All' && p.concern !== activeConcern) return false;
    if (selectedSkinType !== 'All' && !p.suitableFor.includes(selectedSkinType)) return false;
    return true;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (activeSort === 'Price: Low to High') return a.price - b.price;
    if (activeSort === 'Price: High to Low') return b.price - a.price;
    if (activeSort === 'Top Rated') return b.rating - a.rating;
    if (activeSort === 'New Arrival') {
      const aHasBadge = a.badge && a.badge.includes('summer glow') ? 1 : 0;
      const bHasBadge = b.badge && b.badge.includes('summer glow') ? 1 : 0;
      return bHasBadge - aHasBadge;
    }
    return b.reviewCount - a.reviewCount;
  });

  // Get visible products based on pagination
  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6); // Load 6 more products
  };

  const resetFilters = () => {
    setActiveConcern('All');
    setSelectedSkinType('All');
    setSelectedIngredient('All');
    setActiveCategory('All Products');
    setVisibleCount(9); // Reset pagination when filters change
  };

  // Reset pagination when filters change
  const handleFilterChange = (filterType, value) => {
    setVisibleCount(9);
    
    switch(filterType) {
      case 'category':
        setActiveCategory(value === 'All' ? 'All Products' : value);
        break;
      case 'concern':
        setActiveConcern(value);
        break;
      case 'skinType':
        setSelectedSkinType(value);
        break;
      case 'ingredient':
        setSelectedIngredient(value);
        break;
      case 'sort':
        setActiveSort(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Header ── */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-2">
        {/* Breadcrumb - dynamic based on category */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
          <Link to="/" className="hover:text-[#C2185B] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-500">{categoryContent.breadcrumb}</span>
        </div>
        
        {/* Dynamic heading and description */}
        <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-1">{categoryContent.heading}</h1>
        <p className="text-gray-400 text-sm mb-5">{categoryContent.description}</p>

        {/* ── Category Tabs Row ── */}
        <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => handleFilterChange('category', c)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === c
                  ? 'bg-[#C2185B] text-white'
                  : 'bg-transparent text-gray-600 hover:text-[#C2185B]'
              }`}
            >
              {c}
            </button>
          ))}
          {/* product count — pushed right */}
          <span className="ml-auto text-xs text-gray-400">({filtered.length} items)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex gap-6">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-24 space-y-5">

              {/* Category dropdown */}
              <div>
                <FilterSelect
                  label="Select Category"
                  value={activeCategory === 'All Products' ? 'All' : activeCategory}
                  options={['All', ...categories.filter(c => c !== 'All Products')]}
                  onChange={(v) => handleFilterChange('category', v)}
                />
              </div>

              <button onClick={resetFilters} className="text-xs text-gray-400 hover:text-[#C2185B] transition-colors">
                Reset
              </button>

              {/* Filters block */}
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-3">Filters</p>

                {/* Concern */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Concern</p>
                  <FilterSelect
                    label="Select Concern"
                    value={activeConcern}
                    options={concerns}
                    onChange={(v) => handleFilterChange('concern', v)}
                  />
                </div>

                {/* Hair / Skin Type */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Hair / Skin Type</p>
                  <FilterSelect
                    label="Select Type"
                    value={selectedSkinType}
                    options={skinTypes}
                    onChange={(v) => handleFilterChange('skinType', v)}
                  />
                </div>

                {/* Ingredients */}
                <div className="mb-3">
                  <FilterSelect
                    label="Select Ingredients"
                    value={selectedIngredient}
                    options={ingredientsList}
                    onChange={(v) => handleFilterChange('ingredient', v)}
                  />
                </div>

                {/* Price Range */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 mb-2">Price Range</p>
                  <FilterSelect
                    label="Select Price Range"
                    value="All"
                    options={['All', 'Under ₹300', '₹300–₹600', 'Above ₹600']}
                    onChange={() => {}}
                  />
                </div>
              </div>

              {/* New Arrivals */}
              {newArrivals.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">New Arrivals</p>
                  <div className="space-y-3">
                    {newArrivals.map((p) => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex items-center gap-2.5 group">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-pink-50">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement.innerHTML =
                                `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1.2rem">${p.emoji}</div>`;
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-gray-700 group-hover:text-[#C2185B] transition-colors line-clamp-2 leading-tight">{p.name}</p>
                          <p className="text-[#C2185B] text-xs font-bold mt-0.5">₹{p.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ── Product Grid ── */}
          <div className="flex-1 min-w-0">
            {/* Top bar: count + sort + view toggle */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">{filtered.length}</span> products found
               
              </p>
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button className="lg:hidden border border-gray-200 px-3 py-1.5 rounded-full text-xs text-gray-600 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2"/>
                  </svg>
                  Filters
                </button>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                    className="appearance-none border border-gray-200 rounded-full pl-3 pr-8 py-1.5 text-xs text-gray-600 bg-white focus:outline-none focus:border-[#C2185B] cursor-pointer"
                  >
                    {sortOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>

                {/* View mode toggle */}
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 transition-colors ${viewMode === 'grid' ? 'bg-[#C2185B] text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#C2185B] text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {visibleProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
                  : 'flex flex-col gap-3'
              }>
                {visibleProducts.map((p) => (
                  viewMode === 'grid'
                    ? <GridCard key={p.id} p={p} />
                    : <ListCard key={p.id} p={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p className="text-5xl mb-4">🔍</p>
                <p className="font-semibold text-gray-600 text-lg">No products found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
                <button onClick={resetFilters} className="mt-4 text-[#C2185B] text-sm font-medium hover:underline">
                  Reset all filters
                </button>
              </div>
            )}

            {/* Load More */}
            {visibleProducts.length > 0 && hasMoreProducts && (
              <div className="flex justify-center mt-10">
                <button 
                  onClick={loadMore}
                  className="border border-gray-300 text-gray-600 px-10 py-2.5 rounded-full text-sm font-medium hover:border-[#C2185B] hover:text-[#C2185B] transition-all"
                >
                  Load More 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Grid Card — matches the image design exactly ─────────────────
function GridCard({ p }) {
  // Get the first badge from the array if it exists
  const primaryBadge = p.badge && p.badge.length > 0 ? p.badge[0] : null;
  
  return (
    <Link
      to={`/product/${p.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image area — tall, colored bg */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-50">
        <img
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #fce4ec, #f8bbd0)';
            e.currentTarget.parentElement.innerHTML +=
              `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3.5rem">${p.emoji || '🌸'}</div>`;
          }}
        />
        {/* Badge - now handles array */}
        {primaryBadge && primaryBadge !== 'none' && (
          <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${
            primaryBadge.toLowerCase() === 'best seller' ? 'bg-gray-800' : 'bg-[#C2185B]'
          }`}>
            {primaryBadge.toUpperCase()}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-3.5 flex flex-col flex-1">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs font-semibold text-gray-700">{p.rating}</span>
          <span className="text-xs text-gray-400">({p.reviewCount})</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 line-clamp-2">{p.name}</h3>

        {/* Desc */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">{p.desc}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-900 text-sm">₹{p.price}</span>
            {p.originalPrice && (
              <span className="text-gray-400 text-xs line-through">₹{p.originalPrice}</span>
            )}
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-[#C2185B] hover:bg-[#880E4F] text-white text-xs px-4 py-1.5 rounded-full font-medium transition-colors"
          >
            View
          </button>
        </div>
      </div>
    </Link>
  );
}

// ── List Card ────────────────────────────────────────────────────
function ListCard({ p }) {
  // Get the first badge from the array if it exists
  const primaryBadge = p.badge && p.badge.length > 0 ? p.badge[0] : null;
  
  return (
    <Link
      to={`/product/${p.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-36 h-36 shrink-0 bg-gray-50">
        <img
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML +=
              `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:2.5rem">${p.emoji || '🌸'}</div>`;
          }}
        />
        {primaryBadge && primaryBadge !== 'none' && (
          <span className="absolute top-2 left-2 bg-[#C2185B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {primaryBadge}
          </span>
        )}
      </div>
      {/* Body */}
      <div className="flex flex-1 items-start justify-between p-4">
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-[#C2185B] text-xs font-medium uppercase tracking-wide mb-0.5">{p.type}</p>
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.name}</h3>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-gray-500">{p.rating} ({p.reviewCount})</span>
          </div>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{p.desc}</p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="font-bold text-gray-900 text-sm">₹{p.price}</span>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-[#C2185B] hover:bg-[#880E4F] text-white text-xs px-4 py-1.5 rounded-full font-medium transition-colors"
          >
            View
          </button>
        </div>
      </div>
    </Link>
  );
}