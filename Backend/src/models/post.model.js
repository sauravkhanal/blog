import mongoose from "mongoose"
import User from "./user.model.js"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    body: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
    }

}, {timestamps : true})


const Post = mongoose.model("Post", postSchema)
export default Post