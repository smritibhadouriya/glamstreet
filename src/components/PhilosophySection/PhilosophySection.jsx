// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const PhilosophySection = ({ data }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//   ref={ref}
//   className="
//     relative
//     py-8 sm:py-12 lg:py-16
//     overflow-hidden
//     bg-white
//   "
// >
//   {/* Background Decoration (Desktop only) */}
//   <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-glam-rose/10 to-transparent pointer-events-none" />

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//     <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="lg:col-span-3 space-y-6"
//       >
//         {/* Eyebrow */}
//         <div>
//           <span className="text-glam-burgundy text-xs sm:text-sm tracking-[0.25em] uppercase">
//             {data.eyebrow}
//           </span>
//           <div className="h-px w-12 bg-glam-gold mt-2" />
//         </div>

//         {/* Title */}
//         <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-glam-charcoal leading-tight">
//           {data.title}
//         </h2>

//         {/* Description */}
//         <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
//           <p>{data.description}</p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="relative pl-4 border-l-2 border-glam-gold"
//           >
//             <p className="font-lora text-lg sm:text-xl text-glam-burgundy italic">
//               “{data.highlight}”
//             </p>
//           </motion.div>
//         </div>

//         {/* Tribe */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.5, duration: 0.4 }}
//           className="flex items-center gap-3 pt-2"
//         >
//           <div className="flex -space-x-2">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 rounded-full bg-gradient-to-br from-glam-rose to-glam-burgundy border-2 border-white"
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-600">
//             50,000+ women trust us
//           </span>
//         </motion.div>
//       </motion.div>

//       {/* IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="lg:col-span-2 relative mt-8 lg:mt-0"
//       >
//         <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
//           <img
//             src={data.image}
//             alt={data.altText}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>

//         {/* Badge – desktop only */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.6, duration: 0.4 }}
//           className="hidden lg:block absolute -bottom-6 -left-6 bg-glam-burgundy text-white p-6 shadow-xl"
//         >
//           <div className="text-center">
//             <div className="font-lora text-3xl font-bold">100%</div>
//             <div className="text-xs tracking-wide">Authentic</div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default PhilosophySection;


import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Minimal Decorative Frame */}
            <div className="absolute -inset-4 border border-pink-100 rounded-2xl -z-10 translate-x-2 translate-y-2 hidden md:block" />
            
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={data.image || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000"}
                alt={data.altText}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Float Badge - Simplified */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl hidden md:flex">
              <span className="text-xl font-bold leading-none">100%</span>
              <span className="text-[8px] uppercase tracking-tighter">Pure</span>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT SIDE */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-pink-500" />
                <span className="text-pink-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                  {data.eyebrow || "The Philosophy"}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                {data.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {data.description}
              </p>

              {/* Quote - Minimalist Style */}
              <div className="relative pl-6 py-2 border-l-2 border-pink-200">
                <p className="font-serif text-xl md:text-2xl text-slate-800 italic leading-snug">
                  “{data.highlight}”
                </p>
              </div>
            </motion.div>

            {/* Social Proof - More Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-widest">
                Trusted by <span className="text-slate-900 font-bold">50k+ Women</span>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;