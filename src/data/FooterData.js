import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Fa6, FaLocationDot } from 'react-icons/fa6';

export const footerData = {
  company: {
    name: 'Zentrix',
    description: 'Leading digital marketing agency providing comprehensive solutions for modern businesses. We help brands grow through innovative digital strategies.',
    socialLinks: [
      { href: '#', icon: FaFacebook , label: 'Facebook' },
      { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
      { href: '#', icon: FaTwitter, label: 'Twitter' },
    ],
  },
  services: [
    { to: '/service/social', label: 'Content and social' },
    { to: '/service/seo', label: 'SEO Marketing' },
     { to: '/service/pr', label: 'PR' },
    { to: '/service/performance-marketing', label: 'Performance Marketing' },
   
  ],
  companyLinks: [
    { to :'/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ],
  contactInfo: [
    { icon: FaLocationDot , text: 'Mumbai, IN' },
    { icon: FaMailBulk, text: 'hello@zentrix.media' },
  ],
  footerLinks: [

    { to: '/termsnservice', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' }
  ],
};