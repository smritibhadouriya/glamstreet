// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const CommunitySection = ({ data }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="relative py-20 lg:py-32 bg-gradient-glam overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-glam-rose rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glam-gold/40 rounded-full blur-3xl" />
//       </div>

//       <div className="section-container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-burgundy/10 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
//             Community
//           </span>
//           <h2 className="font-lora text-4xl sm:text-5xl lg:text-6xl font-bold text-glam-charcoal mb-4">
//             {data.title}
//           </h2>
//           <p className="text-xl text-gray-700 font-sans max-w-2xl mx-auto">
//             {data.subtitle}
//           </p>
//           <div className="w-24 h-1 bg-glam-gold mx-auto mt-6" />
//         </motion.div>

//         {/* Testimonials - Zigzag Layout */}
//         <div className="space-y-24 lg:space-y-32">
//           {data.testimonials.map((testimonial, index) => (
//             <TestimonialCard
//               key={index}
//               testimonial={testimonial}
//               index={index}
//               isInView={isInView}
//               reverse={index % 2 !== 0}
//             />
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="text-center mt-20"
//         >
//           <div className="bg-white p-10 shadow-2xl max-w-3xl mx-auto">
//             <h3 className="font-lora text-3xl font-bold text-glam-charcoal mb-4">
//               Share Your Glow Story
//             </h3>
//             <p className="text-gray-700 text-lg mb-8">
//               Your journey inspires others. Join thousands of women celebrating their beauty rituals.
//             </p>
//             <a href="/community" className="btn-primary">
//               Join The Tribe
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const TestimonialCard = ({ testimonial, index, isInView, reverse }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.3, duration: 0.8 }}
//       className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
//         reverse ? 'lg:direction-rtl' : ''
//       }`}
//     >
//       {/* Image Side */}
//       <motion.div
//         initial={{ opacity: 0, x: reverse ? 50 : -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ delay: index * 0.3 + 0.2, duration: 0.8 }}
//         className={`relative ${reverse ? 'lg:order-2' : ''}`}
//       >
//         {/* Image Container */}
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
          
//           {/* Gold Frame */}
//           <div className="absolute inset-0 border-8 border-glam-gold/0 hover:border-glam-gold/50 transition-all duration-500" />
          
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-glam-charcoal/40 to-transparent" />
//         </div>

//         {/* Floating Product Badge */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
//           className={`absolute -bottom-6 ${
//             reverse ? '-left-6' : '-right-6'
//           } bg-white p-6 shadow-2xl max-w-xs`}
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-3 h-3 bg-glam-gold rounded-full" />
//             <span className="text-sm font-sans font-medium text-glam-charcoal">
//               {testimonial.product}
//             </span>
//           </div>
//         </motion.div>

//         {/* Decorative Circle */}
//         <div 
//           className={`absolute -top-8 ${
//             reverse ? '-left-8' : '-right-8'
//           } w-32 h-32 bg-glam-rose/30 rounded-full blur-2xl`}
//         />
//       </motion.div>

//       {/* Content Side */}
//       <motion.div
//         initial={{ opacity: 0, x: reverse ? -50 : 50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ delay: index * 0.3 + 0.4, duration: 0.8 }}
//         className={`${reverse ? 'lg:order-1' : ''} space-y-6`}
//       >
//         {/* Quote Icon */}
//         <svg 
//           className="w-16 h-16 text-glam-gold/30" 
//           fill="currentColor" 
//           viewBox="0 0 32 32"
//         >
//           <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
//         </svg>

//         {/* Quote Text */}
//         <blockquote className="space-y-4">
//           <p className="font-lora text-2xl sm:text-3xl lg:text-4xl font-medium text-glam-charcoal leading-relaxed italic">
//             "{testimonial.quote}"
//           </p>
//         </blockquote>

//         {/* Author Info */}
//         <div className="flex items-center gap-4 pt-6 border-t border-glam-gold/30">
//           <div className="w-16 h-16 rounded-full bg-gradient-to-br from-glam-rose to-glam-burgundy" />
//           <div>
//             <div className="font-sans font-bold text-glam-charcoal text-lg">
//               {testimonial.name}
//             </div>
//             <div className="text-gray-600 text-sm flex items-center gap-2">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//               </svg>
//               {testimonial.location}
//             </div>
//           </div>
//         </div>

//         {/* Rating Stars */}
//         <div className="flex gap-1 pt-2">
//           {[...Array(5)].map((_, i) => (
//             <svg
//               key={i}
//               className="w-6 h-6 text-glam-gold fill-current"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           ))}
//         </div>

//         {/* Hashtag */}
//         <div className="pt-4">
//           <span className="inline-block px-4 py-2 bg-glam-burgundy/10 text-glam-burgundy font-sans text-sm tracking-wider">
//             #TheGlamStreetTribe
//           </span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CommunitySection;


import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CommunitySection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header - Lean & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
            Our Community
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900 italic mb-6">
            Real People. <span className="font-normal not-italic">Real Glow.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry Style for Laptop, Scrollable for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {data.testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA - Integrated & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 md:p-12 bg-[#FBFBFC] rounded-[3rem] border border-slate-100 max-w-3xl w-full">
            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4 italic">
              Want to be featured?
            </h3>
            <p className="text-slate-500 text-sm mb-8 tracking-wide">
              Tag us <span className="text-pink-500 font-bold">#TheGlamStreetTribe</span> on Instagram
            </p>
            <a href="/community" className="px-10 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-pink-600 transition-all shadow-xl shadow-pink-100">
              Join The Tribe
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative flex flex-col bg-white rounded-[2.5rem] p-6 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500"
    >
      {/* User Info - Top */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-100 p-0.5">
          <img src={testimonial.userImage || testimonial.image} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">{testimonial.name}</h4>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">{testimonial.location}</p>
        </div>
        <div className="ml-auto flex text-pink-400 text-[10px]">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
      </div>

      {/* Quote Text */}
      <div className="relative mb-6">
        <span className="absolute -top-4 -left-2 text-pink-100 text-6xl font-serif opacity-50">“</span>
        <p className="relative z-10 text-slate-600 text-[15px] leading-relaxed italic font-light">
          {testimonial.quote}
        </p>
      </div>

      {/* Image / Product Badge Tag */}
      <div className="mt-auto relative rounded-2xl overflow-hidden aspect-[4/3]">
        <img 
          src={testimonial.image} 
          alt="Review Image" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              Used: {testimonial.product}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommunitySection;