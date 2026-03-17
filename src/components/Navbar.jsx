import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/Products';

const navItems = [
  { label: 'Home',     path: '/' },
  { label: 'Shop',     path: '/shop' },
  { label: 'About us', path: '/about' },
  { label: 'Blogs',    path: '/blogs' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [query, setQuery]                   = useState('');
  const [results, setResults]               = useState([]);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const location  = useLocation();
  const navigate  = useNavigate();
  const desktopRef = useRef(null);
  const mobileRef  = useRef(null);

  // Search logic
  const doSearch = (value) => {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      setDropdownOpen(false);
      return;
    }
    const q = value.toLowerCase();
    const filtered = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.concern.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 6);
    setResults(filtered);
    setDropdownOpen(true);
  };

  const handleSelect = (productId) => {
    setQuery('');
    setResults([]);
    setDropdownOpen(false);
    setMobileSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) handleSelect(results[0].id);
    if (e.key === 'Escape') { setDropdownOpen(false); setQuery(''); setResults([]); }
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuery('');
    setResults([]);
    setDropdownOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        desktopRef.current && !desktopRef.current.contains(e.target) &&
        mobileRef.current && !mobileRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Dropdown (shared between desktop and mobile)
  const Dropdown = () => (
    dropdownOpen ? (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-pink-100 z-[999] overflow-hidden">
        {results.length > 0 ? (
          <>
            <div className="px-4 py-2 border-b border-pink-50">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                {results.length} result{results.length > 1 ? 's' : ''} for "{query}"
              </span>
            </div>

            {results.map((product) => (
              <button
                key={product.id}
                onMouseDown={(e) => { e.preventDefault(); handleSelect(product.id); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML =
                        `<span style="font-size:1.5rem">${product.emoji}</span>`;
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#c2185b] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{product.brand} · {product.type}</p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-sm font-bold text-[#c2185b]">₹{product.price}</p>
                  {product.badge && (
                    <span className="text-[10px] bg-pink-50 text-[#c2185b] px-1.5 py-0.5 rounded-full border border-pink-200">
                      {product.badge}
                    </span>
                  )}
                </div>

                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#c2185b] shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            ))}

            <div className="px-4 py-2 border-t border-pink-50">
              <Link
                to={`/shop?q=${encodeURIComponent(query)}`}
                onMouseDown={() => { setDropdownOpen(false); setQuery(''); }}
                className="text-xs text-[#c2185b] font-semibold hover:underline flex items-center gap-1"
              >
                View all results for "{query}"
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="px-4 py-6 text-center">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-sm font-semibold text-gray-600">No products found</p>
            <p className="text-xs text-gray-400 mt-1">Try a different name, brand or concern</p>
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
                className={`text-sm font-medium transition-colors ${
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
              <input
                type="text"
                value={query}
                onChange={(e) => doSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => { if (query.length >= 2) setDropdownOpen(true); }}
                placeholder="Search Product"
                autoComplete="off"
                className="w-full pl-10 pr-8 py-2.5 rounded-full border border-pink-200 text-sm
                           placeholder:text-gray-400 bg-white transition-all
                           hover:border-pink-300
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

            <Link
              to="/shop"
              className="bg-[#c2185b] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#a0144a] transition-colors whitespace-nowrap"
            >
              Login
            </Link>
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
                placeholder="Search Product"
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

        {/* Category Bar */}
        <div className="hidden md:flex items-center justify-center gap-8 py-3 border-t border-pink-100 bg-white overflow-x-auto">
          {['Ingredients', 'Skin Type', 'Skin Care', 'Makeup', 'Hair Type', 'Hair Care'].map((cat) => (
            <Link
              key={cat}
              to="/shop"
              className="text-xs font-medium text-gray-700 hover:text-[#c2185b] whitespace-nowrap transition-colors"
            >
              {cat}
            </Link>
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
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-[#c2185b] text-white py-3 rounded-full text-center font-medium"
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}