import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import Hero from './Hero'
import FeaturedSmothies from './FeaturedSmoothies'
import WhyChooseUs from './WhyChooseUs'
import About from './About'
import Testimonials from './Testimonials'
import VisitUsSection from './VisitUsSection'
import PopularMenu from './PopularMenu'

const Home = () => {

  const {Users , isLoading } = useSelector(state => state.Auth)
const navigate = useNavigate()


useEffect(() => {
  if(!Users){
    navigate("/login")
  }else{
    navigate("/")
  }
}, [Users]);

if(isLoading){
  return <Loading />
}


  return (
    <>
     <Hero />
     <FeaturedSmothies />
     <WhyChooseUs />
     <PopularMenu />
    <About />
    <Testimonials />
    <VisitUsSection /> 
    </>
  )
}

export default Home
