import React from 'react'
import useAuthStatus from '../Hooks/useAuthStatus'
import Loading from './Loading'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
 const {loggedIn , checkStatus} = useAuthStatus()
 if(checkStatus){
    return <Loading />
 }

 return loggedIn ? <Outlet /> : <Navigate to={"/login"} />

}

export default PrivateComponent
