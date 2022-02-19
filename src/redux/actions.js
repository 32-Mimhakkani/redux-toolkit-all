

//login actions 

import { setData, setLogin, setLogout } from "./slice"

export const LoginAction =(phone)=>(dispatch)=>{
    dispatch(setLogin(phone))
}

export const LoginOut =()=>(dispatch)=>{
    dispatch(setLogout())
}

export const getDataAction =()=>(dispatch)=>{
    dispatch(setData())

    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => dispatch(setData(json)))
}