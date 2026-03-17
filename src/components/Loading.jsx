import React from 'react';
import Logo from '../assets/onlylogo.png'; // Replace with the path to your image
const Loading = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white animate-fadeIn"
      role="status"
      aria-label="Loading"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Circular Image (Placeholder, replace with actual image) */}
        <img
          src={Logo} // Replace with your image URL
          alt="Loading indicator"
          className="w-16 h-16  object-cover"
        />
        {/* Spinning Border */}
        <div className="absolute w-full h-full border-4 border-t-transparent border-blue-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;