import config from "../config";

export default async function deletePostById(id) {
    const uri = `${config.API_ENDPOINT}/post/${id}`;
    const response = await fetch(uri, {
        method: "DELETE",
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    });
    const res = await response.json()
    console.log(res.message)
    if (response.ok) {
        return true;
    } else {
        return false;
    }
}
