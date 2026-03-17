// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// const RitualSection = ({ data }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Transform values for parallax effects
//   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

//   return (
//     <section ref={containerRef} className="relative bg-glam-charcoal">
//       <div className="grid lg:grid-cols-2 min-h-screen">
//         {/* Left: Sticky Image */}
//         <div className="relative lg:sticky lg:top-0 h-screen overflow-hidden">
//           <motion.div
//             style={{ y: imageY, scale: imageScale }}
//             className="w-full h-full"
//           >
//             <img
//               src={data.image}
//               alt="Daily Glam Ritual"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-glam-charcoal/60 to-transparent" />
//           </motion.div>

//           {/* Floating Title (Visible on Mobile) */}
//           <div className="lg:hidden absolute inset-0 flex items-center justify-center">
//             <div className="text-center px-6">
//               <h2 className="font-lora text-4xl font-bold text-white mb-4">
//                 {data.title}
//               </h2>
//               <p className="text-glam-gold text-lg font-sans">
//                 {data.subtitle}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Scrolling Content */}
//         <div className="relative bg-glam-cream">
//           {/* Decorative Pattern */}
//           <div className="absolute inset-0 grid-pattern opacity-50" />

//           <div className="relative py-20 lg:py-32 px-6 sm:px-12 space-y-32">
//             {/* Section Title (Desktop Only) */}
//             <div className="hidden lg:block">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h2 className="font-lora text-5xl lg:text-6xl font-bold text-glam-charcoal mb-4">
//                   {data.title}
//                 </h2>
//                 <p className="text-glam-burgundy text-xl font-lora italic">
//                   {data.subtitle}
//                 </p>
//                 <div className="w-24 h-1 bg-glam-gold mt-6" />
//               </motion.div>
//             </div>

//             {/* Ritual Steps */}
//             {data.steps.map((step, index) => (
//               <RitualStep key={index} step={step} index={index} />
//             ))}

//             {/* Bottom CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="pt-12 border-t border-glam-gold/30"
//             >
//               <div className="bg-white p-8 shadow-xl">
//                 <h3 className="font-lora text-2xl font-bold text-glam-charcoal mb-4">
//                   Ready to Build Your Ritual?
//                 </h3>
//                 <p className="text-gray-700 mb-6">
//                   Discover curated routines designed specifically for your skin type and lifestyle.
//                 </p>
//                 <a href="/routines" className="btn-primary">
//                   Explore Routines
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const RitualStep = ({ step, index }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
//   const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ opacity, scale }}
//       className="space-y-6"
//     >
//       {/* Time Badge */}
//       <div className="inline-flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-glam-burgundy flex items-center justify-center">
//           <span className="font-lora text-white font-bold text-lg">
//             {String(index + 1).padStart(2, '0')}
//           </span>
//         </div>
//         <span className="text-glam-gold text-sm font-sans tracking-widest uppercase">
//           {step.time}
//         </span>
//       </div>

//       {/* Step Title */}
//       <h3 className="font-lora text-3xl sm:text-4xl font-bold text-glam-charcoal">
//         {step.title}
//       </h3>

//       {/* Description */}
//       <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
//         {step.description}
//       </p>

//       {/* Decorative Divider */}
//       <div className="flex items-center gap-4 pt-4">
//         <div className="h-px flex-1 bg-gradient-to-r from-glam-gold to-transparent" />
//         <svg className="w-6 h-6 text-glam-gold" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//         </svg>
//       </div>

//       {/* Visual Enhancement */}
//       <div className="grid grid-cols-3 gap-4 pt-6">
//         {['Cleanse', 'Nourish', 'Protect'][index] && (
//           <>
//             <div className="aspect-square bg-glam-rose/20 rounded-lg flex items-center justify-center">
//               <span className="text-3xl">✨</span>
//             </div>
//             <div className="aspect-square bg-glam-gold/20 rounded-lg flex items-center justify-center">
//               <span className="text-3xl">💧</span>
//             </div>
//             <div className="aspect-square bg-glam-burgundy/20 rounded-lg flex items-center justify-center">
//               <span className="text-3xl">🌟</span>
//             </div>
//           </>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default RitualSection;


import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const RitualSection = ({ data }) => {
  const containerRef = useRef(null);
  
  // Tracking scroll specifically for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Zoom Effect: Start zoomed (1.4), middle normal (1), end slightly out (0.95)
  const imageScale = useTransform(scrollYProgress, [0, 0.4, 1], [1.4, 1, 0.95]);
  
  // 2. Tilt Effect: Organic rotation as you scroll
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);

  // 3. Smoothness: Adding spring for that "Premium/Nykaa" buttery feel
  const scale = useSpring(imageScale, { stiffness: 80, damping: 20 });
  const rotate = useSpring(imageRotate, { stiffness: 80, damping: 20 });

  return (
    <section ref={containerRef} className="relative bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT: STICKY IMAGE WITH SYNCED ZOOM & TILT */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 z-20">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] md:border-[12px] border-white">
              <motion.div 
                style={{ scale, rotate }}
                className="w-full h-full"
              >
                <img
                  src={data.image}
                  alt="Ritual Visual"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Soft Inner Glow */}
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />
            </div>

            {/* Mobile Header (Overlay) */}
            <div className="absolute bottom-8 left-0 right-0 text-center lg:hidden pointer-events-none">
             
            </div>
          </div>

          {/* RIGHT: SCROLLABLE CONTENT */}
          <div className="w-full lg:w-[55%] pt-10 lg:pt-20">
            {/* Desktop Intro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="hidden lg:block mb-24"
            >
              <span className="text-pink-500 font-bold tracking-[0.4em] text-xs uppercase block mb-4">
                Exclusive Ritual
              </span>
              <h2 className="font-serif text-6xl xl:text-7xl text-slate-900 leading-tight italic">
                {data.title}
              </h2>
              <p className="text-slate-400 mt-6 text-lg font-light italic">
                {data.subtitle || "A step-by-step luxury guide to radiance."}
              </p>
            </motion.div>

            {/* Steps List */}
            <div className="space-y-8 md:space-y-12">
              {data.steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>

            {/* View All / Explore CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-24 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center"
            >
              <h3 className="font-serif text-2xl text-slate-900 mb-4 italic">Tailored for You</h3>
              <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">
                Discover products that complement your unique skin ritual.
              </p>
              <button className="px-10 py-4 bg-slate-900 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-pink-600 transition-all duration-500">
                Explore Full Collection
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px" }}
      className="group p-8 md:p-10 bg-white hover:bg-pink-50/20 rounded-[2rem] border border-slate-50 hover:border-pink-100 transition-all duration-500"
    >
      <div className="flex gap-6 md:gap-10">
        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-xl md:text-2xl shadow-lg group-hover:bg-pink-500 transition-colors">
          0{index + 1}
        </div>
        <div className="space-y-3">
          <span className="text-[10px] md:text-xs font-bold text-pink-400 tracking-[0.3em] uppercase block">
            {step.time || "Daily Essential"}
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-slate-800 leading-tight group-hover:text-pink-600 transition-colors">
            {step.title}
          </h3>
          <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RitualSection;