import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:[],
    userToken:"",
    isLogin:false
}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        getUser: state => state,
        logUser:(state,action)=>{
            state.user = action.payload.user
            state.userToken = action.payload.token
            state.isLogin = true
        },
        desLogUser:(state)=>{
            state.user = [],
            state.isLogin= false
        },
    }
})

export const {getUser,logUser,desLogUser} = userSlice.actions;

export default userSlice.reducer