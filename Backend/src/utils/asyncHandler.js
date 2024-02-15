import ApiError from "./ApiError.js";

export default function asyncHandler(asyncFunction) {
    return (req, res, next) => {
        Promise.resolve(asyncFunction(req, res, next))
            .catch(error => {
                console.error("Async Handler error: ", error);
                res.status(500).json(new ApiError(500, "An unexpected error occurred"));
            });
    };
}