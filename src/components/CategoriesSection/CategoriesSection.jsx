// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';

// const CategoriesSection = ({ data }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section ref={ref} className="relative py-20 lg:py-32 bg-gradient-glam overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-glam-rose rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-glam-gold/30 rounded-full blur-3xl" />
//       </div>

//       <div className="section-container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-lora text-4xl sm:text-5xl lg:text-6xl font-bold text-glam-charcoal mb-4">
//             {data.title}
//           </h2>
//           <div className="w-24 h-1 bg-glam-gold mx-auto" />
//         </motion.div>

//         {/* Horizontal Scrolling Grid */}
//         <div className="relative">
//           {/* Mobile: Vertical Stack */}
//           <div className="grid md:hidden gap-6">
//             {data.items.map((item, index) => (
//               <CategoryCard 
//                 key={index} 
//                 item={item} 
//                 index={index} 
//                 isInView={isInView}
//                 isHovered={hoveredIndex === index}
//                 onHover={() => setHoveredIndex(index)}
//                 onLeave={() => setHoveredIndex(null)}
//               />
//             ))}
//           </div>

//           {/* Desktop: Horizontal Layout with Different Heights */}
//           <div className="hidden md:grid md:grid-cols-4 gap-6">
//             {data.items.map((item, index) => (
//               <CategoryCard 
//                 key={index} 
//                 item={item} 
//                 index={index} 
//                 isInView={isInView}
//                 isHovered={hoveredIndex === index}
//                 onHover={() => setHoveredIndex(index)}
//                 onLeave={() => setHoveredIndex(null)}
//                 className={index % 2 === 0 ? 'md:mt-8' : ''}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-center mt-16"
//         >
//           <a href="/shop" className="btn-primary">
//             Explore All Categories
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const CategoryCard = ({ item, index, isInView, isHovered, onHover, onLeave, className = '' }) => {
//   return (
//     <motion.a
//       href={item.href}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       onMouseEnter={onHover}
//       onMouseLeave={onLeave}
//       className={`group relative block overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
//     >
//       {/* Image Container with Aspect Ratio */}
//       <div className="relative aspect-[3/4] overflow-hidden">
//         <motion.img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover transition-transform duration-700 ease-out"
//           animate={{
//             scale: isHovered ? 1.1 : 1,
//           }}
//           loading="lazy"
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-glam-charcoal via-glam-charcoal/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
//         {/* Gold Accent Line */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-1 bg-glam-gold"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       {/* Content Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-end p-6">
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : {}}
//           transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
//         >
//           {/* Category Title */}
//           <h3 className="font-lora text-3xl font-bold text-white mb-2 group-hover:text-glam-gold transition-colors duration-300">
//             {item.title}
//           </h3>
          
//           {/* Description */}
//           <p className="text-white/90 font-sans text-sm mb-4 line-clamp-2">
//             {item.description}
//           </p>

//           {/* Explore Link */}
//           <div className="flex items-center gap-2 text-glam-gold font-sans text-sm font-medium">
//             <span>Explore Now</span>
//             <motion.svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               animate={{
//                 x: isHovered ? 5 : 0,
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </motion.svg>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative Corner Badge */}
//       <motion.div
//         className="absolute top-4 right-4 w-12 h-12 bg-glam-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//         animate={{
//           scale: isHovered ? [1, 1.2, 1] : 1,
//         }}
//         transition={{ duration: 0.5 }}
//       >
//         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//         </svg>
//       </motion.div>

//       {/* Number Badge */}
//       <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
//         <span className="font-lora text-white font-bold text-lg">
//           {String(index + 1).padStart(2, '0')}
//         </span>
//       </div>
//     </motion.a>
//   );
// };

// export default CategoriesSection;

// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';

// const CategoriesSection = ({ data }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section ref={ref} className="relative py-20 lg:py-32 bg-[#FFF9F9] overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FDE7E7]/50 to-transparent" />

//       <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           className="mb-12 md:mb-20 px-2"
//         >
//           <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink-600 font-bold block mb-3">Essentials</span>
//           <h2 className="font-serif text-4xl md:text-7xl text-gray-900 italic leading-tight">
//             Our <span className="font-normal not-italic">Categories</span>
//           </h2>
//         </motion.div>

//         {/* Categories Wrapper */}
//         {/* Mobile: Horizontal Scroll | Desktop: Grid */}
//         <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
//           {data.items.map((item, index) => (
//             <div 
//               key={index} 
//               className="flex-shrink-0 w-[280px] snap-center md:w-full"
//             >
//               <CategoryCard 
//                 item={item} 
//                 index={index} 
//                 isInView={isInView}
//                 isHovered={hoveredIndex === index}
//                 onHover={() => setHoveredIndex(index)}
//                 onLeave={() => setHoveredIndex(null)}
//                 // Stagger only on desktop
//                 className={index % 2 !== 0 ? 'md:translate-y-12' : ''}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Minimal Progress Indicator (Mobile Only) */}
//         <div className="flex md:hidden justify-center gap-1 mt-4">
//            {data.items.map((_, i) => (
//              <div key={i} className="w-1.5 h-1.5 rounded-full bg-pink-200" />
//            ))}
//         </div>
//       </div>

//       {/* Tailwind Custom Class for hidden scrollbar */}
//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// };

// const CategoryCard = ({ item, index, isInView, isHovered, onHover, onLeave, className }) => {
//   return (
//     <motion.a
//       href={item.href}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//       transition={{ delay: index * 0.1, duration: 0.8 }}
//       onMouseEnter={onHover}
//       onMouseLeave={onLeave}
//       className={`group relative aspect-[3/4] overflow-hidden rounded-sm ${className}`}
//     >
//       <motion.img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-full object-cover"
//         animate={{ scale: isHovered ? 1.1 : 1 }}
//         transition={{ duration: 0.7 }}
//       />

//       {/* Luxury Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       {/* Info Container */}
//       <div className="absolute inset-0 p-5 flex flex-col justify-end">
//         <h3 className="text-white font-serif text-2xl mb-1 group-hover:text-pink-200 transition-colors">
//           {item.title}
//         </h3>
//         <p className="text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-2">
//           Shop Now <span className="text-pink-400">→</span>
//         </p>
//       </div>

//       {/* Index Number Badge */}
//       <div className="absolute top-4 right-4 text-white/30 font-serif text-sm">
//         0{index + 1}
//       </div>
//     </motion.a>
//   );
// };

// export default CategoriesSection;


import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const CategoriesSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-[#fffaff] overflow-hidden">
      {/* Premium Background Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-pink-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
              The Beauty Edit
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 italic leading-tight">
              Premium <span className="font-normal not-italic underline decoration-pink-200 underline-offset-8">Essentials</span>
            </h2>
          </motion.div>

          {/* Desktop View All */}
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-3 text-sm font-bold tracking-widest uppercase border-b-2 border-slate-900 pb-1 hover:text-pink-600 hover:border-pink-600 transition-all duration-300"
          >
            View All Categories
          </motion.a>
        </div>

        {/* Categories Grid - Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-10 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          {data.items.map((item, index) => (
            <CategoryCard 
              key={index} 
              item={item} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center mt-6">
          <a href="/shop" className="px-10 py-4 bg-slate-900 text-white text-xs tracking-[0.2em] uppercase font-bold rounded-full shadow-xl active:scale-95 transition-transform">
            Explore All Categories
          </a>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const CategoryCard = ({ item, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-[280px] md:w-full aspect-[3/4] overflow-hidden rounded-2xl snap-center bg-slate-100 shadow-sm"
    >
      {/* Image with Blur & Scale Logic */}
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        animate={{ 
          scale: isHovered ? 1.12 : 1,
          filter: isHovered ? "blur(5px) brightness(0.7)" : "blur(0px) brightness(0.95)"
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-center items-center">
        {/* Title: Pops Up on Hover */}
        <motion.h3 
          className="text-white font-serif text-3xl md:text-4xl mb-3 drop-shadow-md"
          animate={{ y: isHovered ? -15 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {item.title}
        </motion.h3>

        {/* Glassmorphism Detail Card: Slides In on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 30 
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-xl w-full"
        >
          <p className="text-white text-xs md:text-sm font-light mb-4 leading-relaxed line-clamp-2">
            {item.description}
          </p>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-pink-300 flex items-center justify-center gap-2">
            Explore Now <span className="text-lg leading-none">→</span>
          </div>
        </motion.div>
      </div>

      {/* Luxe Index Badge */}
      <div className="absolute top-5 left-5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
        <span className="text-white text-[9px] font-bold tracking-widest uppercase">
          Collection 0{index + 1}
        </span>
      </div>
    </motion.a>
  );
};

export default CategoriesSection;