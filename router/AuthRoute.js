const express=require('express');
const { register, login, dashboard } = require('../controller/AuthController');
const auth=require('../middleware/Auth')

const Route=express.Router();

Route.post('/register',register)
Route.post('/login',login)
Route.get('/dashboard',auth,dashboard)


module.exports=Route