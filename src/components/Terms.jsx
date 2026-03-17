import React, { useEffect } from "react";
import { FaFileSignature } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background circles for design */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F16D34]/10 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Main card */}
      <div className="relative max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100 z-10 hover:shadow-2xl transition-shadow duration-300">
         <h1 className="text-4xl text-center  font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">
          Terms and Conditions
        </h1>
       <p className="text-xl  text-gray-800 mb-10 max-w-4xl mx-auto ">
          Welcome to <span className="font-semibold text-[#F16D34]">Zentrix</span>.  
          By accessing or using our services, you agree to be bound by these Terms and Conditions.  
          Please read them carefully.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <FaFileSignature className="w-6 h-6 text-[#F16D34]" />
            Acceptance of Terms
          </h2>
         <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto ">
            By using our website or services, you agree to comply with and be bound by these Terms.  
            If you do not agree, please refrain from using our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
         <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <GiGlobe className="w-6 h-6 text-[#F16D34]" />
            Service Usage
          </h2>
         <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto ">
            Our services are provided for your personal and business use.  
            You may not exploit them for any illegal, harmful, or unauthorized purposes.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
         <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <FiAlertTriangle className="w-6 h-6 text-red-500" />
            Limitation of Liability
          </h2>
         <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto">
            Zentrix shall not be held liable for any indirect, incidental, or consequential damages  
            that may arise from the use or inability to use our services.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-gray-500 mt-10 text-center text-sm italic">
          📅 Last updated: <span className="font-medium">August 22, 2025</span>.  
          For any questions, contact us at{" "}
          <Link
            href="mailto:support@zentrix.com"
            className="text-[#F16D34] underline transition-colors duration-200"
          >
            support@zentrix.com
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default Terms;