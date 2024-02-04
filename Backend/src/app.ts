import express, { Express } from "express"

const app: Express = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))

//routes

import baseRouter from "./routes/base.routes";
app.use("/", baseRouter)

import userRoute from "./routes/user.routes";
app.use("/api/v1/user", userRoute)




export default app