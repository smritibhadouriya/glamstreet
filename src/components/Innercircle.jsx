import { useRef, useEffect, useState } from "react";

function useReveal(ref, threshold = 0.12) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          el.classList.add('visible'); 
          obs.disconnect(); 
        } 
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
}

export const InnerCircleSection = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  
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
        setTimeout(() => setSubscriptionStatus(null), 3000);
      }, 2500);
    }, 1500);
  };

  return (
    <section className="flex items-center justify-center bg-white">
      <div ref={sectionRef} className="reveal-section relative w-full max-w-3xl md:rounded-2xl overflow-hidden px-10 py-16 flex flex-col items-center text-center" style={{ background: "radial-gradient(ellipse at center, #3d0a1e 0%, #1a0610 60%, #0f0409 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(220,50,100,0.18) 0%, transparent 80%)" }}/>
        
        {/* Animated Success/Error Icons */}
        <div className="relative mb-5">
          {subscriptionStatus === 'success' && isAnimating ? (
            <div className="animate-bounce-in">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffff" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeLinecap="round"/>
              </svg>
            </div>
          ) : subscriptionStatus === 'error' && isAnimating ? (
            <div className="animate-bounce-in">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeLinecap="round"/>
              </svg>
            </div>
          ) : (
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <rect x="1" y="1" width="38" height="30" rx="4" stroke="#f0436a" strokeWidth="2.5"/>
              <path d="M1 7L20 19L39 7" stroke="#f0436a" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        
        <h2 className="relative text-white font-semibold text-2xl md:text-3xl mb-3 tracking-tight font-playfair">
          {subscriptionStatus === 'success' && isAnimating ? 'Thank You!' : 'Join the Inner Circle'}
        </h2>
        
        <p className="relative text-gray-400 text-base max-w-lg mb-8 leading-relaxed">
          {subscriptionStatus === 'success' && isAnimating 
            ? 'You\'re now part of our exclusive community. Check your inbox for a special gift! ✨'
            : 'Subscribe for early access to new collections, botanical insights, and exclusive invitations.'}
        </p>
        
        <form onSubmit={handleSubscribe} className="relative flex w-full max-w-xl gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`w-full rounded-xl px-5 py-4 text-white placeholder-gray-500 text-sm outline-none border transition-all duration-300 ${
                subscriptionStatus === 'error' && isAnimating
                  ? 'border-red-500 animate-shake bg-red-900/20'
                  : subscriptionStatus === 'success' && isAnimating
                  ? 'border-green-500 bg-green-900/20'
                  : 'border-white/10 focus:border-pink-500/50'
              }`}
              style={{ background: "rgba(255,255,255,0.06)" }}
              disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
            />
            
            {/* Success Checkmark */}
            {subscriptionStatus === 'success' && isAnimating && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 animate-bounce-in">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17L4 12" strokeLinecap="round"/>
                </svg>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
            className={`relative overflow-hidden rounded-xl px-7 py-4 font-semibold text-white text-sm whitespace-nowrap transition-all duration-300 ${
              subscriptionStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : ''
            } hover:brightness-110 active:scale-95`}
            style={subscriptionStatus !== 'success' ? { 
              background: "linear-gradient(135deg, #f0436a 0%, #e0255a 100%)",
              boxShadow: "0 4px 20px rgba(240,67,106,0.35)"
            } : {}}
          >
            <span className={`transition-all duration-300 inline-block ${
              subscriptionStatus === 'loading' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}>
              {subscriptionStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
            </span>
            
            {/* Loading Spinner */}
            {subscriptionStatus === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>
        
        {/* Error Message */}
        <div className={`relative overflow-hidden transition-all duration-300 ${
          subscriptionStatus === 'error' && isAnimating
            ? 'max-h-10 opacity-100 mt-3'
            : 'max-h-0 opacity-0'
        }`}>
          <p className="text-red-400 text-xs animate-fade-in">Please enter a valid email address</p>
        </div>
        
        {/* Success Extra Message */}
        {subscriptionStatus === 'success' && isAnimating && (
          <p className="relative text-gray-400 text-xs mt-5 animate-fade-in">
            Check your inbox for the confirmation email ✨
          </p>
        )}
        
        {/* Terms Text - Hide during success animation for cleaner look */}
        {!(subscriptionStatus === 'success' && isAnimating) && (
          <p className="relative text-gray-600 text-xs mt-5">
            By subscribing, you agree to our <span className="underline cursor-pointer hover:text-gray-400">Terms of Service</span> and <span className="underline cursor-pointer hover:text-gray-400">Privacy Policy</span>.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
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
    </section>
  );
};