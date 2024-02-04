import { Router } from "express";
import { baseReply } from "../controllers/base.controllers";


const baseRouter = Router();

baseRouter.route("/").get(baseReply);



export default baseRouter;