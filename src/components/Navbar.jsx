import React from 'react'
import Logo from "../assets/Smoothie_Logo.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../Features/Auth/AuthSlice'

const Navbar = () => {

  const {Card_Items} = useSelector(state => state.Menu)
  const dispatch = useDispatch()

  const handleExit = () =>{
dispatch(LogoutUser())
  }

  return (
    <>
      <nav data-aos="fade-up" className="fixed top-0 w-full bg-white shadow-sm z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold"><img src={Logo} width={"80"} alt="" /></Link>
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="hover:text-red-600">Home</Link>
      <Link to="/menu" className="hover:text-red-600">Menu</Link>
      <Link to="/about" className="hover:text-red-600">About</Link>
      <Link to="/" className="hover:text-red-600">Contact</Link>
    </div>
    <button onClick={handleExit} className='hover:bg-red-500 bg-white text-black border hover:text-white px-4 py-2 rounded' >LogOut</button>
    <Link to="/ordernow" className="hover:bg-black bg-white text-black border hover:text-white px-4 py-2 rounded">Order Now {Card_Items?.length} </Link>
  </div>
</nav> 
    </>
  )
}

export default Navbar
