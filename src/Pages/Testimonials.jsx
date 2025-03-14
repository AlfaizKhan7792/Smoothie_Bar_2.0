import React from 'react'
import {Star} from "lucide-react"

const Testimonials = () => {
    const testimonials = [
      {
        text: "The best smoothies in town! Fresh ingredients and amazing flavor combinations. My daily morning stop!",
        name: "Imran Khan",
        role: "Regular Customer",
        img : "https://yashk2211.github.io/Portfolio/assets/img/testimonials/imran.jpg"
      },
      {
        text: "I love their commitment to using fresh, natural ingredients. The Green Goddess is my favorite!",
        name: "Adil Khan",
        role: "Fitness Enthusiast",
        img : "https://media.licdn.com/dms/image/v2/C4D03AQHyEOnKHIVseg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1656854104200?e=1745452800&v=beta&t=LD5Z69JJnqHuTJ1CpCAclxMbnA2K8zWaIl3HikWHJag"
      },
      {
        text: "The acai bowls are incredible! Perfect post-workout fuel and the staff is always friendly",
        name: "Shabbar Khan",
        role: "Yoga Instructor",
        img : "https://yashk2211.github.io/Portfolio/assets/img/testimonials/shabbar.jpg"
      }
    ];
  
    return (
      <section data-aos="fade-up" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div data-aos="zoom-in-up" key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"><img className='rounded-full' src={testimonial.img} alt="" /></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Testimonials
