import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDataAction, LoginAction,LoginOut,setLogout} from './redux/actions'
import Posts from './Posts.js/Posts';
function App() {
  const [phone,setPhone] =useState("");
  const dispatch =useDispatch();
  const auth = useSelector(state=>state.auth);
  const datas = useSelector(state=> state.auth.data);

  useEffect(()=>{
    dispatch(getDataAction())
    
  },[])
 
  return (
    <div className="App">
       <h1>Welcome to Redux Toolkit </h1>
       
       {
         auth.isAuth && auth.phone!=''  ?<> <h1>Successfully You are Login </h1> 
          <button onClick={()=>dispatch(LoginOut())}>Logout</button>
          {datas.map(dd=><p key={dd.id}>{dd?.name} {dd.email}</p>)
            
          }
         </>
         : 
         <>

            <input 
            name='phone'
            type="text"
            value={phone}
            placeholder="Phone"
            onChange={(e)=>setPhone(e.target.value)}
            />

            <button onClick={()=>dispatch(LoginAction(phone),setPhone(''))}>Login</button>
         </>
       }

       <Posts />
       
    </div>
  );
}

export default App;
