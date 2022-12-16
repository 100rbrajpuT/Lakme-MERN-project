const mongoose =  require("mongoose")

const bagSchema = new mongoose.Schema({
    id : {type:Number, required : true},
    name : {type: String, required : true},
    image_url : {type: String, required : true},
    price : {type: String, required : true},
    cate : {type: String, required : true},
    userId : {type: String, required : true}
})

const BagsModel = mongoose.model("bag", bagSchema)

module.exports = {
    BagsModel
}