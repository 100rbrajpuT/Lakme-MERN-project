import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../redux/AuthReducer/action'
import { USER_LOGIN_SUCCESS } from '../redux/AuthReducer/actionTypes'
import "./Signup.css"

const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (e)=>{
    
    const payload = {
      email,
      password, 
     
    }
   if(email, password){
    dispatch(login({email, password}))
    .then((r)=>{
      if(r.type === USER_LOGIN_SUCCESS){
        if(r.payload){
              localStorage.setItem("psc_app_token",r.payload)
              alert("login successful")
            }
        console.log(r.payload)
        navigate(comingFrom, {replace:true});
      }
      
    })
    
   }
    //http://localhost:8080/user/login
//https://afternoon-garden-45528.herokuapp.com/notes
    // fetch("http://localhost:8080/user/login",{
    //   method: "POST",
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(payload)
    // })
    // .then((res)=>res.json())  
    // .then((res)=>{
    //   console.log(res)
    //   if(res.token){
    //     localStorage.setItem("psc_app_token",res.token)
    //     alert("login successful")
    //   }
    // })
    // .catch((err)=> console.log(err))
  }

return (
  <div className='sign'>
    <div className='signin'>
    <h1>Login </h1>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <br/>
    
      <button onClick={handleSubmit}>Login</button>
      <div style={{color: "wheat", margin:"20px"}}>
        <p style={{padding:"5px"}}>Not a Member?</p>
        <Link  to="/signup" style={{border:"2px solid black", padding:"5px", borderRadius:"10px"}}>Signup</Link>
      </div>
    </div>
  </div>
)
}

export default Login
