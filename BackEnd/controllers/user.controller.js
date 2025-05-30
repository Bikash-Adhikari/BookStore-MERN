import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })   //await -find in DB

        if (user) {
            return res.status(400).json({ message: "User already exist." })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        const createdUser = new User({ fullname, email, password: hashedPassword })
        await createdUser.save() //await - save in DB
        res.status(201).json({
            message: "User created successfully.",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        })

    } catch (error) {
        console.error("Error: ", error)
        res.status(500).json({ message: "Internal server error!" })
    }
}




export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "invalid usernme or password!" })
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            })
        }
    } catch (error) {
        console.error("Error", error.message)
        res.status(500).json({ message: "Internal server error!" })
    }
}




