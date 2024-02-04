import { Schema, model } from "mongoose"

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "username already exists"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "account with email already exists"],
    },
    password: {
        type: String,
        required: [true, "password cannot be empty"]
    }
},
    { timestamps: true }
)


export const User = model("User", userSchema)