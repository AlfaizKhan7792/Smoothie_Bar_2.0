import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Fetch } from '../Features/Menu/MenuSlice';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

const PopularMenu = () => {

const {All_Cards , isLoading} = useSelector(state => state.Menu)
    const dispatch = useDispatch()

    useEffect(() =>{
dispatch(Fetch())
    },[dispatch])

    const handleAddToCard = (item) =>{
        toast.success("Item Added")
        dispatch(Add(item))
    }

    if(isLoading){
        return <Loading />
    }


  return (
    <section data-aos="fade-up" id="menu" className="py-16 mt-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {All_Cards &&
            All_Cards.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <div className="text-gray-600 mb-4">
                    {item.add_ons &&
                      item.add_ons.map((addon, i) => <p className='flex' key={i}>{addon}</p>)}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">₹{item.price}</span>
                    <button onClick={() => handleAddToCard(item)} type='click' className="hover:bg-black hover:text-white duration-300 px-4 py-2 rounded bg-white border text-black">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
