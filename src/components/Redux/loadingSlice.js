import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading: false
}

const loadingSlice = createSlice({
    name:'Loading',
    initialState,
    reducers:{
        getLoading:state =>state,
        setLoading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const{getLoading, setLoading}= loadingSlice.actions;
export default loadingSlice.reducer