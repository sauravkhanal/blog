import ApiResponse from "../utils/ApiResponse.js"


export async function test(req, res) {
    res.status(200).json(new ApiResponse(200, "user - test route"))
}