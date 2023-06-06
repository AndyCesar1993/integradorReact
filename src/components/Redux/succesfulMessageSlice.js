import { createSlice } from "@reduxjs/toolkit"

const initialState={
    open:false,
    message:'',
    openAlert:false,
    alert:false,
}

const succesfulMessageSlice = createSlice({
    name:'SuccesfuldMessage',
    initialState,
    reducers:{
        getSuccesfuldMessage:state =>state,
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        setMessage:(state,action)=>{
            state.message = action.payload
        },
        setOpenAlert:(state,action)=>{
            state.openAlert = action.payload
        },
        setAlert:(state,action)=>{
            state.alert=action.payload
        }
    }
})

export const{getSuccesfuldMessage,setOpen,setMessage,setOpenAlert,setAlert}= succesfulMessageSlice.actions;
export default succesfulMessageSlice.reducer