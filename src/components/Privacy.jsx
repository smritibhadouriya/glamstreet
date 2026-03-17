import React, { useEffect } from "react";
import { BsShieldCheck  } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          Privacy Policy
        </h1>
       <p className="text-xl  text-gray-800 mb-10 max-w-4xl mx-auto ">
          At <span className="font-semibold text-[#F16D34]">Zentrix</span>, we value your privacy.  
          This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
         <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <FiFileText className="w-6 h-6 text-[#F16D34]" />
            Information Collection
          </h2>
         <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto ">
            We collect personal information such as your name, email, and usage data 
            when you interact with our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <BsShieldCheck  className="w-6 h-6 text-green-500" />
             Use of Information
          </h2>
        <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto ">
            Your information is used to provide and improve our services. 
            With your consent, it may also be used for marketing communications.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
         <h2 className=" flex items-center gap-2 text-xl  font-medium  border-b border-gray-200 pb-2 text-gray-800 leading-tight ">
            <BiLock className="w-6 h-6 text-purple-500" />
            Data Security
          </h2>
         <p className="text-lg  text-gray-800 mt-4 max-w-4xl mx-auto">
            We implement strict measures to safeguard your data. However, 
            please note that no online transmission can be guaranteed as 100% secure.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-gray-500 mt-10 text-center text-sm italic">
          📅 Last updated: <span className="font-medium">August 22, 2025</span>.  
          For more details, contact us at{" "}
          <Link
            href="mailto:privacy@zentrix.com"
            className="text-[#F16D34] underline transition-colors duration-200"
          >
            privacy@zentrix.com
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
