import { createSlice } from "@reduxjs/toolkit";

export const authSlice =createSlice({
    name :'auth',
    initialState:{
        isAuth:false,
        phone:"",
        data:''
    },
    reducers:{
        setLogin:(state,action)=>{
            state.isAuth=true;
            state.phone=action.payload
        },

        setLogout:(state,action)=>{
            state.isAuth=false;
            state.phone=''
        },
        setData:(state,action)=>{
            
            state.data=action.payload
        }
    }

})

export const { setLogin, setLogout, setData } = authSlice.actions

export default authSlice.reducer