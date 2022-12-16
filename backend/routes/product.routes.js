const {Router} = require("express");

const productsController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {ProductsModel} = require("../models/ProductModel")


productsController.get("/",async (req, res)=>{
    
    const products =  await ProductsModel.find({})
    
    res.send(products)
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