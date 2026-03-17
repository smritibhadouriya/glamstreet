import { Link } from 'react-router-dom';
import { BsShareFill, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function Footer() {
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
                { label: 'Best Sellers', path: '/shop' },
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

          {/* Newsletter – Exact placement, input & button */}
          <div>
            <h4 className="uppercase text-sm font-semibold tracking-[1px] text-gray-900 mb-5">
              Newsletter
            </h4>
            <p className="text-gray-600 text-[15px] mb-6">
              Join our community for exclusive early access and beauty tips.
            </p>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-gray-200 border border-gray-200 focus:border-gray-300 px-4 py-2 rounded-md text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <button className="bg-[#c2185b] hover:bg-pink-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-all">
                Join
              </button>
            </div>
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
    </footer>
  );
}