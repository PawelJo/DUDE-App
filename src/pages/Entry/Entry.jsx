import { useEffect, useState } from "react"
import fetchEntry from "../utility/fetchEntry.jsx";
import RootLayout from "../layouts/RootLayout.jsx";
import { useParams } from "react-router-dom";
import ShareButton from "./components/ShareButton.jsx";
import EntryHeader from "./components/EntryHeader.jsx";
import ProsConsList from "./components/ProsConsList.jsx";
import AddressText from "../../components/ui/AddressText.jsx";
import MapsLink from "./components/MapsLink.jsx";
import UpdateRating from "./components/UpdateRating.jsx";


export default function Entry() {

	console.log("Entry component rendered")
	const { id } = useParams()
	const [ratingCompleted, setRatingCompleted] = useState(false)
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	})

	useEffect(() => {
		fetchEntry(id, setFetchedData);
	}, [id, ratingCompleted]);

	if (fetchedData.loading) {
		return <div>Loading...</div>;
	}

	const vendorData = fetchedData.data[0]
	console.log(vendorData)

	const formattedPros = vendorData.pros
		.split(", ")
	const formattedCons = vendorData.cons
		.split(", ")

	const { String: addressString } = vendorData.address || {};


	return (
		<RootLayout>


			<EntryHeader vendorData={vendorData} />


			<ProsConsList title="Pros" list={formattedPros} />

			<ProsConsList title="Cons" list={formattedCons} />


			<p className="date-created-text">D.U.D.E certified at {vendorData.dateCreated}</p>

			{addressString && <AddressText addressText={addressString} />}
			<UpdateRating vendorData={vendorData} setRatingCompleted={setRatingCompleted} />

			<div className="share-gmaps-button-container">
				<ShareButton />
				{vendorData.gmapsLink && <MapsLink mapsLink={vendorData.gmapsLink} />}
			</div>


		</RootLayout>
	)
}
