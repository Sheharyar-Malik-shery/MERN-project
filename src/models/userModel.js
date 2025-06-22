import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        require:[true,"Password is Required"]
    },
    fullName:{
        type:String,
        required:true,
        trim:true,  
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trime:true
    },
    avatar:{
        type:String,
        required:true
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String,

    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)