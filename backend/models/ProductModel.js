const mongoose =  require("mongoose")

const productSchema = new mongoose.Schema({
    id : {type:Number, required : true},
    name : {type: String, required : true},
    image_url : {type: String, required : true},
    price : {type: String, required : true},
    cate : {type: String, required : true},
})

const ProductsModel = mongoose.model("product", productSchema)

module.exports = {
    ProductsModel
}