import { useLocation } from "react-router-dom"
import RootLayout from "./RootLayout"
import Entry from "../Entry";

export default function LayoutWrapper() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<>
			{isHomePage ? <RootLayout /> : <RootLayout />}
		</>
	)
}
