import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader"

export default function PostPage() {
    const { postSlug } = useParams()
    const [post, setPost] = useState({})
    const [isLoading, setISLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPost() {
            try {
                setISLoading(true)
                const res = await fetch(`https://api.blog.khanalsaurav.com.np/api/v1/post/${postSlug}`)
                const response = await res.json()

                if (!res.ok) {
                    setError(true);
                    setISLoading(false);
                    return;
                }
                setPost(response.data)
                setError(false)
                setISLoading(false)
            } catch (error) {
                console.log(`Error occurred while fetching the post: ${error}`)
                setError(true)
            }
        }
        getPost()
    }, [postSlug])

    if (isLoading) {
        return <div className='min-h-screen flex flex-col justify-center'><PacmanLoader color='white' /></div>

    }
    else if (error || !post) {
        return <main className='min-h-screen mx-10'><h1>Post with title "{postSlug.replace("-", " ")}" doesn't exist.</h1></main>
    }
    else
        return <main className=' max-w-3xl min-h-screen flex flex-col mx-auto items-center gap-10 pt-10 dark:text-gray-100 text-slate-950'>
            <h1 className='text-3xl text-center font-serif tracking-widest border-b border-slate-300 pb-5 p-5'>{post.title && post.title.toUpperCase()}</h1>
            <p className='self-end pr-5'>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}
                &nbsp;- {post.minutesToRead} min read
            </p>
            <img
                src={post.imageURL ? post.imageURL : "https://www.altitudehimalaya.com/media/files/Blog/Travel-News/Kathmandu-Durbar-Square/kathmandu_durbar_dquare_attractions.png"}
                className=' self-center w-xs'
            />
            <div dangerouslySetInnerHTML={{ __html: post.body }} className='post-content max-w-xl text-justify text-2xl pb-15 px-5'></div>
        </main>


}