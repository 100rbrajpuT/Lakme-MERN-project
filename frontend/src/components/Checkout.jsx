import React from 'react'
import './Checkout.css';

const Checkout = () => {

  const submitBtn = ()=>{
       alert ("your order has been  placed")
  }  


  return (
    <div>
        <h2>Delivery  Address</h2>
        <form className='form'>
          <label>Address   </label>
          <input className='input'  placeholder='Fill address'/>  <br/>
          <label>District   </label>
          <input className='input' placeholder='district Name'/>   <br/>
          <label>Pincode</label>
          <input className='input' placeholder='ie 277XXX'/>  <br/>
          <label>State       .. </label>
          <input className='input' placeholder='ie Gujrat'/>  <br/>
          <label>Mob No</label>
          <input className='input' placeholder='ie +91 XXXXXXXXX'/>  <br/>
         
        </form>
        <button className='button' onClick={submitBtn}>Submit</button>
    </div>
  )
}

export default Checkout
