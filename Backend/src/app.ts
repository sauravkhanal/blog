import express, {Express} from "express"

const app:Express = express();
app.on("error", error => console.log(`Error occurred on creating express app: ${error}`))

//routes

import baseRouter from "./routes/base.routes";
app.use("/", baseRouter)



export default app