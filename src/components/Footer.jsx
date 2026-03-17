import { Link } from 'react-router-dom';
import { BsShareFill, BsInstagram, BsYoutube, BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // 'success', 'error', 'loading', null
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setSubscriptionStatus(null), 300);
      }, 2000);
      return;
    }

    setSubscriptionStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setIsAnimating(true);
      setEmail('');
      
      // Reset after showing success message
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setSubscriptionStatus(null), 300);
      }, 2000);
    }, 1500);
  };

  return (
    <footer className="bg-rose-400/2 border-t border-[#c2185b]/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Brand Section – Exact match */}
          <div>
            <h3 className="font-playfair text-[#c2185b] text-xl font-semibold tracking-tight">
              The Glam Street
            </h3>
            
            <p className="mt-3 text-gray-600 text-[15px] max-w-xs">
              The Glam Street is your destination for premium, 
              dermatologist-approved skincare and beauty essentials. 
              We believe in transparency, efficacy, and the power of 
              a consistent routine.
            </p>

            {/* Social Icons – Exact pink circles with real icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-9 h-9 bg-[#c2185b]/10 hover:bg-pink-200 rounded-full flex items-center justify-center text-[#c2185b] transition-all"
              >
                <BsShareFill size={19} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#c2185b]/10 hover:bg-pink-200 rounded-full flex items-center justify-center text-[#c2185b] transition-all"
              >
                <BsInstagram size={19} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#c2185b]/10 hover:bg-pink-200 rounded-full flex items-center justify-center text-[#c2185b] transition-all"
              >
                <BsYoutube size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links – Exact list & styling */}
          <div>
            <h4 className="uppercase text-sm font-semibold tracking-[1px] text-gray-900 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { label: 'Shop All', path: '/shop' },
                { label: 'Best Sellers', path: '/shop?badge=best%20seller' },
                { label: 'Beauty Guide', path: '/blogs' },
                { label: 'Ingredient Glossary', path: '/#ingredients' },
                { label: 'Refer a Friend', path: '/' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter – Exact placement, input & button with animation */}
          <div>
            <h4 className="uppercase text-sm font-semibold tracking-[1px] text-gray-900 mb-5">
              Newsletter
            </h4>
            <p className="text-gray-600 text-[15px] mb-6">
              Join our community for exclusive early access and beauty tips.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={`w-full bg-gray-200 border px-4 py-2 rounded-md text-sm placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${
                      subscriptionStatus === 'error' && isAnimating
                        ? 'border-red-500 bg-red-50 animate-shake'
                        : subscriptionStatus === 'success' && isAnimating
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 focus:border-gray-300'
                    }`}
                    disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
                  />
                  
                  {/* Success checkmark animation */}
                  {subscriptionStatus === 'success' && isAnimating && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 animate-bounce-in">
                      <BsCheckCircle size={18} />
                    </div>
                  )}
                  
                  {/* Error icon animation */}
                  {subscriptionStatus === 'error' && isAnimating && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 animate-bounce-in">
                      <BsExclamationCircle size={18} />
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
                  className={`relative overflow-hidden bg-[#c2185b] hover:bg-pink-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                    subscriptionStatus === 'loading' ? 'cursor-wait' : ''
                  } ${subscriptionStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                >
                  <span className={`transition-all duration-300 inline-block ${
                    subscriptionStatus === 'loading' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}>
                    {subscriptionStatus === 'success' ? 'Subscribed!' : 'Join'}
                  </span>
                  
                  {/* Loading spinner */}
                  {subscriptionStatus === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </div>
              
              {/* Status message with slide animation */}
              <div className={`mt-2 text-xs transition-all duration-300 overflow-hidden ${
                subscriptionStatus === 'error' && isAnimating
                  ? 'max-h-10 opacity-100 translate-y-0'
                  : subscriptionStatus === 'success' && isAnimating
                  ? 'max-h-10 opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-2'
              }`}>
                {subscriptionStatus === 'error' && (
                  <p className="text-red-500 animate-fade-in">Please enter a valid email address</p>
                )}
                {subscriptionStatus === 'success' && (
                  <p className="text-green-600 animate-fade-in">Thanks for subscribing! Check your inbox ✨</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar – Exact copyright + links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2024 The Glam Street. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Shipping &amp; Returns</a>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        @keyframes bounce-in {
          0% { transform: translateY(-50%) scale(0); }
          50% { transform: translateY(-50%) scale(1.2); }
          100% { transform: translateY(-50%) scale(1); }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}