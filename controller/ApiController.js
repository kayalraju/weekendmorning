const User=require('../model/userModel')
const Product=require('../model/productModel')
const path=require('path')
const slugify=require('slugify')

//create user
const UserController=async(req,res)=>{
    //console.log(req.body);
    try{
        const Udata=await new User({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city,
        })
      const data=await Udata.save()
     return res.status(201).json({
        success:true,
        message:"Data Added Successfully",
        data
    })

    }catch(error){
       return res.status(500).json({
            success:false,
            error
        })
    }

}

//get all User

const GetUser=async(req,res)=>{
    try{

        const allData=await User.find()
        return res.status(200).json({
            success:true,
            message:"Data fetch Successfully",
            allData
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            error
        }) 
    }

}

//get single user
const SingleUser=async(req,res)=>{
    try{
       const singledata=await User.findById(req.params.id)
       return res.status(200).json({
        success:true,
        data:singledata
    })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error
        })
    }

}

//update user
const UpdateUser=async(req,res)=>{
    try{
        const {name,email,city}=req.body
        if(!name){
            return res.status(400).json({
                success:false,
                message:"data can not be empty"
            })  
        }
      const id=  req.params.id
      const uData=await User.findByIdAndUpdate(id,req.body,{
        useFindAndModify:false
      })
      return res.status(201).json({
        success:true,
        message:'update successfully'
    })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error
        })
    }

}

const destroy=async(req,res)=>{
    try{
       await User.findByIdAndRemove(req.params.id)
       return res.status(200).json({
        success:true,
        message:'delete successfully'
    })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error
        })  
    }

}


//for product section
const createProduct=async(req,res)=>{
    try{

        const files=req.files
        let imagepath=[];
        const basepath=`${req.protocol}://${req.get('host')}/productimage/`;
        if(files){
            files.map(file=>{
                imagepath.push(`${basepath}${file.filename}`);
            })
        } 
        const {name}=req.body    
       const prod= new Product({
            name,
            price:req.body.price,
            image:imagepath,
            slug:slugify(name)
        })
      const data= await prod.save();
      return res.status(200).json({
        success:true,
        message:"product added successfully",
        data:data
    }) 
     }catch(error){
         return res.status(500).json({
             success:false,
             message:error
         })  
     }
}

const getProduct=async(req,res)=>{
    try{

        const allData=await Product.find({},{__v:0})
        return res.status(200).json({
            success:true,
            message:"product fetch Successfully",
            data:{allData}
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            error
        }) 
    }
}

module.exports={
    UserController,
    GetUser,
    SingleUser,
    UpdateUser,
    destroy,
    createProduct,
    getProduct
}