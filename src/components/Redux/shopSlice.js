import { createSlice } from "@reduxjs/toolkit";
import { indexProduct } from "../Utils/UtilsConst";

const initialState = {
    cartItems: [],
    shipingCost: 0
}

export const shopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
        getShop: state => state,
        addToShop: (state, action) => {
            state.cartItems.push(action.payload),
            state.shipingCost = (state.shipingCost + action.payload.price)
        },
        removeToShop: (state, action) => {
            state.shipingCost = state.shipingCost - action.payload.totalPrice
            state.cartItems = (state.cartItems).filter((product) => product.id !== action.payload.id)
        },
        addShipingCost:(state,action)=>{
            state.shipingCost = state.shipingCost + action.payload.price
            state.cartItems[(indexProduct(state.cartItems, action.payload.id))].quantity = action.payload.count +1
        },
        susShipingCost:(state,action)=>{
            state.shipingCost = state.shipingCost - action.payload.price
            state.cartItems[(indexProduct(state.cartItems, action.payload.id))].quantity = action.payload.count -1
        },
        cleanShop:(state)=>{
            state.cartItems = [],
            state.shipingCost= 0
        }
    }
});

export const { getShop, addToShop, removeToShop, addShipingCost, susShipingCost, cleanShop } = shopSlice.actions;

export default shopSlice.reducer;