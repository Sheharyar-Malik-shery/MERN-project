import { User } from "../models/userModel.js";

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        return error
        throw new Error("Error creating user: " + error.message);
    }
}

export const userServices = {
    createUser
}