import { useLocation } from "react-router-dom"
import RootLayout from "./RootLayout"


export default function LayoutWrapper() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<>
			{isHomePage ? <RootLayout /> : <RootLayout />}
		</>
	)
}
