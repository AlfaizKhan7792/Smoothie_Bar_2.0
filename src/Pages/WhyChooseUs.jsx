import React from 'react';
import { Apple, Droplet, Coffee, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 transition-transform hover:scale-105">
      <div className="mb-4 p-3 rounded-full bg-gray-50">
        <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Apple,
      title: "100% Fresh Fruits",
      description: "Only the freshest, seasonal fruits in every smoothie"
    },
    {
      icon: Droplet,
      title: "No Added Sugar",
      description: "Natural sweetness from fruits, nothing artificial"
    },
    {
      icon: Coffee,
      title: "Custom Blends",
      description: "Create your perfect combination of ingredients"
    },
    {
      icon: CheckCircle,
      title: "Nutritionist Approved",
      description: "Balanced nutrition in every glass"
    }
  ];

  return (
    <section data-aos="fade-up" id='about' className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;