import { URLBASE } from "../components/Utils/UtilsConst";
import axios from "axios";

export const createOrder = async (price, shipingCost, total, shippingDetails, items, token) => {
    try {
        const response = await axios.post(`${URLBASE}/orders`,
            {
                price, shipingCost, total, shippingDetails, items
            },
            {
                headers: {
                    'x-token': token
                }
            }
        );
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getOrders = async (token) =>{
    try{
        const response = await axios.get(`${URLBASE}/orders`,
        {
            headers:{
                'x-token':token
            }
        }
        );
        console.log(response)
        return response.data.data

    }catch(error){
        console.log(error)
        return
    }
}