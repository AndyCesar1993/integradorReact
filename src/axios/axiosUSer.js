import { URLBASE } from "../components/Utils/UtilsConst";
import axios from "axios";

export const createUser = async (name, username, dateOfBirth, email, password) => {
    try {
        const  { data }  = await axios.post(`${URLBASE}/auth/register`, {
            name, username, dateOfBirth, email, password
        });
        return data
    } catch (error) {
        let userRegister = "El usuario ya se encuentra. Se envió nuevamente código de verificación a"
        let errormsg = error.response.data.errors[0].msg

        if (errormsg.includes(userRegister)) {
            return "userRegister"
        }
        return (error.response.data)
    }
}

export const verifyUser = async (email, code) => {
    try {
        const { data } = await axios.patch(`${URLBASE}/auth/verify`, {
            email, code
        });
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const loginUser = async (username, password) => {
    try{
        const {data} = await axios.post(`${URLBASE}/auth/login`,{
            username, password
        });
        console.log(data)
        return data
    }catch(error){
        console.log(error)
        return error.response.data
    }
}