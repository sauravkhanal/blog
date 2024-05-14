import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import SyncLoader from "react-spinners/SyncLoader";

export default function TinyMCE({ setData, loading }) {
	const editorRef = useRef(null);
	//   const log = () => {
	//     if (editorRef.current) {
	//       console.log(editorRef.current.getContent());
	//     }
	//   };
    function handleSubmit() {
        setData({body: editorRef.current.getContent()})
    }


	return (
		<>
			<Editor
				apiKey="92w8l5b9kza006vgla0wjh4gdjcir8op3qf9g70gqsqmpz9e"
				onInit={(_evt, editor) => (editorRef.current = editor)}
				initialValue="<p>This is the initial content of the editor.</p>"
				init={{
					width: "100%",
					max_width: 768,
					min_height: 300,
					max_height: 850,
					resize: true,
					menubar: true,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"code",
						"help",
						"wordcount",
						"autoresize",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help",
					content_style: `body { 
                                font-family:Helvetica,Arial,sans-serif;
                                font-size:14px 
                                }`,
					skin: "oxide-dark",
				}}
			/>
			<button className="btn max-w-10" disabled={loading} onClick={handleSubmit}>
				{loading ? (
					<SyncLoader color="white" loading={loading} />
				) : (
					"Submit"
				)}
			</button>
		</>
	);
}
