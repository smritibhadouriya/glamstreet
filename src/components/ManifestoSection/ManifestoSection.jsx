// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// const ManifestoSection = ({ data }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   // Parallax effects
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-glam-burgundy via-glam-charcoal to-glam-burgundy"
//     >
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute inset-0 opacity-10"
//           animate={{
//             backgroundPosition: ['0% 0%', '100% 100%'],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'linear'
//           }}
//           style={{
//             backgroundImage: 'radial-gradient(circle, #D4AF37 2px, transparent 2px)',
//             backgroundSize: '50px 50px'
//           }}
//         />
//       </div>

//       {/* Floating Decorative Elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-32 h-32 border border-glam-gold/30 rounded-full"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-48 h-48 border border-glam-gold/20 rounded-full"
//         animate={{
//           y: [0, 20, 0],
//           rotate: [360, 180, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />

//       {/* Content Container */}
//       <motion.div
//         style={{ scale, opacity }}
//         className="section-container relative z-10"
//       >
//         <div className="max-w-5xl mx-auto text-center space-y-12">
//           {/* Decorative Top Line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="w-full h-px bg-gradient-to-r from-transparent via-glam-gold to-transparent"
//           />

//           {/* Main Quote */}
//           <motion.blockquote
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             {/* Opening Quote Mark */}
//             <motion.span
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 0.2, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="absolute -top-8 -left-4 text-9xl font-lora text-glam-gold leading-none"
//             >
//               "
//             </motion.span>

//             <h2 className="font-lora text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 px-4">
//               {data.quote.split(' ').map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
//                   className="inline-block mr-4"
//                 >
//                   {word === 'scrolling.' || word === 'glowing.' ? (
//                     <span className="gradient-text bg-gradient-to-r from-glam-gold to-glam-rose bg-clip-text text-transparent">
//                       {word}
//                     </span>
//                   ) : (
//                     word
//                   )}
//                 </motion.span>
//               ))}
//             </h2>

//             {/* Closing Quote Mark */}
//             <motion.span
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 0.2, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="absolute -bottom-8 -right-4 text-9xl font-lora text-glam-gold leading-none transform rotate-180"
//             >
//               "
//             </motion.span>
//           </motion.blockquote>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="text-xl sm:text-2xl text-white/80 font-sans max-w-3xl mx-auto leading-relaxed"
//           >
//             {data.description}
//           </motion.p>

//           {/* Decorative Middle Line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//             className="w-24 h-1 bg-glam-gold mx-auto"
//           />

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 1 }}
//           >
//             <a
//               href={data.cta.href}
//               className="inline-flex items-center gap-3 px-12 py-5 bg-glam-gold text-glam-charcoal font-sans font-bold text-lg tracking-wide hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-glam-gold/50 group"
//             >
//               <span>{data.cta.label}</span>
//               <motion.svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 animate={{
//                   x: [0, 5, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </motion.svg>
//             </a>
//           </motion.div>

//           {/* Social Proof Pills */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 1.2 }}
//             className="flex flex-wrap items-center justify-center gap-4 pt-8"
//           >
//             {[
//               { icon: '✨', text: '50K+ Women' },
//               { icon: '💖', text: 'Self-Love Community' },
//               { icon: '🌟', text: '100% Authentic' }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
//                 className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
//               >
//                 <span className="text-2xl">{item.icon}</span>
//                 <span className="text-white font-sans text-sm tracking-wide">{item.text}</span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Decorative Bottom Line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
//             className="w-full h-px bg-gradient-to-r from-transparent via-glam-gold to-transparent pt-12"
//           />
//         </div>
//       </motion.div>

//       {/* Gradient Orbs */}
//       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-glam-gold/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glam-rose/10 rounded-full blur-3xl" />
//     </section>
//   );
// };

// export default ManifestoSection;


import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const ManifestoSection = ({ data }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle movement
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative py-12 md:py-20 overflow-hidden bg-[#FFF9FA]" 
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-50/50 rounded-full blur-[80px]" />
      </div>

      <motion.div 
        style={{ y: smoothY, opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-6"
          >
            <span className="text-pink-400 font-bold uppercase tracking-[0.4em] text-[9px]">
              Our Manifesto
            </span>
          </motion.div>

          {/* Quote - Simple & Strong */}
          <h2 className="font-serif text-3xl md:text-5xl text-slate-800 leading-tight mb-10 italic">
            “{data.quote.split(' ').map((word, i) => (
              <span key={i} className={`inline-block mr-2 ${word.toLowerCase().includes('glow') ? 'text-pink-500 not-italic font-bold' : ''}`}>
                {word}
              </span>
            ))}”
          </h2>

          {/* Magnetic Button - Interaction without the jump */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mb-16"
          >
            <a 
              href={data.cta.href}
              className="group relative px-10 py-4 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-full overflow-hidden inline-flex items-center gap-3 transition-shadow hover:shadow-lg hover:shadow-pink-200/50"
            >
              <span className="relative z-10">{data.cta.label}</span>
              <div className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Social Proof Badges - Fixed (No jumping) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-10 border-t border-pink-100/60">
            {[
              { label: '50K+', sub: 'Community' },
              { label: '100%', sub: 'Vegan' },
              { label: 'Clean', sub: 'Beauty' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col items-center cursor-default"
              >
                {/* Fixed position badge, only color changes on hover */}
                <span className="text-xl md:text-2xl font-serif text-slate-800 group-hover:text-pink-500 transition-colors duration-300 font-bold">
                  {item.label}
                </span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ManifestoSection;