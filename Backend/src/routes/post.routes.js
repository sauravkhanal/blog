import express from "express"
import { createPost, getPost } from "../controllers/post.controller.js";
import upload from "../middlewares/multer.middleware.js";


const postRouter = express.Router();

postRouter.route("/").get(getPost)
postRouter.route("/").post(upload.single("coverImage"), createPost)



export default postRouter