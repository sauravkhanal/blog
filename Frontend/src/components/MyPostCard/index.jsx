import Button from "../Button"
function stripTags(html) {
	return html.replace(/<[^>]*>?/gm, '');
}

export default function MyPostCard({ post }) {
	const { title, createdAt, updatedAt, body } = post;
	const createdDate = new Date(createdAt)
	// const updatedDate = new Date(updatedAt)
	// console.log(post)
	return (
		<div className="flex flex-col p-2 md:px-4 bg-gray-300 dark:bg-gray-900 rounded-md my-2">
			<div className="flex flex-col md:flex-row h-full  gap-5">
				<span className="flex-grow flex flex-col justify-center items-center">
					<span className="flex flex-col">
						<p className="line-clamp-1 pb-2">{title}</p>
						<p className="line-clamp-3 md:line-clamp-5 border-t border-b border-white dark:border-black my-2">{stripTags(body)}</p>
						<p className="self-end text-xs">{createdDate.toISOString().replace("T", " ").slice(0, 19)}</p>
					</span>
					{/* <p>{updatedDate.toISOString().slice(0, 10)}</p> */}
				</span>
				<div className="flex md:flex-col gap-2 flex-grow self-center h-full">
					<Button className="bg-yellow-600">Edit</Button>
					<Button className="bg-red-700">Delete</Button>
				</div>
			</div>
		</div>
	);
}
