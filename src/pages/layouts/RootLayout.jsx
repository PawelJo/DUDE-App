import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton'


export default function RootLayout({ children }) {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<div className="root-layout">
			<header className={isHomePage ? 'header-main-menu' : 'header-submenu'}>
				<nav>
					<NavLink to="/">
						{isHomePage && <img className="avatar" src="Avatar@3x.png" alt="DUDE" />}
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
