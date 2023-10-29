const express=require('express');
const { HomePage } = require('../../controller/UserController/HomeController');
const Route=express.Router();

Route.get('/',HomePage)





module.exports=Route