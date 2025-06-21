class apiError extends Error{
    constructor(statuscode,message="Somethink went Wrong",errors=[],stack){
     super(message),
     this.message = message,
     this.statuscode = statuscode
     this.errors = errors

     if(stack){
        this.stack = stack
     }else{
        Error.captureStackTrace(this,this.constructor)
     }
    }
}

export {apiError}