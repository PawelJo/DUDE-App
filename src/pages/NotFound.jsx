import { NavLink } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

export default function NotFound() {
	return (
		<>
			<RootLayout>
				<p className="meme-generator-header">My good man. It appears you have arrived in a hood not suited to your needs</p>
				<div className="meme-img-container">
					<img className="meme-img" src="404page.jpeg" alt="meme"></img>
				</div>
				<NavLink className='main-nav-link' to="/">Take the U8 home</NavLink>
			</RootLayout>
		</>
	)
}
