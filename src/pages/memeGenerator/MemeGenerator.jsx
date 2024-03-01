import { useEffect, useState } from "react"
import fetchMeme from "../utility/fetchMeme.jsx";
import Rootlayout from "../layouts/RootLayout.jsx";


export default function MemeGenerator() {

	const [slug, setSlug] = useState("programmerhumor");
	const [threadLink, setThreadLink] = useState("");

	console.log(slug)
	const [meme, setMeme] = useState({
		data: [],
		loading: true,
		err: null,
	})

	console.log("MemeGenerator component rendered with loading: " + meme.loading)
	useEffect(() => {
		fetchMeme(setMeme, slug, setThreadLink);
	}, []);

	if (meme.loading) return <div>Loading...</div>;

	return (
		<Rootlayout>
			<p className="meme-generator-header" >MemeGenerator</p>
			<div className="meme-img-container">
				<img className="meme-img" src={meme.data.preview[2]} alt="meme"></img>
				<select className="meme-category-select" onChange={(e) => setSlug(e.target.value)}>
					<option value="programmerhumor">Programmerhumor</option>
					<option value="ich_iel">ich_iel</option>
					<option value="dankmemes">dankmemes</option>
					<option value="bonehurtingjuice">bonehurtingjuice</option>
					<option value="noncredibledefense">NCD</option>
				</select>
			</div>

			<button className="thread-button" onClick={() => window.open(threadLink)}>-- GO TO THREAD --</button>
			<button className="new-meme-button" onClick={() => fetchMeme(setMeme, slug, setThreadLink)}>-- GIMME NEW MEME --</button>
		</Rootlayout>
	)
}
