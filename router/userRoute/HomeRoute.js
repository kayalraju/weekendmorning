const express=require('express');
const { HomePage, creatreUser, fetchdata } = require('../../controller/UserController/HomeController');
const Route=express.Router();

Route.get('/',HomePage)
Route.post('/user/create',creatreUser)
Route.get('/fetchdata',fetchdata)





module.exports=Route