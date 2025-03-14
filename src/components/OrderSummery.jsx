import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../components/MenuList';

const OrderSummery = () => {

    const {Card_Items} = useSelector((state) => state.Menu)

    console.log(Card_Items);

  return (
    <>
      {/* Smoothie Cards */}
      <div data-aos="fade-right" className="col-span-2">
          <span className='flex mb-8 pb-4 pt-4 border-b-2 justify-between items-center' >
       <h1 className="text-3xl font-bold">Order Summary</h1>
       <h3>{Card_Items?.length} Items</h3>
       </span>

<div className="grid grid-cols-1 md:grid-cols-8 gap-6">
<div className="col-span-5 p-3">PRODUCT DETAILS</div>
<div className="col-span-1">QUANTITY</div>
<div className="col-span-1">PRICE</div>
<div className="col-span-1">TOTAL</div>
</div>

<MenuList />
          </div> 
    </>
  )
}

export default OrderSummery
