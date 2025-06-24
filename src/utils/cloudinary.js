import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

const uploadfile = async(filepath)=>{
    try{
        if(!filepath)  throw new Error("File path is required");
        if(!fs.existsSync(filepath)) {
            throw new Error("File does not exist at the specified path");
        }
        const response = await cloudinary.uploader.upload(filepath,{
            resource_type: "auto",
            folder: "youtube-app"
        })
        console.log("File uploaded successfully:", response.url);
        return response
    }catch(error){
        fs.unlinkSync(filepath); // Delete the file from local storage
        console.error("Error uploading file:", error);
        return error
    }
} 

export {uploadfile};

