export default function CityList({ vendors, city }) {

	console.log('Vendors in Citylist', vendors)

	if (vendors.length === 0) {
		return null
	}

	return (
		<div key={city}>
			<h2>{`${city} Vendors`}</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Category</th>
						<th>Vendor name</th>
						<th>Rating</th>
						{/* Add other table headers as needed */}
					</tr>
				</thead>
				<tbody>
					{vendors.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.category}</td>
							<td>{item.name}</td>
							<td>{item.rating}</td>
							{/* Add other table cells as needed */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
