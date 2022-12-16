import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import data from "./data"
import ImgSlider from './ImgSlider'
import {useSelector, useDispatch} from "react-redux";
import { getProducsFailure, getProducsRequest, getProducsSuccess } from '../redux/AppReducer/action';
//import { getProducts } from '../redux/AppReducer/action';
import axios from "axios"
import Beauty from './Beauty';
import ProductList from './ProductList';
import FilterSort from '../FilterAuth/FilterSort';
import {useSearchParams, useLocation} from "react-router-dom"




const Home = () => {   
    const data =  useSelector((state)=> state.AppReducer.productData)
    const dispatch =  useDispatch();
    const [searchParams] = useSearchParams();
    const location = useLocation();

     //console.log("data", data)
     const getProducts = ()=>{
        // dispatch(getProducsRequest())
        // return  axios
        // .get("http://localhost:8090/posts")
        // .then((r)=>{
        //     return(dispatch(getProducsSuccess(r.data)))
        // })
        // .catch(()=>{
        //     dispatch(getProducsFailure())
        //   })
    }

     useEffect(()=>{
      if(location ||   data.length === 0){
        const sortBy = searchParams.get("sortBy");
        const queryParams = {
            params : {
                cate: searchParams.getAll("cate"),
                _sort: sortBy && "price",
                _order: sortBy
            },
        }
        dispatch(getProducsRequest())
         axios
        .get("https://backend-puce-eight.vercel.app/products", queryParams)
        .then((r)=>{
          console.log(r)
            return(dispatch(getProducsSuccess(r.data)))
            
        })
        .catch(()=>{
            dispatch(getProducsFailure())
          })
      // dispatch(getMusicRecords(queryParams))
    }
          //getProducts()
     },[location.search])
  return (
    <div> 
        <Link>
           <ImgSlider/>
        </Link> 
        <Beauty/> 
        <FilterSort/>
        <ProductList/>
         
         
      
    </div>
  )
}

export default Home
