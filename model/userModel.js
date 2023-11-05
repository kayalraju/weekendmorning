const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1
    }
})
const UserModel=new mongoose.model('user',UserSchema)

module.exports=UserModel;