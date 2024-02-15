import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"


export const signup = async (req, res) => {
    //if some element satisfy !files == not present or .trim() === empty string then throw error
    // if ([userName, email, password, firstName, lastName].some(field => !field || field.trim() === "")) {
    //     // throw new ApiError(400, "All fields are required")
    //     console.log("Fields are empty:", firstName, lastName, email, userName, password);
    //     return res.status(400).json(new ApiError(400, req.body, "All fields are required"))

    // }

    const { userName, email, password } = req.body;

    const requiredFields = ['userName', 'email', 'password'];
    const missingOrEmptyFields = requiredFields.filter(field => !(field in req.body) || req.body[field]?.trim() == "");

    if (missingOrEmptyFields.length > 0) {
        const errorMessage = `Required fields ${missingOrEmptyFields.join(" ,")} ${missingOrEmptyFields.length === 1 ? 'is' : 'are'} missing or empty.`;
        return res.status(400).json(new ApiError(400, errorMessage));
    }

    if (password.length < 8) {
        return res.status(400).json(
            new ApiError(400, "Password must be at least 8 characters long")
        );
    }



    const existingUser = await User.findOne({
        $or: [{ userName }, { email }]
    }).select("-password")

    if (existingUser?.userName === userName) {
        return res.status(409).json(new ApiError(409, "userName already exists"))
    } else if (existingUser?.email === email) {
        return res.status(409).json(new ApiError(409, "email is already used"))
    }

    const hashedPassword = bcryptjs.hashSync(password)

    const newUser = await User.create({
        userName: userName.toLowerCase(),
        email,
        password: hashedPassword,
    })


    return res.status(200).json(new ApiResponse(200, "signup successful", { userName: newUser.userName, email: newUser.email, userId: newUser._id }))
}