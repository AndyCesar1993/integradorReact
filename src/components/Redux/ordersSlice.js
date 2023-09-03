import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        getOrders: state => state,
        setOrders: (state, action)=>{
            return{
                state:action.payload
            }
        }
    }
});

export const { getOrders, setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;