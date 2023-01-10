const {Router} = require("express");

const productsController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {ProductsModel} = require("../models/ProductModel")


// productsController.get("/",async (req, res)=>{
    
//     const products =  await ProductsModel.find({})
    
//     res.send(products)
// })


productsController.get("/",async (req, res)=>{
   // const filters = req.query;
   console.log(req.query,"query data")

   if(Object.keys(req.query).length === 0){
    console.log('no data')
    const products =  await ProductsModel.find({})
    res.send(products)
   }
   else{
    console.log('data available')
    const cate = req.query.cate;
    const sortBy = req.query._sort;
    const order = req.query._order;
    console.log("sort",sortBy,order)
    let sorting ;
        if(order=="asc"){
              sorting = 1
            }
         else if(order === "desc"){
             sorting = -1
         }
        //  else{ 
        //     sorting = "";
        //  }
         const products =  await ProductsModel.find({cate}).sort({price :sorting})
         res.send(products)
   }


   
    
    
})



productsController.get("/:noteId", async(req, res)=>{
    const {noteId} = req.params
   // const deletedNote = await ProductsModel.findOne({id: noteId},req.body)
    const product =  await ProductsModel.findOne({id: noteId})
    if(product){
        res.send(product)
    }
    else{
        res.send("couldn't update")
    }    
})

module.exports = {
    productsController
}