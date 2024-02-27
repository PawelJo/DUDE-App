import { useEffect, useState } from "react"
import fetchEntry from "./utility/fetchEntry";
import RootLayout from "./layouts/RootLayout";
import { useParams } from "react-router-dom";
import ShareButton from "./layouts/ShareButton";

export default function Entry() {

	console.log("Entry component rendered")
	const { id } = useParams()
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	})

	useEffect(() => {
		fetchEntry(id, setFetchedData);
	}, [id]);

	if (fetchedData.loading) {
		return <div>Loading...</div>;
	}

	console.log(fetchedData)
	console.log("fetchedData.data[0]: ", fetchedData.data[0].dateCreated)
	return (
		<RootLayout>

			<ShareButton />

			<h1>{fetchedData.data[0].name}</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Category</th>
						<th>Name</th>
						<th>Pros</th>
						<th>Cons</th>
						<th>Rating</th>
						<th>Gmapslink</th>
					</tr>
				</thead>
				<tbody>
					{fetchedData.data.map(entry => (
						<tr key={entry.id}>
							<td>{entry.id}</td>
							<td>{entry.category}</td>
							<td>{entry.name}</td>
							<td>{entry.pros}</td>
							<td>{entry.cons}</td>
							<td>{entry.rating}</td>
							<td><a target="_blank" rel="noopener noreferrer" href={entry.gmapslink}>Goto</a></td>
						</tr>
					))}
				</tbody>
			</table>

		</RootLayout>
	)
}
