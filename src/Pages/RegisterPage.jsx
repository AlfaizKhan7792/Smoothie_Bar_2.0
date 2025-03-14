import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../Features/Auth/AuthSlice'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const RegisterPage = () => {

  // Data is Slice
  const {Users , isLoading , isError , message} = useSelector(state => state.Auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // ShowPassword && ShowPassword2 State
  const [showPassword , setShowPassword] = useState(false)
  const [showPassword2 , setShowPassword2] = useState(false)
  const [animateDelivery, setAnimateDelivery] = useState(false);

  // Form State
  const [formData , setFormData] = useState({
    name : "",
    phone : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  const {name , email , phone , password , confirmPassword} = formData

// Error State
const [formErrors , setFormErrors] = useState({
  name : "",
    phone : "",
    email : "",
    password : "",
    confirmPassword : ""
})


// form Changes
const handleChange = (e) =>{
  setFormData({...formData , [e.target.name] : e.target.value})
  setFormErrors({...formErrors , [e.target.name] : ""})
}

// Validate Form Data
const validateForm = () =>{
  let isValid = true
  const newErrors = {...formErrors}

  // Validate name
  if(!name.trim()){
    newErrors.name = "Name is required"
    isValid = false
  }

  // Validate Phone
  if(!phone){
    newErrors.phone = "Phone Number is Required"
    isValid = false
  }else if(!/^\d{10}$/.test(phone)){
    newErrors.phone = "Phone Number must be 10 digits"
    isValid = false
  }

  // Validate Email
  if(!email){
    newErrors.email = "Email is required"
    isValid = false
  }else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Email is invalid";
    isValid = false;
  }

  // Validate Password
  if(!password){
    newErrors.password = "Password is required";
    isValid = false;
  }  else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  setFormErrors(newErrors)
  return isValid

}

// Form Submit
const handleSubmit = (e) =>{
  e.preventDefault()
  if(validateForm()){
    dispatch(RegisterUser(formData))
    .unwrap()
    .then(() =>{
      toast.success("Registration Successful!")
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    })
    .catch((error) => {
              if (error.includes("User Already Exists || Enter a Unique Number")) {
                toast.error("User already exists with this email");
              } else {
                toast.error(error || "Registration failed");
              }
            });
        } else {
          // Show toast for validation errors
          const errorMessages = Object.values(formErrors).filter(msg => msg !== "");
          if (errorMessages.length > 0) {
            toast.error(errorMessages[0]);
          }
        }
      };

      useEffect(() => {
        if(Users){
          navigate("/");
        }
        
        const timer = setTimeout(() => {
          setAnimateDelivery(true);
        }, 500);
        
        return () => clearTimeout(timer);
      }, [Users, navigate]);
    
      if(isLoading){
        return <Loading />;
      }
    


  return (
    <>
        <div className="flex justify-center items-center min-h-screen p-4" style={{ backgroundColor: '#EFDFBB' }}>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left section with illustration */}
        <div className="relative w-full md:w-1/2 p-6 flex flex-col justify-between border-[#722F37] border-2 " style={{ backgroundColor: '#EFDFBB' }}>
          <div className="relative h-full">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute transform -rotate-12 left-0 right-0 h-full">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-8 w-24 border rounded-md m-6 opacity-50"
                    style={{ borderColor: '#722F37' }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Icons */}
            <div className="absolute top-4 left-8 bg-white p-2 rounded-full opacity-80 z-10">
              <div className="w-10 h-10 flex items-center justify-center" style={{ color: '#722F37' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M3 3h18v18H3zM3 9h18M9 21V9"></path>
                </svg>
              </div>
            </div>
            <div className="absolute top-4 right-8 bg-white p-2 rounded-full opacity-80 z-10">
              <div className="w-10 h-10 flex items-center justify-center" style={{ color: '#722F37' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
            
            {/* Illustration */}
            <div className={`z-10 absolute bottom-20 transition-transform duration-1000 ease-in-out ${animateDelivery ? 'translate-x-24' : '-translate-x-12'}`}>
              {/* Delivery truck */}
              <div className="relative">
                <div className="w-24 h-16 rounded-md absolute left-0 bottom-0" style={{ backgroundColor: '#722F37' }}></div>
                <div className="w-12 h-12 rounded-tr-md rounded-br-md absolute -left-12 bottom-0" style={{ backgroundColor: '#5a2128' }}></div>
                <div className="w-4 h-4 bg-black rounded-full absolute left-0 bottom-0 translate-x-4 translate-y-2"></div>
                <div className="w-4 h-4 bg-black rounded-full absolute right-0 bottom-0 -translate-x-4 translate-y-2"></div>
                <div className="w-6 h-2 absolute right-0 top-0 translate-x-1" style={{ backgroundColor: '#EFDFBB' }}></div>
              </div>
            </div>
            
            <div className={`z-20 absolute bottom-12 left-24 transition-all duration-700 ease-in-out ${animateDelivery ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}>
              {/* Delivery person with hand truck */}
              <div className="relative">
                {/* Person */}
                <div className="w-8 h-12 rounded-md absolute left-0 bottom-0" style={{ backgroundColor: '#722F37' }}></div>
                <div className="w-4 h-4 rounded-full absolute left-0 bottom-12 translate-x-2" style={{ backgroundColor: '#5a2128' }}></div>
                
                {/* Hand truck */}
                <div className="w-1 h-10 bg-gray-700 absolute left-10 bottom-0"></div>
                <div className="w-6 h-8 border border-orange-500 rounded-sm absolute left-8 bottom-2 rotate-12" style={{ backgroundColor: '#EFDFBB' }}></div>
                <div className="w-3 h-3 bg-gray-700 rounded-full absolute left-12 bottom-0"></div>
              </div>
            </div>
            
            {/* Logo */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <div className="flex items-center font-bold" style={{ color: '#722F37' }}>
                <div className="w-6 h-6 rounded-sm mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: '#722F37' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span>Smoothie_Bar</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right section - Register form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 border border-[#722F37]">
          <div className="h-full flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: '#722F37' }}>Welcome to Smoothie_Bar</h1>
              <p className="text-xl font-medium italic" style={{ color: '#722F37', opacity: 0.8 }}>Ship Smarter Today</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {isError && message && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {message}
                </div>
              )}
              
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    className={`pl-10 pr-4 py-3 w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 text-[#722F37] focus:ring-[#722F37] focus:border-[#722F37] transition-all`}
                  />
                  {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Enter Your Mobile Number"
                    onChange={handleChange}
                    name="phone"
                    value={phone}
                    className={`pl-10 pr-4 py-3 w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 text-[#722F37] focus:ring-[#722F37] focus:border-[#722F37] transition-all`}
                  />
                  {formErrors.phone && <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    className={`pl-10 pr-4 py-3 w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 text-[#722F37] focus:ring-[#722F37] focus:border-[#722F37] transition-all`}
                  />
                  {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handleChange}
                    name="password"
                    className={`pl-10 pr-10 py-3 w-full border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 text-[#722F37] focus:ring-[#722F37] focus:border-[#722F37] transition-all`}
                  />
                  <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                      </svg>
                    )}
                  </div>
                  {formErrors.password && <p className="mt-1 text-xs text-red-500">{formErrors.password}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    className={`pl-10 pr-10 py-3 w-full border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 text-[#722F37] focus:ring-[#722F37] focus:border-[#722F37] transition-all`}
                  />
                  <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword2(!showPassword2)}
                  >
                    {showPassword2 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                      </svg>
                    )}
                  </div>
                  {formErrors.confirmPassword && <p className="mt-1 text-xs text-red-500">{formErrors.confirmPassword}</p>}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded cursor-pointer"
                    style={{ accentColor: '#722F37' }}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Remember Me
                  </label>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                  style={{ backgroundColor: '#722F37' }}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {isLoading ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
            <div className="text-sm">
              <p className="text-center mt-4">
                Already have an Account?{" "}
                <a href="/login" className="text-[#722F37] font-semibold hover:underline">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegisterPage
