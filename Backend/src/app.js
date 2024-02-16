import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))


//middlewares
app.use(cors())
app.use(express.json());//parse JSON data
app.use(express.urlencoded({ extended: true })); //parse form data 
app.use(express.static("public")) //store some assets in public
app.use(cookieParser())//parse cookies(access token)


//routes

import baseRouter from "./routes/base.routes.js";
app.use("/", baseRouter)

import userRoute from "./routes/user.routes.js";
app.use("/api/v1/user", userRoute)

import authRoute from "./routes/auth.routes.js"
app.use("/api/v1/auth", authRoute)

import { verifyAccessToken } from "./middlewares/auth.middleware.js";
app.use(verifyAccessToken)

import postRouter from "./routes/post.routes.js";
app.use("/api/v1/post", postRouter)



export default app