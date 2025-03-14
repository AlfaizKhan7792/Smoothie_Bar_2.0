import React from 'react'
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { Remove, UpdateQuantity } from '../Features/Menu/MenuSlice';

const MenuList = () => {

  const {Card_Items , isLoading} = useSelector(state => state.Menu)
  const dispatch = useDispatch()

  if(isLoading){
    return <Loading />
  }

  const handleDecrease = (id , quantity) =>{
    dispatch(UpdateQuantity({id , amount : -1}))
  }

  const handleIncrease = (id) =>{
    dispatch(UpdateQuantity({id , amount : 1}))
  }


  return (
    <>
     
    <div data-aos="fade-up" className="p-4">
      <ul className="mx-auto max-w-3xl space-y-4">
        {Card_Items?.length === 0 ? <div className='flex items-center justify-center'>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--no-items-added-web-app-page-bucket-state-pack-design-development-illustrations-3016826.png?f=webp" width={"500px"} alt="" />
        </div> : 
       <> {Card_Items?.map((item) => (
        <li
          key={item?.id}
          className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 ease-in-out hover:bg-gray-200 sm:flex-row sm:items-center sm:gap-4"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
            <img src={item?.image} layout="fill" className='object-cover' alt="" />
          </div>

          <div className="flex-1 py-2">
            <h3 className="text-lg font-semibold text-gray-900">{item?.name}</h3>

            <button onClick={() => dispatch(Remove(item?.id))}  className="mt-2 text-sm text-gray-500 hover:text-red-600">
              Remove
            </button>
          </div>

          <div className="flex items-center gap-3 sm:ml-auto">
            <button  onClick={() => handleDecrease(item.id , item.quantity)}  
            disabled={item.quantity <= 1}          
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-gray-900">{item?.quantity}</span>
            <button
            onClick={() => handleIncrease(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 text-right font-semibold text-gray-900 sm:mt-0 sm:min-w-[80px]">
            ₹{item.price * item.quantity}
          </div>
        </li>
      ))}</> }
      </ul>
    </div> 
    </>
  )
}

export default MenuList
