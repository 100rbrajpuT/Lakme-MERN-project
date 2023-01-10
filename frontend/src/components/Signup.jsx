import React, { useState } from 'react'
import "./Signup.css"

const Signup = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [age, setAge]= useState("");

    const handleSubmit = ()=>{
      
      const payload = {
        name,
        email,
        password, 
        age
      }
//https://afternoon-garden-45528.herokuapp.com/user/signup
      fetch("https://backend-100rbrajput.vercel.app/user/signup",{
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())  
      .then((res)=>console.log(res))
      .catch((err)=> console.log(err))
      alert("registered")
    }
    
  return (
    <div className='sign'>
        <div className='signin' >
        <h1>Signup</h1>
       <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <br/>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <input type="number" placeholder='age' onChange={(e)=>setAge(e.target.value)} />
        <br/> <br/>
        <button onClick={handleSubmit}>Register</button>
        </div>
       
    </div>
  )
}

export default Signup
