import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, newArrivals } from '../data/Products.js';

const categories = ['All Products', 'Skin Care', 'Hair Care', 'Makeup'];

const concerns = [
  'All', 'Brightening', 'Hydration', 'Acne', 'Anti-aging',
  'Frizz', 'Curl Definition', 'Dark Circles', 'Sun Protection',
  'Cleansing', 'Damage Repair', 'Color',
];

const skinTypes = ['All', 'Dry Skin', 'Oily Skin', 'Combination Skin', 'Sensitive Skin', 'All Skin Types'];
const ingredientsList = ['All', 'Niacinamide', 'Retinol', 'Vitamin C', 'Hyaluronic Acid', 'Salicylic Acid', 'Ceramides', 'Peptides'];
const hairTypes = ['All', 'Curly Hair', 'Wavy Hair', 'Straight Hair', 'Frizzy Hair'];
const sortOptions = ['Best Selling', 'New Arrival', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function FilterSelect({ label, value, options, onChange, isMobile }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:border-[#C2185B] cursor-pointer ${
          isMobile ? 'text-base py-3' : ''
        }`}
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

// Mobile Filter Drawer Component
function MobileFilterDrawer({ isOpen, onClose, filters, onFilterChange, onReset }) {
  const {
    activeConcern,
    selectedSkinType,
    selectedHairType,
    selectedIngredient,
    selectedPriceRange,
    activeCategory
  } = filters;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Drawer */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'tween' }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto"
      >
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={onReset}
                className="text-sm text-gray-500 hover:text-[#C2185B]"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Options */}
          <div className="space-y-5 pb-8">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Concern</p>
              <div className="grid grid-cols-2 gap-2">
                {concerns.filter(c => c !== 'All').map((concern) => (
                  <button
                    key={concern}
                    onClick={() => onFilterChange('concern', concern)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeConcern === concern
                        ? 'bg-[#C2185B] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>

            {activeCategory !== 'Hair Care' && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Skin Type</p>
                <div className="flex flex-wrap gap-2">
                  {skinTypes.filter(s => s !== 'All').map((type) => (
                    <button
                      key={type}
                      onClick={() => onFilterChange('skinType', type)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        selectedSkinType === type
                          ? 'bg-[#C2185B] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'Hair Care' && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Hair Type</p>
                <div className="flex flex-wrap gap-2">
                  {hairTypes.filter(h => h !== 'All').map((type) => (
                    <button
                      key={type}
                      onClick={() => onFilterChange('hairType', type)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        selectedHairType === type
                          ? 'bg-[#C2185B] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {ingredientsList.filter(i => i !== 'All').map((ingredient) => (
                  <button
                    key={ingredient}
                    onClick={() => onFilterChange('ingredient', ingredient)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedIngredient === ingredient
                        ? 'bg-[#C2185B] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Price Range</p>
              <div className="grid grid-cols-2 gap-2">
                {['Under ₹300', '₹300–₹600', 'Above ₹600'].map((price) => (
                  <button
                    key={price}
                    onClick={() => onFilterChange('price', price)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedPriceRange === price
                        ? 'bg-[#C2185B] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#C2185B] text-white font-semibold rounded-xl hover:bg-[#a01a4c] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [activeCategory, setActiveCategory] = useState(() => queryParams.get('category') || 'All Products');
  const [activeConcern, setActiveConcern] = useState(() => queryParams.get('concern') || 'All');
  const [showSignature, setShowSignature] = useState(() => queryParams.get('signature') === 'true');
  const [showFeatured, setShowFeatured] = useState(() => queryParams.get('featured') === 'true');
  const [activeSort, setActiveSort] = useState(() => queryParams.get('sort') || 'Best Selling');
  const [selectedSkinType, setSelectedSkinType] = useState(() => queryParams.get('skinType') || 'All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(() => queryParams.get('price') || 'All');
  const [selectedIngredient, setSelectedIngredient] = useState(() => queryParams.get('ingredient') || 'All');
  const [selectedHairType, setSelectedHairType] = useState(() => queryParams.get('hairType') || 'All');
  const [viewMode, setViewMode] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(9);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setActiveCategory(params.get('category') || 'All Products');
    setActiveConcern(params.get('concern') || 'All');
    setActiveSort(params.get('sort') || 'Best Selling');
    setSelectedSkinType(params.get('skinType') || 'All');
    setSelectedIngredient(params.get('ingredient') || 'All');
    setSelectedHairType(params.get('hairType') || 'All');
    setSelectedPriceRange(params.get('price') || 'All'); 
    setShowSignature(params.get('signature') === 'true'); 
    setShowFeatured(params.get('featured') === 'true'); 
    setVisibleCount(9);
  }, [location.search]);

  const updateURLParams = (updates) => {
    const params = new URLSearchParams(location.search);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'All' && value !== 'All Products') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    navigate(`/shop${params.toString() ? '?' + params.toString() : ''}`, { replace: true });
  };

  const getCategoryContent = () => {
    switch(activeCategory) {
      case 'Skin Care': return { heading: 'Skincare Essentials', description: 'Discover dermatologically tested formulas tailored to your unique skin concerns.', breadcrumb: 'Skincare' };
      case 'Hair Care': return { heading: 'Hair Care Collection', description: 'Nourish, repair, and style your hair with our premium hair care products.', breadcrumb: 'Hair Care' };
      case 'Makeup': return { heading: 'Makeup Studio', description: 'Express your beauty with our range of long-lasting, skin-loving makeup products.', breadcrumb: 'Makeup' };
      default: return { heading: 'All Products', description: 'Explore our complete collection of beauty essentials.', breadcrumb: 'All Products' };
    }
  };

  const categoryContent = getCategoryContent();

  let filtered = products.filter((p) => {
    if (activeCategory !== 'All Products' && p.category !== activeCategory) return false;
    const badgeParam = queryParams.get('badge');
    if (badgeParam && (!p.badge || !p.badge.some(b => b.toLowerCase() === badgeParam.toLowerCase()))) return false;
    if (showSignature && !p.signature) return false;
    if (showFeatured && !p.featured) return false;
    if (selectedPriceRange !== 'All') {
      if (selectedPriceRange === 'Under ₹300' && p.price >= 300) return false;
      if (selectedPriceRange === '₹300–₹600' && (p.price < 300 || p.price > 600)) return false;
      if (selectedPriceRange === 'Above ₹600' && p.price <= 600) return false;
    }
    if (activeConcern !== 'All' && (!p.targets || !p.targets.some(t => t.toLowerCase().includes(activeConcern.toLowerCase())))) return false;
    if (selectedSkinType !== 'All') {
      const hasSkinType = (p.suitableFor && p.suitableFor.some(s => s.toLowerCase().includes(selectedSkinType.toLowerCase()))) ||
        (p.subcategory && p.subcategory.some(s => s.toLowerCase().includes(selectedSkinType.toLowerCase().replace(' ', ''))));
      if (!hasSkinType) return false;
    }
    if (selectedIngredient !== 'All' && !p.ingredients.toLowerCase().includes(selectedIngredient.toLowerCase())) return false;
    if (selectedHairType !== 'All') {
      const hairTypeMap = { 'Curly Hair': ['curl', 'curly'], 'Wavy Hair': ['wave', 'wavy'], 'Straight Hair': ['straight', 'long'], 'Frizzy Hair': ['frizzy', 'frizz'] };
      const searchTerms = hairTypeMap[selectedHairType] || [selectedHairType.toLowerCase()];
      const hasHairType = (p.subcategory && p.subcategory.some(s => searchTerms.some(term => s.toLowerCase().includes(term)))) ||
        (p.suitableFor && p.suitableFor.some(s => searchTerms.some(term => s.toLowerCase().includes(term)))) ||
        (p.targets && p.targets.some(t => searchTerms.some(term => t.toLowerCase().includes(term))));
      if (!hasHairType) return false;
    }
    return true;
  });

  filtered = [...filtered].sort((a, b) => {
    if (activeSort === 'Price: Low to High') return a.price - b.price;
    if (activeSort === 'Price: High to Low') return b.price - a.price;
    if (activeSort === 'Top Rated') return b.rating - a.rating;
    if (activeSort === 'New Arrival') return (b.badge?.includes('summer glow') ? 1 : 0) - (a.badge?.includes('summer glow') ? 1 : 0);
    return b.reviewCount - a.reviewCount;
  });

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filtered.length;

  const handleFilterChange = (filterType, value) => {
    const updates = {};
    switch(filterType) {
      case 'category': updates.category = value === 'All' || value === 'All Products' ? null : value; break;
      case 'concern': updates.concern = value === 'All' ? null : value; break;
      case 'skinType': updates.skinType = value === 'All' ? null : value; break;
      case 'ingredient': updates.ingredient = value === 'All' ? null : value; break;
      case 'hairType': updates.hairType = value === 'All' ? null : value; break;
      case 'price': updates.price = value === 'All' ? null : value; break;
      case 'sort': updates.sort = value === 'Best Selling' ? null : value; break;
      default: break;
    }
    updateURLParams(updates);
    setIsMobileFilterOpen(false);
  };

  const handleResetAll = () => {
    navigate('/shop');
    setIsMobileFilterOpen(false);
  };

  // Check if any hair care related filter is active
  const isHairCareActive = activeCategory === 'Hair Care' || 
    selectedHairType !== 'All' || 
    (activeConcern && ['Frizz', 'Curl Definition', 'Damage Repair'].includes(activeConcern));

  // Check if any skin care related filter is active
  const isSkinCareActive = activeCategory === 'Skin Care' || 
    selectedSkinType !== 'All' || 
    selectedIngredient !== 'All' ||
    (activeConcern && ['Brightening', 'Hydration', 'Acne', 'Anti-aging', 'Dark Circles', 'Sun Protection', 'Cleansing'].includes(activeConcern));

  // Check if makeup related filter is active
  const isMakeupActive = activeCategory === 'Makeup' || 
    (activeConcern && ['Color'].includes(activeConcern));

  // Determine which tab should be open
  let activeTab = 'All Products';
  if (isHairCareActive) {
    activeTab = 'Hair Care';
  } else if (isSkinCareActive) {
    activeTab = 'Skin Care';
  } else if (isMakeupActive) {
    activeTab = 'Makeup';
  } else {
    activeTab = activeCategory;
  }

  // Update active category if needed
  useEffect(() => {
    if (activeTab !== activeCategory) {
      handleFilterChange('category', activeTab);
    }
  }, [activeTab]);

  // Mobile Sort Drawer
  const MobileSortDrawer = () => (
    <AnimatePresence>
      {isMobileSortOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSortOpen(false)} />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween' }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Sort By</h3>
                <button
                  onClick={() => setIsMobileSortOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 pb-4">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      handleFilterChange('sort', option);
                      setIsMobileSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      activeSort === option
                        ? 'bg-[#C2185B] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white min-h-screen">
      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        <MobileFilterDrawer
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          filters={{
            activeConcern,
            selectedSkinType,
            selectedHairType,
            selectedIngredient,
            selectedPriceRange,
            activeCategory
          }}
          onFilterChange={handleFilterChange}
          onReset={handleResetAll}
        />
      </AnimatePresence>

      {/* Mobile Sort Drawer */}
      <MobileSortDrawer />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3 overflow-x-auto no-scrollbar">
          <Link to="/" className="whitespace-nowrap hover:text-[#C2185B]">Home</Link>
          <span>›</span>
          <span className="text-gray-500 whitespace-nowrap">{categoryContent.breadcrumb}</span>
        </div>
        
        {/* Heading */}
        <motion.h1 
          initial={{ x: -20 }} 
          animate={{ x: 0 }} 
          className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
        >
          {categoryContent.heading}
        </motion.h1>
        <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2 sm:line-clamp-none">
          {categoryContent.description}
        </p>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-0 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => handleFilterChange('category', c)}
              className={`whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === c ? 'bg-[#C2185B] text-white' : 'bg-transparent text-gray-600 hover:text-[#C2185B]'
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 hidden sm:block">({filtered.length} items)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar - Hidden on Mobile */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-24 space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm font-semibold text-gray-800">Filters</p>
                  <button
                    onClick={() => navigate('/shop')}
                    className="text-xs text-gray-400 hover:text-[#C2185B] transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reset
                  </button>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Concern</p>
                  <FilterSelect label="Select Concern" value={activeConcern} options={concerns} onChange={(v) => handleFilterChange('concern', v)} />
                </div>
                
                {activeCategory !== 'Hair Care' && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1.5">Skin Type</p>
                    <FilterSelect label="Select Type" value={selectedSkinType} options={skinTypes} onChange={(v) => handleFilterChange('skinType', v)} />
                  </div>
                )}
                
                {activeCategory === 'Hair Care' && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1.5">Hair Type</p>
                    <FilterSelect label="Select Type" value={selectedHairType} options={hairTypes} onChange={(v) => handleFilterChange('hairType', v)} />
                  </div>
                )}
                
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Ingredients</p>
                  <FilterSelect label="Select Ingredients" value={selectedIngredient} options={ingredientsList} onChange={(v) => handleFilterChange('ingredient', v)} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Price Range</p>
                  <FilterSelect label="Select Price" value={selectedPriceRange} options={['All', 'Under ₹300', '₹300–₹600', 'Above ₹600']} onChange={(v) => handleFilterChange('price', v)} />
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {/* Mobile Filter & Sort Bar */}
            <div className="flex lg:hidden items-center justify-between gap-2 mb-4">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Filter
                {[...new Set([activeConcern, selectedSkinType, selectedHairType, selectedIngredient, selectedPriceRange])].filter(f => f !== 'All').length > 0 && (
                  <span className="bg-[#C2185B] text-white text-xs px-1.5 rounded-full">
                    {[...new Set([activeConcern, selectedSkinType, selectedHairType, selectedIngredient, selectedPriceRange])].filter(f => f !== 'All').length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileSortOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                Sort
              </button>
              <p className="text-xs text-gray-500 whitespace-nowrap">{filtered.length} items</p>
            </div>

            {/* Desktop Toolbar */}
            <div className="hidden lg:flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">{filtered.length} items</p>
              <div className="flex items-center gap-3">
                <select
                  value={activeSort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="appearance-none border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-600 bg-white focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((o) => <option key={o}>{o}</option>)}
                </select>

                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-[#C2185B] text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`p-1.5 ${viewMode === 'list' ? 'bg-[#C2185B] text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid/List */}
            <AnimatePresence mode="wait">
              {visibleProducts.length > 0 ? (
                <motion.div
                  key={viewMode + activeCategory + activeConcern}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === 'grid' 
                      ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4' 
                      : 'flex flex-col gap-3'
                  }
                >
                  {visibleProducts.map((p) => (
                    <motion.div key={p.slug} variants={itemVariants} layout>
                      {viewMode === 'grid' ? <GridCard p={p} /> : <ListCard p={p} />}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-16 sm:py-20 text-gray-400"
                >
                  <motion.p 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                    className="text-4xl sm:text-5xl mb-4"
                  >
                    🔍
                  </motion.p>
                  <p className="font-semibold text-gray-600 text-base sm:text-lg">No products found</p>
                  <button 
                    onClick={handleResetAll} 
                    className="mt-4 text-[#C2185B] text-sm font-medium hover:underline"
                  >
                    Reset all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button */}
            {hasMoreProducts && (
              <div className="flex justify-center mt-8 sm:mt-10">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisibleCount(v => v + 6)}
                  className="border border-gray-300 text-gray-600 px-8 sm:px-10 py-2.5 rounded-full text-sm font-medium hover:border-[#C2185B] hover:text-[#C2185B] transition-colors"
                >
                  Load More 
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GridCard({ p }) {
  const primaryBadge = p.badge && p.badge.length > 0 ? p.badge[0] : null;
  return (
    <Link to={`/product/${p.slug}`} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {primaryBadge && primaryBadge !== 'none' && (
          <span className={`absolute top-2 left-2 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full ${
            primaryBadge.toLowerCase() === 'best seller' ? 'bg-gray-800' : 'bg-[#C2185B]'
          }`}>
            {primaryBadge.toUpperCase()}
          </span>
        )}
      </div>
      <div className="p-2.5 sm:p-3.5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-yellow-400 text-[10px] sm:text-xs">★</span>
          <span className="text-[10px] sm:text-xs font-semibold text-gray-700">{p.rating}</span>
          <span className="text-[8px] sm:text-xs text-gray-400">({p.reviewCount})</span>
        </div>
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm leading-snug mb-1 line-clamp-2">{p.name}</h3>
        <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-2 mb-2 sm:mb-3">{p.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-gray-900 text-xs sm:text-sm">₹{p.price}</span>
          <motion.button 
            whileHover={{ backgroundColor: '#880E4F' }} 
            className="bg-[#C2185B] text-white text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium"
          >
            View
          </motion.button>
        </div>
      </div>
    </Link>
  );
}

function ListCard({ p }) {
  const primaryBadge = p.badge && p.badge.length > 0 ? p.badge[0] : null;
  return (
    <Link to={`/product/${p.slug}`} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 flex hover:shadow-md transition-all">
      <div className="relative w-24 sm:w-36 h-24 sm:h-36 shrink-0 bg-gray-50 overflow-hidden">
        <img 
          src={p.images[0]} 
          alt={p.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {primaryBadge && primaryBadge !== 'none' && (
          <span className="absolute top-1 left-1 bg-[#C2185B] text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
            {primaryBadge}
          </span>
        )}
      </div>
      <div className="flex flex-1 items-start justify-between p-2 sm:p-4">
        <div className="flex-1 min-w-0 pr-2 sm:pr-4">
          <p className="text-[#C2185B] text-[10px] sm:text-xs font-medium uppercase tracking-wide mb-0.5 line-clamp-1">{p.type}</p>
          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 line-clamp-2">{p.name}</h3>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400 text-[10px] sm:text-xs">★</span>
            <span className="text-[10px] sm:text-xs text-gray-500">{p.rating} ({p.reviewCount})</span>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-2 hidden sm:block">{p.desc}</p>
        </div>
        <div className="flex flex-col items-end gap-1 sm:gap-2 shrink-0">
          <span className="font-bold text-gray-900 text-xs sm:text-sm">₹{p.price}</span>
          <button className="bg-[#C2185B] text-white text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium whitespace-nowrap">
            View
          </button>
        </div>
      </div>
    </Link>
  );
}
