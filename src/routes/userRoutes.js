import  {Router} from 'express';
import { registerUser,login, logout } from '../controllers/userController.js';
import {upload} from "../middlewares/multer.js";
import verifyAuth from '../middlewares/verifyAuth.js';
const router = Router();


router.post("/register",upload.fields([
    {
        name: "coverImage",
        maxCount: 1
    },
    {
        name: "avatar",
        maxCount: 1
    }
]) , registerUser);


router.post("/login",login) 


router.get("/logout",verifyAuth,logout)

export default router;