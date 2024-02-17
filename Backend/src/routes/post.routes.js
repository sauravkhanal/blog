import express from "express"
import { createPost, getPost, getPostFromId, getPostFromSlug } from "../controllers/post.controller.js";
import upload from "../middlewares/multer.middleware.js";
import {verifyAccessToken} from "../middlewares/auth.middleware.js"

const postRouter = express.Router();

postRouter.route("/").get(getPost)
postRouter.route("/").post(verifyAccessToken, upload.single("coverImage"), createPost)
postRouter.route("/me").get(verifyAccessToken, getPostFromId)
postRouter.route("/:slug").get(getPostFromSlug)



export default postRouter