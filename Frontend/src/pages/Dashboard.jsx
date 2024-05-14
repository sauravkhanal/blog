import React, { useEffect, useState } from "react";
import fetchMyBlogs from "../api/fetchMyBlogs";
import MyPostCard from "../components/MyPostCard";

export default function Dashboard() {
	const [posts, setPosts] = useState();
	useEffect(() => {
		(async function () {
			const myPosts = await fetchMyBlogs();
			setPosts(myPosts);
		})();
	}, []);
	return (
		<>
			{posts ? (
				<div className=" rounded-md  max-w-2xl px-2 py-5">
					<p className="my-5 text-2xl font-bold">My Posts</p>
					{
						posts.map((value, index) => <MyPostCard post={value} key={value.slug} />)
					}
				</div>
			) : (
				<p>You've not created any post</p>
			)}
		</>
	);
}
