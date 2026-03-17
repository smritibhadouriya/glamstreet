// import { motion } from 'framer-motion';

// const Footer = ({ data }) => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-glam-charcoal text-white overflow-hidden">
//       {/* Decorative Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-glam-gold rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-glam-rose rounded-full blur-3xl" />
//       </div>

//       {/* Main Footer Content */}
//       <div className="section-container relative z-10 py-16 lg:py-20">
//         {/* Top Section */}
//         <div className="grid lg:grid-cols-12 gap-12 mb-16">
//           {/* Brand Column */}
//           <div className="lg:col-span-4 space-y-6">
//             <h2 className="font-lora text-3xl font-bold text-white">
//               The Glam Street
//             </h2>
//             <p className="text-white/70 font-sans leading-relaxed max-w-sm">
//               {data.tagline}
//             </p>
            
//             {/* Social Links */}
//             <div className="flex gap-4">
//               {data.social.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-12 h-12 rounded-full bg-white/10 hover:bg-glam-gold flex items-center justify-center transition-all duration-300"
//                   aria-label={item.platform}
//                 >
//                   <SocialIcon platform={item.icon} />
//                 </motion.a>
//               ))}
//             </div>

//             {/* Newsletter */}
//             <div className="pt-6">
//               <h3 className="font-sans text-sm tracking-widest uppercase text-glam-gold mb-3">
//                 Join Our Newsletter
//               </h3>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-glam-gold focus:outline-none transition-colors"
//                 />
//                 <button className="px-6 py-2.5 bg-glam-gold text-glam-charcoal font-sans font-medium hover:bg-white transition-colors">
//                   Join
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Link Columns */}
//           <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {data.columns.map((column, index) => (
//               <div key={index}>
//                 <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-glam-gold mb-6">
//                   {column.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {column.links.map((link, linkIndex) => (
//                     <li key={linkIndex}>
//                       <a
//                         href={link.href}
//                         className="text-white/70 hover:text-glam-gold transition-colors duration-300 font-sans text-sm animated-underline inline-block"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-white/10 mb-8" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
//           {/* Copyright */}
//           <p className="text-white/50 font-sans">
//             {data.legal.replace('2026', currentYear)}
//           </p>

//           {/* Legal Links */}
//           <div className="flex flex-wrap justify-center gap-6">
//             {data.policies.map((policy, index) => (
//               <a
//                 key={index}
//                 href={policy.href}
//                 className="text-white/50 hover:text-glam-gold transition-colors duration-300 font-sans"
//               >
//                 {policy.label}
//               </a>
//             ))}
//           </div>

//           {/* Trust Badges */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 text-white/50">
//               <svg className="w-5 h-5 text-glam-gold" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span className="text-xs">100% Secure</span>
//             </div>
//             <div className="flex items-center gap-2 text-white/50">
//               <svg className="w-5 h-5 text-glam-gold" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
//               </svg>
//               <span className="text-xs">Authentic</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Bottom Line */}
//       <div className="h-1 bg-gradient-to-r from-glam-burgundy via-glam-gold to-glam-burgundy" />
//     </footer>
//   );
// };

// const SocialIcon = ({ platform }) => {
//   const icons = {
//     instagram: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//       </svg>
//     ),
//     facebook: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//       </svg>
//     ),
//     youtube: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//       </svg>
//     ),
//     pinterest: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
//       </svg>
//     )
//   };

//   return icons[platform] || null;
// };

// export default Footer;

import { motion } from 'framer-motion';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121418] text-white overflow-hidden border-t border-slate-800">
      {/* Subtle Glows - No more harsh colors */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-pink-900/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl italic text-white tracking-tight">
              The Glam Street<span className="text-pink-500">.</span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm text-sm md:text-base">
              {data.tagline || "Elevating your daily ritual with conscious beauty and effortless glow."}
            </p>
            
            {/* Social Icons - Clean & Minimal */}
            <div className="flex gap-4 pt-2">
              {data.social.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -3, color: '#ec4899' }}
                  className="text-slate-400 hover:text-pink-500 transition-all duration-300"
                  aria-label={item.platform}
                >
                  <SocialIcon platform={item.platform.toLowerCase()} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter - Glassmorphism style */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
            <h3 className="font-serif text-xl italic mb-2">Join the Glow Club</h3>
            <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest font-bold">Get 15% off your first order</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none transition-all text-sm"
              />
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-pink-500 hover:text-white transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 py-12 border-y border-white/5">
          {data.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-pink-500 mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-light block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal & Trust */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-500 text-[11px] font-medium tracking-wide">
              © {currentYear} THE GLAM STREET. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {data.policies.map((policy, index) => (
                <a key={index} href={policy.href} className="text-slate-500 hover:text-white text-[11px] transition-colors">
                  {policy.label}
                </a>
              ))}
            </div>
          </div>

          {/* Minimal Trust Badges */}
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-tighter">SECURE PAYMENT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-tighter">CRUELTY FREE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
    </footer>
  );
};

// Social Icons Component (Simplified)
const SocialIcon = ({ platform }) => {
  const icons = {
    instagram: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    facebook: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    youtube: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    pinterest: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
  };
  return icons[platform] || null;
};

export default Footer;