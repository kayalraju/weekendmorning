const express=require('express');
const { HomePage, creatreUser, fetchdata, deleteData, edit, UpdateData } = require('../../controller/UserController/HomeController');
const Route=express.Router();
const uploadFile=require('../../utiliti/UserImageUpload')

Route.get('/',HomePage)
Route.post('/user/create',uploadFile.single('photo'),creatreUser)
Route.get('/fetchdata',fetchdata)
// Route.get('/del/:id',deleteData)
 Route.get('/softdel/:id',deleteData)
Route.get('/edit/:id',edit)
Route.post('/update/:id',UpdateData)





module.exports=Route