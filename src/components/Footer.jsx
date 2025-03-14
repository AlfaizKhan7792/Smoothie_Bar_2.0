import React from 'react'
import Logo from "../assets/Smoothie_Logo.png"
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <footer data-aos="fade-up" id='footer' className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
        <div className="text-2xl font-bold text-purple-600 mb-4"><img src={Logo}  className='bg-white rounded-4xl ' alt="" /></div>
        <p className="text-gray-400">
          Fresh & healthy smoothies made with love
        </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">Fresh, healthy smoothies made with love. Serving happiness in a cup since 2024.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
            <li><Link to="/featuredsmoothie" className="text-gray-400 hover:text-white">Featured Smoothies</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>1-313-SMOOTHIE</li>
            <li>Alfaiz_Khan@smoothiebar.com</li>
            <li>313 Smoothie Lane</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 flex justify-between px-5 mt-12 pt-8 text-center text-gray-400">
      <span>© 2024 Fresh Vibes. All rights reserved.</span>
      <p>Copy_Right @Alfaiz_Khan</p>
    </div>
    </div>
  </footer>
  </>
  );

export default Footer
