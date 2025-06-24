import { User } from "../models/userModel.js";
import { apiError } from "../utils/apiError.js";
import { uploadfile } from "../utils/cloudinary.js";
import {userServices} from "../services/index.js";
import {Apiresponse} from "../utils/apiResponse.js";
const registerUser = async (req, res) => {
    try {
        let { userName, password, fullName, email } = req.body;
        let isFieldEmpty = Object.values(req.body).some((field) =>{ return field === undefined || field === null || field?.trim() === ""});
        console.log("retuned values", isFieldEmpty);
        
        if (isFieldEmpty) {
            throw new apiError(400, "All fields are required");
        }
        let user = await User.findOne({
            $or:[{email}, {userName}]
        })
        if(user){
            throw new apiError(409, "User already exists with this email or username");
        }
        let avatar = await req.files?.avatar[0].path;
        if(!avatar) {
            throw new apiError(400, "Avatar is required");
        }
        console.log("Avatar file:", avatar);
        let coverImage = await req.files?.coverImage[0].path ||  null; 
        
        let avataruUploaded = await uploadfile(avatar);
        let coverImageUploaded = await uploadfile(coverImage);
        console.log("Avatar uploaded successfully:", avataruUploaded);
        let userObj = {
            userName,
            password,
            fullName,
            email,
            avatar: avataruUploaded?.url,
            coverImage: coverImageUploaded?.url || null
        }
        console.log("User object before saving:", userObj);
        
        let db_user = await userServices.createUser(userObj);
        // let userDetails;
        // if (db_user) {
        //     const userPlain = db_user?.toObject()|| {};
        //     const { password, refreshToken, ...rest } = userPlain;
        //     userDetails = rest;
        // }
        
        //let coverImageUploaded = await uploadfile(coverImage);
                // Registration logic here
        console.log("User registration data:", db_user);
        
        // Simulate successful registration
        res.status(201).json( new Apiresponse(201, db_user, "User registered successfully", true));
    } catch (error) {
        console.error("Error during user registration:", error);
        if (error instanceof apiError){
            return res.status(error.statuscode).json({message:error.message, errors:error.errors})
        }
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}
export { registerUser}