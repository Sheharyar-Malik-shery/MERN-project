import  {Router} from 'express';
import { registerUser } from '../controllers/userController.js';
import {upload} from "../middlewares/multer.js";
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

export default router;