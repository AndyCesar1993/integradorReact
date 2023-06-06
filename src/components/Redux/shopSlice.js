import { createSlice } from "@reduxjs/toolkit";

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
            state.shipingCost = state.shipingCost + action.payload
        },
        susShipingCost:(state,action)=>{
            state.shipingCost = state.shipingCost - action.payload
        }
    }
});

export const { getShop, addToShop, removeToShop, addShipingCost, susShipingCost } = shopSlice.actions;

export default shopSlice.reducer;