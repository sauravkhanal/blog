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
    },
    category: {
        type: String,
        default: "uncategorized"
    },
    minutesToRead: {
        type: Number,
        default: 2
    },
    deleted: {
        type: Boolean,
        default: false
    }

}, {timestamps : true})


postSchema.pre('save', function (next) {
    const wordsPerMinute = 500;
    const words = this.body?.length;
    const minutes = Math.ceil(words/wordsPerMinute);
    this.minutesToRead = minutes;
    next();
})

const Post = mongoose.model("Post", postSchema)
export default Post