const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"name filed is required"]
    },
    email:{
        type:String,
        required:[true,"email filed is required"]
    },
    password:{
        type:String,
        required:[true,"password filed is required"]
    },
    mobile:{
        type:String,
        required:[true,"mobile filed is required"]
    },
    photo: {
        type: String,
        default:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
    },
    status:{
        type:Number,
        default:1
    }
})
const UserModel=new mongoose.model('user',UserSchema)

module.exports=UserModel;