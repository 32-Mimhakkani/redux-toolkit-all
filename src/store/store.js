import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from "../redux/slice";
import postreducer from '../redux/postslice'
                        

export  const  store = configureStore({

    reducer:{

    auth :authSlice.reducer,
    posts:postreducer,
    }


})