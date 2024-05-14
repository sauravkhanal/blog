import express from "express"
import { createPost, deletePostFromId, getPost, getPostFromId, getPostFromSlug } from "../controllers/post.controller.js";
import upload from "../middlewares/multer.middleware.js";
import { verifyAccessToken } from "../middlewares/auth.middleware.js"

const postRouter = express.Router();

postRouter.route("/").post(verifyAccessToken, upload.single("coverImage"), createPost)
postRouter.route("/me").get(verifyAccessToken, getPostFromId)
postRouter.route("/:slug").get(getPostFromSlug)
postRouter.route("/").get(getPost)
postRouter.route("/:id").delete(verifyAccessToken, deletePostFromId);

postRouter.all("/", (req, res)=>res.status(404).json({message: "route not found"}))



export default postRouter