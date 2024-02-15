import express from "express"

const app = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))

//middlewares

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

//routes

import baseRouter from "./routes/base.routes.js";
app.use("/", baseRouter)

import userRoute from "./routes/user.routes.js";
app.use("/api/v1/user", userRoute)

import authRoute from "./routes/auth.routes.js"
app.use("/api/v1/auth", authRoute)

export default app