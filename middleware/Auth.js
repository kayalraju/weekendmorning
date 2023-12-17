const jwt=require('jsonwebtoken')



const verifyToken=async(req,res,next)=>{

   const token= req.body.token || req.query.token || req.headers["x-access-token"];

   if(!token){
    return res.status(403).json({
        status:403,
        message:"A token is required"
    })
   }

   try{
   const decoded= jwt.verify(token,"nodejsweekend12345678")
   req.user=decoded

   }catch(error){
    return res.status(403).json({
        status:403,
        message:"invalid Token Access"
    })
   }

   return next()

}


module.exports=verifyToken