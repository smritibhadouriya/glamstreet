// import { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';


// import { blogData } from '../data/Blogs';

// // Add the missing constants here
// const CONCERNS = ['All', 'Acne', 'Anti-Aging', 'Hair Care', 'Dehydration', 'Dry Skin', 'Sensitive Skin', 'Curl Care'];

// // ── Category color map ───────────────────────────────────────────
// const catColor = {
//   'Routine Guide': { bg: '#fff0f5', text: '#C2185B', border: '#f9c6d8' },
//   'Ingredients': { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
//   'Beauty Tips': { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
// };

// export default function BlogSingle() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState('All');

//   const blog = blogData.find(b => b.slug === slug);

//   // Scroll to top on slug change
//   useEffect(() => { window.scrollTo(0, 0); }, [slug]);

//   // Handle concern click - navigate to blogs page with filter
//   const handleConcernClick = (concern) => {
//     navigate('/blogs', {
//       state: {
//         selectedConcern: concern,
//         scrollToArticles: true
//       }
//     });
//   };

//   if (!blog) return (
//     <div className="min-h-screen flex items-center justify-center text-gray-400">
//       <div className="text-center">
//         <div className="text-5xl mb-3">🌸</div>
//         <p>Blog not found.</p>
//         <Link to="/blogs" className="text-[#C2185B] underline text-sm mt-2 inline-block">← Back to Blogs</Link>
//       </div>
//     </div>
//   );

//   // Sidebar: related by concern or all
//   const related = blogData
//     .filter(b => b.slug !== blog.slug && (activeCategory === 'All' || b.concern.includes(activeCategory)))
//     .slice(0, 6);

//   // "More on" section: same concern/category blogs
//   const moreBlog = blogData
//     .filter(b => b.slug !== blog.slug && b.concern.some(c => blog.concern.includes(c)))
//     .slice(0, 4);

//   // New arrivals (latest 3)
//   const newArrivals = blogData.filter(b => b.slug !== blog.slug).slice(0, 3);

//   const c = catColor[blog.category] || catColor['Beauty Tips'];

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

//           {/* ── LEFT SIDEBAR ── */}
//           <aside className="lg:sticky lg:top-8 h-fit space-y-8">

//             {/* Categories - Updated to link to Blogs page */}
//             <div>
//               <h3 className="font-playfair text-base font-bold text-gray-900 mb-3">Concerns</h3>
//               <div className="flex flex-col gap-0.5">
//                 {CONCERNS.map(cat => (
//                   <button
//                     key={cat}
//                     onClick={() => handleConcernClick(cat)}
//                     className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${blog.concern.includes(cat) && cat !== 'All'
//                       ? 'bg-pink-100 text-[#C2185B] font-semibold'
//                       : 'text-gray-600 hover:text-[#C2185B] hover:bg-pink-50'
//                       }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-100" />

//             {/* New Arrivals */}
//             <div>
//               <h3 className="font-playfair text-base font-bold text-gray-900 mb-3">New Arrivals</h3>
//               <div className="flex flex-col gap-3">
//                 {newArrivals.map(item => (
//                   <Link
//                     key={item.id}
//                     to={`/blog/${item.slug}`}
//                     className="flex items-center gap-3 group"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.heading}
//                       className="w-14 h-14 rounded-xl object-cover shrink-0 group-hover:opacity-90 transition"
//                     />
//                     <div>
//                       <p className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-[#C2185B] transition line-clamp-2">
//                         {item.heading}
//                       </p>
//                       <p className="text-xs text-[#C2185B] font-bold mt-0.5">{item.readTime}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* ── MAIN CONTENT ── */}
//           <main className="min-w-0">

//             {/* Hero Image */}
//             <div className="rounded-3xl overflow-hidden mb-6 w-full" style={{ maxHeight: 420 }}>
//               <img
//                 src={blog.image}
//                 alt={blog.heading}
//                 className="w-full h-[420px] object-cover"
//               />
//             </div>

//             {/* Meta row */}
//             <div className="flex flex-wrap items-center gap-4 mb-3">
//               {/* Date */}
//               <div className="flex items-center gap-1 text-xs text-gray-400">
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//                   <rect x="1" y="2" width="11" height="10" rx="2" stroke="#9ca3af" strokeWidth="1.2" />
//                   <path d="M4 1v2M9 1v2M1 5h11" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
//                 </svg>
//                 {blog.date}
//               </div>

//               {/* Read time */}
//               <div className="flex items-center gap-1 text-xs text-gray-400">
//                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//                   <circle cx="6.5" cy="6.5" r="5.5" stroke="#9ca3af" strokeWidth="1.2" />
//                   <path d="M6.5 4v3l2 1.5" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
//                 </svg>
//                 {blog.readTime}
//               </div>

//               {/* Category Badge - Clickable to filter by category */}
//               <button
//                 onClick={() => navigate('/blogs', {
//                   state: {
//                     selectedCategory: blog.category,
//                     scrollToArticles: true
//                   }
//                 })}
//                 className="text-xs px-3 py-1 rounded-full transition-all hover:opacity-80"
//                 style={{
//                   background: c.bg,
//                   color: c.text,
//                   border: `1px solid ${c.border}`
//                 }}
//               >
//                 {blog.category}
//               </button>
//             </div>

//             {/* Tags - Make concerns clickable */}
//             <div className="flex flex-wrap gap-1.5 mb-3">
//               {blog.concern.map(concern => (
//                 <button
//                   key={concern}
//                   onClick={() => handleConcernClick(concern)}
//                   className="text-xs text-[#C2185B] font-medium hover:underline"
//                 >
//                   #{concern.replace(/ /g, '')}
//                 </button>
//               ))}
//             </div>

//             {/* Heading */}
//             <h1 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
//               {blog.heading}
//             </h1>

//             {/* Excerpt */}
//             <p className="text-gray-500 text-sm leading-relaxed mb-6 border-l-2 border-pink-200 pl-4">
//               {blog.excerpt}
//             </p>

//             {/* HTML Content */}
//             <div
//               className="blog-content prose prose-sm max-w-none text-gray-700"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//               style={{ fontFamily: 'Georgia, serif' }}
//             />

//             {/* ── More On Section ── */}
//             {moreBlog.length > 0 && (
//               <div className="mt-12">
//                 <h2 className="font-playfair text-xl font-bold text-gray-900 mb-5">
//                   More On {blog.concern[0]}
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//                   {moreBlog.map(item => (
//                     <Link
//                       key={item.id}
//                       to={`/blog/${item.slug}`}
//                       className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
//                     >
//                       {/* Image */}
//                       <div className="h-44 overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.heading}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                       {/* Content */}
//                       <div className="p-4">
//                         {/* Tags - Make clickable */}
//                         <div className="flex flex-wrap gap-1 mb-2">
//                           {item.concern.slice(0, 2).map(concern => (
//                             <button
//                               key={concern}
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 handleConcernClick(concern);
//                               }}
//                               className="text-xs text-[#C2185B] font-medium hover:underline"
//                             >
//                               #{concern.replace(/ /g, '')}
//                             </button>
//                           ))}
//                         </div>
//                         <h3 className="font-playfair font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-[#C2185B] transition-colors line-clamp-2">
//                           {item.heading}
//                         </h3>
//                         <p className="text-xs text-gray-500 mb-1">
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               navigate('/blogs', {
//                                 state: {
//                                   selectedCategory: item.category,
//                                   scrollToArticles: true
//                                 }
//                               });
//                             }}
//                             className="hover:underline"
//                             style={{ color: catColor[item.category]?.text || '#C2185B' }}
//                           >
//                             {item.category}
//                           </button>
//                         </p>
//                         <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">
//                           {item.excerpt}
//                         </p>
//                         <span className="text-xs font-bold text-[#C2185B] uppercase tracking-wide group-hover:underline">
//                           Read More →
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       {/* ── Blog Content Styles ── */}
//       <style>{`
//         .blog-content h2 {
//           font-family: 'Playfair Display', Georgia, serif;
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: #111827;
//           margin: 1.8rem 0 0.75rem;
//         }
//         .blog-content h3 {
//           font-family: 'Playfair Display', Georgia, serif;
//           font-size: 1.05rem;
//           font-weight: 600;
//           color: #1f2937;
//           margin: 1.4rem 0 0.5rem;
//         }
//         .blog-content p {
//           font-size: 0.9rem;
//           line-height: 1.8;
//           color: #4b5563;
//           margin-bottom: 1rem;
//         }
//         .blog-content ul, .blog-content ol {
//           padding-left: 1.4rem;
//           margin-bottom: 1rem;
//         }
//         .blog-content li {
//           font-size: 0.875rem;
//           line-height: 1.75;
//           color: #4b5563;
//           margin-bottom: 0.3rem;
//         }
//         .blog-content strong {
//           color: #111827;
//           font-weight: 600;
//         }
//         .blog-content em {
//           color: #6b7280;
//           font-style: italic;
//         }
//         .blog-content blockquote {
//           background: #fff8fb;
//           border-left: 3px solid #C2185B;
//           padding: 0.85rem 1.2rem;
//           border-radius: 0 0.75rem 0.75rem 0;
//           margin: 1.5rem 0;
//           color: #374151;
//           font-size: 0.875rem;
//         }
//         .blog-content blockquote p {
//           margin: 0;
//           color: #374151;
//         }
//         .blog-content code {
//           background: #fce7f3;
//           color: #9d174d;
//           padding: 0.15rem 0.4rem;
//           border-radius: 0.3rem;
//           font-size: 0.8rem;
//           font-family: monospace;
//         }
//         .blog-content a {
//           color: #C2185B;
//           text-decoration: underline;
//         }
//       `}</style>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Added Framer Motion
import { blogData } from '../data/Blogs';

const CONCERNS = ['All', 'Acne', 'Anti-Aging', 'Hair Care', 'Dehydration', 'Dry Skin', 'Sensitive Skin', 'Curl Care'];

const catColor = {
  'Routine Guide': { bg: '#fff0f5', text: '#C2185B', border: '#f9c6d8' },
  'Ingredients': { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
  'Beauty Tips': { bg: '#fffbeb', text: '#92400e', border: '#fde68a' },
};

export default function BlogSingle() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const blog = blogData.find(b => b.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const handleConcernClick = (concern) => {
    navigate('/blogs', {
      state: {
        selectedConcern: concern,
        scrollToArticles: true
      }
    });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  if (!blog) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="text-5xl mb-3">🌸</div>
        <p>Blog not found.</p>
        <Link to="/blogs" className="text-[#C2185B] underline text-sm mt-2 inline-block">← Back to Blogs</Link>
      </motion.div>
    </div>
  );

  const moreBlog = blogData
    .filter(b => b.slug !== blog.slug && b.concern.some(c => blog.concern.includes(c)))
    .slice(0, 4);

  const newArrivals = blogData.filter(b => b.slug !== blog.slug).slice(0, 3);
  const c = catColor[blog.category] || catColor['Beauty Tips'];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

          {/* ── LEFT SIDEBAR ── */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:sticky lg:top-8 h-fit space-y-8"
          >
            <div>
              <h3 className="font-playfair text-base font-bold text-gray-900 mb-3">Concerns</h3>
              <div className="flex flex-col gap-0.5">
                {CONCERNS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleConcernClick(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${blog.concern.includes(cat) && cat !== 'All'
                      ? 'bg-pink-100 text-[#C2185B] font-semibold'
                      : 'text-gray-600 hover:text-[#C2185B] hover:bg-pink-50'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h3 className="font-playfair text-base font-bold text-gray-900 mb-3">New Arrivals</h3>
              <div className="flex flex-col gap-3">
                {newArrivals.map(item => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 group-hover:opacity-90 transition"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-[#C2185B] transition line-clamp-2">
                        {item.heading}
                      </p>
                      <p className="text-xs text-[#C2185B] font-bold mt-0.5">{item.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* ── MAIN CONTENT ── */}
          <main className="min-w-0">
            {/* Hero Image with Reveal Animation */}
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl overflow-hidden mb-6 w-full" 
              style={{ maxHeight: 420 }}
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={blog.image}
                alt={blog.heading}
                className="w-full h-[420px] object-cover"
              />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Meta row */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect x="1" y="2" width="11" height="10" rx="2" stroke="#9ca3af" strokeWidth="1.2" />
                    <path d="M4 1v2M9 1v2M1 5h11" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {blog.date}
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="5.5" stroke="#9ca3af" strokeWidth="1.2" />
                    <path d="M6.5 4v3l2 1.5" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {blog.readTime}
                </div>

                <button
                  onClick={() => navigate('/blogs', {
                    state: { selectedCategory: blog.category, scrollToArticles: true }
                  })}
                  className="text-xs px-3 py-1 rounded-full transition-all hover:opacity-80"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                >
                  {blog.category}
                </button>
              </motion.div>

              {/* Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-1.5 mb-3">
                {blog.concern.map(concern => (
                  <button
                    key={concern}
                    onClick={() => handleConcernClick(concern)}
                    className="text-xs text-[#C2185B] font-medium hover:underline"
                  >
                    #{concern.replace(/ /g, '')}
                  </button>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeInUp} className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.heading}
              </motion.h1>

              {/* Excerpt */}
              <motion.p variants={fadeInUp} className="text-gray-500 text-sm leading-relaxed mb-6 border-l-2 border-pink-200 pl-4">
                {blog.excerpt}
              </motion.p>

              {/* HTML Content with Smooth Appearance */}
              <motion.div
                variants={fadeInUp}
                className="blog-content prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </motion.div>

            {/* More On Section - Reveal on Scroll */}
            {moreBlog.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12"
              >
                <h2 className="font-playfair text-xl font-bold text-gray-900 mb-5">
                  More On {blog.concern[0]}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {moreBlog.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={`/blog/${item.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all block"
                      >
                        <div className="h-44 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.concern.slice(0, 2).map(concern => (
                              <button
                                key={concern}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleConcernClick(concern);
                                }}
                                className="text-xs text-[#C2185B] font-medium hover:underline"
                              >
                                #{concern.replace(/ /g, '')}
                              </button>
                            ))}
                          </div>
                          <h3 className="font-playfair font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-[#C2185B] transition-colors line-clamp-2">
                            {item.heading}
                          </h3>
                          <span className="text-xs font-bold text-[#C2185B] uppercase tracking-wide group-hover:underline">
                            Read More →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        .blog-content h2 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.3rem; font-weight: 700; color: #111827; margin: 1.8rem 0 0.75rem; }
        .blog-content h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.05rem; font-weight: 600; color: #1f2937; margin: 1.4rem 0 0.5rem; }
        .blog-content p { font-size: 0.9rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem; }
        .blog-content ul, .blog-content ol { padding-left: 1.4rem; margin-bottom: 1rem; }
        .blog-content li { font-size: 0.875rem; line-height: 1.75; color: #4b5563; margin-bottom: 0.3rem; }
        .blog-content blockquote { background: #fff8fb; border-left: 3px solid #C2185B; padding: 0.85rem 1.2rem; border-radius: 0 0.75rem 0.75rem 0; margin: 1.5rem 0; color: #374151; font-size: 0.875rem; }
        .blog-content a { color: #C2185B; text-decoration: underline; }
      `}</style>
    </div>
  );
}