import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import Footer from './components/Footer'
import PrivateComponent from './components/PrivateComponent'
import PopularMenu from './Pages/PopularMenu'
import About from './Pages/About'
import FeaturedSmothies from './Pages/FeaturedSmoothies'
import OrderCart from './Pages/OrderCart'
import { ToastContainer } from 'react-toastify'
import Aos from 'aos'
import "aos/dist/aos.css"

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,  // Animation speed (ms)
      once: true,      // Sirf ek baar animation chale
      offset: 100,     // Jab element 100px tak scroll ho tab animation chale
    });
    Aos.refresh()
  }, []);

  return (
    <Router>
      <div className="min-h-screen ducration-300">
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<PrivateComponent />} >
        <Route path='/' element={<Home />} />          
        <Route path='/menu' element={<PopularMenu />} />
        <Route path='/about' element={<About />} />
        <Route path='/featuredsmoothie' element={<FeaturedSmothies />} />
        <Route path='/ordernow' element={<OrderCart />} />
        </Route>
      </Routes>
      <Footer />
 
      </div>
           <ToastContainer />
    </Router>
  )
}

export default App
