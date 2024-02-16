export default async function createPost(formData) {
    try {
      const res = await fetch("/api/v1/post", {
        method: "POST",
        body: formData,
        // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
      });
      const response = await res.json();
      return response
    } catch(error) {
      console.error(`Error occurred while uploading post: ${error}`);
    }
  }
  