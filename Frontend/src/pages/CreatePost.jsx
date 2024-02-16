import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export default function CreatePost() {
    return (
        <div className='p-3 mx-auto min-h-screen w-full flex flex-col items-center text-white'>
            <h1 className='text-center text-2xl mb-5'>Create a Post</h1>

            <form className='flex flex-col *:mb-5 justify-center items-center  w-full max-w-3xl p:50 input-group' >
                <div className='flex flex-grow-1 w-full justify-between gap-5'>
                    <input type='text' name="title" id="imagePicker" placeholder={"title of you post"} required className='w-full flex-grow' />
                    <label htmlFor="coverImage" className='btn max-w-20'>Choose an Image</label>
                </div>
                <input type='file' accept='image/*' title='coverImage' id='coverImage' placeholder='choose an image' hidden />
                <ReactQuill theme='snow' placeholder='post content' className='h-96 pb-12 w-full' required />
                <button className='btn max-w-10'>Submit</button>
            </form>

        </div>
    )
}
