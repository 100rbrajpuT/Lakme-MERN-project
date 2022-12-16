import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"
import { addToBagReq, addToBagReqSuccess } from '../redux/AppReducer/action';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
   // const data = useSelector((state)=> state.AppReducer.productData)
    const bag = useSelector((state)=> state.AppReducer.bag)
    const  [currentProduct, setCurrentProduct] = useState({});
    const [counter, setCounter] = useState(1);

    const token = localStorage.getItem("psc_app_token")

    useEffect(()=>{
        if(id){
            axios.get(`https://backend-puce-eight.vercel.app/products/${id}`)
        .then((r)=>{
            setCurrentProduct(r.data)
        })
        }
     },[])

        // const addTobag =()=>{           
        //     dispatch(addToBagReqSuccess(currentProduct))
        //     alert("added to bag")
        // }
        const addTobag=()=>{
            dispatch(addToBagReq())
            fetch("https://backend-puce-eight.vercel.app/bags/create",{
                method: "POST",
                headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(currentProduct)
              })
              .then((res)=>res.json())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });

              dispatch(addToBagReqSuccess(currentProduct))
             alert("added to bag")
              
        }

        const incrementCount=()=>{
                     setCounter((prev)=> prev +1)
        }
        const decrementCount=()=>{
            if(counter==1){ }
            else{ setCounter((prev)=> prev -1)}
        }
   console.log("bag", bag)

   if(!localStorage.getItem("psc_app_token")){
    return <h2>Plz login again</h2>
   }
  return (
    <div>
        <h2>Product Detail</h2>
        <div className='prod'>
            <img className='prodimg' src={currentProduct.image_url} alt={currentProduct.name} />
            <div className='proddetail'>
                  <h3>{currentProduct.name}</h3>  
                  <p>₹ {currentProduct.price}</p>
                  <div className='countbtn'>
                       <div className='quantity'>
                       <p>Quantity</p>
                       <div className='counter'>
                          <button onClick={decrementCount}>-</button>
                          <p>{counter}</p>
                          <button onClick={incrementCount}>+</button>
                       </div>

                       </div>
                       
                      <button style={{border:"1px solid black", marginTop:"8%", marginLeft:"14%"}} onClick={addTobag}>ADD TO BAG</button>
                  </div>
                 
            </div>
        </div>
      
     
    </div>
  )
}

export default ProductDetails
