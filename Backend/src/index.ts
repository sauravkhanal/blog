import app from "./app";
import dotenv from "dotenv";


dotenv.config({path: "./.env"});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT} \n http://localhost:${process.env.PORT}`)
})