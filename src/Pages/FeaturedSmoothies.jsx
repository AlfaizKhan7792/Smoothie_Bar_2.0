import React, { useState } from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const FeaturedSmothies = () => {

  
  // second-part
  const [selectedSmoothie, setSelectedSmoothie] = useState(0);

  const smoothies = [
    {
      id: 1,
      name: 'Tropical Paradise',
      ingredients: 'Mango, Pineapple, Coconut',
      image: img1
    },
    {
      id: 2,
      name: 'Green Goddess',
      ingredients: 'Spinach, Kiwi, Apple',
      image: img2
    },
    {
      id: 3,
      name: 'Berry Blast',
      ingredients: 'Strawberry, Blueberry, Raspberry',
      image: img3
    }
  ];

  return (
    <>
      {/* Second Section */}
    <section data-aos="fade-up" id='featured-smoothies' className="container mx-auto mt-10 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Smoothies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {smoothies.map((smoothie, index) => (
          <div 
            key={smoothie.id}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setSelectedSmoothie(index)}
          >
            {/* Image */}
            <img 
              src={smoothie.image} 
              alt={smoothie.name}
              className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1">
                {smoothie.name}
              </h3>
              <p className="text-sm text-white/90">
                {smoothie.ingredients}
              </p>
            </div>

            {/* Selected Indicator */}
            {selectedSmoothie === index && (
              <div className="absolute inset-0 ring-4 ring-blue-500 ring-opacity-50 rounded-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {smoothies.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedSmoothie(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              selectedSmoothie === index 
                ? 'bg-blue-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Select smoothie ${index + 1}`}
          />
        ))}
      </div>
    </section> 
    </>
  )
}

export default FeaturedSmothies
