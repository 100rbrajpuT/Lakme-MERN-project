import React from 'react'
import {Routes, Route} from "react-router-dom"
import Checkout from '../components/Checkout'
import Home from '../components/Home'
import Login from '../components/Login'
import ProductDetails from '../components/ProductDetails'
import Signup from '../components/Signup'
import ReqAuth from '../FilterAuth/ReqAuth'
import Navbar from './Navbar'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/product/:id" element={ 
                     <ReqAuth>
                        <ProductDetails/>
                      </ReqAuth>
                        
                        
                        }/>
            <Route path="/checkout" element={ <Checkout/>}/>
            <Route path='/signup' element={ <Signup/> }  />
            <Route path='/login' element={ <Login/> }  />

        </Routes>
      
    </div>
  )
}

export default MainRoutes
