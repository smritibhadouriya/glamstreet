// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const Navigation = ({ data }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg'
//             : 'bg-transparent'
//         }`}
//       >
//         <nav className="section-container py-4 lg:py-6">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href="/" className="group">
//               <h1 className={`font-lora text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
//                 isScrolled ? 'text-glam-burgundy' : 'text-white'
//               }`}>
//                 {data.logo}
//               </h1>
//             </a>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               {data.menu.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className={`font-sans font-medium tracking-wide animated-underline transition-colors duration-300 ${
//                     isScrolled ? 'text-glam-charcoal' : 'text-white'
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               {/* Search Icon */}
//               <button
//                 className={`hidden md:block w-10 h-10 rounded-full transition-all duration-300 ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Search"
//               >
//                 <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>

//               {/* Cart Icon */}
//               <button
//                 className={`hidden md:block w-10 h-10 rounded-full transition-all duration-300 relative ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Cart"
//               >
//                 <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-glam-burgundy text-white text-xs rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>

//               {/* CTA Button */}
//               <a
//                 href={data.cta.href}
//                 className={`hidden md:block px-6 py-2.5 font-sans font-medium tracking-wide transition-all duration-300 ${
//                   isScrolled
//                     ? 'bg-glam-burgundy text-white hover:bg-glam-gold hover:text-glam-charcoal'
//                     : 'bg-white text-glam-burgundy hover:bg-glam-gold'
//                 }`}
//               >
//                 {data.cta.label}
//               </a>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className={`lg:hidden w-10 h-10 rounded-full transition-all duration-300 ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Menu"
//               >
//                 <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   {isMobileMenuOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 lg:hidden bg-glam-burgundy"
//           >
//             <div className="h-full overflow-y-auto px-6 py-24 space-y-8">
//               {data.menu.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block font-lora text-3xl font-bold text-white hover:text-glam-gold transition-colors duration-300"
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
              
//               <motion.a
//                 href={data.cta.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="block btn-primary w-full text-center"
//               >
//                 {data.cta.label}
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navigation;


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navigation = ({ data }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Jab scroll karein tab halki shadow aaye (niche wale code ki tarah)
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Mobile menu scroll lock
//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${
//       isScrolled || isMobileMenuOpen ? 'shadow-md' : 'border-b border-transparent'
//     }`}>
//       {/* Top Guard: Mobile par bounce hone par piche ka na dikhe */}
//       <div className="absolute -top-10 left-0 right-0 h-10 bg-white" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 lg:h-20">
          
//           {/* Logo - From Data */}
//           <a href="/" className="flex items-center">
//             <h1 className="font-serif text-xl md:text-2xl font-bold text-glam-burgundy tracking-tighter">
//               {data.logo}<span className="text-pink-500">.</span>
//             </h1>
//           </a>

//           {/* Desktop Navigation - Clean like Unfiltered Money */}
//           <div className="hidden lg:flex items-center gap-8">
//             {data.menu.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-pink-600 transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Right Actions - Search, Cart & Toggle */}
//           <div className="flex items-center gap-2 md:gap-4">
//             {/* Search Button */}
//             <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors" aria-label="Search">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Cart Button */}
//             <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors relative" aria-label="Cart">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
//             </button>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               className="lg:hidden p-2 rounded-lg text-slate-700"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>

//             {/* Desktop CTA */}
//             <a href={data.cta.href} className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-600 transition-all">
//               {data.cta.label}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu - Solid White and Fixed */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto lg:hidden"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="px-6 py-10 space-y-6 pb-24">
//               {data.menu.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   onClick={toggleMenu}
//                   className="block text-2xl font-serif italic text-slate-900 border-b border-slate-50 pb-4"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <a
//                 href={data.cta.href}
//                 className="block w-full py-4 bg-pink-600 text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs"
//               >
//                 {data.cta.label}
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navigation;

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navigation = ({ data }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // 10px scroll hote hi state change
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
//   };

//   return (
//     <>
//       {/* Main Nav */}
//       <nav 
//         className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
//           isScrolled || isMobileMenuOpen 
//             ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
//             : 'bg-transparent py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-10">
//           <div className="flex justify-between items-center h-14 md:h-16">
            
//             {/* Logo */}
//             <a href="/" className="relative z-[110]">
//               <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-300 ${
//                 !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-900'
//               }`}>
//                 {data.logo}<span className="text-pink-500">.</span>
//               </h1>
//             </a>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-10">
//               {data.menu.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
//                     isScrolled ? 'text-slate-600 hover:text-pink-600' : 'text-white/80 hover:text-white'
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>

//             {/* Icons & Toggle */}
//             <div className="flex items-center gap-3">
//               <button className={`p-2 transition-colors ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-700'}`}>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>

//               {/* Mobile Menu Toggle - Unique Design */}
//               <button
//                 className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
//                 onClick={toggleMenu}
//               >
//                 <span className={`h-0.5 w-6 transition-all duration-300 ${
//                   isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-slate-900' : (!isScrolled ? 'bg-white' : 'bg-slate-900')
//                 }`} />
//                 <span className={`h-0.5 w-6 transition-all duration-300 ${
//                   isMobileMenuOpen ? 'opacity-0' : (!isScrolled ? 'bg-white' : 'bg-slate-900')
//                 }`} />
//                 <span className={`h-0.5 w-6 transition-all duration-300 ${
//                   isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-slate-900' : (!isScrolled ? 'bg-white' : 'bg-slate-900')
//                 }`} />
//               </button>

//               {/* Desktop CTA */}
//               <a href={data.cta.href} className="hidden md:block px-7 py-2.5 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-500/20">
//                 {data.cta.label}
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Fullscreen Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-0 bg-white z-[100] flex flex-col justify-center px-10"
//             >
//               <div className="space-y-8">
//                 {data.menu.map((item, index) => (
//                   <motion.a
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     key={index}
//                     href={item.href}
//                     onClick={toggleMenu}
//                     className="block text-4xl font-serif italic text-slate-900"
//                   >
//                     {item.label}
//                   </motion.a>
//                 ))}
//               </div>
              
//               <div className="absolute bottom-12 left-10 right-10">
//                 <a href={data.cta.href} className="block w-full py-5 bg-slate-900 text-white text-center rounded-2xl font-bold uppercase tracking-[0.2em] text-xs">
//                   {data.cta.label}
//                 </a>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// };

// export default Navigation;

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navigation = ({ data }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
//       isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
//     }`}>
//       {/* Top Guard */}
//       <div className="absolute -top-10 left-0 right-0 h-10 bg-white" />

//       <div className="max-w-7xl mx-auto px-5 sm:px-10">
//         <div className="flex justify-between items-center h-16 lg:h-20">
          
//           {/* Logo */}
//           <a href="/" className="relative z-[120]">
//             <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-tighter transition-colors ${
//               !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-900'
//             }`}>
//               {data.logo}<span className="text-pink-500">.</span>
//             </h1>
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-10">
//             {data.menu.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
//                   isScrolled ? 'text-slate-700 hover:text-pink-600' : 'text-white/80 hover:text-white'
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-3 relative z-[120]">
//             <button className={`p-2 transition-colors ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-700'}`}>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               className="lg:hidden p-2 text-slate-700"
//               onClick={toggleMenu}
//             >
//               <div className="w-6 flex flex-col items-end gap-1.5">
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2 bg-slate-900' : `w-6 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0' : `w-4 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-slate-900' : `w-5 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//               </div>
//             </button>

//             {/* Desktop CTA - Now Pink */}
//             <a href={data.cta.href} className="hidden md:block px-6 py-2.5 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-500/20">
//               {data.cta.label}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* --- Mobile Menu Overlay --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-[110] lg:hidden flex flex-col"
//           >
//             {/* Luxe Decorative Elements */}
//             <div className="absolute top-20 right-[-10%] w-64 h-64 bg-pink-100/40 rounded-full blur-[80px] -z-10" />
//             <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-rose-50/50 rounded-full blur-[100px] -z-10" />

//             <div className="flex-grow flex flex-col justify-center px-8 pt-16">
//               <div className="space-y-6">
//                 {data.menu.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="border-b border-gray-50 pb-5"
//                   >
//                     <a
//                       href={item.href}
//                       onClick={toggleMenu}
//                       className="block text-4xl font-serif italic text-slate-900 active:text-pink-600 transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mobile CTA Button - Vibrant Pink */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="mt-12"
//               >
//                 <a 
//                   href={data.cta.href} 
//                   className="block w-full py-5 bg-pink-600 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-pink-200"
//                 >
//                   {data.cta.label}
//                 </a>
//                 <p className="text-center mt-10 text-[9px] text-slate-400 uppercase tracking-[0.4em]">
//                   Elevating Beauty &copy; 2026
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navigation;


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navigation = ({ data }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.position = 'fixed';
//       document.body.style.width = '100%';
//     } else {
//       document.body.style.overflow = 'unset';
//       document.body.style.position = 'unset';
//       document.body.style.width = 'auto';
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
//       isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
//     }`}>
//       {/* Top Guard */}
//       <div className="absolute -top-10 left-0 right-0 h-10 bg-white" />

//       <div className="max-w-7xl mx-auto px-5 sm:px-10">
//         <div className="flex justify-between items-center h-16 lg:h-20">
          
//           {/* Logo */}
//           <a href="/" className="relative z-[120]">
//             <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-tighter transition-colors ${
//               !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-900'
//             }`}>
//               {data.logo}<span className="text-pink-500">.</span>
//             </h1>
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-10">
//             {data.menu.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
//                   isScrolled ? 'text-slate-700 hover:text-pink-600' : 'text-white/80 hover:text-white'
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-3 relative z-[120]">
//             <button className={`p-2 transition-colors ${!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-700'}`}>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               className="lg:hidden p-2 text-slate-700"
//               onClick={toggleMenu}
//             >
//               <div className="w-6 flex flex-col items-end gap-1.5">
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2 bg-slate-900' : `w-6 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0' : `w-4 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//                 <span className={`h-0.5 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-slate-900' : `w-5 ${!isScrolled ? 'bg-white' : 'bg-slate-900'}`}`} />
//               </div>
//             </button>

//             {/* Desktop CTA - Pink */}
//             <a href={data.cta.href} className="hidden md:block px-6 py-2.5 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-500/20">
//               {data.cta.label}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* --- Mobile Menu Overlay --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 h-screen bg-white z-[110] lg:hidden overflow-hidden"
//           >
//             {/* Luxe Decorative Elements */}
//             <div className="absolute top-20 right-[-10%] w-64 h-64 bg-pink-100/40 rounded-full blur-[80px] pointer-events-none" />
//             <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-rose-50/50 rounded-full blur-[100px] pointer-events-none" />

//             {/* Content Container - Perfectly Centered, No Scroll */}
//             <div className="h-full flex flex-col justify-center items-center px-6 sm:px-8">
//               {/* Menu Items - Compact & Centered */}
//               <div className="flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 w-full max-w-md">
//                 {data.menu.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.08 }}
//                     className="w-full text-center border-b border-gray-100 pb-1.5 sm:pb-2"
//                   >
//                     <a
//                       href={item.href}
//                       onClick={toggleMenu}
//                       className="block text-xl sm:text-2xl font-serif italic text-slate-900 hover:text-pink-600 active:text-pink-600 transition-colors leading-tight py-1.5 sm:py-2"
//                     >
//                       {item.label}
//                     </a>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mobile CTA Button */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="w-full max-w-md mt-8 sm:mt-10"
//               >
//                 <a 
//                   href={data.cta.href} 
//                   onClick={toggleMenu}
//                   className="block w-full py-3.5 sm:py-4 bg-pink-600 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-pink-200 active:scale-95 transition-transform"
//                 >
//                   {data.cta.label}
//                 </a>
//                 <p className="text-center mt-5 sm:mt-6 text-[9px] text-slate-400 uppercase tracking-[0.3em]">
//                   Elevating Beauty &copy; 2026
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navigation;


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';

/**
 * Luxury Navigation - Fixed height, no auto-hide, always visible
 * Simple white navbar that stays constant
 */
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Routines', href: '/routines' },
    { label: 'Community', href: '/community' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-md">
      {/* Top Guard - prevents content showing above navbar */}
      <div className="absolute -top-10 left-0 right-0 h-10 bg-white" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <a href="/" className="relative z-[120]">
            <h1 className="font-display text-xl md:text-2xl font-bold tracking-tighter text-slate-900">
              The GlamStreet<span className="text-pink-500">.</span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-pink-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-[120]">
            {/* Search Icon */}
            <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 transition-all duration-300 rounded-full bg-slate-900 ${
                  isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`} />
                <span className={`h-0.5 transition-all duration-300 rounded-full bg-slate-900 ${
                  isMobileMenuOpen ? 'opacity-0' : 'w-4'
                }`} />
                <span className={`h-0.5 transition-all duration-300 rounded-full bg-slate-900 ${
                  isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                }`} />
              </div>
            </button>

            {/* Desktop CTA - Pink */}
            <a 
              href="#shop" 
              className="hidden md:block px-6 py-2.5 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-500/20"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-white z-[110] lg:hidden overflow-hidden"
          >
            {/* Luxe Decorative Elements */}
            <div className="absolute top-20 right-[-10%] w-64 h-64 bg-pink-100/40 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-rose-50/50 rounded-full blur-[100px] pointer-events-none" />

            {/* Content Container - Perfectly Centered */}
            <div className="h-full flex flex-col justify-center items-center px-6 sm:px-8">
              {/* Menu Items - Compact & Centered */}
              <div className="flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 w-full max-w-md">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="w-full text-center border-b border-gray-100 pb-1.5 sm:pb-2"
                  >
                    <a
                      href={item.href}
                      onClick={toggleMenu}
                      className="block text-xl sm:text-2xl font-display italic text-slate-900 hover:text-pink-600 active:text-pink-600 transition-colors leading-tight py-1.5 sm:py-2"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-md mt-8 sm:mt-10"
              >
                <a 
                  href="#shop" 
                  onClick={toggleMenu}
                  className="block w-full py-3.5 sm:py-4 bg-pink-600 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-pink-200 active:scale-95 transition-transform"
                >
                  Shop Now
                </a>
                <p className="text-center mt-5 sm:mt-6 text-[9px] text-slate-400 uppercase tracking-[0.3em]">
                  Elevating Beauty © 2026
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;