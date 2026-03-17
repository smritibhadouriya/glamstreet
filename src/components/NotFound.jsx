import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#292B97] via-[#6466B6] to-[#9394f8] px-6">

      {/* Soft Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 text-center text-white max-w-2xl">

        {/* 404 Number */}
        <h1 className="text-[120px] font-bold leading-none tracking-tight drop-shadow-lg">
          404
        </h1>

       
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-3">
          Oops! This Page Went Missing
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-8 text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-white text-[#292B97] font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
    
  );
  
};


export default NotFound;