import {Request, Response} from "express"
import ApiResponse from "../utils/ApiResponse"

const baseReply = (req:Request, res:Response) => {
    return res.status(200).json(new ApiResponse(200,"Express + typescript"))
}

export {baseReply}