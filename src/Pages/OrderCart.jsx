import React, { useState } from 'react'
import OrderSummery from '../components/OrderSummery';
import AmountSummary from '../components/AmountSummary';
import CustomizedDrink from '../components/CustomizedDrink';

const OrderCart = () => {

  const [boosterCount , setBoosterCount] = useState(0)

  return (
    <> 
  
    <div data-aos="fade-up" className="min-h-screen bg-white mt-15">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">       
         
         {/* Order Summary */}
         <OrderSummery />

          {/* Amount Summary */}
        <AmountSummary boosterCount={boosterCount} />

        </div>

        {/* Customize Drink Section */}
       <CustomizedDrink onBoosterChange={setBoosterCount} />
      </main>

     
    </div>
        </>
  )
}

export default OrderCart
