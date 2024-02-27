import { useEffect, useState } from "react"
import fetchEntry from "./utility/fetchEntry";
import RootLayout from "./layouts/RootLayout";
import { useParams } from "react-router-dom";
import ShareButton from "./layouts/ShareButton";
import EntryHeader from "./layouts/EntryHeader";
import ProsConsList from "./layouts/ProsConsList";

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

	const vendorData = fetchedData.data[0]

	const formattedPros = vendorData.pros
		.split(", ")
	const formattedCons = vendorData.cons
		.split(", ")

	console.log(vendorData.pros)


	return (
		<RootLayout>


			<EntryHeader vendorData={vendorData} />


			<ProsConsList title="Pros" list={formattedPros} />

			<ProsConsList title="Cons" list={formattedCons} />

			<p className="date-created-text">D.U.D.E certified at {vendorData.dateCreated}</p>


			<ShareButton />

		</RootLayout>
	)
}
