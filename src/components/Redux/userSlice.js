import { createSlice } from "@reduxjs/toolkit"

const initialState={
    users:[],
    userLog:[],
    isLogin:false
}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        getUser: state => state,
        regUser:(state,action)=>{
            return{
                ...state,
                users:[state.users ,{...action.payload}],
                userLog:action.payload,
                isLogin:true
            }
        },
        logUser:(state,action)=>{
            state.userLog = action.payload
            state.isLogin = true
        },
        desLogUser:(state,action)=>{
            state.userLog = [],
            state.isLogin= false
        },
    }
})

export const {getUser,regUser,logUser,desLogUser} = userSlice.actions;

export default userSlice.reducer