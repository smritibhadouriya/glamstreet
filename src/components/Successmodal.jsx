import React from "react";
import Sucess from '../assets/success.png'
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative animate-fade-in-up">

        {/* Success Image */}
        <img
          src={Sucess} // replace with your image
          alt="Success"
          className="w-full h-full mx-auto mb-6"
        />

        {/* Heading */}
        <p className="text-xl font-bold text-[#292B97] mb-3">
        Your Response has been submitted, <br/>
        Our team will contact you shortly.
        </p>

        {/* Continue Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[#292B97] to-[#6466B6] text-white py-3 rounded-full hover:brightness-110 transition font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;