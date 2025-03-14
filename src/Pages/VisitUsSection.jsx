import React from 'react'
import Bike_Image from "../assets/mobile_bike.gif"

const VisitUsSection = () => {
  return (
    <div data-aos="fade-up" className="relative w-full bg-black text-white py-12 px-4">
      {/* Blue border effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
      <div className='flex justify-evenly items-center'>
      {/* Content container */}
      <div className=" text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Visit Us Today
        </h2>
        
        {/* Hours */}
        <p className="text-lg md:text-xl">
          Monday - Sunday: 7:00 AM - 8:00 PM
        </p>
        
        {/* Address */}
        <p className="text-lg md:text-xl">
          123 Smoothie Street, Healthy City, HC 12345
        </p>
        
        {/* CTA Button */}
        <button className="mt-6 bg-white text-black px-8 py-3 rounded-md 
          hover:bg-gray-200 transition-colors duration-300
          text-lg font-medium">
          Order Online
        </button>
      </div>

      {/* Imgae container */}
      <div>
        <img src={Bike_Image} className='mx-auto' alt="" />
      </div>
      </div>
    </div>
  );
};


export default VisitUsSection
