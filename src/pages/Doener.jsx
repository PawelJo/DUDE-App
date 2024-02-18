import { useEffect, useState } from 'react';

export default function Doener() {


	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/vendors?category="D%C3%B6ner"')
			.then(response => response.json())
			.then(data => {
				// Handle the data received from the server
				console.log(data);
				setData(data)
			})
			.catch(error => {
				console.error('Error fetching data:', error);

			});
	}, []);
	return (
		<>
			<div>Döner</div>


			<div>
				<h1>Your Data</h1>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Category</th>
							<th>Vendor name</th>
							<th>Rating</th>
							<th>Pros</th>
							<th>Cons</th>
							<th>GmapsLink</th>
							<th>Date created</th>

						</tr>
					</thead>
					<tbody>
						{data.map(item => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.category}</td>
								<td>{item.name}</td>
								<td>{item.rating}</td>
								<td>{item.pros}</td>
								<td>{item.cons}</td>
								<td>{item.gmapsLink}</td>
								<td>{item.dateCreated}</td>

							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
