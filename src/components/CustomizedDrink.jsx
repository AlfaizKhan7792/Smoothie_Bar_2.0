import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CustomizedDrink = ({ onBoosterChange }) => {
  const [selectedBoosters, setSelectedBoosters] = useState([]);

  const boosters = ["Protein", "Chia Seeds", "Honey", "Almond Milk", "Collagen", "Vitamins"];

  const toggleBooster = (booster) => {
    let updatedBoosters;
    if (selectedBoosters.includes(booster)) {
      updatedBoosters = selectedBoosters.filter((item) => item !== booster);
    } else {
      updatedBoosters = [...selectedBoosters, booster];
    }
    setSelectedBoosters(updatedBoosters);
    onBoosterChange(updatedBoosters.length); // Send updated booster count to AmountSummary
  };


  return (
    <>
      <div data-aos="fade-up" className="mt-12">
          <span className=" w-full flex items-center justify-between"><h2 className="text-2xl font-bold mb-6">Customize Your Drink</h2>
          <Link to="/" className=' duration-300 border text-black hover:bg-black hover:text-white p-3 rounded-md' >Back to Home</Link></span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select className="w-full border rounded-md py-2 px-3">
                <option>Small (16 oz)</option>
                <option>Medium (20 oz)</option>
                <option>Large (24 oz)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sweetness Level</label>
              <select className="w-full border rounded-md py-2 px-3">
                <option>100% (Regular)</option>
                <option>75%</option>
                <option>50%</option>
                <option>25%</option>
              </select>
            </div>
          </div>

<div className="mt-6">
      <p className="text-sm font-medium text-gray-700 mb-2">Add Boosters (+$1 each)</p>
      <div className="flex space-x-4 flex-wrap">
        {boosters.map((booster) => (
          <label key={booster} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedBoosters.includes(booster)}
              onChange={() => toggleBooster(booster)}
              className="mr-2"
            />
            {booster}
          </label>
        ))}
      </div>
    </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
            <textarea 
              className="w-full border rounded-md py-2 px-3" 
              rows="4"
              placeholder="Any special requests?"
            ></textarea>
          </div>
        </div> 
    </>
  )
}

export default CustomizedDrink
