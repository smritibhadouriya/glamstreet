// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const BlogSection = ({ data }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="relative py-20 lg:py-32 bg-white">
//       <div className="section-container">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-gold/20 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
//             The Blog
//           </span>
//           <h2 className="font-lora text-4xl sm:text-5xl lg:text-6xl font-bold text-glam-charcoal mb-4">
//             {data.title}
//           </h2>
//           <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
//             {data.subtitle}
//           </p>
//         </motion.div>

//         {/* Featured Articles Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.featured.map((article, index) => (
//             <BlogCard key={index} article={article} index={index} isInView={isInView} />
//           ))}
//         </div>

//         {/* View All CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-center mt-16"
//         >
//           <a href="/blog" className="btn-secondary">
//             Read All Articles
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const BlogCard = ({ article, index, isInView }) => {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       className="group"
//     >
//       <a href={article.href} className="block space-y-4">
//         {/* Image */}
//         <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
//           <img
//             src={article.image}
//             alt={article.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-glam-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
//           {/* Category Badge */}
//           <div className="absolute top-4 left-4">
//             <span className="px-4 py-1.5 bg-white text-glam-burgundy text-xs font-sans tracking-wide">
//               {article.category}
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="space-y-3">
//           <h3 className="font-lora text-2xl font-bold text-glam-charcoal group-hover:text-glam-burgundy transition-colors duration-300 line-clamp-2">
//             {article.title}
//           </h3>
          
//           <p className="text-gray-600 leading-relaxed line-clamp-3">
//             {article.excerpt}
//           </p>

//           <div className="flex items-center justify-between pt-2 text-sm text-gray-500">
//             <span className="flex items-center gap-1">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               {article.readTime}
//             </span>
//             <span className="text-glam-gold font-medium group-hover:underline">
//               Read More →
//             </span>
//           </div>
//         </div>
//       </a>
//     </motion.article>
//   );
// };

// export default BlogSection;


import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BlogSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
              Beauty Secrets
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 italic">
              The <span className="font-normal not-italic underline decoration-pink-100 underline-offset-8">Glow Edit</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-slate-500 text-sm md:text-base font-light max-w-xs"
          >
            Expert tips, rituals, and the science behind your natural radiance.
          </motion.p>
        </div>

        {/* Blog Cards: Mobile Scroll | Desktop: 3-Column Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible">
          {data.featured.map((article, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] md:w-full snap-center">
              <BlogCard article={article} index={index} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* View All - Minimal Link */}
        <div className="flex justify-center mt-6">
          <a href="/blog" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 border-b-2 border-slate-100 pb-2 hover:border-pink-500 transition-all">
            Explore All Stories
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const BlogCard = ({ article, index, isInView }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
    >
      <a href={article.href} className="block">
        {/* Magazine Style Image Frame */}
        <div className="relative aspect-[16/10] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-50 mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Subtle Float Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-2 space-y-3">
          <div className="flex items-center gap-3 text-[10px] text-pink-500 font-bold uppercase tracking-widest">
            <span>{article.readTime} Read</span>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <span className="text-slate-400 font-medium lowercase italic">by editor</span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-slate-800 leading-snug group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2 opacity-80">
            {article.excerpt}
          </p>

          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-pink-500 transition-colors border-b border-transparent group-hover:border-pink-500 pb-1">
              Read Story
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default BlogSection;