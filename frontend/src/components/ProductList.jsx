import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import data from "./data"
import "./ProductList.css"

const ProductList = () => {
    const data =  useSelector((state)=> state.AppReducer.productData)
    //console.log(data)
  return (
    <div className='grid'>
       
         {data.length > 0 && 
               data.map((e)=>{
                return (
                <div className='block' key={e.id}>
                     <img src={e.image_url}/>
                     <p>{e.name}</p>
                     <p>₹ {e.price}</p>
                     <p>{e.cate}</p>
                     <button type="button"><span></span><Link to={`/product/${e.id}`}>VIEW SHADES</Link></button>
                </div>
                    )
               })
            
         }
    </div>
  )
}

export default ProductList
