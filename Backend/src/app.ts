import express, { Express } from "express"

const app: Express = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))

//middlewares

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

//routes

import baseRouter from "./routes/base.routes";
app.use("/", baseRouter)

import userRoute from "./routes/user.routes";
app.use("/api/v1/user", userRoute)

import authRoute from "./routes/auth.routes"
app.use("/api/v1/auth", authRoute)

export default app