import axios from "axios"

const API_URL = "https://authentication-api-qtax.onrender.com/api/user"

export const Register = async (FormData) =>{
    try {
        const res = await axios.post(API_URL + "/register", FormData)
        localStorage.setItem("Auth", JSON.stringify(res.data))
        return res.data
    } catch (error) {
        console.log(error);
    }
}


export const Login = async (FormData) =>{
    try {
        const res = await axios.post(API_URL + "/login", FormData)
        localStorage.setItem("Auth", JSON.stringify(res.data))
        return res.data
    } catch (error) {
        console.log(error);
    }
}