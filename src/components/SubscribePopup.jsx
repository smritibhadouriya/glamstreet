import React, { useState } from "react";
import useSubscribe from "./useSubscribe.js";
const SubscribePopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const { subscribe, loading, success } = useSubscribe();
  const handleSubmit = async (e) => {
  e.preventDefault();
  await subscribe(email);
  setEmail("");
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm  flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Stay Updated!
        </h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Subscribe to our newsletter and never miss an update.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#292B97]  mb-4 transition-all"
            required
          />
          <button
            type="submit"
  disabled={loading}
            className="w-full bg-[#292B97]  text-white py-3 rounded-full shadow-md hover:opacity-90 transition-all"
          >
           {loading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>
              {success && (
  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center animate-fadeIn">
  You have successfully subscribed!
  </div>
)}

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
    
  );
};

export default SubscribePopup;
