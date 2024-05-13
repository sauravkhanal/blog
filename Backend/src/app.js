import express from "express"
// import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))

// app.use(cookieParser())//parse cookies(access token)

//middlewares
// app.use(cors({
//   origin: "http://localhost:5173",
//     credentials: true
//   }));  
app.use(cors());  

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  
app.use(express.json());//parse JSON data
app.use(express.urlencoded({ extended: true })); //parse form data 
app.use(express.static("public")) //store some assets in public


//routes

import baseRouter from "./routes/base.routes.js";
app.use("/", baseRouter)

import userRoute from "./routes/user.routes.js";
app.use("/api/v1/user", userRoute)

import authRoute from "./routes/auth.routes.js"
app.use("/api/v1/auth", authRoute)

// import { verifyAccessToken } from "./middlewares/auth.middleware.js";
// app.use(verifyAccessToken)

import postRouter from "./routes/post.routes.js";
app.use("/api/v1/post", postRouter)



export default app