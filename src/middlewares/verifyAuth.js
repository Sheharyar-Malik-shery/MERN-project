import jwt from "jsonwebtoken"

const verifyAuth = (req, res, next) => {
    let token = req.cookies.access_token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });    
    }
    let user = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    if(!user){
        return res.status(401).josn({message:"Invalid token"})
    }
    req.current_user = user
    next()
}

export default verifyAuth;