const express=require('express');
const { UserController, GetUser, SingleUser,
     UpdateUser, destroy, createProduct,getProduct } = require('../controller/ApiController');
const Route=express.Router();

Route.post('/user',UserController)
Route.get('/all-user',GetUser)
Route.get('/edit/:id',SingleUser)
Route.put('/update/:id',UpdateUser)
Route.delete('/delete/:id',destroy)

//for product section
const upload=require('../utiliti/productImageUpload')
Route.post('/createproduct',upload.array('image',10),createProduct)
Route.get('/getproduct',getProduct)



module.exports=Route