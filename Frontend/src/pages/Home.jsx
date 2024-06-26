import Card from "../components/Card"
import { useEffect, useState } from "react";
import Loader from "react-spinners/ClipLoader"
import config from "../config";


export default function Home() {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(9)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [pageInfo, setPageInfo] = useState({})
    // {"totalItems":47,"totalPages":5,"currentPage":1,"hasNextPage":true}

    useEffect(() => {
        async function getPosts() {
            try {
                setLoading(true)
                const res = await fetch(`${config.API_ENDPOINT}/post?page=${page}&limit=${limit}`)
                const response = await res.json()
                if (!res.ok) {
                    setError(true)
                    setLoading(false)
                    return;
                }
                setPosts(response.data.posts)
                setPageInfo(response.data.pageInfo)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        getPosts();
    }, [page])


    if (loading) return <Loader color="white" />

    else if (error) { console.log(error); return <p>An error occurred!</p> }

    else return (
        <div className="mx-10 flex flex-col justify-center pt-7">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts && posts.map((data, index) => <Card key={index} {...data} />)}
            </div>

            {!posts && <p>No posts found.</p>}

            {pageInfo &&
                <div className="flex flex-row text-black dark:text-white self-center gap-7 my-10 text-xl">
                    <button disabled={(page === 1)} onClick={()=>setPage(page=>--page)} className="disabled:opacity-50">Prev </button>
                    <p>{pageInfo.currentPage} / {pageInfo.totalPages}</p>
                    <button disabled={!pageInfo.hasNextPage} onClick={()=>setPage(page=>++page)} className="disabled:opacity-50">Next</button>
                </div>
            }

        </div>

    )
}

