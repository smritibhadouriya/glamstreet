// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { productsById, getRelatedProducts } from '../data/Products';

// import { blogData } from '../data/Blogs';

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = productsById[Number(id)] || productsById[1];
//   const related  = getRelatedProducts(product.id, 4);

//   const [activeTab, setActiveTab]     = useState('description');
//   const [quantity, setQuantity]       = useState(1);
//   const [wishlisted, setWishlisted]   = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   // Reset active image when product changes
//   useEffect(() => { setActiveImage(0); }, [id]);

//   const handleAddToCart = () => {
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 2000);
//   };

//   const tabContent = {
//     description: product.description,
//     ingredients:  product.ingredients,
//     howToUse:     product.howToUse,
//   };
//   // Find related blogs based on product targets
//   const getRelatedBlogs = () => {
//     // Safely get product targets - ensure it's an array
//     let productTargets = [];
    
//     // Handle different possible formats of product.targets
//     if (product.targets) {
//       if (Array.isArray(product.targets)) {
//         productTargets = product.targets;
//       } else if (typeof product.targets === 'string') {
//         // If it's a string, convert to array
//         productTargets = [product.targets];
//       }
//     }
    
//     if (productTargets.length === 0) return blogData.slice(0, 3); // Return latest 3 if no targets
    
//     // Score each blog based on matching concerns and tags
//     const blogScores = blogData.map(blog => {
//       let score = 0;
      
//       // Safely get blog concerns as array
//       let blogConcerns = [];
//       if (blog.concern) {
//         if (Array.isArray(blog.concern)) {
//           blogConcerns = blog.concern;
//         } else if (typeof blog.concern === 'string') {
//           blogConcerns = [blog.concern];
//         }
//       }
      
//       // Check for matching concerns with product targets (highest priority)
//       if (blogConcerns.length > 0 && productTargets.length > 0) {
//         const matchingConcerns = blogConcerns.filter(concern => 
//           productTargets.some(target => 
//             target.toLowerCase().includes(concern.toLowerCase()) ||
//             concern.toLowerCase().includes(target.toLowerCase())
//           )
//         );
//         if (matchingConcerns.length > 0) {
//           score += matchingConcerns.length * 100; // Very high weight for concern-target matches
//         }
//       }
      
//       // Safely get blog tags as array
//       let blogTags = [];
//       if (blog.tags) {
//         if (Array.isArray(blog.tags)) {
//           blogTags = blog.tags;
//         } else if (typeof blog.tags === 'string') {
//           blogTags = [blog.tags];
//         }
//       }
      
//       // Check for matching tags with product targets (medium priority)
//       if (blogTags.length > 0 && productTargets.length > 0) {
//         const matchingTags = blogTags.filter(tag => 
//           productTargets.some(target => 
//             tag.toLowerCase().includes(target.toLowerCase()) ||
//             target.toLowerCase().includes(tag.toLowerCase())
//           )
//         );
//         if (matchingTags.length > 0) {
//           score += matchingTags.length * 10; // Medium weight for tag matches
//         }
//       }
      
//       // Add a small score for date to help with sorting (newer gets slightly higher)
//       const dateScore = new Date(blog.date).getTime() / 10000000000; // Very small increment
//       score += dateScore;
      
//       return { blog, score };
//     });
    
//     // First, try to get blogs with matching concerns (score >= 100)
//     const concernMatches = blogScores
//       .filter(item => item.score >= 100)
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 3)
//       .map(item => item.blog);
    
//     // If we have 3 concern matches, return them
//     if (concernMatches.length >= 3) {
//       return concernMatches;
//     }
    
//     // If not enough concern matches, add tag matches (score between 10-99)
//     const tagMatches = blogScores
//       .filter(item => item.score >= 10 && item.score < 100)
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 3 - concernMatches.length)
//       .map(item => item.blog);
    
//     const combinedMatches = [...concernMatches, ...tagMatches];
    
//     // If we still don't have 3 blogs, add the latest blogs
//     if (combinedMatches.length < 3) {
//       // Get IDs of blogs we already have to avoid duplicates
//       const existingIds = new Set(combinedMatches.map(blog => blog.id));
      
//       // Get latest blogs (sorted by date) that aren't already included
//       const latestBlogs = blogData
//         .filter(blog => !existingIds.has(blog.id))
//         .sort((a, b) => new Date(b.date) - new Date(a.date))
//         .slice(0, 3 - combinedMatches.length);
      
//       return [...combinedMatches, ...latestBlogs];
//     }
    
//     return combinedMatches;
//   };

//   const relatedBlogs = getRelatedBlogs();

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">

//         {/* ── Breadcrumb ── */}
//         <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 flex-wrap">
//           <Link to="/" className="hover:text-[#C2185B] transition-colors">Products</Link>
//           <span>›</span>
//           <Link to="/shop" className="hover:text-[#C2185B] transition-colors">Skincare</Link>
//           <span>›</span>
//           <span className="text-gray-500">{product.brand}</span>
//         </div>

//         {/* ── Main Product Layout ── */}
//         <div className="grid md:grid-cols-2 gap-8 mb-10">

//           {/* LEFT: Image Gallery */}
//           <div className="flex flex-col gap-3">
//             {/* Main image — large, real photo style */}
//             <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#f5ede6]">
//               <img
//                 key={activeImage}
//                 src={product.images[activeImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.currentTarget.style.display = 'none';
//                   e.currentTarget.parentElement.innerHTML =
//                     `<div class="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-pink-50 to-rose-100">${product.emoji}</div>`;
//                 }}
//               />
//             </div>

//             {/* Thumbnails row */}
//             <div className="flex gap-2">
//               {product.images.map((img, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImage(i)}
//                   className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
//                     i === activeImage
//                       ? 'border-[#C2185B]'
//                       : 'border-transparent hover:border-pink-200'
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`view ${i + 1}`}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.currentTarget.style.display = 'none';
//                       e.currentTarget.parentElement.style.background = '#fce4ec';
//                       e.currentTarget.parentElement.innerHTML =
//                         `<span style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1.4rem">${product.emoji}</span>`;
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: Product Info */}
//           <div className="flex flex-col">
//             {/* Brand + Name */}
//             <div className="flex items-start justify-between mb-1">
//               <div>
//                 <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
//                   {product.name}
//                 </h1>
//                 <p className="text-gray-400 text-sm mt-0.5">{product.category} | {product.type}</p>
//               </div>
//               <button
//                 onClick={() => setWishlisted(!wishlisted)}
//                 className={`text-2xl ml-3 shrink-0 transition-all ${wishlisted ? 'text-[#C2185B]' : 'text-gray-300 hover:text-[#C2185B]'}`}
//               >
//                 {wishlisted ? '♥' : '♡'}
//               </button>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center gap-2 mb-4 mt-2">
//               <div className="flex text-yellow-400 text-base leading-none">
//                 {'★'.repeat(Math.floor(product.rating))}
//                 {product.rating % 1 >= 0.5 ? '☆' : ''}
//               </div>
//               <span className="text-gray-400 text-sm">({product.reviewCount.toLocaleString()} Reviews)</span>
//             </div>

//             {/* Price */}
//             <div className="flex items-center gap-3 mb-5">
//               <span className="font-playfair text-3xl font-bold text-gray-900">₹{product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-gray-400 text-base line-through">₹{product.originalPrice}</span>
//               )}
//               {product.inStock
//                 ? <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-0.5 rounded-full">In Stock</span>
//                 : <span className="text-red-500 text-xs font-semibold bg-red-50 px-2 py-0.5 rounded-full">Out of Stock</span>
//               }
//             </div>

//             {/* Suitable For + Target — side by side like image */}
//             <div className="grid grid-cols-2 gap-4 mb-5">
//               <div>
//                 <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Suitable For</p>
//                 <div className="flex flex-col gap-1">
//                   {product.suitableFor.map((s) => (
//                     <span key={s} className="text-xs text-gray-700">{s}</span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Target Addresses</p>
//                 <div className="flex flex-col gap-1">
//                   {product.targets.map((t) => (
//                     <span key={t} className="text-xs text-gray-700">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Shop via Retailers */}
//             {product.retailers?.length > 0 && (
//               <div className="mb-5">
//                 <p className="text-xs font-semibold text-gray-500 mb-2">Shop via Retailers</p>
//                 <div className="flex gap-2 flex-wrap">
//                   {product.retailers.map((r) => (
//                     <button
//   key={r.name}
//   onClick={() => window.open(r.redirect, "_blank")}
//   className="flex items-center gap-1.5 border border-gray-200 hover:border-[#C2185B] rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-[#C2185B] transition-all"
// >
//   {r.name}
//   <span className="font-bold text-[#C2185B]">₹{r.price}</span>
// </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs */}
//             <div className="border-b border-gray-200 mb-4">
//               <div className="flex gap-6">
//                 {[
//                   { key: 'description', label: 'Description' },
//                   { key: 'ingredients', label: 'Ingredients' },
//                   { key: 'howToUse',    label: 'How to Use' },
//                 ].map((tab) => (
//                   <button
//                     key={tab.key}
//                     onClick={() => setActiveTab(tab.key)}
//                     className={`pb-2.5 text-xs font-semibold tracking-wide border-b-2 transition-all -mb-px uppercase ${
//                       activeTab === tab.key
//                         ? 'border-[#C2185B] text-[#C2185B]'
//                         : 'border-transparent text-gray-400 hover:text-gray-600'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
//               {tabContent[activeTab]}
//             </p>

    
//           </div>
//         </div>

//         {/* ── You Might Also Love ── */}
//         <div className="mb-10">
//           <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">You Might also Love</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {related.map((p) => (
//               <Link
//                 key={p.id}
//                 to={`/product/${p.id}`}
//                 className="group"
//               >
//                 {/* Image */}
//                 <div className="aspect-square rounded-xl overflow-hidden bg-[#f5ede6] mb-2">
//                   <img
//                     src={p.images[0]}
//                     alt={p.name}
//                     className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
//                     loading="lazy"
//                     onError={(e) => {
//                       e.currentTarget.style.display = 'none';
//                       e.currentTarget.parentElement.innerHTML =
//                         `<div class="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-pink-50 to-rose-100">${p.emoji}</div>`;
//                     }}
//                   />
//                 </div>
//                 {/* Info */}
//                 <p className="text-[#C2185B] text-xs font-medium mb-0.5">{p.brand}</p>
//                 <h3 className="text-gray-800 text-xs font-semibold leading-snug line-clamp-2 mb-1">{p.name}</h3>
//                 <p className="text-gray-400 text-xs mb-1">{p.category} | {p.type}</p>
//                 <span className="font-bold text-gray-900 text-sm">₹{p.price}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* ── Related Guide ── */}
//         {relatedBlogs.length > 0 && (
//           <div>
//             <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">Related Guide</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {relatedBlogs.map((blog) => (
//                 <Link
//                   key={blog.id}
//                   to={`/blog/${blog.slug}`}
//                   className="group flex flex-col"
//                 >
//                   {/* Blog image */}
//                   <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 bg-gray-100">
//                     <img
//                       src={blog.image}
//                       alt={blog.heading}
//                       className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                   </div>
//                   {/* Blog info */}
//                   <p className="text-[#C2185B] text-[10px] font-semibold uppercase tracking-wide mb-0.5">
//                     {blog.category}
//                   </p>
//                   <h3 className="text-gray-800 text-xs font-semibold leading-snug line-clamp-2 mb-1">
//                     {blog.heading}
//                   </h3>
//                   <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
//                     {blog.excerpt}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added for animations
import { getProductBySlug, getRelatedProducts } from '../data/Products';
import { blogData } from '../data/Blogs';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ProductDetail() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const {  slug } = useParams();
  const product = getProductBySlug(slug)
  const related = getRelatedProducts(product.slug, 4);

  const [activeTab, setActiveTab] = useState('description');
  const [wishlisted, setWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => { setActiveImage(0); }, [slug]);

  const tabContent = {
    description: product.description,
    ingredients: product.ingredients,
    howToUse: product.howToUse,
  };

  const getRelatedBlogs = () => {
    let productTargets = [];
    if (product.targets) {
      productTargets = Array.isArray(product.targets) ? product.targets : [product.targets];
    }
    if (productTargets.length === 0) return blogData.slice(0, 3);

    const blogScores = blogData.map(blog => {
      let score = 0;
      let blogConcerns = Array.isArray(blog.concern) ? blog.concern : [blog.concern || ''];
      
      const matchingConcerns = blogConcerns.filter(concern => 
        productTargets.some(target => target.toLowerCase().includes(concern.toLowerCase()))
      );
      score += matchingConcerns.length * 100;

      let blogTags = Array.isArray(blog.tags) ? blog.tags : [blog.tags || ''];
      const matchingTags = blogTags.filter(tag => 
        productTargets.some(target => tag.toLowerCase().includes(target.toLowerCase()))
      );
      score += matchingTags.length * 10;
      
      return { blog, score: score + (new Date(blog.date).getTime() / 1e10) };
    });

    const matches = blogScores.sort((a, b) => b.score - a.score).slice(0, 3).map(i => i.blog);
    return matches;
  };

  const relatedBlogs = getRelatedBlogs();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 flex-wrap">
          <Link to="/" className="hover:text-[#C2185B]">Products</Link>
          <span>›</span>
          <Link to="/shop" className="hover:text-[#C2185B]">Skincare</Link>
          <span>›</span>
          <span className="text-gray-500">{product.brand}</span>
        </nav>

        {/* ── Main Product Layout ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* LEFT: Image Gallery */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#f5ede6] relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {product.images.map((img, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    i === activeImage ? 'border-[#C2185B]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between mb-1">
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-400 text-sm mt-0.5">{product.category} | {product.type}</p>
              </motion.div>
              <motion.button
                whileTap={{ scale: 1.5 }}
                onClick={() => setWishlisted(!wishlisted)}
                className={`text-2xl ml-3 shrink-0 transition-colors ${wishlisted ? 'text-[#C2185B]' : 'text-gray-300'}`}
              >
                {wishlisted ? '♥' : '♡'}
              </motion.button>
            </div>

            <div className="flex items-center gap-2 mb-4 mt-2">
              <div className="flex text-yellow-400 text-base">
                {'★'.repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 ? '☆' : ''}
              </div>
              <span className="text-gray-400 text-sm">({product.reviewCount.toLocaleString()} Reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="font-playfair text-3xl font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice && <span className="text-gray-400 text-base line-through">₹{product.originalPrice}</span>}
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.inStock ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Suitable For</p>
                <div className="flex flex-col gap-1">
                  {product.suitableFor.map(s => <span key={s} className="text-xs text-gray-700">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Target Addresses</p>
                <div className="flex flex-col gap-1">
                  {product.targets.map(t => <span key={t} className="text-xs text-gray-700">{t}</span>)}
                </div>
              </div>
            </div>

            {/* Retailers */}
            {product.retailers?.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 mb-2">Shop via Retailers</p>
                <div className="flex gap-2 flex-wrap">
                  {product.retailers.map(r => (
                    <motion.button
                      key={r.name}
                      whileHover={{ y: -2 }}
                      onClick={() => window.open(r.redirect, "_blank")}
                      className="flex items-center gap-1.5 border border-gray-200 hover:border-[#C2185B] rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-[#C2185B] transition-all"
                    >
                      {r.name} <span className="font-bold text-[#C2185B]">₹{r.price}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4 flex gap-6">
              {['description', 'ingredients', 'howToUse'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2.5 text-xs font-semibold tracking-wide border-b-2 transition-all relative uppercase ${
                    activeTab === tab ? 'text-[#C2185B]' : 'text-gray-400'
                  }`}
                >
                  {tab.replace(/([A-Z])/g, ' $1')}
                  {activeTab === tab && (
                    <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2185B]" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-gray-500 text-sm leading-relaxed"
                >
                  {tabContent[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Related Sections ── */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">You Might also Love</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {related.map(p => (
              <motion.div key={p.slug} variants={fadeInUp}>
                <Link to={`/product/${p.slug}`} className="group">
                  <div className="aspect-square rounded-xl overflow-hidden bg-[#f5ede6] mb-2">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <p className="text-[#C2185B] text-xs font-medium">{p.brand}</p>
                  <h3 className="text-gray-800 text-xs font-semibold line-clamp-2">{p.name}</h3>
                  <span className="font-bold text-gray-900 text-sm">₹{p.price}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">Related Guide</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedBlogs.map(blog => (
              <motion.div key={blog.id} variants={fadeInUp}>
                <Link to={`/blog/${blog.slug}`} className="group">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 bg-gray-100">
                    <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <p className="text-[#C2185B] text-[10px] font-semibold uppercase">{blog.category}</p>
                  <h3 className="text-gray-800 text-xs font-semibold line-clamp-2">{blog.heading}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}