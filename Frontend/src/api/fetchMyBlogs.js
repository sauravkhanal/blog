import config from "../config"

export default async function fetchMyPosts() {
    const uri = config.API_ENDPOINT + "/post/me"
    const response = await fetch(uri, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    const responseData = await response.json()
    return responseData.data;
}