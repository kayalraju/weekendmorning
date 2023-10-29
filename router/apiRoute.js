const express=require('express');
const { UserController, GetUser, SingleUser, UpdateUser, destroy } = require('../controller/ApiController');
const Route=express.Router();

Route.post('/user',UserController)
Route.get('/all-user',GetUser)
Route.get('/edit/:id',SingleUser)
Route.put('/update/:id',UpdateUser)
Route.delete('/delete/:id',destroy)




module.exports=Route