import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton'


export default function RootLayout({ children }) {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<div className="root-layout">
			<header className={isHomePage ? 'Headerklasse' : 'header-submenu'}>
				<nav>
					<NavLink to="/">
						<img src="" alt="DUDE" />
						<div>
							D.U.D.E
						</div>
					</NavLink>
				</nav>
			</header>
			<main>
				{!isHomePage && <BackButton />}
				{children}
			</main>
		</div>
	)
}
