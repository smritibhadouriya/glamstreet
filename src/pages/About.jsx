import { Link, useNavigate } from 'react-router-dom';
import Banner from '../assets/About/group1.png';      // Hero banner image
import Firstimage from '../assets/About/group2.png'; // Reused for Why + Mission/Vision

export default function About() {
    const navigate = useNavigate();

  const handleFindMatch = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('beauty-intelligence');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300); // wait for page to load
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Banner Section - Full width image with overlay */}
      <section className="relative">
        <img
          src={Banner}
          alt="TheGlamStreet Hero - Redefining Beauty"
          className="w-full h-full object-cover"
        />
       
    
      </section>

      {/* Why TheGlamStreet */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
            
               <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-5 text-gray-900">
          Why The<span className='text-[#C2185B]'>Glam</span>Street?
              </h2>
          
              <p className="text-gray-700 text-lg leading-relaxed">
                At TheGlamStreet, we know every woman's beauty journey is unique. That's why we've created a personalized recommendation system that understands your skin type, hair texture, and beauty concerns like acne, dullness, frizz, pigmentation, and more.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're looking for solutions to oily skin or the best sulfate-free shampoo for curly hair, our smart suggestion engine brings you best-matched skincare, haircare, and makeup products — trusted by dermatologists and real women alike.
              </p>
              <button
                  onClick={handleFindMatch}
                className="inline-block bg-[#C2185B] hover:bg-[#880E4F] text-white px-8 py-3.5 rounded-full font-semibold transition-all mt-4"
              >
                Find Your Perfect Match →
              </button>
            </div>

            <div>
              <img
                src={Firstimage}
                alt="Group of women representing beauty diversity"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Using same image again */}
      <section className="py-16 md:py-24 bg-pink-50/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="https://imgs.search.brave.com/UEwG5zA9CERsJVfRj_9tC2Ry8jNG8KU6sHylcSBg3tY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MDM3NzMyMC9waG90/by9jaGVlcmZ1bC10/ZWVuYWdlLWdpcmxz/LWx5aW5nLXRvZ2V0/aGVyLWF0LXBhcmsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWRLaUZiZXA5bUE4/eUJ6aF9qb05PUmtP/OXNZWWJ1djAtb240/ZDdDUGxFNzg9"
              alt="Women together - Our Mission & Vision"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="space-y-12">
          
             
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-5 text-[#C2185B] ">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To redefine how women discover and use beauty products. We believe beauty is deeply personal — every woman deserves a routine that reflects her individuality.
              <br/>
             
                We harness technology and data to understand your unique needs — removing guesswork and overwhelm from beauty shopping.
              </p>
        

      
           
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-5 text-[#C2185B] ">
                Our Vision
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                A world where beauty feels effortless, inclusive, and empowering. We want the beauty industry to stop overwhelming and start truly serving every woman's real needs.
              </p>
      
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-4xl  font-bold text-[#C2185B] mb-6">
            Find Your Perfect Match
          </h2>
          <p className="text-gray-700 text-xl mb-10 leading-relaxed">
            Join thousands of women discovering science-backed, personalized beauty recommendations tailored to Indian skin tones, hair types, and lifestyles.
          </p>
          <button
           onClick={handleFindMatch}
            className="inline-block   bg-pink-50 border border-[#C2185B] text-[#C2185B] hover:bg-[#880E4F] hover:text-white px-8 py-4 rounded-full font-semibold text-lg "
          >
            Start Your Beauty Journey 
          </button>
        </div>
      </section>
    </div>
  );
}