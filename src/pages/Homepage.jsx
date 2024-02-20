import RootLayout from './layouts/RootLayout'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
	return (
		<RootLayout>
			<NavLink to="/memegenerator">Meme Generator</NavLink>
			<NavLink to="/entry">Entry</NavLink>
			<NavLink to="/doener">Döner</NavLink>
		</RootLayout>
	)
}
