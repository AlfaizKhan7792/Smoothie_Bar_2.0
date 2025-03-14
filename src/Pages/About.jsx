import React from 'react'
import img7 from "../assets/img7.png"

const About = () => (
    <section data-aos="fade-up" className="py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Fresh Vibes</h2>
            <p className="text-gray-600 mb-6">
              At Fresh Vibes, our mission is the power of natural ingredients to fuel your body and mind. Our 
              commitment to quality means using only the freshest fruits and superfoods, ensuring every 
              sip is packed with nutrition and flavor.
            </p>
            <button className="hover:bg-black bg-white border hover:text-white text-black px-6 py-3 rounded">
              Learn More About Us
            </button>
          </div>
          <div>
            <img 
              src={img7}
              alt="Our store"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );

export default About
