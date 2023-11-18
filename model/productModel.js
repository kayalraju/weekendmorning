const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    
    image: {
        type: Array,
    },
    status:{
        type:Number,
        default:1
    }
})
const ProductModel=new mongoose.model('product',ProductSchema)

module.exports=ProductModel;