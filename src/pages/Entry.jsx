import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Entry() {



	useEffect(() => {
		console.log('this is location: ', location)
	}, [location])
	return (
		<>
			<h1>Dönerkunde</h1>
			<p className="title-card">Wie bestelle ich?</p>
			<p className="description-paragraph">Immer alles komplett</p>
		</>
	)
}
