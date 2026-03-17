


// Images (unchanged)
import performanceBg from '../assets/imagesuse/performancebg.jpg';
import performanceImg from '../assets/imagesuse/performance1.jpg';
import prBg from '../assets/imagesuse/prbg.jpg';
import prImg from '../assets/imagesuse/pr.jpg';
import seoBg from '../assets/imagesuse/seobackground.jpg';
import seoImg from '../assets/imagesuse/seomarketing.jpg';
import socialBg from '../assets/imagesuse/socialbg.jpg';
import socialImg from '../assets/imagesuse/socialpage.jpg';

import SuccessModal from "./Successmodal";

// Icons (unchanged)
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';


// ────────────────────────────────────────────────
// Updated configs – keywords are now arrays (this fixes the crash)
// ────────────────────────────────────────────────
const serviceConfigs = {
  performance: {
    slug: 'performance',
    title: 'Performance Marketing Services',
    headline: 'We Turn ₹1 into ₹4. It’s Not Magic, It’s Math.',
    subheadline: 'Performance marketing is often treated like a slot machine. At Zentrix Media, we treat it like the stock market.',
    introTitle: 'ROAS (Returns on Ad Spend), Conversions, and Data Precision',
    introText:
      'With third-party cookies crumbling, the "spray and pray" method is dead. We focus on Creative Strategy + First-Party Data. The algorithm favours the best creative; we build the ads the algorithm wants to show.',
    background: performanceBg,
    mainImage: performanceImg,
    mainImageAlt: 'Performance Marketing in Action',
    whatWeDeliver: [
      { icon: 'FaFunnelDollar', title: 'Paid Social', desc: 'Architect funnels across online channels, including Meta, Google, LinkedIn that convert cold traffic into loyal fans.' },
      { icon: 'FaSearchDollar', title: 'PPC & Google Ads', desc: 'Capturing high-intent users exactly when they are ready to buy.' },
      { icon: 'FaChartPie', title: 'Conversion Rate Optimisation (CRO)', desc: 'Tweaking your landing pages because a 1% increase in conversion can double your profit.' },
    ],
    zentrixEdge: 'Our bidding scripts work 24/7, optimizing your budget every single second. While your competitors sleep, we lower Cost Per Acquisition (CPA).',
    seo: {
      title: "Performance Marketing Services | Data-Driven Ads Agency - Zentrix Media",
      description: "Turn ₹1 into ₹4 with Zentrix Media's performance marketing. Creative strategy + first-party data for maximum ROI on Meta, Google, LinkedIn, and more.",
      keywords: [
        "performance marketing",
        "paid ads agency",
        "PPC services",
        "conversion rate optimization",
        "Zentrix Media",
        "ROI focused marketing"
      ],
      canonical: "https://zentrix.media/services/performance",
      ogImage: performanceBg,
    },
    ctaText: 'Scale Your ROI',
  },

  pr: {
    slug: 'pr',
    title: 'Public Relations (PR) Services',
    headline: 'Get Famous For the Right Reasons and Be the Talk of the Town',
    subheadline: 'The days of the dusty press release have become rather obsolete. Modern PR is about Digital Footprint and Narrative Control.',
    introTitle: 'Authority, Trust and Media Presence',
    introText:
      "It's not just about getting featured in the top publication and becoming the headlines, it's about what shows up when a potential investor or customer Googles your name. We blend traditional storytelling with SEO-driven PR to ensure your brand isn't just heard but understood correctly and respected.",
    background: prBg,
    mainImage: prImg,
    mainImageAlt: 'Digital PR in Action',
    whatWeDeliver: [
      { icon: 'FaNewspaper', title: 'Digital Storytelling', desc: 'Crafting angles journalists actually want to read.' },
      { icon: 'FaFireAlt', title: 'Crisis Management', desc: 'Putting out fires before they burn the house down.' },
      { icon: 'FaUserTie', title: 'Influencer Relations', desc: 'Connecting you with voices that matter, not just faces that look pretty.' },
    ],
    zentrixEdge: 'We monitor brand sentiment in real-time across the web. If the vibe shifts, we know instantly and pivot the strategy before Monday morning.',
    seo: {
      title: "Public Relations (PR) Services | Digital PR Agency - Zentrix Media",
      description: "Get famous for the right reasons. Modern digital PR focused on narrative control, SEO-driven storytelling, and real-time brand protection.",
      keywords: [
        "digital PR",
        "public relations agency",
        "crisis management",
        "influencer relations",
        "brand narrative",
        "Zentrix Media"
      ],
      canonical: "https://zentrix.media/services/pr",
      ogImage: prBg,
    },
    ctaText: 'Control Your Narrative',
  },

  seo: {
    slug: 'seo',
    title: 'SEO Services',
    headline: 'Invisible Brands Go Broke. Let’s Get You Found.',
    subheadline: "SEO isn't just stuffing keywords into a blog post anymore. It has evolved, and continues to do so every day.",
    introTitle: 'Visibility, Organic Growth and Rankings',
    introText:
      'With the rise of Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), Search Generative Experience (SGE) and AI answers, the game has changed. Today, SEO is all about Topical Authority. You need to prove to Google and the online audience that you are the expert in your domain. We focus on technical health and high-value content that answers the questions AI is asking, allowing your brand to be relevant, visible to every query that users have about your industry.',
    background: seoBg,
    mainImage: seoImg,
    mainImageAlt: 'Topical Authority in Action',
    whatWeDeliver: [
      { icon: 'FaSearch', title: 'Technical SEO Audits', desc: 'Fixing the broken code that\'s killing your ranking.' },
      { icon: 'FaFileAlt', title: 'Content Strategy', desc: 'Specifically crafted content to satisfy user intent, and not just for search bots.' },
      { icon: 'FaMapMarkerAlt', title: 'Local SEO', desc: 'Dominating your immediate geography.' },
      { icon: 'FaChartBar', title: 'Ranking', desc: 'Getting your brand’s website right up there on the Search Engine Results Page (SERP)' },
    ],
    zentrixEdge: 'We analyse thousands of SERPs (Search Engine Results Pages) to reverse-engineer exactly what Google rewards in your specific niche right now.',
    seo: {
      title: "SEO Services | Search Engine Optimisation Agency - Zentrix Media",
      description: "Invisible Brands Go Broke. Let’s Get You Found. Topical Authority, Technical SEO, Content Strategy & Local SEO that wins in the age of AI and SGE.",
      keywords: [
        "seo services",
        "search engine optimisation",
        "topical authority",
        "technical seo",
        "local seo",
        "zentrix media",
        "AEO",
        "GEO"
      ],
      canonical: "https://zentrix.media/services/seo",
      ogImage: seoBg,
    },
    ctaText: 'Get Found Now',
  },

  social: {
    slug: 'social',
    title: 'Social Media Marketing Services',
    headline: 'Stop the Scroll. Start the Conversation.',
    subheadline: "Most agencies think social media is about 'posting every day.' At Zentrix Media, we know it’s much beyond writing creative captions and posting fancy pictures.",
    introTitle: 'Engagement, Storytelling, and Scroll-stopping Visuals',
    introText:
      "We truly know the truth - It’s about the Attention Economy. In a world where the average human attention span is less than a goldfish (literally), 'good enough' content is invisible and won’t do any good to your brand. You don't need more posts; you need resonance. We understand that Instagram, X, requires raw authenticity while LinkedIn demands polished thought leadership and we never mix the two.",
    background: socialBg,
    mainImage: socialImg,
    mainImageAlt: 'Attention Economy in Action',
    whatWeDeliver: [
      { icon: 'FaVideo', title: 'Short-Form Video Production', desc: 'Reels that hook viewers in the first 0.03 seconds.' },
      { icon: 'FaCommentDots', title: 'Interaction and Engagement', desc: 'We make the audience stop, interact, talk and share about your brand.' },
      { icon: 'FaUsers', title: 'Community Management', desc: 'We don’t just reply; we build cult-like followings.' },
      { icon: 'FaChartLine', title: 'Trend-Jacking', desc: 'Identifying and leveraging latest trends and memes before they peak.' },
      { icon: 'FaPen', title: 'Blogs', desc: 'Highly engaging, relevant, SEO-optimised and share worthy content across all platforms.' },
    ],
    zentrixEdge: "We analyse engagement sentiment 24x7 and predict viral potential before we even hit record. This isn't guessing; it's calculated creativity.",
    seo: {
      title: "Social Media Marketing Services | Expert Social Media Marketing Agency - Zentrix",
      description: "Stop the scroll and start conversations with Zentrix Media's social media strategies built for the attention economy. Drive resonance, engagement, and growth.",
      keywords: [
        "social media marketing services",
        "social media agency",
        "attention economy",
        "Zentrix",
        "viral content",
        "brand resonance"
      ],
      canonical: "https://zentrix.media/services/social",
      ogImage: socialBg,
    },
    ctaText: 'Ignite Your Brand',
  },
};// components/EnquiryModal.jsx
import { useState, useEffect } from 'react';
import { FaX } from 'react-icons/fa6';

const services = Object.values(serviceConfigs);

export default function EnquiryModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(false);
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Enquiry form submitted');
    onClose();
  };

  if (!isOpen) return null;
return (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 overflow-hidden"
    style={{ opacity: isVisible ? 1 : 0 }}
    onClick={handleOverlayClick}
  >
    <div
      className={`bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <FaX
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer transition-colors duration-200"
      />

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 leading-tight animate-fade-in-up">
          Struggling to Stand Out Online?
        </h2>
        <p className="text-lg text-gray-700 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
          Get an AI-powered digital marketing roadmap designed to scale your brand.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Name *
            </label>
            <input
              type="text"
              required
              placeholder=" Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent transition-shadow duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Company Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent transition-shadow duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email *
            </label>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent transition-shadow duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Contact
            </label>
            <input
              type="tel"
              placeholder="Your contact number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent transition-shadow duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Select Service *
          </label>
          <select
            required
            defaultValue=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent transition-shadow duration-200"
          >
            <option value="" disabled>
              Select Service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Message
          </label>
          <textarea
            rows="3"
            placeholder="Tell us more about your needs"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111488] focus:border-transparent resize-none transition-shadow duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#111488] text-white py-3 px-6 rounded-full font-medium transition-colors duration-300 hover:bg-[#0d0f6e] hover:shadow-md text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);
}
