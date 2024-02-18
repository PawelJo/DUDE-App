import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<h1>Main Menu</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/memegenerator">Meme Generator</NavLink>
					<NavLink to="/entry">Entry</NavLink>

				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	)
}
