import { useEffect, useState } from "react"
import fetchMeme from "../utility/fetchMeme.jsx";
import Rootlayout from "../layouts/RootLayout.jsx";


export default function MemeGenerator() {
	const [meme, setMeme] = useState({
		data: [],
		loading: true,
		err: null,
	})

	console.log("MemeGenerator component rendered with loading: " + meme.loading)
	useEffect(() => {
		fetchMeme(setMeme);
	}, []);

	if (meme.loading) return <div>Loading...</div>;
	console.log("Preview-URL :", meme.data.preview[1]);
	return (
		<Rootlayout>
			<p className="meme-generator-header">MemeGenerator</p>
			<div className="meme-img-container">
				<img className="meme-img" src={meme.data.preview[2]} alt="meme"></img>
			</div>
			<button className="new-meme-button" onClick={() => fetchMeme(setMeme)}>-- GIMME NEW MEME --</button>
		</Rootlayout>
	)
}
