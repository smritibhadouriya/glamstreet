// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const HeroSection = ({ data }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = data.heroImage;
//     img.onload = () => setImageLoaded(true);
//   }, [data.heroImage]);

//   return (
//   <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-glam-charcoal">
//   {/* Background */}
//   <motion.div 
//     className="absolute inset-0"
//     initial={{ scale: 1.1, opacity: 0 }}
//     animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
//     transition={{ duration: 1.2, ease: "easeOut" }}
//   >
//     {!imageLoaded ? (
//       <div className="w-full h-full skeleton" />
//     ) : (
//       <>
//         <img
//           src={data.heroImage}
//           alt={data.altText}
//           className="w-full h-full object-cover object-center"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-glam-charcoal/85 via-glam-charcoal/60 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-glam-charcoal/60 via-transparent to-transparent" />
//       </>
//     )}
//   </motion.div>

//   {/* Content */}
//   <div className="relative h-full flex items-center">
//     <div
//       className="
//         w-full 
//         max-w-7xl 
//         mx-auto 
//         px-4 sm:px-6 lg:px-12
//       "
//     >
//       <div className="max-w-3xl">
//         {/* Eyebrow */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mb-4"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-gold/20 backdrop-blur-sm text-glam-gold text-xs sm:text-sm tracking-widest uppercase border border-glam-gold/30">
//             {data.eyebrow}
//           </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="
//             font-lora 
//             text-4xl sm:text-5xl lg:text-7xl 
//             font-bold 
//             text-white 
//             leading-[1.1] 
//             mb-6
//           "
//         >
//           {data.headline.split(' ').map((word, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//               className="inline-block mr-2"
//             >
//               {word === 'Glam.' || word === 'Confidence.' ? (
//                 <span className="text-glam-gold">{word}</span>
//               ) : (
//                 word
//               )}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {/* Subheadline */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.6 }}
//           className="
//             text-base sm:text-lg 
//             text-white/90 
//             leading-relaxed 
//             max-w-xl
//           "
//         >
//           {data.subheadline}
//         </motion.p>
//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default HeroSection;


// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const HeroSection = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const heroImages = [
//     data.heroImage,
//     "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&q=90",
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=90",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroImages.length]);

//   const slideVariants = {
//     initial: { x: '100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: '-100%', opacity: 0.5 }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Background Slider */}
//       <div className="absolute inset-0 overflow-hidden">
//         <AnimatePresence initial={false} mode="popLayout">
//           <motion.div
//             key={currentIndex}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{ 
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.5 } 
//             }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={heroImages[currentIndex]}
//               alt="Glam Beauty"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent md:to-transparent" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Content Area - Added pt-24 for Mobile Padding */}
//       <div className="relative z-20 h-full flex items-center px-6 sm:px-10 md:px-20 pt-24 md:pt-0">
//         <div className="max-w-4xl text-left">
          
//           {/* Eyebrow */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 mb-4 md:mb-6"
//           >
//             <span className="w-8 md:w-12 h-[1px] bg-pink-500" />
//             <p className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
//               {data.eyebrow} The Glam Street
//             </p>
//           </motion.div>

//           {/* Headline - Responsive Text Size */}
//           <motion.h1
//             key={`title-${currentIndex}`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="font-serif text-4xl sm:text-6xl lg:text-8xl text-white leading-[1.1] mb-6 md:mb-8"
//           >
//             Own Your <span className="italic font-light text-pink-100">Glam.</span> <br />
//             Own Your <span className="text-pink-500">Confidence.</span>
//           </motion.h1>

//           {/* Subheadline - Mobile hidden/clutter fix */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-white/70 text-sm md:text-lg max-w-lg leading-relaxed mb-8 md:mb-12 font-light"
//           >
//             {data.subheadline}
//           </motion.p>

//           {/* Action Buttons - Stacked on Mobile */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 md:gap-6"
//           >
//             <a
//               href={data.cta.primary.href}
//               className="group relative overflow-hidden px-8 py-4 bg-white text-black text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center"
//             >
//               <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                 {data.cta.primary.label}
//               </span>
//               <div className="absolute inset-0 bg-pink-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
//             </a>
            
//             <a
//               href={data.cta.secondary.href}
//               className="px-8 py-4 border border-white/40 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center hover:border-pink-500 hover:text-pink-500 transition-all"
//             >
//               {data.cta.secondary.label}
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Progress Bars - Adjusted for Mobile Visibility */}
//       <div className="absolute bottom-8 md:bottom-12 left-6 md:left-20 right-6 md:right-auto flex gap-3 z-30">
//         {heroImages.map((_, idx) => (
//           <div key={idx} className="h-[2px] md:h-1 flex-1 md:w-16 bg-white/20 overflow-hidden rounded-full">
//             {idx === currentIndex && (
//               <motion.div
//                 initial={{ x: '-100%' }}
//                 animate={{ x: 0 }}
//                 transition={{ duration: 5, ease: "linear" }}
//                 className="h-full bg-pink-500"
//               />
//             )}
//             {idx < currentIndex && <div className="h-full w-full bg-white/60" />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const HeroSection = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const heroImages = [
//     data.heroImage,
//     "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&q=90",
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=90",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroImages.length]);

//   return (
//     <section className="relative min-h-[100vh] w-full overflow-hidden bg-black flex flex-col justify-center">
      
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={heroImages[currentIndex]}
//               alt="Glam Beauty"
//               className="w-full h-full object-cover"
//             />
//             {/* Dark Overlays for Text Legibility */}
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 md:bg-gradient-to-r md:from-black/80 md:to-transparent" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Content Area - Responsive Centering */}
//       <div className="relative z-20 w-full px-6 sm:px-10 md:px-20 py-10">
//         <div className="max-w-4xl">
          
//           {/* Eyebrow */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 mb-6"
//           >
//             <span className="w-8 h-[1px] bg-pink-500" />
//             <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">
//               {data.eyebrow || "The Glam Street"}
//             </p>
//           </motion.div>

//           {/* Headline - Responsive Sizes to prevent cutting */}
//           <motion.h1
//             key={`title-${currentIndex}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="font-serif text-[2.6rem] sm:text-6xl lg:text-8xl text-white leading-[1.1] mb-6"
//           >
//             Own Your <span className="italic font-light text-pink-100">Glam.</span> <br />
//             Own Your <span className="text-pink-500">Confidence.</span>
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-white/70 text-sm md:text-lg max-w-lg leading-relaxed mb-10 font-light"
//           >
//             {data.subheadline}
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <a
//               href={data.cta.primary.href}
//               className="px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest text-center rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
//             >
//               {data.cta.primary.label}
//             </a>
            
//             <a
//               href={data.cta.secondary.href}
//               className="px-10 py-4 border border-white/40 text-white text-[11px] font-bold uppercase tracking-widest text-center rounded-full hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
//             >
//               {data.cta.secondary.label}
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Subtle Scroll Indicator (instead of bars) */}
//       <motion.div 
//         animate={{ y: [0, 8, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
//       >
//         <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;


// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const HeroSection = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const heroImages = [
//     data.heroImage,
//     "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&q=90",
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=90",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroImages.length]);

//   return (
//     <section className="relative w-full bg-black overflow-hidden h-[580px] sm:h-[700px] lg:h-[85vh] xl:h-screen">
      
//       {/* Background Container */}
//       <div className="absolute inset-0 z-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={heroImages[currentIndex]}
//               alt="Glam Beauty"
//               className="w-full h-full object-cover object-center"
//             />
//             {/* Optimized Overlays */}
//             <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-transparent lg:to-transparent" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Content Area */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-12 md:justify-center md:pb-0">
//         <div className="max-w-4xl">
          
//           {/* Eyebrow */}
//           <motion.div
//             initial={{ opacity: 0, x: -15 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2 mb-3 md:mb-4"
//           >
//             <span className="w-6 md:w-8 h-[1px] bg-pink-500" />
//             <p className="text-white text-[8px] md:text-[11px] uppercase tracking-[0.3em] font-bold">
//               {data.eyebrow || "The Glam Street"}
//             </p>
//           </motion.div>

//           {/* Headline - Optimized for Mobile (Text sizes reduced) */}
//           <motion.h1
//             key={`title-${currentIndex}`}
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-serif text-white leading-[1.15] mb-4 md:mb-7"
//             style={{ 
//               fontSize: "clamp(1.8rem, 7vh, 5rem)", // Mobile par chota, Laptop par perfect
//               maxWidth: "850px"
//             }}
//           >
//             Own Your <span className="italic font-light text-pink-100">Glam.</span> <br className="hidden xs:block" />
//             Own Your <span className="text-pink-500">Confidence.</span>
//           </motion.h1>

//           {/* Subheadline - Shorter and tighter for mobile */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-white/70 font-light leading-snug md:leading-relaxed mb-6 md:mb-10"
//             style={{ 
//               fontSize: "clamp(0.85rem, 1.8vh, 1.1rem)",
//               maxWidth: "420px"
//             }}
//           >
//             {data.subheadline}
//           </motion.p>

//           {/* Buttons - Slimmer on mobile to stay within screen */}
//           <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
//             <a
//               href={data.cta.primary.href}
//               className="px-6 py-3 md:px-10 md:py-4 bg-pink-600 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center rounded-full shadow-lg active:scale-95 transition-transform"
//             >
//               {data.cta.primary.label}
//             </a>
//             <a
//               href={data.cta.secondary.href}
//               className="px-6 py-3 md:px-10 md:py-4 border border-white/30 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center rounded-full backdrop-blur-md active:scale-95 transition-transform"
//             >
//               {data.cta.secondary.label}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Fade to blend with next section */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
//     </section>
//   );
// };

// export default HeroSection;

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    data.heroImage,
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&q=90",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=90",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative w-full bg-black overflow-hidden h-[600px] sm:h-[700px] lg:h-[85vh] xl:h-screen pt-16 lg:pt-20">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentIndex]}
              alt="Glam Beauty"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-transparent lg:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Area - FIXED FOR ALL SCREENS */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-10 md:pt-0">
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-pink-500" />
            <p className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold">
              {data.eyebrow || "The Glam Street"}
            </p>
          </motion.div>

          {/* Headline - Balanced size for Z Flip/Nord/Moto */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-white leading-[1.1] md:leading-[1.15] mb-5"
            style={{ 
              fontSize: "clamp(2rem, 8vw, 5rem)", 
              maxWidth: "850px"
            }}
          >
            Own Your <span className="italic font-light text-pink-100">Glam.</span> <br />
            Own Your <span className="text-pink-500">Confidence.</span>
          </motion.h1>

          {/* Subheadline - Restricted width to prevent edge cutting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/70 font-light leading-relaxed mb-8 md:mb-10 max-w-[280px] xs:max-w-[350px] md:max-w-[420px]"
            style={{ 
              fontSize: "clamp(0.85rem, 4vw, 1.1rem)"
            }}
          >
            {data.subheadline}
          </motion.p>

          {/* Buttons - Mobile Stack & Desktop Side-by-side */}
          <div className="flex flex-col sm:flex-row gap-3.5 md:gap-4 w-full xs:w-auto">
            <a
              href={data.cta.primary.href}
              className="w-full sm:w-auto px-10 py-4 bg-pink-600 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center rounded-full shadow-lg active:scale-95 transition-all"
            >
              {data.cta.primary.label}
            </a>
            <a
              href={data.cta.secondary.href}
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-center rounded-full backdrop-blur-md active:scale-95 transition-all"
            >
              {data.cta.secondary.label}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
