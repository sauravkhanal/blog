/**
 * Represents an API response.
 */

interface ApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
}

class ApiResponse<T> {
    /**
     * @param {Number} statusCode - The HTTP status code of the response.
     * @param {Object} data - The data returned in the response.
     * @param {String} [message="Success"] - The message associated with the response.
     */

    constructor(statusCode: number, data: T, message: string = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message
        this.success = statusCode < 400;
    }

}

export default ApiResponse;
