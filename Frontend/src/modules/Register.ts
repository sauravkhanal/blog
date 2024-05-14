import config from "../config";

export default async function userRegister(data: URLSearchParams) {

    try {

        const controller = new AbortController();
        const signal = controller.signal;

        const timer = setTimeout(() => {
            controller.abort();
        }, 30000)

        const res = await fetch(config.API_ENDPOINT + "/auth/register", {
            method: "POST",
            body: data.toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            signal: signal
        });

        clearTimeout(timer)
        const responseData = await res.json();
        return responseData

    } catch (error: any) {
        if (error.name === "AbortError") {
            alert('Timeout: Form submission timed out. Please try again later')
            return false;
        }
        console.error("Error registering:", error);
        alert("Oops! : An error occurred while registering.");
        return false;
    }
}