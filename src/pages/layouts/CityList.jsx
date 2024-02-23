import { NavLink } from "react-router-dom"

export default function CityList({ vendors, city }) {

	console.log('Vendors in Citylist', vendors)

	if (vendors.length === 0) {
		return null
	}

	return (
		<div key={city}>
			<h2 className="city-name">{`${city} Vendors`}</h2>


			{vendors.map((item) => (
				<div key={item.id}>
					<NavLink className={"entry-nav-link"} to={`/entry/${item.id}`}>{item.name}</NavLink>
					<span key="rating">{item.rating}</span>

				</div>
			))}

		</div>)

}
