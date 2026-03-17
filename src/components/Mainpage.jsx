import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Mainpage = () => {
  return (
    <div className="flex flex-col   bg-white/80">
     <div className="fixed top-0 left-0 max-w-screen z-50">
         <Navbar />
      </div>
      <main className="grow  mt-20">
        <Outlet />
      </main>
      <div  className=" max-w-screen">
          <Footer />
      </div>
      
    </div>
  );
};
export default Mainpage;
