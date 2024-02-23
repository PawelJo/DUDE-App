import { useEffect, useState } from "react"
import fetchMeme from "./utility/fetchMeme";
import Rootlayout from "./layouts/RootLayout";


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
			<div>MemeGenerator</div>
			{meme.data.preview[2] && <img className="meme-img" src={meme.data.preview[2]} alt="meme"></img>}
			<button onClick={() => fetchMeme(setMeme)}>New Meme</button>
		</Rootlayout>
	)
}
