import { background, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const Bag = () => {
    // const bag = useSelector((state)=> state.AppReducer.bag)
    // console.log("bgg", bag)
    // const { id } = useParams();
     
    const [id, setId] = useState()
    const [bag, setBags]= useState([])
    const token = localStorage.getItem("psc_app_token")
      //  console.log(id)
    const getData = ()=>{
       fetch("https://backend-100rbrajput.vercel.app/bags",{
        method: "GET",
        headers:{
          'Authorization':`Bearer ${token}`
        },
      })
      .then((res)=>res.json())  
      .then((res)=> setBags(res)) 
      .catch((err)=> console.log(err))
    }
  
    useEffect(()=>{
      getData()
    },[id]) 

    const dltbag=()=>{
      alert("dlted")
      fetch(`https://backend-100rbrajput.vercel.app/bags/delete/${id}`,{
        method: "DElETE",
        headers:{
          'Authorization':`Bearer ${token}`
        },
      })
    }
    // if(id){
    //   fetch(`http://localhost:8080/bags/delete/${id}`,{
    //     method: "DElETE",
    //     headers:{
    //       'Authorization':`Bearer ${token}`
    //     },
    //   })
     //console.log("id", id)
    // }
    useEffect(()=>{
      // async function deletebag(){
        ///https://backend-100rbrajput.vercel.app/products
        fetch(`https://backend-100rbrajput.vercel.app/bags/delete/${id}`,{
        method: "DElETE",
        headers:{
          'Authorization':`Bearer ${token}`
        },
      })
    ///  } 
      
    },[id])



    let totalPrice = 0;
    for (let i = 0; i < bag.length; i++) {
      totalPrice += Number(bag[i].price);
    }


    if(!localStorage.getItem("psc_app_token")){
        return <h2>Plz login again</h2>
    }    
  
  return (
    <div>
      {bag.length>0 &&
          bag.map((e)=>{
            return (
                <div  style={{display:"flex", fontFamily:"sans-serif", fontSize:"10px", border:"1px solid grey",margin:"2px", padding:"5px"}}>
                    <img width="50px" src={e.image_url}/>
                    <p style={{padding:"7px"}}>{e.name}</p>
                    <p style={{padding:"7px"}}>₹{e.price}</p>
                    <p style={{padding:"5px" , border:"3px solid black", height:"50%", borderRadius:"10px"}}>
                      <button onClick={()=> setId(`${e.id}`)}>Delete</button>
                     
                    </p>
                    {/* <button onClick={dltbag}>Delete2</button> */}
                </div>   
            )
          })
      }
      <div style={{display:"flex", bordor:"1px solid grey", backgroundColor:"#b8bbd1", justifyContent:"space-around", padding:"5px"}}>
        <h3 >Bag Total</h3>
        <h3 >₹ {totalPrice}</h3>
      </div>
      <button style={{border:"1px solid grey",width:"100%", color:"white",marginTop:"4px", backgroundColor:"black", alignItem:"center"}}>  <Link href='/checkout' >CHECKOUT </Link></button>
     
    </div>
  )
}

export default Bag
