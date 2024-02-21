import { useState } from 'react';
import RootLayout from './layouts/RootLayout';
import VendorGetter from './utility/VendorGetter';
import VendorList from './layouts/VendorList';

export default function Doener() {


	const slug = '"Döner"'
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	})

	/* 	const [data, setData] = useState([]); */
	/* 
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
		}, []); */

	return (
		<RootLayout>
			<h1>Döner</h1>

			<VendorGetter slug={slug} onDataFetched={setFetchedData} />
			<VendorList data={fetchedData.data} loading={fetchedData.loading} />

			{/* {data.length > 0 ? (<div>
				<h1>RULES</h1>
				<h2>{data[0].ruleText}</h2>
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
			</div>) : (
				<h2>Yeah yeah we are loading, chill the fuck out </h2>
			)} */}
		</RootLayout>
	)
}
