const User=require('../../model/userModel')
const path=require('path')

//****get User */
const fetchdata=async(req,res)=>{
    try{
        const allData=await User.find()
        res.render('User/fetchdata',{
            data:allData
        })
        //console.log('jjj',allData);
    }catch(err){
        console.log(err);
    }
   
}

//***render home page */
const HomePage=(req,res)=>{
    res.render('User/Home')

}
//****create user */
const creatreUser=async(req,res)=>{

    try{
        const Udata=await new User({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city,
        })
        //console.log(req.file);
        if(req.file){
            Udata.photo=req.file.path
           }
           
        const data=await Udata.save()
        console.log(data);
        if(data){
            res.redirect('/fetchdata')
        }else{
            res.redirect('/')
        }

    }catch(error){
        console.log(error);
    }
   

}

//permanenet delete
// const deleteData=async(req,res)=>{
   
//     try{
//         const id= req.params.id
//       const del= await User.findByIdAndDelete({_id:id})
//       if(del){
//         res.redirect('/fetchdata')
//       }
       
//     }catch(err){
//         console.log(err);
//     }

// }

//****soft delete */
const deleteData=async(req,res)=>{
   
    try{
        const id= req.params.id
       const softdelete=await User.findByIdAndUpdate(id,{status:0})
    
       if(softdelete){
        res.redirect('/fetchdata')
       }
       
    }catch(err){
        console.log(err);
    }

}

//*****edit user */
const edit=async(req,res)=>{
   
    try{
        const id= req.params.id
        const editData=await User.findById(id)
        res.render('User/update',{
            title:"update",
            data:editData
        })
        //console.log('jjj',allData);
    }catch(err){
        console.log(err);
    }

}

//****update user */
const UpdateData=async(req,res)=>{
   
    try{
       const udata= await User.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            email:req.body.email,
            city:req.body.city,
        })
        if(udata){
            res.redirect('/fetchdata')
        }else{
            console.log('error');  
        }
        //console.log('jjj',allData);
    }catch(err){
        console.log(err);
    }

}



module.exports={
    HomePage,
    creatreUser,
    fetchdata,
    deleteData,
    edit,
    UpdateData
}