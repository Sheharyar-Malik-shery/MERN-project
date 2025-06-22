
const registerUser = async (req, res) => {
    try {
        // Registration logic here
        console.log("User registration data:", req.body);
        
        // Simulate successful registration
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export { registerUser}