const asyncHandler =(callbackfun)=>{
   (req,res,next)=>{
    Promise.resolve(callbackfun(req,req,next)).catch((err)=>next(err))
   }
} 