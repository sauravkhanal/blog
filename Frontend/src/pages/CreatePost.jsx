import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import createPost from '../modules/createPost';
import SyncLoader from "react-spinners/SyncLoader"
import Modal from "../components/Modal"

export default function CreatePost() {
    const [data, setData] = useState({ body: "Write your content here (required)." })
    const [coverImageUrl, setCoverImageUrl] = useState()
    const [loading, setLoading] = useState(false)
    const [modal, setModalProp] = useState({ title: "", message: "", success: true, visible: false })
    function toggleVisible() {
        setModalProp((v) => ({ ...v, visible: false }))
    }

    function handleSelectImage(event) {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setCoverImageUrl(imageUrl)
        }
    }

    function handleClearImage() {
        setCoverImageUrl(null)
    }

    function handleBodyChange(value) {
        setData(prev => ({ ...prev, body: value }))
    }

    async function handleSubmit(event) {
        setLoading(true)
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form)
        formData.append("body", data.body)
        const response = await createPost(formData)
        setModalProp((v) => ({ ...v, visible: true, message: response.message, success: response.success }))
        setLoading(false)
        if (response.success) {
            event.target.reset();
            setCoverImageUrl(null);
            setData({ body: "Write your content here (required)." })
        }
    }

    return (
        <div className='p-3 mx-auto min-h-screen w-full flex flex-col items-center text-white'>
            <h1 className='text-center text-2xl mb-5'>Create a Post</h1>

            <form onSubmit={handleSubmit} className='flex flex-col *:mb-5 justify-center items-center  w-full max-w-3xl p:50 input-group' >
                <input type='text' name="title" id="title" placeholder={"title of you post"} required
                    className='w-full flex-grow'
                />
                <div className='flex flex-grow-1 w-full justify-between gap-5'>
                    <input type='text' name="category" id="category" placeholder={"Category of the post"}
                        className='w-full flex-grow'
                    />
                    <label htmlFor="coverImage" className='btn max-w-20'>Choose an Image</label>
                </div>
                <input type='file' accept='image/*' title='coverImage' name='coverImage' id='coverImage' placeholder='choose an image' hidden onChange={handleSelectImage} />
                {coverImageUrl && <div className='relative'>
                    <button className='bg-red-500 p-1 rounded-sm absolute right-0' onClick={handleClearImage}>Remove</button>
                    <img src={coverImageUrl} className='max-w-full' />
                </div>
                }
                <ReactQuill theme='snow' placeholder='post content' className='h-96 pb-12 w-full' required onChange={handleBodyChange} value={data.body} />
                <button type='submit' className='btn max-w-10' disabled={loading}>{loading ? <SyncLoader color='white' loading={loading} /> : "Submit"}</button>
            </form>
            <Modal text={modal.message} visible={modal.visible} success={modal.success} onPress={(toggleVisible)} />
        </div>
    )
}
