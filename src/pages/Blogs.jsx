// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { blogData } from '../data/Blogs';
// // Add the missing constants here
// const CATEGORIES = ['All Articles', 'Routine Guide', 'Ingredients', 'Beauty Tips'];
// const CONCERNS = ['All', 'Acne', 'Anti-Aging', 'Hair Care', 'Dehydration', 'Dry Skin', 'Sensitive Skin', 'Curl Care'];

// // ── Category color map ───────────────────────────────────────────
// const catColor = {
//   'Routine Guide': { bg: '#fff0f5', text: '#C2185B', border: '#f9c6d8' },
//   'Ingredients':   { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
//   'Beauty Tips':   { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
// };

// // ── Grid Icon ────────────────────────────────────────────────────
// const GridIcon = ({ active }) => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//     <rect x="1" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//     <rect x="10" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//     <rect x="1" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//     <rect x="10" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//   </svg>
// );

// const ListIcon = ({ active }) => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//     <rect x="1" y="2" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//     <rect x="1" y="7.5" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//     <rect x="1" y="13" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
//   </svg>
// );

// // ── Blog Card (Grid) ─────────────────────────────────────────────
// function BlogCardGrid({ blog }) {
//   const c = catColor[blog.category] || catColor['Beauty Tips'];
//   return (
//     <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
//       <div className="relative h-48 overflow-hidden">
//         <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//         <span
//           className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
//           style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
//         >
//           {blog.category}
//         </span>
//       </div>
//       <div className="p-5 flex flex-col flex-1">
//         <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#C2185B] transition-colors line-clamp-2">
//           {blog.heading}
//         </h3>
//         <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
//         <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-50">
//           <span className="text-xs text-gray-400 shrink-0">{blog.readTime}</span>
//           <span className="ml-auto self-end text-[#C2185B] hover:text-[#880E4F] px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
//             Read Story →
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// // ── Blog Card (List) ─────────────────────────────────────────────
// function BlogCardList({ blog }) {
//   const c = catColor[blog.category] || catColor['Beauty Tips'];
//   return (
//     <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-0">
//       <div className="relative w-48 shrink-0 overflow-hidden">
//         <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//       </div>
//       <div className="p-5 flex flex-col flex-1">
//         <div className="flex items-center gap-2 mb-2">
//           <span
//             className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
//             style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
//           >
//             {blog.category}
//           </span>
//           <span className="text-xs text-gray-400">{blog.readTime}</span>
//         </div>
//         <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#C2185B] transition-colors line-clamp-2">
//           {blog.heading}
//         </h3>
//         <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
//         <div className="flex items-center gap-2 mt-3">
//           <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center text-xs font-bold text-white shrink-0">
//             {blog.author.split(' ').map(w => w[0]).join('').slice(0,2)}
//           </div>
//           <span className="text-xs text-gray-700 font-medium">{blog.author}</span>
//           <span className="ml-auto text-xs text-gray-400">{blog.date}</span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// // ── Featured Card ────────────────────────────────────────────────
// function FeaturedCard({ blog }) {
//   const c = catColor[blog.category] || catColor['Beauty Tips'];
//   return (
//     <Link to={`/blog/${blog.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300 mb-8">
//       <div className="grid md:grid-cols-2">
//         {/* Image */}
//         <div className="relative h-64 md:h-100 overflow-hidden">
//           <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
//         </div>
//         {/* Content */}
//         <div className="p-8 md:p-10 flex flex-col justify-center">
//           <span
//             className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
//             style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
//           >
//             {blog.category}
//           </span>
//           <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#C2185B] transition-colors">
//             {blog.heading}
//           </h2>
//           <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
//           <span className="self-end bg-[#C2185B] hover:bg-[#880E4F] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
//             Read Story →
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// // ── Main Blogs Page ──────────────────────────────────────────────
// export default function Blogs() {
//   const location = useLocation();
//   const [activeCategory, setActiveCategory] = useState('All Articles');
//   const [activeConcern, setActiveConcern]   = useState('All');
//   const [viewMode, setViewMode]             = useState('grid'); // 'grid' | 'list'

//   // Handle navigation state from BlogSingle
//   useEffect(() => {
//     if (location.state) {
//       if (location.state.selectedConcern) {
//         setActiveConcern(location.state.selectedConcern);
//         // If a concern is selected, set category to 'All Articles' to show all matching articles
//         setActiveCategory('All Articles');
//       }
//       if (location.state.selectedCategory) {
//         setActiveCategory(location.state.selectedCategory);
//         // If a category is selected, set concern to 'All' to show all in that category
//         setActiveConcern('All');
//       }
      
//       // Scroll to articles section
//       if (location.state.scrollToArticles) {
//         setTimeout(() => {
//           const articlesSection = document.getElementById('articles-section');
//           if (articlesSection) {
//             articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           }
//         }, 100);
//       }
//     }
//   }, [location.state]);

//   // Filter logic
//   const filtered = blogData.filter(b => {
//     const catMatch = activeCategory === 'All Articles' || b.category === activeCategory;
//     const conMatch = activeConcern === 'All' || b.concern.includes(activeConcern);
//     return catMatch && conMatch;
//   });

//   // Featured = latest from filtered set
//   const featured = filtered[0] || null;
//   const rest     = filtered.slice(1);

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* ── Page Header ── */}
//       <div className="bg-white border-b border-pink-100">
//         <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">

//           {/* Title */}
//           <h1 className="font-playfair text-4xl font-bold text-[#C2185B] mb-5">Blogs</h1>

//           {/* Category Tabs */}
//           <div className="flex gap-0 border-b border-gray-200 overflow-x-auto">
//             {CATEGORIES.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => { 
//                   setActiveCategory(cat); 
//                   setActiveConcern('All'); 
//                 }}
//                 className={`relative px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
//                   activeCategory === cat
//                     ? 'text-[#C2185B]'
//                     : 'text-gray-500 hover:text-gray-800'
//                 }`}
//               >
//                 {cat}
//                 {activeCategory === cat && (
//                   <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2185B] rounded-t" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">

//         {/* ── Featured Story ── */}
//         {featured && (
//           <div>
//             <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">Featured Story</h2>
//             <FeaturedCard blog={featured} />
//           </div>
//         )}

//         {/* ── Concern Filter Row ── */}
//         <div className="mb-6">
//           <h3 className="text-sm font-semibold text-gray-700 mb-3">Concern</h3>
//           <div className="flex flex-wrap gap-2">
//             {CONCERNS.map(c => (
//               <button
//                 key={c}
//                 onClick={() => {
//                   setActiveConcern(c);
//                   setActiveCategory('All Articles'); // Reset category when concern changes
//                 }}
//                 className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
//                   activeConcern === c
//                     ? 'bg-[#C2185B] border-[#C2185B] text-white shadow-md shadow-pink-200'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-[#C2185B] hover:text-[#C2185B]'
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── Recent Articles Header ── */}
//         <div id="articles-section" className="flex items-center justify-between mb-5 scroll-mt-20">
//           <h2 className="font-playfair text-xl font-bold text-gray-900">
//             {activeConcern === 'All' ? 'Recent Articles' : `${activeConcern} Articles`}
//             <span className="ml-2 text-sm font-normal text-gray-400">({rest.length})</span>
//           </h2>
//           {/* Grid / List Toggle */}
//           <div className="flex items-center gap-1 rounded-lg p-1">
//             <button
//               onClick={() => setViewMode('grid')}
//               className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
//             >
//               <GridIcon active={viewMode === 'grid'} />
//             </button>
//             <button
//               onClick={() => setViewMode('list')}
//               className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-pink-50' : 'hover:bg-gray-50'}`}
//             >
//               <ListIcon active={viewMode === 'list'} />
//             </button>
//           </div>
//         </div>

//         {/* ── Articles ── */}
//         {rest.length === 0 ? (
//           <div className="text-center py-20 text-gray-400">
//             <div className="text-5xl mb-3">🌸</div>
//             <p className="text-sm">No articles found for this filter.</p>
//           </div>
//         ) : viewMode === 'grid' ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {rest.map(blog => <BlogCardGrid key={blog.id} blog={blog} />)}
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4">
//             {rest.map(blog => <BlogCardList key={blog.id} blog={blog} />)}
//           </div>
//         )}

//         {/* ── Newsletter ── */}
//         <div
//           className="mt-14 rounded-3xl p-8 md:p-12 text-center text-white"
//           style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}
//         >
//           <div className="mb-4">
//             <svg className="mx-auto mb-3" width="36" height="28" viewBox="0 0 36 28" fill="none">
//               <rect x="1" y="1" width="34" height="26" rx="4" stroke="#f0436a" strokeWidth="2" />
//               <path d="M1 6L18 17L35 6" stroke="#f0436a" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </div>
//           <h2 className="font-playfair text-2xl font-bold mb-2">Glow in Your Inbox</h2>
//           <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
//             Get the latest skincare science, routine updates, and exclusive product launches delivered weekly.
//           </p>
//           <div className="flex max-w-md mx-auto gap-2">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none"
//               style={{ background: 'rgba(255,255,255,0.92)' }}
//             />
//             <button
//               className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
//               style={{ background: 'linear-gradient(135deg, #f0436a 0%, #e0255a 100%)', boxShadow: '0 4px 18px rgba(240,67,106,0.35)' }}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smooth filtering

import { blogData } from '../data/Blogs';

const CATEGORIES = ['All Articles', 'Routine Guide', 'Ingredients', 'Beauty Tips'];
const CONCERNS = ['All', 'Acne', 'Anti-Aging', 'Hair Care', 'Dehydration', 'Dry Skin', 'Sensitive Skin', 'Curl Care'];

const catColor = {
  'Routine Guide': { bg: '#fff0f5', text: '#C2185B', border: '#f9c6d8' },
  'Ingredients':   { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
  'Beauty Tips':   { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const GridIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="10" y="1" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="10" y="10" width="7" height="7" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
  </svg>
);

const ListIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="2" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="7.5" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
    <rect x="1" y="13" width="16" height="3" rx="1.5" fill={active ? '#C2185B' : '#9ca3af'} />
  </svg>
);

function BlogCardGrid({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <motion.div variants={itemVariants} layout>
      <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
            {blog.category}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#C2185B] transition-colors line-clamp-2">
            {blog.heading}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-50">
            <span className="text-xs text-gray-400 shrink-0">{blog.readTime}</span>
            <span className="ml-auto text-[#C2185B] text-sm font-semibold">Read Story →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function BlogCardList({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <motion.div variants={itemVariants} layout>
      <Link to={`/blog/${blog.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-0">
        <div className="relative w-48 shrink-0 overflow-hidden hidden sm:block">
          <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
              {blog.category}
            </span>
            <span className="text-xs text-gray-400">{blog.readTime}</span>
          </div>
          <h3 className="font-playfair font-bold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#C2185B] transition-colors line-clamp-2">
            {blog.heading}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">{blog.excerpt}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-gray-700 font-medium italic">by {blog.author}</span>
            <span className="ml-auto text-xs text-gray-400">{blog.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FeaturedCard({ blog }) {
  const c = catColor[blog.category] || catColor['Beauty Tips'];
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <Link to={`/blog/${blog.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-500 mb-8">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-100 overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src={blog.image} alt={blog.heading} className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
              {blog.category}
            </span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#C2185B] transition-colors">
              {blog.heading}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
            <span className="self-end bg-[#C2185B] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all group-hover:bg-[#880E4F]">
              Read Story →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Blogs() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [activeConcern, setActiveConcern]   = useState('All');
  const [viewMode, setViewMode]             = useState('grid');

  useEffect(() => {
    if (location.state) {
      if (location.state.selectedConcern) {
        setActiveConcern(location.state.selectedConcern);
        setActiveCategory('All Articles');
      }
      if (location.state.selectedCategory) {
        setActiveCategory(location.state.selectedCategory);
        setActiveConcern('All');
      }
      if (location.state.scrollToArticles) {
        setTimeout(() => {
          const el = document.getElementById('articles-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.state]);

  const filtered = blogData.filter(b => {
    const catMatch = activeCategory === 'All Articles' || b.category === activeCategory;
    const conMatch = activeConcern === 'All' || b.concern.includes(activeConcern);
    return catMatch && conMatch;
  });

  const featured = filtered[0] || null;
  const rest     = filtered.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Page Header --- */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-0">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="font-playfair text-4xl font-bold text-[#C2185B] mb-5"
          >
            Blogs
          </motion.h1>

          <div className="flex gap-0 border-b border-gray-200 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActiveConcern('All'); }}
                className={`relative px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat ? 'text-[#C2185B]' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2185B] rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* --- Featured Story --- */}
        {featured && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">Featured Story</h2>
            <FeaturedCard blog={featured} />
          </motion.div>
        )}

        {/* --- Concern Filter --- */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Concern</h3>
          <div className="flex flex-wrap gap-2">
            {CONCERNS.map(c => (
              <button
                key={c}
                onClick={() => { setActiveConcern(c); setActiveCategory('All Articles'); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeConcern === c
                    ? 'bg-[#C2185B] border-[#C2185B] text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#C2185B]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* --- Recent Articles Header --- */}
        <div id="articles-section" className="flex items-center justify-between mb-5 scroll-mt-20">
          <h2 className="font-playfair text-xl font-bold text-gray-900">
            {activeConcern === 'All' ? 'Recent Articles' : `${activeConcern} Articles`}
            <span className="ml-2 text-sm font-normal text-gray-400">({rest.length})</span>
          </h2>
          <div className="flex items-center gap-1 bg-white rounded-lg p-1 border border-gray-100">
            <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-pink-50' : ''}`}>
              <GridIcon active={viewMode === 'grid'} />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-pink-50' : ''}`}>
              <ListIcon active={viewMode === 'list'} />
            </button>
          </div>
        </div>

        {/* --- Articles Grid/List with AnimatePresence --- */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${activeCategory}-${activeConcern}-${viewMode}`} // Trigger animation on filter change
        >
          <AnimatePresence mode="popLayout">
            {rest.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-gray-400 w-full">
                <div className="text-5xl mb-3">🌸</div>
                <p className="text-sm">No articles found for this filter.</p>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <motion.div key="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(blog => <BlogCardGrid key={blog.id} blog={blog} />)}
              </motion.div>
            ) : (
              <motion.div key="list" className="flex flex-col gap-4">
                {rest.map(blog => <BlogCardList key={blog.id} blog={blog} />)}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- Newsletter Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl p-8 md:p-12 text-center text-white"
          style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}
        >
          <h2 className="font-playfair text-2xl font-bold mb-2">Glow in Your Inbox</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Latest skincare science and exclusive updates delivered weekly.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Email address" className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white" 
              style={{ background: 'linear-gradient(135deg, #f0436a 0%, #e0255a 100%)' }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}