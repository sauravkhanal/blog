import { Request, Response } from "express"
import ApiResponse from "../utils/ApiResponse"


export async function test(req: Request, res: Response) {
    res.status(200).json(new ApiResponse<null>(200, null, "user - test route"))
}