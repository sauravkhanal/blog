import config from "../config";

export default async function createPost(formData) {
    try {
      const res = await fetch(`${config.API_ENDPOINT}/post`, {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": localStorage.getItem('token'),
            // "Bearer": "This is bearer value"
        },
      });
      const response = await res.json();
      return response
    } catch(error) {
      console.error(`Error occurred while uploading post: ${error}`);
    }
  }
  