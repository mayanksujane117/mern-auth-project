const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/User');

// Register function
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) { 
            return res.status(400).json({ error: 'User already exists', success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new UserModel({ name, email, password: hashedPassword });
        await userModel.save();
        res.status(201).json({ message: 'User registered successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: 'Invalid credentials', success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials', success: false });
        }
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: 'JWT_SECRET is missing in environment', success: false });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ 
            message: 'Login successful', 
            success: true, 
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

module.exports = {
    register,
    login
};

