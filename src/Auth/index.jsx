import React from 'react'; // Add this import
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hashtoscroll from '../utils/Scrolltohash.jsx'

// Lazy-loaded page components (code-splitting)
const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const ProductDetail = lazy(() => import('../pages/ProductDetail.jsx'));
const About = lazy(() => import('../pages/About'));
const Blogs = lazy(() => import('../pages/Blogs'));
const Blog = lazy(() => import('../pages/BlogSingle.jsx'));


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          {/* Suspense wraps all routes – shows fallback while any lazy page loads */}
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-500">Loading...</p>
                </div>
              </div>
            }
          >
            <Hashtoscroll/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<Blog/>} />
              
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}