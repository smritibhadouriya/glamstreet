import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/Products';
import { blogData } from '../data/Blogs'; // You'll need to create this file

const navItems = [
  { label: 'Home',     path: '/' },
  { label: 'Shop',     path: '/shop' },
  { label: 'About us', path: '/about' },
  { label: 'Blogs',    path: '/blogs' },
];

// Category bar items with their filter options
const categoryBarItems = [
  { 
    label: 'Ingredients', 
    filterKey: 'ingredient',
    options: ['All', 'Neem', 'Shea Butter', 'Vitamin C', 'Hyaluronic Acid', 'Salicylic Acid', 'Ceramides', 'Green Tea'] 
  },
  { 
    label: 'Skin Type', 
    filterKey: 'skinType',
    options: ['All', 'Dry Skin', 'Oily Skin', 'Combination Skin', 'Sensitive Skin', 'All Skin Types'] 
  },
  { 
    label: 'Skin Care', 
    filterKey: 'category',
    value: 'Skin Care'

  },
  { 
    label: 'Makeup', 
    filterKey: 'category',
    value: 'Makeup'

  },
  { 
    label: 'Hair Type', 
    filterKey: 'hairType',
    options: ['All', 'Curly Hair', 'Wavy Hair', 'Straight Hair', 'Frizzy Hair'] 
  },
  { 
    label: 'Hair Care', 
    filterKey: 'category',
    value: 'Hair Care'

  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [query, setQuery]                   = useState('');
  const [results, setResults]               = useState([]);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeCategoryDropdown, setActiveCategoryDropdown] = useState(null);
  const [searchType, setSearchType] = useState('all'); // 'all', 'products', 'blogs'

  const location  = useLocation();
  const navigate  = useNavigate();
  const desktopRef = useRef(null);
  const mobileRef  = useRef(null);
  const categoryDropdownRef = useRef(null);

  // Search logic for both products and blogs
  const doSearch = (value) => {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      setDropdownOpen(false);
      return;
    }
    const q = value.toLowerCase();
    
    let filtered = [];
    
    // Search in products
    const productResults = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.targets && p.targets.some(t => t.toLowerCase().includes(q)))
      )
      .map(p => ({ ...p, resultType: 'product' }))
      .slice(0, 4);
    
    // Search in blogs
    const blogResults = blogData
      .filter(
        (b) =>
          b.heading.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          (b.category && b.category.toLowerCase().includes(q)) ||
          (b.concern && b.concern.some(c => c.toLowerCase().includes(q))) ||
          (b.tags && b.tags.some(t => t.toLowerCase().includes(q)))
      )
      .map(b => ({ 
        id: `blog-${b.id}`, 
        originalId: b.id,
        name: b.heading,
        brand: 'Blog',
        category: b.category,
        type: 'Article',
        price: null,
        rating: null,
        reviewCount: null,
        desc: b.excerpt,
        images: [b.image],
        badge: b.category,
        resultType: 'blog',
        slug: b.slug
      }))
      .slice(0, 2);
    
    // Combine results based on search type
    if (searchType === 'products') {
      filtered = productResults;
    } else if (searchType === 'blogs') {
      filtered = blogResults;
    } else {
      // Mix products and blogs for 'all'
      filtered = [...productResults, ...blogResults];
    }
    
    setResults(filtered);
    setDropdownOpen(true);
  };

  const handleSelect = (result) => {
    setQuery('');
    setResults([]);
    setDropdownOpen(false);
    setMobileSearchOpen(false);
    
    if (result.resultType === 'product') {
      navigate(`/product/${result.slug}`);
    } else if (result.resultType === 'blog') {
      navigate(`/blog/${result.slug}`);
    }
  };

  const handleCategoryFilter = (categoryItem, option) => {
    setActiveCategoryDropdown(null);
    
    // Navigate to shop with filters
    const searchParams = new URLSearchParams();
    
    if (option !== 'All') {
      if (categoryItem.filterKey === 'category') {
        searchParams.set('category', option);
      } else if (categoryItem.filterKey === 'skinType') {
        searchParams.set('skinType', option);
      } else if (categoryItem.filterKey === 'ingredient') {
        searchParams.set('ingredient', option);
      } else if (categoryItem.filterKey === 'hairType') {
        searchParams.set('hairType', option);
      }
    }
    
    navigate(`/shop?${searchParams.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) handleSelect(results[0]);
    if (e.key === 'Escape') { setDropdownOpen(false); setQuery(''); setResults([]); }
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuery('');
    setResults([]);
    setDropdownOpen(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        desktopRef.current && !desktopRef.current.contains(e.target) &&
        mobileRef.current && !mobileRef.current.contains(e.target) &&
        categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
        setActiveCategoryDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Dropdown (shared between desktop and mobile)
  const Dropdown = () => (
    dropdownOpen ? (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-pink-100 z-[999] overflow-hidden max-h-96 overflow-y-auto " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {results.length > 0 ? (
          <>
            <div className="px-4 py-2 border-b border-pink-50 sticky top-0 bg-white">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                {results.length} result{results.length > 1 ? 's' : ''} for "{query}"
              </span>
            </div>

            {results.map((result) => (
              <button
                key={result.slug}
                onMouseDown={(e) => { e.preventDefault(); handleSelect(result); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition-colors text-left group border-b border-pink-50 last:border-0"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 flex items-center justify-center">
                  <img
                    src={result.images[0]}
                    alt={result.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML =
                        `<span style="font-size:1.5rem">${result.resultType === 'product' ? '🧴' : '📝'}</span>`;
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#c2185b] transition-colors">
                      {result.name}
                    </p>
                    {result.resultType === 'blog' && (
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">
                        Blog
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {result.resultType === 'product' 
                      ? `${result.brand} · ${result.type}`
                      : `${result.category} · ${result.desc.substring(0, 50)}...`
                    }
                  </p>
                </div>

                {result.resultType === 'product' && result.price && (
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold text-[#c2185b]">₹{result.price}</p>
                    {result.badge && result.badge[0] !== 'none' && (
                      <span className="text-[10px] bg-pink-50 text-[#c2185b] px-1.5 py-0.5 rounded-full border border-pink-200">
                        {result.badge[0]}
                      </span>
                    )}
                  </div>
                )}

                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#c2185b] shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            ))}

            <div className="px-4 py-2 border-t border-pink-50 sticky bottom-0 bg-white">
              <button
                onMouseDown={() => {
                  if (searchType === 'products') {
                    navigate(`/shop?search=${encodeURIComponent(query)}`);
                  } else if (searchType === 'blogs') {
                    navigate(`/blogs?search=${encodeURIComponent(query)}`);
                  } else {
                    navigate(`/shop?search=${encodeURIComponent(query)}`);
                  }
                  setDropdownOpen(false);
                  setQuery('');
                }}
                className="text-xs text-[#c2185b] font-semibold hover:underline flex items-center gap-1"
              >
                View all results for "{query}"
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="px-4 py-6 text-center">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-sm font-semibold text-gray-600">No results found</p>
            <p className="text-xs text-gray-400 mt-1">Try searching for products or blogs</p>
          </div>
        )}
      </div>
    ) : null
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">

        {/* Main Row */}
        <div className="flex items-center justify-between h-16 px-6">

          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold text-gray-900 whitespace-nowrap">
            The<span className="text-[#c2185b]">Glam</span>Street
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#c2185b] font-semibold'
                    : 'text-gray-700 hover:text-[#c2185b]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Search + Login */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative w-72 lg:w-96" ref={desktopRef}>
      <svg
  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  />
</svg>
              <input
                type="text"
                value={query}
                onChange={(e) => doSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (query.length >= 2) setDropdownOpen(true); }}
                placeholder={`Search ${searchType === 'all' ? 'products & blogs' : searchType}...`}
                autoComplete="off"
                className="w-full pl-10 pr-8 py-2.5 rounded-full border border-pink-200 text-sm
                           placeholder:text-gray-400 bg-white transition-all
                           hover:border-pink-300
                           focus:outline-none focus:border-[#c2185b] focus:ring-2 focus:ring-[#c2185b]/10"
              />
          
              {query && (
                <button
                  type="button"
                  onMouseDown={handleClear}
                  className="absolute right-10 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-pink-200 text-gray-600 text-[10px] font-bold transition-colors"
                >
                  ✕
                </button>
              )}
              <Dropdown />
            </div>

       
          </div>

          {/* Mobile icons */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 text-gray-600 hover:text-[#c2185b]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 hover:text-[#c2185b]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 border-t border-pink-50 pt-3">
            <div className="relative" ref={mobileRef}>
       
              <input
                type="text"
                value={query}
                onChange={(e) => doSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (query.length >= 2) setDropdownOpen(true); }}
                placeholder={`Search ${searchType}...`}
                autoComplete="off"
                autoFocus
                className="w-full pl-10 pr-8 py-2.5 rounded-full border border-pink-200 text-sm
                           placeholder:text-gray-400 bg-white
                           focus:outline-none focus:border-[#c2185b] focus:ring-2 focus:ring-[#c2185b]/10"
              />
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              {query && (
                <button
                  type="button"
                  onMouseDown={handleClear}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-pink-200 text-gray-600 text-[10px] font-bold transition-colors"
                >
                  ✕
                </button>
              )}
              <Dropdown />
            </div>
          </div>
        )}

      
{/* Category Bar with Dropdowns */}
<div className="hidden md:flex items-center justify-center gap-8 py-3 border-t border-pink-100 bg-white relative overflow-visible" ref={categoryDropdownRef}>
  {categoryBarItems.map((item) => (
    <div key={item.label} className="relative">
      {item.options ? (
        // Items with options (Ingredients, Skin Type, Hair Type) - show dropdown
        <>
          <button
            onClick={() => setActiveCategoryDropdown(activeCategoryDropdown === item.label ? null : item.label)}
            className={`text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
              activeCategoryDropdown === item.label
                ? 'text-[#c2185b]'
                : 'text-gray-700 hover:text-[#c2185b]'
            }`}
          >
            {item.label}
            <svg 
              className={`w-4 h-4 transition-transform ${activeCategoryDropdown === item.label ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {activeCategoryDropdown === item.label && (
            <div className="absolute top-full left-0 mt-5 bg-white rounded-xl shadow-lg border border-pink-100 py-2 min-w-48 z-100">
              {item.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleCategoryFilter(item, option)}
                  className="w-full text-left px-4 py-1 text-md text-gray-700 hover:bg-pink-50 hover:text-[#c2185b] transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        // Items without options (Skin Care, Makeup, Hair Care) - direct filter
        <button
          onClick={() => handleCategoryFilter(item, item.value)}
          className="text-sm font-medium whitespace-nowrap transition-colors text-gray-700 hover:text-[#c2185b]"
        >
          {item.label}
        </button>
      )}
    </div>
  ))}
</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-base font-medium border-b border-pink-100 ${
                location.pathname === item.path ? 'text-[#c2185b]' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
         
{/* Mobile Category Filters 
<div className="space-y-3 pt-2">
  <p className="text-sm font-semibold text-gray-900">Shop by Category</p>
  {categoryBarItems.map((item) => (
    <div key={item.label} className="space-y-2">
      <p className="text-xs font-medium text-gray-500">{item.label}</p>
      <div className="flex flex-wrap gap-2">
        {item.options ? (
          // Items with options - show first 4 options
          item.options.slice(0, 4).map((option) => (
            <button
              key={option}
              onClick={() => {
                handleCategoryFilter(item, option);
                setMenuOpen(false);
              }}
              className="text-xs px-3 py-1.5 rounded-full border border-pink-200 text-gray-600 hover:border-[#c2185b] hover:text-[#c2185b] transition-colors"
            >
              {option}
            </button>
          ))
        ) : (
          // Items without options - show the category button
          <button
            onClick={() => {
              handleCategoryFilter(item, item.value);
              setMenuOpen(false);
            }}
            className="text-xs px-3 py-1.5 rounded-full border border-pink-200 text-gray-600 hover:border-[#c2185b] hover:text-[#c2185b] transition-colors"
          >
            {item.label}
          </button>
        )}
      </div>
    </div>
  ))}
</div>*/}
          
        
        </div>
      )}
    </header>
  );
}