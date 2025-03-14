import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
       {/* Hero Section */}
       <div data-aos="fade-up" className="relative h-[95vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{
               backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LjjvFj_HbKxss10GqDV3aAxd8HAyhToPQQ&s')`,
               filter: 'brightness(0.7)',
               backgroundRepeat : "no-repeat"
             }}>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fresh & Healthy Smoothies Made Daily
          </h1>
          <p className="text-xl text-white mb-8">
            Discover the perfect blend of nature's finest ingredients
          </p>
          <Link to="/ordernow" className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-300 transition-colors">
            View Our Menu
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
