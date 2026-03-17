// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useRef } from 'react';
// import { useInView } from 'framer-motion';

// const BestsellersSection = ({ data }) => {
//   const [activeProduct, setActiveProduct] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="relative py-20 lg:py-32 bg-white overflow-hidden">
//       {/* Decorative Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-glam-rose/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-glam-gold/10 rounded-full blur-3xl" />
//       </div>

//       <div className="section-container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-gold/20 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
//             Bestsellers
//           </span>
//           <h2 className="font-lora text-4xl sm:text-5xl lg:text-6xl font-bold text-glam-charcoal mb-4">
//             {data.title}
//           </h2>
//           <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
//             {data.subtitle}
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {data.products.map((product, index) => (
//             <ProductCard
//               key={index}
//               product={product}
//               index={index}
//               isActive={activeProduct === index}
//               onHover={() => setActiveProduct(index)}
//               isInView={isInView}
//             />
//           ))}
//         </div>

//         {/* View All CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-center mt-16"
//         >
//           <a href="/shop" className="btn-secondary">
//             View All Products
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const ProductCard = ({ product, index, isActive, onHover, isInView }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       onMouseEnter={onHover}
//       className="group relative"
//     >
//       {/* Card Container */}
//       <div className="relative bg-glam-cream overflow-hidden transition-shadow duration-500 hover:shadow-2xl">
//         {/* Image Container */}
//         <div className="relative aspect-square overflow-hidden bg-white">
//           <motion.img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-700"
//             animate={{
//               scale: isActive ? 1.1 : 1,
//             }}
//             loading="lazy"
//           />

//           {/* Hover Overlay */}
//           <AnimatePresence>
//             {isActive && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0 bg-glam-burgundy/80 flex items-center justify-center"
//               >
//                 <motion.button
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.1, duration: 0.3 }}
//                   className="bg-white text-glam-burgundy px-8 py-3 font-sans font-medium tracking-wide hover:bg-glam-gold hover:text-white transition-colors duration-300"
//                 >
//                   Quick View
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Tags */}
//           <div className="absolute top-4 left-4 flex flex-col gap-2">
//             {product.tags.slice(0, 2).map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 bg-white/90 backdrop-blur-sm text-glam-burgundy text-xs font-sans tracking-wide"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Wishlist Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-glam-gold hover:text-white transition-colors duration-300"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </motion.button>
//         </div>

//         {/* Product Info */}
//         <div className="p-6 space-y-3">
//           {/* Category */}
//           <span className="text-glam-burgundy text-xs font-sans tracking-widest uppercase">
//             {product.category}
//           </span>

//           {/* Name */}
//           <h3 className="font-lora text-xl font-semibold text-glam-charcoal group-hover:text-glam-burgundy transition-colors duration-300">
//             {product.name}
//           </h3>

//           {/* Rating */}
//           <div className="flex items-center gap-2">
//             <div className="flex gap-0.5">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-4 h-4 ${
//                     i < Math.floor(product.rating)
//                       ? 'text-glam-gold fill-current'
//                       : 'text-gray-300'
//                   }`}
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-sm text-gray-600 font-sans">
//               {product.rating}
//             </span>
//           </div>

//           {/* Price & Add to Cart */}
//           <div className="flex items-center justify-between pt-2">
//             <span className="font-lora text-2xl font-bold text-glam-burgundy">
//               {product.price}
//             </span>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-10 h-10 bg-glam-burgundy text-white rounded-full flex items-center justify-center hover:bg-glam-gold transition-colors duration-300"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//               </svg>
//             </motion.button>
//           </div>
//         </div>

//         {/* Animated Border on Hover */}
//         <motion.div
//           className="absolute inset-0 border-4 border-glam-gold pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isActive ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       {/* Index Number */}
//       <div className="absolute -top-4 -left-4 w-12 h-12 bg-glam-burgundy text-white rounded-full flex items-center justify-center font-lora text-lg font-bold shadow-lg z-10">
//         {String(index + 1).padStart(2, '0')}
//       </div>
//     </motion.div>
//   );
// };

// export default BestsellersSection;


import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const BestsellersSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // Padding matched with your previous premium sections
    <section ref={ref} className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14 px-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
              Customer Favorites
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 italic">
              Best <span className="font-normal not-italic underline decoration-pink-100 underline-offset-8">Sellers</span>
            </h2>
          </motion.div>

          <a href="/shop" className="hidden md:block text-xs font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-pink-600 hover:border-pink-600 transition-all">
            View All
          </a>
        </div>

        {/* Product Container: Mobile Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-10 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
          {data.products.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] snap-center md:w-full">
              <ProductCard
                product={product}
                index={index}
                isInView={isInView}
              />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center mt-4">
          <a href="/shop" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-1">
            Browse Entire Collection
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

const ProductCard = ({ product, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full bg-white"
    >
      {/* Image Container with Elegant Frame */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#FBFBFC] rounded-2xl md:rounded-[2rem] border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink-100/50">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Wishlist Icon */}
        <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick Add Overlay (Desktop Only) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-x-4 bottom-4 hidden lg:block"
            >
              <button className="w-full py-3.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-xl hover:bg-pink-600 transition-colors">
                Add To Bag
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="mt-6 px-1 flex flex-col items-center text-center space-y-2">
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-4 bg-pink-300" />
          <span className="text-[10px] text-pink-500 font-bold tracking-widest uppercase">
            {product.category}
          </span>
          <span className="h-[1px] w-4 bg-pink-300" />
        </div>

        <h3 className="font-serif text-lg md:text-xl text-slate-800 line-clamp-1 group-hover:text-pink-600 transition-colors px-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-4 pt-1">
          <span className="text-xl font-bold text-slate-900">{product.price}</span>
          {/* Rating Badge */}
          <div className="flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md">
            <span className="text-[10px] font-bold text-slate-700">{product.rating}</span>
            <span className="text-pink-400 text-[10px]">★</span>
          </div>
        </div>

        {/* Mobile-Only CTA */}
        <button className="md:hidden w-full mt-4 py-3 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest active:bg-slate-900 active:text-white transition-all">
          Quick Add +
        </button>
      </div>
    </motion.div>
  );
};

export default BestsellersSection;