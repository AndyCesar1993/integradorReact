import { createSlice } from "@reduxjs/toolkit";
import { bikers, totalProducts } from "../Utils/AllProducts";

const initialState = {
    products: bikers,
    totalProducts: totalProducts,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: state => state,
        setNewFilterProducts : (state,action)=>{
            return {
                products:action.payload,
                totalProducts:action.payload.length
            }
        },
    },

});

export const { getProducts,setNewFilterProducts } = productSlice.actions;

export default productSlice.reducer;
