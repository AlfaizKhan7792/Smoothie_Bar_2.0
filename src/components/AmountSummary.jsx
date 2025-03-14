import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AmountSummary = ({boosterCount}) => {

    const {Card_Items} = useSelector((state) => state.Menu)
    

const [selectedShippingCosts , setselectedShippingCosts] = useState(0)

const handleShippingCharge  =(event) =>{
    setselectedShippingCosts(parseFloat(event.target.value))
}

const calculateTotal = () =>{
  const shippingCost = selectedShippingCosts;
  const subtotal = Card_Items.reduce((sum , item) => sum + item.price * item.quantity, 0)
  const booster = boosterCount * 1;
  const tax = (subtotal + shippingCost) * 0.08
  return {shippingCost , subtotal , booster , tax , total : shippingCost + subtotal + booster + tax}
}

  return (
    <>
       <div data-aos="fade-left" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Amount Summary</h2>
            {Card_Items.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Medium, 75% sweet</p>
                </div>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">

{/* Shipping Start */}
              <div className=" mb-2">
              <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
              <select
              onClick={handleShippingCharge}
                className="block p-2 text-gray-600 w-full text-sm">
                <option value={0}>
                  Upto 5 km - <span className="text-green-500">Free</span>
                </option>
                <option value={15}>Range 5-8 km - ₹15.00</option>
                <option value={25}>Range 9-15 km - ₹25.00</option>
                <option value={40}>Range Above 15 km - ₹40.00</option>
              </select>
          </div>
              </div>
              {/* Shipping End */}

{/* Total Shipping Start */}
              <div className="flex justify-between mb-2">
  <span>Shipping</span>
  <span>₹{calculateTotal().shippingCost.toFixed(2)}</span>
</div>
{/* Total Shipping End */}

              {/* Subtotal Start */}
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${calculateTotal().subtotal.toFixed(2)}</span>
              </div>
              {/* Subtotal End */}

               {/* Booter Start */}
               <div className="flex justify-between mb-2">
                <span>Boosters</span>
                <span>${calculateTotal().booster.toFixed(2)}</span>
              </div>
              {/* Booster End */}

              {/* Tax Start */}
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${calculateTotal().tax.toFixed(2)}</span>
              </div>
              {/* Tax End */}

              {/* Total Start */}
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${calculateTotal().total.toFixed(2)}</span>
              </div>
              {/* Total End */}
              <button className="w-full bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-800">
                Place Order
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Estimated preparation time: 10-15 minutes
              </p>
            </div>
          </div> 
    </>
  )
}

export default AmountSummary
