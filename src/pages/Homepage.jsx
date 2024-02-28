import RootLayout from './layouts/RootLayout'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
	return (
		<RootLayout className='root-layout'>
			<NavLink className='main-nav-link' to="/memegenerator">Meme Generator</NavLink>
			<NavLink className='main-nav-link' to="/doener">Döner</NavLink>
			<NavLink className='main-nav-link' to="/frisoer">Frisör</NavLink>
			<NavLink className='main-nav-link' to="/spaeti">Späti</NavLink>
			<NavLink className='main-nav-link' to="/suggest">Suggest</NavLink>
			<NavLink className='main-nav-link' to="/search">Search</NavLink>
		</RootLayout>
	)
}
