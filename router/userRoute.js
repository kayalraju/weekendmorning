const express=require('express')
const { Home, About, Service } = require('../controller/UserController')
const Route=express.Router()

Route.get('/',Home)
Route.get('/about',About)
Route.get('/service',Service)





module.exports=Route