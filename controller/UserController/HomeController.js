const User=require('../../model/userModel')

const fetchdata=async(req,res)=>{
    try{
        const allData=await User.find()
        res.render('User/fetchdata',{
            data:allData
        })
        console.log('jjj',allData);
    }catch(err){
        console.log(err);
    }
   
}

const HomePage=(req,res)=>{
    res.render('User/Home')

}
const creatreUser=async(req,res)=>{

    try{
        const Udata=await new User({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city,
        })
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



module.exports={
    HomePage,
    creatreUser,
    fetchdata
}